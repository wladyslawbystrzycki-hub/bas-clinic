'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getMainMenu } from '@/config/menuConfig';
import { CLINIC } from '@/config/clinic';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuItems = getMainMenu();
  const openItem = menuItems.find((item) => item.id === openDropdown) || null;

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex h-20 items-center justify-between"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-primary-800">
              Bas Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-0.5">
            {menuItems.map((item) => {
              const isOpen = openDropdown === item.id;
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.id)
                  }
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isOpen
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Standard dropdown (non-mega) */}
                  {item.children && !item.megaMenu && isOpen && (
                    <div className="absolute left-0 top-full z-50 pt-2">
                      <div className="w-72 overflow-hidden rounded-2xl bg-white p-2 shadow-[0_20px_50px_-15px_rgba(38,17,25,0.3)] ring-1 ring-black/5">
                        {item.children.map((child) => (
                          <div key={child.id}>
                            <Link
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-cream hover:text-primary-700"
                            >
                              {child.label}
                            </Link>
                            {child.children && (
                              <div className="ml-3 border-l border-gray-100 pl-2.5">
                                {child.children.map((sub) => (
                                  <Link
                                    key={sub.id}
                                    href={sub.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className="block rounded-lg px-3 py-1.5 text-[0.8rem] text-gray-500 transition-colors hover:bg-cream hover:text-primary-700"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Full-width mega menu (anchored to the header row) */}
          {openItem?.megaMenu && (
            <MegaMenu item={openItem} onNavigate={() => setOpenDropdown(null)} />
          )}

          {/* CTA Phone */}
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="hidden items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {CLINIC.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 lg:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-[100rem] divide-y divide-gray-100 px-4 py-2 sm:px-6">
            {menuItems.map((item) => (
              <MobileMenuItem
                key={item.id}
                item={item}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </nav>
          <div className="mx-auto max-w-[100rem] px-4 pb-5 pt-3 sm:px-6">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm"
            >
              <PhoneIcon className="h-4 w-4" />
              {CLINIC.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu({ item, onNavigate }) {
  const featured = item.featured || {};
  const titleLines = (featured.title || item.label).split('\n');
  return (
    <div className="absolute left-0 right-0 top-full z-50 pt-3">
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-20px_rgba(38,17,25,0.35)] ring-1 ring-black/5">
        <div className="grid lg:grid-cols-[15rem_1fr] xl:grid-cols-[17rem_1fr]">
          {/* Featured panel */}
          <div className="relative hidden flex-col justify-between overflow-hidden bg-primary-900 p-7 text-white lg:flex">
            {/* decorative gradient + dots */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-700/50 via-transparent to-primary-950" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  'radial-gradient(currentColor 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                color: 'var(--color-secondary-300)',
              }}
            />
            <div className="relative">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-secondary-400">
                {item.label}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug">
                {titleLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              {featured.description && (
                <p className="mt-3 text-sm leading-relaxed text-primary-100/80">
                  {featured.description}
                </p>
              )}
            </div>
            <div className="relative mt-8 space-y-3">
              <Link
                href={featured.ctaHref || '/kontakt/'}
                onClick={onNavigate}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                {featured.ctaLabel || 'Umów wizytę'}
              </Link>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary-100/90 transition-colors hover:text-white"
              >
                Wszystkie zabiegi
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Category groups */}
          <div className="p-6 lg:p-8">
            <div className="gap-x-6 [column-fill:_balance] sm:columns-2 lg:columns-3 xl:columns-4">
              {item.children.map((group) => (
                <div key={group.id} className="mb-7 break-inside-avoid">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary-50 text-secondary-600 ring-1 ring-secondary-100">
                      <AreaIcon id={group.id} className="h-[1.05rem] w-[1.05rem]" />
                    </span>
                    {group.href ? (
                      <Link
                        href={group.href}
                        onClick={onNavigate}
                        className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-900 transition-colors hover:text-secondary-600"
                      >
                        {group.label}
                      </Link>
                    ) : (
                      <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-900">
                        {group.label}
                      </h4>
                    )}
                  </div>
                  <ul className="space-y-0.5">
                    {group.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.href}
                          onClick={onNavigate}
                          className="group/link flex items-start gap-1.5 rounded-lg px-2 py-1.5 text-[0.82rem] leading-snug text-gray-600 transition-colors hover:bg-cream hover:text-primary-700"
                        >
                          <ChevronRight className="mt-[0.2rem] h-3 w-3 shrink-0 text-secondary-300 transition-transform group-hover/link:translate-x-0.5 group-hover/link:text-secondary-500" />
                          <span>{child.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenuItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block px-2 py-3.5 text-base font-medium text-gray-800"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-2 py-3.5 text-base font-medium text-gray-800"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="space-y-1 pb-3 pl-2">
          <Link
            href={item.href}
            onClick={onNavigate}
            className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-semibold text-primary-700"
          >
            Wszystkie {item.label.toLowerCase()}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          {item.children.map((child) =>
            child.children ? (
              <MobileMenuGroup
                key={child.id}
                group={child}
                withIcon={Boolean(item.megaMenu)}
                onNavigate={onNavigate}
              />
            ) : (
              <Link
                key={child.id}
                href={child.href}
                onClick={onNavigate}
                className="block rounded-lg px-2 py-2 text-sm text-gray-600"
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

function MobileMenuGroup({ group, withIcon, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl bg-cream/60">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-2 rounded-xl px-2.5 py-2.5 text-left"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2.5">
          {withIcon && (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary-50 text-secondary-600 ring-1 ring-secondary-100">
              <AreaIcon id={group.id} className="h-4 w-4" />
            </span>
          )}
          <span
            className={
              withIcon
                ? 'text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary-900'
                : 'text-sm font-medium text-gray-700'
            }
          >
            {group.label}
          </span>
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="pb-2 pl-4 pr-2">
          {group.href && (
            <Link
              href={group.href}
              onClick={onNavigate}
              className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-primary-700"
            >
              Wszystkie {group.label.toLowerCase()}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
          {group.children.map((child) => (
            <Link
              key={child.id}
              href={child.href}
              onClick={onNavigate}
              className="block rounded-lg px-2 py-1.5 text-sm leading-snug text-gray-600"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------- Icons -------------------------------- */

function AreaIcon({ id, className = 'h-4 w-4' }) {
  const svg = (children) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );

  const tooth = (
    <path d="M6.6 6.2C6.6 4.5 8 3.6 9.4 4.1c.9.3 1.5.8 2.6.8s1.7-.5 2.6-.8c1.4-.5 2.8.4 2.8 2.1 0 1.7-.4 3.1-.9 5-.5 1.9-.8 4.1-1.6 5.3-.6.9-1.4.6-1.7-.8-.3-1.3-.5-2.9-1.4-2.9s-1.1 1.6-1.4 2.9c-.3 1.4-1.1 1.7-1.7.8-.8-1.2-1.1-3.4-1.6-5.3-.5-1.9-.9-3.3-.9-5Z" />
  );

  // Wszystkie grupy klastrow USG (id 'usg-*') uzywaja jednej ikony fali ultradzwiekowej.
  if (id && id.startsWith('usg')) {
    return svg(
      <>
        <path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9" />
        <path d="M6.5 12c0-3 2.5-5.5 5.5-5.5S17.5 9 17.5 12" />
        <path d="M9.5 12c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5" />
        <path d="M3 16.5h3.5l1.8 3 3.2-9 2 4.5 1.2-2h4.1" />
      </>
    );
  }

  switch (id) {
    case 'twarz':
      return svg(
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 14.5c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8" />
          <path d="M9 9.5h.01" />
          <path d="M15 9.5h.01" />
        </>
      );
    case 'oczy':
      return svg(
        <>
          <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="2.5" />
        </>
      );
    case 'usta':
      return svg(
        <>
          <path d="M3 10.5h18" />
          <path d="M3 10.5c2-2.6 4-2.6 5.4-1.2.7.7 1.6 1.1 2.6 1.1s1.9-.4 2.6-1.1c1.4-1.4 3.4-1.4 5.4 1.2" />
          <path d="M3 10.5c1.5 3 5 4.6 9 4.6s7.5-1.6 9-4.6" />
        </>
      );
    case 'szyja':
      return svg(
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M5.5 20c.4-3.6 3-6 6.5-6s6.1 2.4 6.5 6" />
        </>
      );
    case 'dekolt':
      return svg(
        <>
          <path d="M3.5 6.5c1.6 0 3 .6 4 2" />
          <path d="M20.5 6.5c-1.6 0-3 .6-4 2" />
          <path d="M7.5 8.5c0 5 2.4 8 4.5 8s4.5-3 4.5-8" />
        </>
      );
    case 'wlosy':
      return svg(
        <>
          <circle cx="12" cy="13.5" r="5" />
          <path d="M7 11c1-3.2 2.9-5 5-5s4 1.8 5 5" />
          <path d="M8 10c-1-1-1.2-3-.2-4.4" />
          <path d="M16 10c1-1 1.2-3 .2-4.4" />
        </>
      );
    case 'cialo':
      return svg(
        <>
          <circle cx="12" cy="4.8" r="2.6" />
          <path d="M12 7.4v7.2" />
          <path d="m7.5 10.6 4.5-1.4 4.5 1.4" />
          <path d="M12 14.6 9 20.4" />
          <path d="m12 14.6 3 5.8" />
        </>
      );
    case 'pachy':
      return svg(
        <>
          <path d="M12 3.2s6 6.6 6 10.6a6 6 0 0 1-12 0c0-4 6-10.6 6-10.6Z" />
          <path d="M9 14.5a3 3 0 0 0 3 3" />
        </>
      );
    case 'estetyczna':
      return svg(
        <>
          {tooth}
          <path d="M18.6 2.6l.55 1.6 1.6.55-1.6.55-.55 1.6-.55-1.6-1.6-.55 1.6-.55z" />
        </>
      );
    case 'leczenie-profilaktyka':
      return svg(
        <>
          <path d="M12 3.3 5.6 5.9v5.1c0 3.8 2.7 6.6 6.4 7.6 3.7-1 6.4-3.8 6.4-7.6V5.9L12 3.3Z" />
          <path d="m9.1 11.4 2.1 2.1 3.8-4.1" />
        </>
      );
    case 'protetyka-implanty':
      return svg(
        <>
          <path d="M8.2 9.4c0-2.3 1.7-4 3.8-4s3.8 1.7 3.8 4c0 .7-.2 1.2-.6 1.7H8.8c-.4-.5-.6-1-.6-1.7Z" />
          <path d="M10.6 11.4 12 11.8l1.4-.4" />
          <path d="M10.9 13.5 12 13.8l1.1-.3" />
          <path d="M11.3 15.5 12 15.7l.7-.2" />
          <path d="M12 17.3v1.3" />
        </>
      );
    case 'ortodoncja':
      return svg(
        <>
          <path d="M3.5 12h2.6M8.4 12h2.4M13.2 12h2.4M17.9 12h2.6" />
          <rect x="6.1" y="10.3" width="2.3" height="3.4" rx="0.6" />
          <rect x="10.85" y="10.3" width="2.3" height="3.4" rx="0.6" />
          <rect x="15.6" y="10.3" width="2.3" height="3.4" rx="0.6" />
        </>
      );
    case 'chirurgia':
      return svg(
        <>
          {tooth}
          <path d="M19.3 11V4.6" />
          <path d="M17.1 6.8 19.3 4.4 21.5 6.8" />
        </>
      );
    default:
      return svg(
        <>
          <path d="M12 3v18" />
          <path d="M3 12h18" />
        </>
      );
  }
}

function ChevronDown({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function ChevronRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function ArrowRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MenuIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
