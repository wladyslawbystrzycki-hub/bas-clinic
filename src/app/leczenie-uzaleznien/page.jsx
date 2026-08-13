import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Leczenie uzależnień Wrocław - detoks i terapia',
  description:
    'Leczenie uzależnień od alkoholu we Wrocławiu: detoksykacja pod opieką lekarza, farmakoterapia (Esperal, naltrekson) i psychoterapia. Dyskretnie, bez oceniania.',
  path: '/leczenie-uzaleznien/',
});

const BREADCRUMBS = [{ label: 'Leczenie uzależnień' }];

const EXPERT_INFO = [
  {
    title: 'Czym jest uzależnienie od alkoholu?',
    tocLabel: 'Czym jest uzależnienie',
    content:
      (
      <>
        <p><strong>Uzależnienie od alkoholu</strong> to przewlekła choroba, w której picie wymyka się spod kontroli mimo wyraźnych szkód zdrowotnych, rodzinnych i zawodowych. W klasyfikacjach medycznych (ICD-11, kod 6C40, oraz DSM-5) ujmuje się je jako <strong>zespół uzależnienia</strong>, a nie kwestię słabej woli czy charakteru.</p>
        <p>U podłoża choroby leżą trwałe zmiany w mózgu, m.in. w układzie nagrody. Pojawia się <strong>głód alkoholowy</strong> (przymus picia), słabnie kontrola nad ilością, a organizm reaguje objawami odstawiennymi, gdy poziom alkoholu spada. Dlatego traktujemy uzależnienie jako chorobę wymagającą leczenia, a osobę, która się zgłasza - ze zrozumieniem i bez oceniania.</p>
        <p>Leczenie nie polega na jednym zabiegu. Skuteczna pomoc to ułożony indywidualnie plan, który łączy opiekę lekarską z pracą terapeutyczną nad przyczynami picia.</p>
      </>
    ),
  },
  {
    title: 'Jak rozpoznać uzależnienie? Objawy i sygnały ostrzegawcze',
    tocLabel: 'Objawy i rozpoznanie',
    content:
      (
      <>
        <p>O uzależnieniu mówimy, gdy w ciągu ostatniego roku utrzymuje się kilka typowych objawów. Według kryteriów DSM-5 do rozpoznania wystarczą co najmniej dwa z nich, a im więcej, tym cięższy przebieg choroby.</p>
        <ul>
          <li>silny głód alkoholu i picie mimo postanowień, by tego nie robić;</li>
          <li>utrata kontroli nad ilością i czasem picia;</li>
          <li>wzrost tolerancji - potrzeba coraz większych dawek;</li>
          <li>objawy odstawienne (drżenie, poty, niepokój, nudności) po przerwaniu picia;</li>
          <li>zaniedbywanie obowiązków, pracy i relacji na rzecz alkoholu;</li>
          <li>picie mimo świadomości szkód zdrowotnych.</li>
        </ul>
        <h3>Picie szkodliwe a uzależnienie</h3>
        <p>Nie każde ryzykowne picie jest już uzależnieniem. Picie szkodliwe powoduje konkretne szkody, ale bez pełnego zespołu objawów. Granica bywa płynna, dlatego o rozpoznaniu i stopniu zaawansowania decyduje lekarz podczas konsultacji - im wcześniej, tym łatwiej zatrzymać postęp choroby.</p>
      </>
    ),
  },
  {
    title: 'Pierwsza wizyta i indywidualny plan leczenia we Wrocławiu',
    tocLabel: 'Pierwsza wizyta i plan',
    content:
      (
      <>
        <p>Pierwsza wizyta trwa zwykle około 60 minut. Zbieramy szczegółowy wywiad medyczny, oceniamy stan zdrowia i wspólnie ustalamy plan leczenia dopasowany do sytuacji Pacjenta. Rozmowa odbywa się w atmosferze pełnego zaufania i bez oceniania - na wizytę można przyjść samemu lub z osobą bliską.</p>
        <p>W zależności od stanu zdrowia i stopnia uzależnienia plan może obejmować detoksykację, farmakoterapię oraz psychoterapię - zwykle w tej kolejności. Leczenie prowadzi lekarz; o doświadczeniu naszego zespołu przeczytasz w sekcji <Link href="/o-nas/">o nas</Link>.</p>
        <p>Jeśli chcesz porozmawiać o swojej sytuacji lub umówić konsultację, skorzystaj z <Link href="/rejestracja/">formularza rejestracji</Link>.</p>
      </>
    ),
  },
  {
    title: 'Detoksykacja alkoholowa - bezpieczne odtrucie pod nadzorem',
    tocLabel: 'Detoksykacja alkoholowa',
    content:
      (
      <>
        <p><strong>Detoksykacja alkoholowa</strong> to kontrolowane przerwanie picia połączone z leczeniem <strong>alkoholowego zespołu abstynencyjnego</strong> (AZA). Celem nie jest samo przerwanie ciągu, lecz bezpieczne ustabilizowanie organizmu i przygotowanie Pacjenta do dalszej terapii.</p>
        <p>Nasilenie objawów odstawiennych ocenia się m.in. skalą CIWA-Ar, a podstawą leczenia są benzodiazepiny, które łagodzą objawy i zmniejszają ryzyko powikłań. Postępowanie zawsze dobieramy indywidualnie, uwzględniając choroby współistniejące.</p>
        <h3>Dlaczego nie odstawiać alkoholu samodzielnie?</h3>
        <p>Gwałtowne, samodzielne odstawienie alkoholu po długim ciągu bywa niebezpieczne. Najcięższe powikłania to drgawki abstynencyjne i <strong>majaczenie alkoholowe</strong> (delirium tremens) - stan zagrożenia życia, który wymaga leczenia szpitalnego. Dlatego detoksykację warto prowadzić pod opieką medyczną, a w sytuacji nagłego pogorszenia stanu zdrowia należy wezwać pomoc (numer alarmowy 112).</p>
      </>
    ),
  },
  {
    title: 'Farmakoterapia uzależnienia - leki wspierające abstynencję (Esperal, naltrekson)',
    tocLabel: 'Farmakoterapia i Esperal',
    content:
      (
      <>
        <p><strong>Farmakoterapia</strong> uzależnienia od alkoholu wykorzystuje leki, które zmniejszają głód alkoholowy i wspierają utrzymanie abstynencji. Najlepiej udokumentowane w badaniach są naltrekson i akamprozat; osobną rolę pełni disulfiram, znany z preparatu Esperal.</p>
        <table>
          <tbody>
            <tr>
              <th>Lek</th>
              <th>Jak działa</th>
              <th>Rola w leczeniu</th>
            </tr>
            <tr>
              <td>Akamprozat</td>
              <td>stabilizuje pobudzony układ nerwowy po odstawieniu</td>
              <td>wspiera utrzymanie abstynencji po detoksykacji</td>
            </tr>
            <tr>
              <td>Naltrekson</td>
              <td>blokuje receptory opioidowe, osłabiając „nagrodę&quot; z picia</td>
              <td>zmniejsza głód i ryzyko powrotu do ciężkiego picia</td>
            </tr>
            <tr>
              <td>Disulfiram (Esperal)</td>
              <td>blokuje rozkład alkoholu - po wypiciu wywołuje reakcję disulfiramową</td>
              <td>czynnik zniechęcający, wspierający motywację do abstynencji</td>
            </tr>
          </tbody>
        </table>
        <p>Skuteczność najlepiej przebadanych leków potwierdzają niezależne analizy: metaanaliza (Jonas i wsp., JAMA 2014) wykazała, że naltrekson zmniejsza ryzyko powrotu do ciężkiego picia, a przegląd Cochrane (Rösner i wsp., 2010) - że akamprozat wspiera utrzymanie abstynencji po detoksykacji.</p>
        <h3>Disulfiram (wszywka Esperal) - jak działa?</h3>
        <p><strong>Disulfiram</strong> blokuje dehydrogenazę aldehydową, przez co po spożyciu alkoholu w organizmie gromadzi się aldehyd octowy. Wywołuje to nieprzyjemną reakcję disulfiramową (m.in. zaczerwienienie twarzy, kołatanie serca, nudności, spadek ciśnienia), pojawiającą się zwykle w ciągu 5-15 minut od kontaktu z alkoholem. Lek działa więc jako bariera psychologiczna, a nie jako środek usuwający chorobę; jego stosowanie wymaga świadomej zgody Pacjenta, zachowania abstynencji oraz wykluczenia przeciwwskazań.</p>
        <p>Farmakoterapia jest ważnym wsparciem, ale sama nie leczy uzależnienia. Skuteczność leczenia rośnie, gdy łączy się leki z psychoterapią - tak rekomenduje m.in. WHO i potwierdzają badania nad leczeniem skojarzonym.</p>
      </>
    ),
  },
  {
    title: 'Psychoterapia uzależnień - praca nad przyczynami choroby',
    tocLabel: 'Psychoterapia',
    content:
      (
      <>
        <p><strong>Psychoterapia</strong> jest najważniejszą częścią leczenia uzależnienia. Pomaga zrozumieć mechanizmy choroby, rozpoznać sytuacje wysokiego ryzyka i wypracować sposoby radzenia sobie z napięciem i głodem bez sięgania po alkohol.</p>
        <p>W pracy wykorzystuje się sprawdzone metody: terapię poznawczo-behawioralną (CBT), <strong>dialog motywujący</strong> wzmacniający gotowość do zmiany oraz techniki zapobiegania nawrotom. Skuteczność takiego podejścia, łączonego z farmakoterapią, potwierdziło duże badanie COMBINE.</p>
        <p>Terapię dostosowujemy do tempa i możliwości Pacjenta - prowadzimy ją stacjonarnie lub online. Terapia pomaga utrzymać abstynencję, a przy tym odbudować poczucie sprawczości i poprawić jakość życia.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo leczenia',
    tocLabel: 'Przeciwwskazania',
    content:
      (
      <>
        <p>Nie każdy etap leczenia można prowadzić ambulatoryjnie. Ciężki zespół abstynencyjny, drgawki lub majaczenie w wywiadzie oraz poważne choroby współistniejące mogą wymagać leczenia w warunkach szpitalnych - o trybie postępowania decyduje lekarz po ocenie stanu zdrowia.</p>
        <h3>Kiedy disulfiram (Esperal) jest przeciwwskazany?</h3>
        <p>Disulfiram nie jest odpowiedni dla każdego. Zgodnie z Charakterystyką Produktu Leczniczego do przeciwwskazań należą m.in.:</p>
        <ul>
          <li>choroby serca i niewydolność krążenia, niewyrównane nadciśnienie, stan po udarze;</li>
          <li>ciężka niewydolność wątroby;</li>
          <li>ciąża i karmienie piersią;</li>
          <li>ciężkie zaburzenia psychiczne (np. psychozy);</li>
          <li>nadwrażliwość na substancję;</li>
          <li>spożycie alkoholu w ciągu ostatnich 24 godzin.</li>
        </ul>
        <p>Z tego powodu kwalifikację do farmakoterapii zawsze poprzedza badanie lekarskie i wywiad. Celem jest dobranie metody bezpiecznej dla konkretnego Pacjenta.</p>
      </>
    ),
  },
  {
    title: 'Wsparcie dla rodzin i współuzależnienie',
    tocLabel: 'Wsparcie dla rodzin',
    content:
      (
      <>
        <p>Uzależnienie dotyka nie tylko osoby pijącej, ale całej rodziny. Bliscy często latami dostosowują swoje życie do choroby, co prowadzi do <strong>współuzależnienia</strong> - utrwalonego wzorca, w którym troska miesza się z kontrolowaniem i wyręczaniem osoby uzależnionej.</p>
        <p>Rodzinom oferujemy psychoedukację, wsparcie emocjonalne oraz naukę zdrowej komunikacji i stawiania granic. Taka pomoc sprzyja leczeniu, odbudowie relacji i odzyskaniu równowagi przez bliskich. Jeśli problem dotyczy kogoś z Twojego otoczenia, możesz skontaktować się z nami także w jego sprawie - dane znajdziesz w zakładce <Link href="/kontakt/">kontakt</Link>.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje leczenie uzależnień we Wrocławiu?',
    tocLabel: 'Cena leczenia',
    content:
      (
      <>
        <p>Koszt leczenia uzależnienia zależy od zakresu pomocy - inaczej wyceniana jest sama konsultacja, inaczej detoksykacja, farmakoterapia czy dłuższa psychoterapia. Gabinet jest prywatny, dlatego świadczenia nie są refundowane przez NFZ, a wycenę przedstawiamy przejrzyście przed rozpoczęciem leczenia, bez ukrytych opłat.</p>
        <p>Na koszt wpływa przede wszystkim liczba i rodzaj potrzebnych działań oraz czas trwania terapii. Aktualne informacje znajdziesz w <Link href="/cennik/">cenniku</Link>, a szczegóły dopasowane do Twojej sytuacji ustalimy podczas konsultacji - umów ją przez <Link href="/rejestracja/">rejestrację</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do leczenia, jego przebiegu i ewentualnych przeciwwskazaniach decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      (
      <ol>
        <li>Jonas DE i wsp. Pharmacotherapy for adults with alcohol use disorders in outpatient settings: a systematic review and meta-analysis. JAMA 2014; 311(18): 1889-1900.</li>
        <li>Rösner S i wsp. Acamprosate for alcohol dependence. Cochrane Database Syst Rev 2010; (9): CD004332 (PMID 20824837).</li>
        <li>Anton RF i wsp. Combined pharmacotherapies and behavioral interventions for alcohol dependence: the COMBINE study. JAMA 2006; 295(17): 2003-2017 (PMID 16670409).</li>
        <li>World Health Organization. mhGAP Evidence Resource Centre - Preventing relapse in alcohol dependent patients (acamprosate, naltrexone, disulfiram), 2012.</li>
        <li>Sullivan JT i wsp. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict 1989; 84(11): 1353-1357.</li>
        <li>Charakterystyka Produktu Leczniczego (disulfiram), Urząd Rejestracji Produktów Leczniczych (URPL).</li>
        <li>World Health Organization. ICD-11 (6C40); American Psychiatric Association. DSM-5 - kryteria diagnostyczne zaburzeń używania alkoholu.</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Jak namówić bliskiego na leczenie uzależnienia?',
    answer:
      'Namówienie bliskiego zaczyna się od spokojnej, pozbawionej oskarżeń rozmowy o konkretnych konsekwencjach picia. Pomaga zaproponowanie wspólnej konsultacji - na pierwszą wizytę osoba uzależniona może przyjść z bliskim, a my pomagamy zbudować motywację do zmiany.',
  },
  {
    question: 'Czy detoks alkoholowy w domu jest bezpieczny?',
    answer:
      'Detoks alkoholowy w domu bywa ryzykowny, zwłaszcza po długim ciągu. Nagłe odstawienie może wywołać drgawki lub majaczenie alkoholowe, które zagrażają życiu. Detoksykację bezpieczniej prowadzić pod opieką medyczną, która łagodzi objawy odstawienne i kontroluje stan zdrowia.',
  },
  {
    question: 'Jak długo trwa leczenie uzależnienia od alkoholu?',
    answer:
      'Leczenie uzależnienia od alkoholu jest procesem indywidualnym. Sama detoksykacja trwa zwykle od kilku do kilkunastu dni, ale budowanie trzeźwości to praca długoterminowa. Uzależnienie jest chorobą przewlekłą, dlatego po terapii ważne pozostają działania zapobiegające nawrotom.',
  },
  {
    question: 'Czy leczenie uzależnienia jest poufne?',
    answer:
      'Leczenie uzależnienia jest objęte tajemnicą lekarską. Nie przekazujemy informacji o Pacjentach osobom trzecim bez ich pisemnej zgody i dbamy o dyskrecję na każdym etapie - od pierwszej rozmowy po dalszą terapię.',
  },
  {
    question: 'Czy leczenie uzależnień jest refundowane przez NFZ?',
    answer:
      'Leczenie uzależnień w naszym gabinecie jest prywatne, więc nie jest refundowane przez NFZ. Koszt zależy od zakresu pomocy (konsultacja, detoksykacja, farmakoterapia, terapia) i przedstawiamy go przejrzyście przed rozpoczęciem leczenia, bez ukrytych opłat.',
  },
  {
    question: 'Gdzie we Wrocławiu leczyć uzależnienie od alkoholu?',
    answer: `Uzależnienie od alkoholu we Wrocławiu leczymy w Bas Clinic przy ${CLINIC.address.street} (${CLINIC.address.city}). Konsultacje umówisz telefonicznie pod ${CLINIC.phone} w godzinach pracy rejestracji (pon.-pt. ${CLINIC.hours.weekdays}). Na wizytę można przyjść samemu lub z osobą bliską.`,
  },
];

export default function LeczenieUzaleznienPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Leczenie uzależnień Wrocław"
      heroSubtitle="Leczenie uzależnień"
      heroDescription="Uzależnienie to choroba, a nie wybór. W Bas Clinic pomagamy z niej wyjść, łącząc opiekę lekarską, farmakoterapię i psychoterapię - dyskretnie i bez oceniania."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="leczenie-uzaleznien"
      schemaType="MedicalTherapy"
      testimonials={[]}
    />
  );
}
