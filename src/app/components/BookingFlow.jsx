'use client';

import { useMemo, useState } from 'react';
import { CLINIC } from '@/config/clinic';
import {
  STOMATOLOGIA_SERVICES,
  AESTHETIC_SERVICES,
  USG_CLUSTERS,
} from '@/config/services';

/* ------------------------------------------------------------------ */
/*  Dane wejściowe (z konfiguracji — nigdy nie hardkodujemy ręcznie)   */
/* ------------------------------------------------------------------ */

const CATEGORIES = [
  {
    key: 'stomatologia',
    label: 'Stomatologia',
    desc: 'Leczenie, protetyka, implanty, ortodoncja.',
    services: STOMATOLOGIA_SERVICES.filter(
      (s) => s.parent === 'stomatologia' || s.isLanding
    ).map((s) => s.name),
  },
  {
    key: 'estetyka',
    label: 'Medycyna estetyczna',
    desc: 'Zabiegi odmładzające, modelowanie, mezoterapia.',
    services: AESTHETIC_SERVICES.map((s) => s.name),
  },
  {
    key: 'usg',
    label: 'USG',
    desc: 'Diagnostyka ultrasonograficzna.',
    services: USG_CLUSTERS.map((c) => c.name),
  },
  {
    key: 'inne',
    label: 'Wlewy i konsultacje',
    desc: 'Wlewy witaminowe i konsultacje ogólne.',
    services: ['Wlewy witaminowe', 'Konsultacja ogólna'],
  },
];

const WEEKDAYS = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nie'];
const MONTHS = [
  'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec',
  'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień',
];

// Sloty co 30 min, 9:00–16:30 (ostatnia wizyta kończy się ~17:00).
const TIME_SLOTS = (() => {
  const out = [];
  for (let h = 9; h <= 16; h += 1) {
    out.push(`${h}:00`, `${h}:30`);
  }
  return out;
})();

const STEPS = ['Usługa', 'Termin', 'Godzina', 'Dane'];

/* ------------------------------------------------------------------ */
/*  Pomocnicze                                                         */
/* ------------------------------------------------------------------ */

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// Poniedziałek = 0 … niedziela = 6
function mondayIndex(date) {
  return (date.getDay() + 6) % 7;
}

function formatLongDate(date) {
  if (!date) return '';
  return date.toLocaleDateString('pl-PL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/* ------------------------------------------------------------------ */
/*  Komponent                                                          */
/* ------------------------------------------------------------------ */

export default function BookingFlow() {
  const [step, setStep] = useState(0);

  // Krok 1 — usługa
  const [categoryKey, setCategoryKey] = useState(null);
  const [service, setService] = useState('');

  // Krok 2 — termin
  const today = useMemo(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }, []);
  const [viewMonth, setViewMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [date, setDate] = useState(null);

  // Krok 3 — godzina
  const [time, setTime] = useState('');

  // Krok 4 — dane
  const [form, setForm] = useState({ name: '', phone: '', email: '', note: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const category = CATEGORIES.find((c) => c.key === categoryKey) || null;

  const maxMonth = useMemo(
    () => new Date(today.getFullYear(), today.getMonth() + 4, 1),
    [today]
  );
  const canGoPrev =
    viewMonth.getFullYear() > today.getFullYear() ||
    (viewMonth.getFullYear() === today.getFullYear() &&
      viewMonth.getMonth() > today.getMonth());
  const canGoNext =
    viewMonth.getFullYear() < maxMonth.getFullYear() ||
    (viewMonth.getFullYear() === maxMonth.getFullYear() &&
      viewMonth.getMonth() < maxMonth.getMonth());

  const calendarCells = useMemo(() => {
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lead = mondayIndex(firstDay);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < lead; i += 1) cells.push(null);
    for (let d = 1; d <= daysInMonth; d += 1) {
      const cellDate = new Date(year, month, d);
      const weekend = cellDate.getDay() === 0 || cellDate.getDay() === 6;
      const past = cellDate < today;
      cells.push({ date: cellDate, day: d, disabled: weekend || past });
    }
    return cells;
  }, [viewMonth, today]);

  // Sloty dostępne dla wybranego dnia. Dla dziś odcina godziny, które już minęły
  // (+60 min bufora na oddzwonienie).
  const availableSlots = useMemo(() => {
    if (!date || !isSameDay(date, today)) return TIME_SLOTS;
    const now = new Date();
    const cutoff = now.getHours() * 60 + now.getMinutes() + 60;
    return TIME_SLOTS.filter((s) => {
      const [h, m] = s.split(':').map(Number);
      return h * 60 + m >= cutoff;
    });
  }, [date, today]);

  function canContinue() {
    if (step === 0) return Boolean(categoryKey);
    if (step === 1) return Boolean(date);
    if (step === 2) return Boolean(time);
    return true;
  }

  function validateForm() {
    const e = {};
    if (!form.name.trim()) e.name = 'Podaj imię i nazwisko.';
    if (!form.phone.trim()) {
      e.phone = 'Podaj numer telefonu.';
    } else if (form.phone.replace(/\D/g, '').length < 9) {
      e.phone = 'Numer telefonu wygląda na niepełny.';
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Nieprawidłowy adres e-mail.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (step < 3) {
      if (canContinue()) setStep((s) => s + 1);
    } else if (validateForm()) {
      setSubmitted(true);
    }
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function reset() {
    setStep(0);
    setCategoryKey(null);
    setService('');
    setDate(null);
    setTime('');
    setForm({ name: '', phone: '', email: '', note: '' });
    setErrors({});
    setSubmitted(false);
  }

  /* ---------------------------- Potwierdzenie --------------------------- */
  if (submitted) {
    const summaryLines = [
      `Usługa: ${service || category?.label || '—'}`,
      `Termin: ${formatLongDate(date)}, godz. ${time}`,
      `Imię i nazwisko: ${form.name}`,
      `Telefon: ${form.phone}`,
      form.email && `E-mail: ${form.email}`,
      form.note && `Uwagi: ${form.note}`,
    ]
      .filter(Boolean)
      .join('\n');
    const mailtoHref =
      `mailto:${CLINIC.email}` +
      `?subject=${encodeURIComponent(
        `Zgłoszenie wizyty online — ${service || category?.label || ''}`
      )}` +
      `&body=${encodeURIComponent(summaryLines)}`;

    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
          Zgłoszenie gotowe do wysłania
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Sprawdź podsumowanie i wyślij je do nas e-mailem — albo po prostu zadzwoń.
          Oddzwonimy, aby potwierdzić termin. To zgłoszenie nie jest jeszcze wiążącą
          rezerwacją.
        </p>

        <dl className="mt-8 space-y-3 rounded-2xl bg-cream p-6 text-left text-sm">
          <SummaryRow label="Usługa" value={service || category?.label} />
          <SummaryRow label="Termin" value={formatLongDate(date)} />
          <SummaryRow label="Godzina" value={time} />
          <SummaryRow label="Imię i nazwisko" value={form.name} />
          <SummaryRow label="Telefon" value={form.phone} />
          {form.email && <SummaryRow label="E-mail" value={form.email} />}
        </dl>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            Wyślij zgłoszenie e-mailem
          </a>
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-200 px-7 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
          >
            Zadzwoń — {CLINIC.phone}
          </a>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-4 text-sm font-medium text-gray-500 underline-offset-4 transition-colors hover:text-primary-700 hover:underline"
        >
          Nowe zgłoszenie
        </button>
      </div>
    );
  }

  /* ------------------------------- Kreator ------------------------------ */
  return (
    <div className="mx-auto max-w-3xl">
      <Stepper step={step} />

      <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        {/* Krok 1 — usługa */}
        {step === 0 && (
          <div>
            <StepHeading
              title="Wybierz obszar"
              subtitle="Zaznacz kategorię, a następnie (opcjonalnie) konkretną usługę."
            />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CATEGORIES.map((c) => {
                const active = c.key === categoryKey;
                return (
                  <button
                    key={c.key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setCategoryKey(c.key);
                      setService('');
                    }}
                    className={`rounded-2xl border p-5 text-left transition-all ${
                      active
                        ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
                        : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-sm'
                    }`}
                  >
                    <span className="block font-display text-base font-semibold text-gray-900">
                      {c.label}
                    </span>
                    <span className="mt-1 block text-sm text-gray-600">{c.desc}</span>
                  </button>
                );
              })}
            </div>

            {category && (
              <div className="mt-6">
                <label
                  htmlFor="service-select"
                  className="block text-sm font-medium text-gray-700"
                >
                  Konkretna usługa <span className="text-gray-400">(opcjonalnie)</span>
                </label>
                <select
                  id="service-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 transition-colors focus:border-primary-500"
                >
                  <option value="">Dowolna / do ustalenia</option>
                  {category.services.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* Krok 2 — termin */}
        {step === 1 && (
          <div>
            <StepHeading
              title="Wybierz dzień"
              subtitle="Przyjmujemy od poniedziałku do piątku, w godz. 9:00–17:00."
            />
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  canGoPrev &&
                  setViewMonth(
                    new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1)
                  )
                }
                disabled={!canGoPrev}
                aria-label="Poprzedni miesiąc"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <span className="font-display text-lg font-semibold capitalize text-gray-900">
                {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
              </span>
              <button
                type="button"
                onClick={() =>
                  canGoNext &&
                  setViewMonth(
                    new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1)
                  )
                }
                disabled={!canGoNext}
                aria-label="Następny miesiąc"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs font-medium uppercase tracking-wide text-gray-600">
              {WEEKDAYS.map((w) => (
                <div key={w} className="py-2">
                  {w}
                </div>
              ))}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1">
              {calendarCells.map((cell, i) => {
                if (!cell) return <div key={`empty-${i}`} />;
                const selected = date && isSameDay(date, cell.date);
                return (
                  <button
                    key={cell.day}
                    type="button"
                    disabled={cell.disabled}
                    aria-pressed={selected}
                    aria-label={formatLongDate(cell.date)}
                    onClick={() => {
                      setDate(cell.date);
                      setTime('');
                    }}
                    className={`aspect-square rounded-xl text-sm font-medium transition-colors ${
                      selected
                        ? 'bg-primary-700 text-white'
                        : cell.disabled
                        ? 'cursor-not-allowed text-gray-300'
                        : 'text-gray-700 hover:bg-primary-50'
                    }`}
                  >
                    {cell.day}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Krok 3 — godzina */}
        {step === 2 && (
          <div>
            <StepHeading
              title="Wybierz godzinę"
              subtitle={date ? formatLongDate(date) : 'Dostępne sloty co 30 minut.'}
            />
            {availableSlots.length === 0 && (
              <p className="text-sm text-gray-600">
                Brak wolnych godzin tego dnia — wybierz inny termin.
              </p>
            )}
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {availableSlots.map((slot) => {
                const selected = slot === time;
                return (
                  <button
                    key={slot}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setTime(slot)}
                    className={`rounded-xl border py-3 text-sm font-medium transition-colors ${
                      selected
                        ? 'border-primary-700 bg-primary-700 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-primary-300 hover:bg-primary-50'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Krok 4 — dane */}
        {step === 3 && (
          <div>
            <StepHeading
              title="Twoje dane"
              subtitle="Skontaktujemy się, aby potwierdzić termin."
            />
            <div className="space-y-5">
              <Field
                id="name"
                label="Imię i nazwisko"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                id="phone"
                label="Telefon"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                error={errors.phone}
                autoComplete="tel"
              />
              <Field
                id="email"
                label="E-mail (opcjonalnie)"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                error={errors.email}
                autoComplete="email"
              />
              <div>
                <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                  Dodatkowe informacje <span className="text-gray-400">(opcjonalnie)</span>
                </label>
                <textarea
                  id="note"
                  rows={3}
                  value={form.note}
                  onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 transition-colors focus:border-primary-500"
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-cream p-5 text-sm text-gray-600">
              <p className="font-medium text-gray-900">Podsumowanie</p>
              <p className="mt-2">
                {service || category?.label} · {formatLongDate(date)} · {time}
              </p>
            </div>
          </div>
        )}

        {/* Nawigacja */}
        <div className="mt-8 flex items-center justify-between gap-3">
          {step > 0 ? (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center justify-center rounded-lg border border-primary-200 px-6 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Wstecz
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={next}
            disabled={!canContinue()}
            className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === 3 ? 'Wyślij zgłoszenie' : 'Dalej'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Podkomponenty                                                      */
/* ------------------------------------------------------------------ */

function Stepper({ step }) {
  return (
    <ol className="flex items-center">
      {STEPS.map((label, i) => {
        const done = i < step;
        const active = i === step;
        return (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  active
                    ? 'bg-primary-700 text-white'
                    : done
                    ? 'bg-primary-700 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {done ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : (
                  i + 1
                )}
              </span>
              <span
                className={`hidden text-sm font-medium sm:block ${
                  active || done ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={`mx-3 h-px flex-1 ${done ? 'bg-primary-700' : 'bg-gray-200'}`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function StepHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-xl font-bold text-gray-900 sm:text-2xl">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
}

function Field({ id, label, value, onChange, error, type = 'text', autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-base text-gray-900 transition-colors ${
          error ? 'border-red-600' : 'border-gray-200 focus:border-primary-500'
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SummaryRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-gray-500">{label}</dt>
      <dd className="text-right font-medium text-gray-900">{value}</dd>
    </div>
  );
}
