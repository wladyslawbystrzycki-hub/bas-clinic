import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Regeneratory komórkowe skóry Wrocław',
  description: 'Regeneratory komórkowe we Wrocławiu: polinukleotydy, egzosomy, PRP i czynniki wzrostu. Wyjaśniamy, jak działają, co mówią dowody i kto może wykonać zabieg.',
  path: '/medycyna-estetyczna/regeneratory-komorkowe/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Regeneratory komórkowe' },
];

const FAQ = [
  {
    question: 'Czym są regeneratory komórkowe i czym różnią się od wypełniacza z kwasem hialuronowym?',
    answer: 'Regeneratory komórkowe to grupa zabiegów, które mają pobudzić skórę do własnej naprawy, zamiast dodawać objętość. Tym różnią się od wypełniacza z kwasem hialuronowym, który natychmiast uzupełnia objętość, ale stopniowo się wchłania. Regenerator działa wolniej, bo efekt wypracowują same komórki skóry.',
  },
  {
    question: 'Czy regeneratory komórkowe to to samo co polinukleotydy, egzosomy i osocze (PRP)?',
    answer: 'Nie, to pojęcie zbiorcze. Pod nazwą regeneratorów komórkowych mieści się kilka różnych metod: polinukleotydy, egzosomy, osocze bogatopłytkowe (PRP) i czynniki wzrostu. Różni je pochodzenie, mechanizm i siła dowodów, dlatego konkretną metodę dobiera lekarz do problemu skóry pacjenta.',
  },
  {
    question: 'Czy egzosomy są dopuszczone do podawania w iniekcjach?',
    answer: 'Obecnie nie ma egzosomalnego produktu dopuszczonego jako lek do wstrzykiwania. Amerykańska FDA nie zatwierdziła żadnego takiego produktu i ostrzegała po poważnych powikłaniach, a w Unii Europejskiej egzosomy o działaniu leczniczym traktuje się jak produkty lecznicze. Z tego powodu podchodzimy do nich ostrożnie.',
  },
  {
    question: 'Czy zabiegi regeneracyjne są bezpieczne i jakie mają przeciwwskazania?',
    answer: 'Najczęstsze odczyny po iniekcji, jak zaczerwienienie czy zasinienie, są łagodne i przemijające. Przeciwwskazania obejmują między innymi ciążę i karmienie piersią, aktywną chorobę nowotworową, czynne infekcje, zaburzenia krzepnięcia oraz alergię na składniki preparatu. O kwalifikacji decyduje lekarz na konsultacji.',
  },
  {
    question: 'Po jakim czasie widać efekty i ile zabiegów trzeba wykonać?',
    answer: 'Efekt rozwija się stopniowo, bo opiera się na pobudzeniu własnych procesów skóry, a nie na natychmiastowym wypełnieniu. Zwykle planuje się serię zabiegów, ale dokładnej liczby ani trwałości efektu nie da się podać z góry. Schemat ustala lekarz indywidualnie, bo zależy od metody i kondycji skóry.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać zabieg regeneratorami komórkowymi?',
    answer: `Regeneratory komórkowe wykonujemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Zabieg poprzedza konsultacja kwalifikacyjna z lekarzem. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym są regeneratory komórkowe i czym różnią się od wypełniacza',
    tocLabel: 'Czym są',
    content: `<p><strong>Regeneratory komórkowe</strong> to grupa zabiegów medycyny estetycznej, które mają pobudzić skórę do uruchomienia własnych procesów naprawczych. Pod tą nazwą kryje się kilka różnych metod, a nie jeden konkretny preparat.</p>
<p>Określenie warto traktować jako pojęcie zbiorcze. W piśmiennictwie mówi się o wyłaniającej się dziedzinie medycyny regeneracyjnej w estetyce, w której zamiast korygowania samych objawów starzenia próbuje się wspierać naturalne zdolności naprawcze tkanki (Goldie 2023). To kierunek obiecujący, ale wciąż młody, a sama terminologia bywa używana nieprecyzyjnie, dlatego do hasła „regeneracja" podchodzimy z rozwagą.</p>
<p>Najłatwiej zrozumieć regeneratory komórkowe przez kontrast z klasycznym wypełniaczem. <a href="/medycyna-estetyczna/wypelniacze-ha/">Wypełniacz z kwasem hialuronowym</a> daje efekt natychmiastowy, bo fizycznie uzupełnia objętość i wiąże wodę, ale z czasem się wchłania. Regenerator działa inaczej: dostarcza skórze bodziec, na który ma ona odpowiedzieć własną przebudową, więc efekt rozwija się stopniowo. Granica między tymi podejściami nie jest ostra, bo również kwas hialuronowy w pewnym stopniu pobudza skórę, ale różnica w głównym mechanizmie jest realna.</p>
<p>W Bas Clinic regeneratory komórkowe prowadzimy jako procedurę lekarską. O doborze metody decyduje konsultacja, a nie nazwa preparatu, i opisujemy je w ramach <a href="/medycyna-estetyczna/">medycyny estetycznej</a>.</p>`,
  },
  {
    title: 'Jak regeneratory komórkowe działają na poziomie komórkowym',
    tocLabel: 'Jak działają',
    content: `<p>Regeneratory komórkowe łączy wspólny pomysł: zamiast zastępować to, czego skórze brakuje, mają pobudzić jej komórki do pracy. Punktem docelowym jest najczęściej fibroblast, komórka odpowiedzialna za produkcję kolagenu i przebudowę macierzy.</p>
<p>W odpowiedzi na bodziec fibroblasty mogą nasilać syntezę kolagenu typu I i III oraz przebudowę macierzy zewnątrzkomórkowej (ECM). Macierzy tej nie uważa się dziś za bierne rusztowanie; to aktywne środowisko, które przekazuje komórkom sygnały (Barbosa 2026). Towarzyszy temu kontrolowane, samoograniczające się zapalenie, które w warunkach fizjologicznych jest częścią naprawy, a nie jej przeciwieństwem.</p>
<h3>Co wiemy o mechanizmie, a czego jeszcze nie</h3>
<p>Dla części substancji mechanizm jest opisany dość dokładnie. Polinukleotydy w badaniach laboratoryjnych pobudzają fibroblasty między innymi przez receptor adenozynowy A2A i powiązane szlaki wewnątrzkomórkowe, wpływając też na powstawanie naczyń. Trzeba jednak rozdzielić dwie rzeczy: dobrze udokumentowany mechanizm w warunkach laboratoryjnych to nie to samo co udowodniony efekt u pacjenta. Wiele z tych szlaków opisano w badaniach przedklinicznych i in vitro, dlatego mówimy o mechanizmie proponowanym, a nie o pewnej obietnicy wyniku.</p>`,
  },
  {
    title: 'Mapa rodziny: polinukleotydy, egzosomy, PRP i czynniki wzrostu',
    tocLabel: 'Rodzina regeneratorów',
    content: `<p>Pod hasłem regeneratorów komórkowych mieści się kilka odrębnych metod. Różni je pochodzenie preparatu, sposób działania i to, jak mocne są dowody. Poniższa mapa porządkuje najczęściej spotykane grupy i wskazuje, gdzie opisujemy każdą z nich szczegółowo.</p>
<table>
<tr><th>Metoda</th><th>Co to jest</th><th>Jak ma działać</th><th>Charakter dowodów i status</th></tr>
<tr><td><strong>Polinukleotydy (PN/PDRN)</strong></td><td>Oczyszczone fragmenty DNA pozyskiwane z ryb, najczęściej łososia lub pstrąga</td><td>Pobudzają fibroblasty i nawilżenie skóry</td><td>Dowody umiarkowane do niskich, profil tolerancji korzystny</td></tr>
<tr><td><strong>Stymulatory kolagenu (PLLA, CaHA)</strong></td><td>Biodegradowalne polimery i hydroksyapatyt wapnia</td><td>Indukują stopniową neokolagenezę</td><td>Najlepiej zbadana grupa biostymulatorów</td></tr>
<tr><td><strong>Egzosomy</strong></td><td>Pęcherzyki sygnałowe wydzielane przez komórki</td><td>Mają przekazywać komórkom sygnały regeneracyjne</td><td>Głównie badania przedkliniczne, brak rejestracji do iniekcji</td></tr>
<tr><td><strong>Osocze bogatopłytkowe (PRP)</strong></td><td>Frakcja własnej krwi pacjenta bogata w płytki</td><td>Uwalnia czynniki wzrostu zawarte w płytkach</td><td>Dowody ograniczone i niejednorodne</td></tr>
<tr><td><strong>Czynniki wzrostu (miejscowe)</strong></td><td>Białka sygnałowe w preparatach nakładanych na skórę</td><td>Mają wspierać odnowę naskórka</td><td>Poprawa głównie subiektywna, brak danych o trwałości</td></tr>
</table>
<p>Szczegóły każdej metody opisujemy osobno: polinukleotydy oraz biostymulatory kolagenu PLLA i hydroksyapatyt wapnia przy <a href="/medycyna-estetyczna/stymulatory-tkankowe/">stymulatorach tkankowych</a>, egzosomy przy <a href="/medycyna-estetyczna/terapia-egzosomami/">terapii egzosomami</a>, a regenerację z krwi własnej przy <a href="/medycyna-estetyczna/osocze-bogatoplytkowe/">osoczu bogatopłytkowym</a>.</p>
<p>Od regeneratorów warto odróżnić zabiegi o innym celu. <a href="/medycyna-estetyczna/mezoterapia-iglowa/">Mezoterapia igłowa</a> odżywia skórę koktajlem składników, <a href="/medycyna-estetyczna/skin-booster/">skin booster</a> głęboko ją nawilża kwasem hialuronowym, a <a href="/medycyna-estetyczna/mezoterapia-mikroiglowa/">mezoterapia mikroigłowa</a> pobudza skórę mechanicznie, bez wstrzykiwania preparatu regeneracyjnego.</p>`,
  },
  {
    title: 'Co mówią dowody i jaki jest status regulacyjny',
    tocLabel: 'Dowody i regulacje',
    content: `<p>To najważniejsza część rzetelnej rozmowy o regeneratorach komórkowych. Mechanizm działania bywa opisany przekonująco, ale dowody kliniczne na trwały efekt są na razie ograniczone i niejednorodne, a część metod nie ma uregulowanego statusu. Uczciwa ocena wygląda różnie dla różnych grup.</p>
<ul>
<li><strong>Polinukleotydy.</strong> Przeglądy wskazują na poprawę jakości, elastyczności i nawilżenia skóry, ale jakość dostępnych badań jest niska do umiarkowanej, a protokoły bardzo zróżnicowane (Lampridou 2025). To metoda obiecująca, lecz nie potwierdzona mocnymi badaniami.</li>
<li><strong>Osocze bogatopłytkowe (PRP).</strong> Dowody są rozbieżne. Część prac raportuje poprawę, ale niezależne badanie z randomizacją wykazało, że PRP połączone z mikronakłuwaniem nie dało lepszego efektu niż sama sól fizjologiczna (Pincelli 2024). Brakuje też standaryzacji przygotowania osocza.</li>
<li><strong>Egzosomy.</strong> Większość danych pochodzi z badań laboratoryjnych i przedklinicznych, a badania u ludzi są nieliczne i niejednorodne. Trzeba też odróżnić preparaty stosowane miejscowo od podawania w iniekcji, dla którego brakuje solidnych dowodów.</li>
</ul>
<h3>Status regulacyjny egzosomów</h3>
<p>Przy egzosomach obok dowodów liczy się też prawo. Amerykańska agencja FDA podaje, że nie zatwierdziła żadnego produktu egzosomalnego do leczenia i ostrzega, że twierdzenia o ich nieuregulowanym statusie są nieprawdziwe; komunikat wydano po zgłoszeniu poważnych zdarzeń niepożądanych. W Unii Europejskiej egzosomy o działaniu leczniczym traktuje się jak produkty lecznicze, a do tej pory żaden preparat egzosomalny nie został dopuszczony do wstrzykiwania. Z tego powodu egzosomy opisujemy ostrożnie i szczegółowo omawiamy przy <a href="/medycyna-estetyczna/terapia-egzosomami/">terapii egzosomami</a>.</p>
<p>Wniosek jest praktyczny: wartość regeneratorów komórkowych zależy od trafnego doboru metody do problemu i od tego, kto wykonuje zabieg. Dlatego kwalifikację powinien prowadzić lekarz, który zna ograniczenia dowodów i status prawny preparatu.</p>`,
  },
  {
    title: 'Wskazania: dla kogo są regeneratory komórkowe',
    tocLabel: 'Wskazania',
    content: `<p>Regeneratory komórkowe kierujemy przede wszystkim do osób, którym zależy na poprawie jakości skóry, a nie na zmianie konturu twarzy. Najczęściej rozważa się je przy skórze dojrzałej, zmęczonej, z drobnymi zmarszczkami, utratą jędrności i gorszym nawilżeniem.</p>
<p>Bywają też stosowane jako wsparcie regeneracji po innych zabiegach, na przykład po laserze czy złuszczaniu, gdy zależy nam na spokojniejszym gojeniu. To zastosowanie ma jednak słabszą bazę dowodów i wymaga indywidualnej decyzji lekarza.</p>
<h3>Kiedy regeneratory komórkowe nie są dobrym wyborem?</h3>
<ul>
<li><strong>Gdy celem jest objętość lub kontur.</strong> Ubytek objętości albo głęboką bruzdę lepiej koryguje <a href="/medycyna-estetyczna/wypelniacze-ha/">wypełniacz z kwasem hialuronowym</a>, a nie regenerator.</li>
<li><strong>Gdy skóra jest wyraźnie wiotka.</strong> Zaawansowany nadmiar i opadanie tkanek to wskazanie do procedur chirurgicznych, których żaden zastrzyk nie zastąpi.</li>
<li><strong>Gdy oczekujemy natychmiastowej zmiany.</strong> Regeneratory działają stopniowo, a odpowiedź skóry jest indywidualna, więc nie są dobrym wyborem dla kogoś, kto liczy na efekt z dnia na dzień.</li>
</ul>`,
  },
  {
    title: 'Efekty, przebieg i seria zabiegów',
    tocLabel: 'Efekty i seria',
    content: `<p>Efekt regeneratorów komórkowych buduje się stopniowo. Ponieważ opierają się na pobudzeniu własnych procesów skóry, a nie na natychmiastowym wypełnieniu, na rezultat trzeba poczekać, a zwykle planuje się serię zabiegów.</p>
<p>Sam zabieg najczęściej polega na serii mikrowstrzyknięć preparatu w skórę, poprzedzonej znieczuleniem miejscowym, a dokładna technika zależy od metody. Po zabiegu skóra bywa zaczerwieniona, mogą pojawić się drobne grudki lub zasinienia, które zwykle ustępują w ciągu kilku dni.</p>
<p>Nie podajemy z góry sztywnej liczby zabiegów ani konkretnej liczby miesięcy utrzymania efektu. Schemat ustala lekarz indywidualnie, bo zależy od metody, preparatu i kondycji skóry, a dane o trwałości są ograniczone, zwłaszcza w dłuższej obserwacji. Uczciwiej jest mówić o efekcie podtrzymywanym kolejnymi zabiegami niż obiecywać konkretną metę.</p>`,
  },
  {
    title: 'Bezpieczeństwo i możliwe działania niepożądane',
    tocLabel: 'Bezpieczeństwo',
    content: `<p>Bezpieczeństwo regeneratorów komórkowych zależy od konkretnej metody, ale każdy zabieg iniekcyjny niesie pewne ryzyko. Najczęstsze odczyny są łagodne i przemijające: zaczerwienienie, obrzęk, tkliwość lub zasinienie w miejscu wkłucia.</p>
<p>Profil poszczególnych grup różni się jednak istotnie. Polinukleotydy w dostępnych badaniach mają korzystny profil tolerancji, choć ocena opiera się na małych próbach i krótkiej obserwacji, bez danych długoterminowych. Osocze bogatopłytkowe jest materiałem autologicznym, czyli pochodzącym od samego pacjenta, i w badaniach nie zwiększało istotnie ryzyka działań niepożądanych względem grupy kontrolnej.</p>
<h3>Dlaczego przy egzosomach zachowujemy szczególną ostrożność</h3>
<p>Inaczej wygląda to przy egzosomach. Poza nieuregulowanym statusem opisywano realne ryzyka, w tym zakażenia, reakcje zapalne i brak standaryzacji preparatów, a w piśmiennictwie zgłaszano poważne powikłania po produktach reklamowanych jako egzosomy. To jeden z powodów, dla których do tej metody podchodzimy zachowawczo i nie traktujemy jej jako rutynowej terapii iniekcyjnej.</p>`,
  },
  {
    title: 'Przeciwwskazania, kwalifikacja i cena we Wrocławiu',
    tocLabel: 'Przeciwwskazania i cena',
    content: `<p>Regeneratory komórkowe wykonuje lekarz po konsultacji kwalifikacyjnej, która ustala, czy zabieg jest dla pacjenta bezpieczny i celowy. Część stanów wyklucza zabieg lub wymaga szczególnej ostrożności.</p>
<h3>Przeciwwskazania</h3>
<ul>
<li>ciąża i karmienie piersią (brak danych o bezpieczeństwie),</li>
<li>aktywna choroba nowotworowa,</li>
<li>czynne zakażenie, stan zapalny lub zmiany skórne w miejscu podania,</li>
<li>zaburzenia krzepnięcia i leczenie przeciwkrzepliwe, zwłaszcza przy osoczu bogatopłytkowym,</li>
<li>choroby autoimmunologiczne i zaburzenia gojenia, które wymagają indywidualnej oceny,</li>
<li>nadwrażliwość lub alergia na składniki preparatu.</li>
</ul>
<p>To lista orientacyjna. Pełną kwalifikację i przeciwwskazania dla konkretnego preparatu lekarz ustala na podstawie wywiadu oraz charakterystyki produktu. Warto pamiętać, że zabiegi z tej grupy powinien wykonywać lekarz, bo jest to procedura medyczna, a nie kosmetyczna.</p>
<h3>Ile kosztują regeneratory komórkowe we Wrocławiu? Cena i NFZ</h3>
<p>Regeneratory komórkowe są świadczeniem estetycznym i nie podlegają refundacji NFZ, więc pacjent pokrywa ich koszt w całości. Cena zależy od wybranej metody, preparatu i liczby zabiegów w serii, dlatego ustalamy ją indywidualnie po konsultacji. Aktualne widełki znajdują się w <a href="/cennik/">cenniku</a>, a termin konsultacji zarezerwujesz przez <a href="/rejestracja/">rejestrację</a>.</p>
<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej ani indywidualnej kwalifikacji do zabiegu.</p>`,
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: `<ol>
<li>Goldie K. 2023. The evolving field of regenerative aesthetics. J Cosmet Dermatol. PMID 36988470.</li>
<li>Barbosa A.P. i wsp. 2026. Regeneration in Aesthetic Medicine: Mechanisms, Evidence, and Clinical Boundaries. J Cosmet Dermatol. PMID 41572953.</li>
<li>Corduff N. i wsp. 2025. The Evolving Field of Regenerative Aesthetics: A Review and Case Series. Cureus. PMID 40809631.</li>
<li>Kim S.T. i wsp. 2025. Comparison of Polynucleotide and Polydeoxyribonucleotide in Dermatology: Molecular Mechanisms and Clinical Perspectives. Pharmaceutics. PMID 40871045.</li>
<li>Shin S.M. i wsp. 2023. Polydeoxyribonucleotide exerts opposing effects on ERK activity in human skin keratinocytes and fibroblasts. Mol Med Rep. PMID 37350391.</li>
<li>Galeano M. i wsp. 2021. Polydeoxyribonucleotide: A Promising Biological Platform to Accelerate Impaired Skin Wound Healing. Pharmaceuticals (Basel). PMID 34832885.</li>
<li>Haddad S. i wsp. 2022. Evaluation of the biostimulatory effects and the level of neocollagenesis of dermal fillers: a review. Int J Dermatol. PMID 35486036.</li>
<li>Lampridou S. i wsp. 2025. The Effectiveness of Polynucleotides in Esthetic Medicine: A Systematic Review. J Cosmet Dermatol. PMID 39645667.</li>
<li>Lee Y.J. i wsp. 2022. Comparison of the effects of polynucleotide and hyaluronic acid fillers on periocular rejuvenation: a randomized, double-blind, split-face trial. J Dermatolog Treat. PMID 32248707.</li>
<li>Lee K.W.A. i wsp. 2024. Polynucleotides in Aesthetic Medicine: A Review of Current Practices and Perceived Effectiveness. Int J Mol Sci. PMID 39125793.</li>
<li>Flores Rodríguez J.C. i wsp. 2026. Polydeoxyribonucleotide (PDRN) in Post-procedure Recovery in Aesthetic Medicine: A Narrative Review. Cureus. PMID 42299173.</li>
<li>Olumesi K.R. i wsp. 2023. A review of exosomes and their application in cutaneous medical aesthetics. J Cosmet Dermatol. PMID 37498301.</li>
<li>Mahmoud R.H. i wsp. 2025. Exosomes: A Comprehensive Review for the Practicing Dermatologist. J Clin Aesthet Dermatol. PMID 40256340.</li>
<li>Stack E.R. i wsp. 2026. Clinical Advances in Exosome-Based Therapies for Aesthetic Medicine: A Systematic Review and Meta-analysis of Human Clinical Trials. Aesthet Surg J. PMID 41800726.</li>
<li>Al Shammrie F.F. i wsp. 2025. The Efficacy of MSC-Derived Exosome-Based Therapies in Treating Scars, Aging and Hyperpigmentation: A Systematic Review of Human Clinical Outcomes. Reports (MDPI). PMID 41441544.</li>
<li>Proffer S.L. i wsp. 2022. Efficacy and Tolerability of Topical Platelet Exosomes for Skin Rejuvenation: Six-Week Results. Aesthet Surg J. PMID 35689936.</li>
<li>Verma N. i wsp. 2025. Navigating the Global Regulatory Landscape for Exosome-Based Therapeutics: Challenges, Strategies, and Future Directions. Pharmaceutics. PMID 40871013.</li>
<li>Fujita M. i wsp. 2024. The urgent need for clear and concise regulations on exosome-based interventions. Stem Cell Reports. PMID 39454583.</li>
<li>Xiao H. i wsp. 2021. Platelet-Rich Plasma in Facial Rejuvenation: A Systematic Appraisal of the Available Clinical Evidence. Clin Cosmet Investig Dermatol. PMID 34819739.</li>
<li>Chen H. i wsp. 2026. Meta-Analysis of the Efficacy of Platelet-Rich Plasma in Treating Skin Aging. Aesthet Surg J Open Forum. PMID 41694325.</li>
<li>Pincelli T.P. i wsp. 2024. Evaluation of Platelet-rich Plasma and Microneedling for Facial Skin Rejuvenation. Plast Reconstr Surg Glob Open. PMID 38798929.</li>
<li>Asubiaro J. i wsp. 2024. Platelet-Rich Plasma in Aesthetic Dermatology: Current Evidence and Future Directions. Cureus. PMID 39268288.</li>
<li>Rodríguez-Castro M.J. i wsp. 2025. Efficacy of platelet-rich plasma in facial rejuvenation: A systematic review. Enferm Clin. PMID 40118148.</li>
<li>Quinlan D.J. i wsp. 2023. Topical growth factor preparations for facial skin rejuvenation: A systematic review. J Cosmet Dermatol. PMID 37222303.</li>
<li>U.S. Food and Drug Administration. 2019. Public Safety Notification on Exosome Products. https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products</li>
<li>U.S. Food and Drug Administration. 2020. Public Safety Alert Due to Marketing of Unapproved Stem Cell and Exosome Products. https://www.fda.gov/safety/medical-product-safety-information/public-safety-alert-due-marketing-unapproved-stem-cell-and-exosome-products</li>
</ol>`,
  },
];

export default function RegeneratoryKomorkowePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Regeneratory komórkowe Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Regeneracja skóry na poziomie komórkowym: polinukleotydy, egzosomy, PRP i czynniki wzrostu. We Wrocławiu metodę dobiera i wykonuje lekarz po konsultacji."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/regeneratory-komorkowe"
    />
  );
}
