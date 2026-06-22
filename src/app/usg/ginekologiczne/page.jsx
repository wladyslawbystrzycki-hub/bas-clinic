import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';

export const metadata = generatePageMetadata({
  title: 'USG ginekologiczne Wrocław | Bas Clinic',
  description:
    'USG ginekologiczne we Wrocławiu - badanie macicy, jajników i narządu rodnego. Dostęp transwaginalny i przezbrzuszny. Umów termin w Bas Clinic we Wrocławiu.',
  path: '/usg/ginekologiczne/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG ginekologiczne' },
];

const RELATED = ['usg/jamy-brzusznej', 'usg/piersi', 'usg/nerek'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG ginekologiczne?',
    content:
      '<p>USG ginekologiczne to ultrasonograficzne badanie narządu rodnego kobiety, czyli macicy, jajników oraz przydatków. Ultrasonografia ginekologiczna wykorzystuje fale ultradźwiękowe, dlatego badanie przebiega bez promieniowania jonizującego i bez nakłuwania skóry. W literaturze i praktyce stosuje się też określenia USG narządu rodnego oraz badanie USG ginekologiczne.</p>' +
      '<p>Badanie pozwala uwidocznić budowę i położenie macicy, ocenić jamę macicy i błonę śluzową (endometrium) oraz obejrzeć oba jajniki. Ocenie podlega również zatoka Douglasa, w której można uwidocznić ewentualną obecność wolnego płynu.</p>' +
      '<p>USG ginekologiczne u kobiet wykonuje lekarz ginekolog, który prowadzi badanie i opisuje jego wynik. Ultrasonograficzne badanie ginekologiczne stanowi podstawowe narzędzie obrazowe w ocenie miednicy mniejszej kobiety, jednak nie zastępuje pełnej konsultacji ginekologicznej.</p>',
  },
  {
    title:
      'Metody USG ginekologicznego: transwaginalne, przezbrzuszne i przezodbytnicze',
    content:
      '<p>USG ginekologiczne wykonuje się trzema metodami dostępu, które różnią się sposobem przyłożenia głowicy oraz dokładnością obrazu. O wyborze metody decyduje lekarz na podstawie wskazań i sytuacji klinicznej pacjentki.</p>' +
      '<ul>' +
      '<li><strong>USG transwaginalne (dopochwowe, przezpochwowe)</strong> - głowicę wprowadza się do pochwy, co daje najdokładniejszą ocenę narządu rodnego. W tym dostępie pęcherz moczowy powinien być opróżniony.</li>' +
      '<li><strong>USG ginekologiczne przezbrzuszne</strong> - głowicę przykłada się do powłok brzucha. Metodę tę wybiera się, gdy badanie transwaginalne jest niewskazane, na przykład u kobiet, które nie współżyły. USG przezbrzuszne wymaga dobrze wypełnionego pęcherza moczowego, który tworzy okno akustyczne dla fali ultradźwiękowej.</li>' +
      '<li><strong>USG przezodbytnicze</strong> - głowicę wprowadza się przez odbytnicę. To osobny dostęp stosowany u kobiet niewspółżyjących, gdy potrzebna jest ocena dokładniejsza niż możliwa do uzyskania przez powłoki brzuszne.</li>' +
      '</ul>' +
      '<p>Najczęściej wykonywaną metodą jest USG dopochwowe, ponieważ głowica znajduje się blisko ocenianych narządów. USG macicy i jajników w dostępie przezbrzusznym bywa traktowane jako uzupełnienie, gdy badanie transwaginalne nie jest możliwe.</p>',
  },
  {
    title: 'Co wykrywa USG ginekologiczne?',
    content:
      '<p>USG ginekologiczne pozwala uwidocznić wiele zmian w obrębie narządu rodnego oraz ocenić ich cechy ultrasonograficzne. Badanie nie rozpoznaje samodzielnie nowotworu, lecz opisuje cechy zmian, które mogą wskazywać na konieczność dalszej diagnostyki.</p>' +
      '<ul>' +
      '<li>mięśniaki macicy - ich liczbę, wielkość i położenie,</li>' +
      '<li>polipy endometrium oraz inne zmiany w jamie macicy,</li>' +
      '<li>torbiele jajników i inne zmiany w obrębie przydatków,</li>' +
      '<li>grubość i strukturę endometrium w odniesieniu do fazy cyklu,</li>' +
      '<li>obecność wolnego płynu w zatoce Douglasa,</li>' +
      '<li>położenie wkładki wewnątrzmacicznej.</li>' +
      '</ul>' +
      '<p>USG ginekologiczne może też uwidocznić wczesną ciążę wewnątrzmaciczną oraz potwierdzić jej umiejscowienie w jamie macicy. Należy jednak podkreślić, że nie jest to USG prenatalne, czyli badanie oceniające płód pod kątem wad w określonych tygodniach ciąży. Interpretację obrazu i decyzję o dalszym postępowaniu zawsze podejmuje lekarz.</p>',
  },
  {
    title: 'Wskazania do USG ginekologicznego',
    content:
      '<p>Wskazaniem do USG ginekologicznego są zarówno objawy zgłaszane przez pacjentkę, jak i potrzeba kontroli rozpoznanych wcześniej zmian oraz badania profilaktyczne. Decyzję o wykonaniu i zakresie badania podejmuje lekarz ginekolog.</p>' +
      '<ul>' +
      '<li>nieregularne, obfite lub bolesne miesiączki oraz krwawienia między miesiączkami,</li>' +
      '<li>ból podbrzusza i dolegliwości w obrębie miednicy,</li>' +
      '<li>kontrola wcześniej stwierdzonych mięśniaków macicy i torbieli jajników,</li>' +
      '<li>ocena narządu rodnego w okresie starań o dziecko,</li>' +
      '<li>kontrola położenia wkładki wewnątrzmacicznej (IUD),</li>' +
      '<li>potwierdzenie i ocena umiejscowienia wczesnej ciąży,</li>' +
      '<li>badania profilaktyczne narządu rodnego u kobiet bez objawów.</li>' +
      '</ul>' +
      '<p>Badanie ginekologiczne USG bywa również elementem szerszej oceny, gdy lekarz analizuje także sąsiednie narządy. W takich sytuacjach uzupełnieniem może być <a href="/usg/nerek/">USG nerek</a> w ramach oceny układu moczowo-płciowego, a w profilaktyce kobiet wartościowym badaniem pozostaje <a href="/usg/piersi/">USG piersi</a>.</p>',
  },
  {
    title: 'Jak przygotować się do USG ginekologicznego?',
    content:
      '<p>Przygotowanie do USG ginekologicznego zależy od metody dostępu, dlatego warto wcześniej ustalić z lekarzem, w jaki sposób badanie będzie wykonane. Sposób przygotowania pęcherza moczowego różni się między dostępem przezbrzusznym a transwaginalnym.</p>' +
      '<ul>' +
      '<li><strong>USG ginekologiczne przezbrzuszne</strong> - wymaga dobrze wypełnionego pęcherza moczowego. Zaleca się wypić około 1-1,5 litra niegazowanej wody mniej więcej godzinę przed badaniem i nie oddawać moczu, aby pęcherz pozostał wypełniony.</li>' +
      '<li><strong>USG transwaginalne</strong> - przeciwnie, wymaga opróżnionego pęcherza, dlatego przed badaniem należy oddać mocz.</li>' +
      '</ul>' +
      '<p>USG narządu rodnego najczęściej planuje się w pierwszej połowie cyklu, jednak o optymalnym terminie i metodzie decyduje lekarz. W razie wątpliwości co do przygotowania pomocne są informacje przekazane podczas umawiania wizyty.</p>',
  },
  {
    title: 'Jak przebiega USG ginekologiczne i kiedy wynik?',
    content:
      '<p>Przebieg USG ginekologicznego zależy od wybranej metody dostępu, a samo badanie jest nieinwazyjne i odbywa się bez promieniowania. W dostępie transwaginalnym lekarz wprowadza do pochwy cienką głowicę pokrytą jednorazową osłonką, co może wiązać się z niewielkim, przejściowym dyskomfortem. W dostępie przezbrzusznym głowicę przesuwa się po skórze brzucha pokrytej żelem.</p>' +
      '<p>Badanie wykonuje lekarz ginekolog, który na bieżąco ocenia uzyskany obraz. Po zakończeniu badania pacjentka otrzymuje opis wyniku wraz z jego omówieniem.</p>' +
      '<p>Wynik USG ginekologicznego stanowi element diagnostyki i wymaga interpretacji przez lekarza w powiązaniu z wywiadem oraz innymi badaniami. USG nie zastępuje konsultacji ginekologicznej, a w razie potrzeby lekarz zaleca dalsze postępowanie. Szczegóły dotyczące poszczególnych badań przedstawia <a href="/usg/">pełna oferta badań USG w Bas Clinic</a>. Gdy ocena obejmuje narządy poza miednicą mniejszą, lekarz może zalecić również <a href="/usg/jamy-brzusznej/">USG jamy brzusznej</a> jako szerszą ocenę jamy brzusznej i miednicy.</p>',
  },
];

const FAQ = [
  {
    question: 'Jak przygotować się do USG ginekologicznego?',
    answer:
      'Przygotowanie do USG ginekologicznego zależy od metody badania. Do USG przezbrzusznego potrzebny jest dobrze wypełniony pęcherz moczowy, dlatego zaleca się wypić około 1-1,5 litra niegazowanej wody mniej więcej godzinę przed badaniem i nie oddawać moczu. Do USG transwaginalnego pęcherz powinien być opróżniony, więc bezpośrednio przed badaniem należy oddać mocz. O wyborze metody decyduje lekarz.',
  },
  {
    question: 'Czym różni się USG transwaginalne od przezbrzusznego?',
    answer:
      'USG transwaginalne wykonuje się głowicą wprowadzaną do pochwy, dzięki czemu daje najdokładniejszą ocenę narządu rodnego i wymaga opróżnionego pęcherza. USG przezbrzuszne wykonuje się głowicą przykładaną do powłok brzucha i wymaga dobrze wypełnionego pęcherza, który tworzy okno akustyczne. Dostęp przezbrzuszny wybiera się wtedy, gdy badanie transwaginalne jest niewskazane, na przykład u kobiet, które nie współżyły.',
  },
  {
    question: 'Czy USG ginekologiczne wykrywa ciążę?',
    answer:
      'USG ginekologiczne może uwidocznić wczesną ciążę wewnątrzmaciczną oraz potwierdzić jej umiejscowienie w jamie macicy. Nie jest to jednak USG prenatalne, czyli badanie oceniające płód pod kątem wad w określonych tygodniach ciąży. Interpretację obrazu i dalsze postępowanie ustala lekarz ginekolog.',
  },
  {
    question: 'Co wykrywa USG ginekologiczne?',
    answer:
      'USG ginekologiczne pozwala uwidocznić mięśniaki macicy, polipy endometrium, torbiele jajników oraz inne zmiany w obrębie przydatków, a także ocenić grubość i strukturę endometrium i obecność wolnego płynu w zatoce Douglasa. Badanie ocenia cechy zmian, ale nie rozpoznaje samodzielnie nowotworu i nie zastępuje konsultacji lekarskiej. Niektóre obrazy mogą wskazywać na konieczność dalszej diagnostyki, o czym decyduje lekarz.',
  },
  {
    question: 'Ile kosztuje USG ginekologiczne we Wrocławiu?',
    answer:
      'Cena USG ginekologicznego we Wrocławiu zależy od zakresu badania i wybranej metody dostępu. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511. Badanie wykonujemy przy ul. Opatowickiej 132 we Wrocławiu.',
  },
  {
    question: 'Czy na USG ginekologiczne potrzebne jest skierowanie?',
    answer:
      'Na USG ginekologiczne wykonywane prywatnie skierowanie nie jest wymagane. Badanie można umówić bezpośrednio, dzwoniąc pod numer +48 690 511 511. Wynik badania interpretuje lekarz ginekolog w kontekście wywiadu i objawów.',
  },
];

export default function UsgGinekologicznePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG ginekologiczne we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG ginekologiczne to badanie narządu rodnego - macicy i jajników - wykonywane metodą transwaginalną lub przezbrzuszną. Realizujemy je w Bas Clinic we Wrocławiu pod opieką lekarza."
      slug="usg/ginekologiczne"
      schemaType={['MedicalTest', 'ImagingTest']}
      usesDevice="Ultrasonograf"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      childServices={RELATED}
      childServicesTitle="Powiązane badania USG"
      childServicesSubtitle="Diagnostyka USG"
    />
  );
}
