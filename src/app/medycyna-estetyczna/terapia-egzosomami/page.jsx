import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Terapia egzosomami Wrocław',
  description: 'Terapia egzosomami we Wrocławiu: jak działają egzosomy, co mówią badania i jaki mają status regulacyjny. Stosujemy je miejscowo, po konsultacji z lekarzem.',
  path: '/medycyna-estetyczna/terapia-egzosomami/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Terapia egzosomami' },
];

const FAQ = [
  {
    question: 'Czym są egzosomy i jak działają na skórę?',
    answer: 'Egzosomy to nanopęcherzyki o średnicy około 30 do 160 nanometrów, którymi komórki przekazują sobie sygnały, przenosząc białka i mikroRNA. W badaniach laboratoryjnych pobudzają fibroblasty do produkcji kolagenu. To mechanizm wykazany głównie w hodowlach i modelach zwierzęcych, a nie potwierdzony efekt u pacjenta.',
  },
  {
    question: 'Czy egzosomy są dopuszczone do podawania w iniekcji?',
    answer: 'Nie ma egzosomalnego preparatu zarejestrowanego do wstrzykiwania, ani w ocenie FDA, ani w Unii Europejskiej, gdzie egzosomy lecznicze traktuje się jak produkty lecznicze. Po iniekcjach opisano poważne powikłania. Dlatego w Bas Clinic stosujemy egzosomy wyłącznie miejscowo, po mikronakłuwaniu lub laserze.',
  },
  {
    question: 'Czym terapia egzosomami różni się od osocza (PRP) i polinukleotydów?',
    answer: 'Osocze bogatopłytkowe (PRP) pozyskuje się z krwi samego pacjenta, a egzosomy to gotowy preparat zewnątrzkomórkowy. W jednym małym badaniu efekt egzosomów był porównywalny z PRP. Polinukleotydy mają obecnie lepiej udokumentowane działanie jako iniekcyjny biostymulator niż egzosomy.',
  },
  {
    question: 'Czy egzosomy naprawdę działają na zmarszczki i blizny?',
    answer: 'Przeglądy badań u ludzi opisują niewielką poprawę jakości skóry, ale opierają się na małych, krótkich i niejednorodnych badaniach. Egzosomy są obiecujące jako wsparcie regeneracji po zabiegach, a nie jako samodzielna, potwierdzona terapia odmładzająca. Dowody są na wczesnym etapie.',
  },
  {
    question: 'Czy zabieg z egzosomami jest bezpieczny i jakie ma przeciwwskazania?',
    answer: 'Przy aplikacji miejscowej po zabiegu profil tolerancji w krótkich badaniach jest dobry. Ryzyko rośnie przy iniekcjach niezarejestrowanych preparatów. Przeciwwskazania obejmują między innymi ciążę i karmienie piersią, aktywną chorobę nowotworową, czynne zakażenie oraz alergię na składniki. O kwalifikacji decyduje lekarz.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać zabieg z egzosomami?',
    answer: `Terapię egzosomami wykonujemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}, wyłącznie miejscowo i po konsultacji kwalifikacyjnej z lekarzem. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym są egzosomy i dlaczego samo słowo bywa mylące',
    tocLabel: 'Czym są egzosomy',
    content: `<p><strong>Egzosomy</strong> to najmniejsze z pęcherzyków zewnątrzkomórkowych (extracellular vesicles), maleńkie struktury o średnicy około 30 do 160 nanometrów, którymi komórki przekazują sobie sygnały. Powstają wewnątrz komórki i niosą białka, lipidy oraz fragmenty materiału genetycznego, głównie mikroRNA.</p>
<p>W medycynie estetycznej preparaty egzosomalne pozyskuje się z różnych źródeł: z komórek macierzystych mezenchymalnych (MSC), z płytek krwi, a także z roślin. Samo określenie „egzosomy" bywa jednak nieprecyzyjne. Międzynarodowy konsensus badaczy pęcherzyków zewnątrzkomórkowych zwraca uwagę, że rutynowymi metodami nie da się czysto oddzielić egzosomów od innych pęcherzyków, dlatego naukowo mówi się ogólnie o EV, a w marketingu słowo „egzosomy" oznacza zwykle mieszany preparat (Welsh i wsp. 2024).</p>
<p>Egzosomy należą do szerszej grupy <a href="/medycyna-estetyczna/regeneratory-komorkowe/">regeneratorów komórkowych</a>, czyli zabiegów, które mają pobudzać skórę do własnej naprawy, zamiast dodawać objętość. W Bas Clinic opisujemy je w ramach <a href="/medycyna-estetyczna/">medycyny estetycznej</a> i prowadzimy jako procedurę lekarską.</p>`,
  },
  {
    title: 'Jak egzosomy mają działać na skórę',
    tocLabel: 'Jak działają',
    content: `<p>Działanie egzosomów opiera się na komunikacji między komórkami. Po dostarczeniu do skóry mają przekazywać fibroblastom sygnały pobudzające je do produkcji kolagenu i przebudowy macierzy zewnątrzkomórkowej. To sygnalizacja parakrynna, ten sam sposób porozumiewania się, którym posługują się komórki macierzyste.</p>
<p>W badaniach laboratoryjnych ładunek egzosomów, czyli białka, lipidy i mikroRNA, wpływa na kilka procesów ważnych dla odnowy: pobudza powstawanie naczyń, moduluje zapalenie i wspiera gojenie. W modelach fotostarzenia obserwowano nasilenie syntezy kolagenu i ograniczenie aktywności enzymów rozkładających macierz skóry.</p>
<h3>Mechanizm laboratoryjny to nie to samo co efekt u pacjenta</h3>
<p>To rozróżnienie jest tu najważniejsze. Większość danych o mechanizmie pochodzi z hodowli komórkowych i modeli zwierzęcych, a nie z badań na ludzkiej skórze. Opisują więc, jak egzosomy mogą działać, a nie dowodzą, że u konkretnej osoby przyniosą obiecywany rezultat. Mechanizm bywa przedstawiany przekonująco, ale potwierdzenie wyniku to osobna sprawa, którą rozstrzygają dopiero badania kliniczne.</p>`,
  },
  {
    title: 'Co naprawdę pokazują badania u ludzi',
    tocLabel: 'Dowody u ludzi',
    content: `<p>Dowody kliniczne dla egzosomów są na wczesnym etapie. Przeglądy badań u ludzi opisują niewielką poprawę jakości skóry, ale opierają się na małych i krótkich badaniach, dlatego do mocnych deklaracji jest jeszcze daleko.</p>
<p>Najszersze podsumowanie, przegląd systematyczny z metaanalizą badań klinicznych u ludzi, opisuje spójny, choć niewielki kierunek poprawy parametrów skóry przy dużej różnorodności protokołów (Stack i wsp. 2026). Kolejne przeglądy potwierdzają zachęcające wczesne sygnały, ale zgodnie wskazują na luki w dowodach. Problemy są konkretne:</p>
<ul>
<li><strong>Małe i krótkie badania.</strong> Próby liczą zwykle od kilku do kilkudziesięciu osób, a obserwacja trwa najczęściej od czterech do dwunastu tygodni, więc o trwałości efektu wiadomo niewiele.</li>
<li><strong>Brak standaryzacji preparatów.</strong> Różne źródła egzosomów, stężenia i sposoby przygotowania utrudniają porównywanie wyników między badaniami.</li>
<li><strong>Trudno oddzielić efekt egzosomów od zabiegu.</strong> Bada się je zwykle łącznie z mikronakłuwaniem lub laserem, które same poprawiają skórę, więc nie wiadomo, jaka część poprawy należy do samego preparatu.</li>
</ul>
<p>Uczciwy wniosek jest taki: sygnał poprawy jest realny, ale dowód pewnego działania jeszcze nie. Dlatego egzosomy opisujemy jako metodę obiecującą i wspomagającą, a nie jako potwierdzoną terapię odmładzającą.</p>`,
  },
  {
    title: 'Aplikacja miejscowa po mikronakłuwaniu a iniekcja egzosomów',
    tocLabel: 'Miejscowo czy iniekcja',
    content: `<p>Najważniejsze pytanie przy egzosomach dotyczy drogi podania. Cała sensowna baza dowodów odnosi się do aplikacji miejscowej po naruszeniu bariery skóry, a nie do wstrzykiwania preparatu.</p>
<p>W praktyce zabieg wygląda zwykle tak: najpierw wykonuje się <a href="/medycyna-estetyczna/mezoterapia-mikroiglowa/">mezoterapię mikroigłową</a> lub zabieg laserem frakcyjnym, które tworzą w naskórku mikrokanaliki. Następnie na tak przygotowaną skórę nakłada się preparat z egzosomami, by łatwiej przez nie wniknął. Tej drogi dotyczą badania kliniczne, w których egzosomy stosowano po mikronakłuwaniu lub po laserze, na przykład jako wsparcie regeneracji przy <a href="/medycyna-estetyczna/laserowe-usuwanie-blizn/">laserowym usuwaniu blizn</a>. Po zabiegu skóra bywa zaczerwieniona przez kilka dni, podobnie jak po samej mikroigłowej.</p>
<h3>Dlaczego nie podajemy egzosomów w iniekcji</h3>
<p>Wstrzykiwanie egzosomów to zupełnie inna sytuacja. Nie istnieje preparat egzosomalny zarejestrowany do podawania w iniekcji, a w piśmiennictwie opisano po takich zastrzykach poważne powikłania, w tym martwicę skóry i odczyny ziarniniakowe. Z tego powodu w Bas Clinic stosujemy egzosomy wyłącznie miejscowo, jako uzupełnienie zabiegu, i nie wykonujemy iniekcji z egzosomów.</p>`,
  },
  {
    title: 'Status regulacyjny: FDA, Unia Europejska i co to znaczy dla pacjenta',
    tocLabel: 'Status regulacyjny',
    content: `<p>Przy egzosomach status prawny jest równie ważny jak dowody. Żadna agencja nie dopuściła dotąd egzosomalnego produktu do leczniczego podawania w iniekcji, co bezpośrednio wpływa na to, jak wolno je legalnie stosować.</p>
<p>Amerykańska agencja FDA jasno informuje, że nie zatwierdziła żadnego produktu egzosomalnego do stosowania u ludzi, a twierdzenia, jakoby egzosomy nie podlegały przepisom o lekach i produktach biologicznych, nazywa nieprawdziwymi; komunikat wydano po zgłoszeniu poważnych zdarzeń niepożądanych. W Unii Europejskiej egzosomy o działaniu leczniczym traktuje się jak produkty lecznicze, najczęściej jako produkty lecznicze terapii zaawansowanej (ATMP), i jak dotąd żaden taki preparat nie został dopuszczony do wstrzykiwania.</p>
<table>
<tr><th>Ścieżka</th><th>Jak traktuje egzosomy</th><th>Co to znaczy dla pacjenta</th></tr>
<tr><td><strong>FDA (USA)</strong></td><td>Brak zatwierdzonego produktu egzosomalnego; preparaty lecznicze to leki i produkty biologiczne</td><td>Iniekcja egzosomów nie jest dopuszczoną terapią</td></tr>
<tr><td><strong>Unia Europejska</strong></td><td>Egzosomy lecznicze jako produkty lecznicze, zwykle ATMP</td><td>Brak zarejestrowanego preparatu do wstrzykiwania</td></tr>
<tr><td><strong>Ścieżka kosmetyczna</strong></td><td>Część preparatów do stosowania zewnętrznego notyfikowana jako kosmetyk</td><td>Wolno nałożyć na skórę, ale to nie jest medyczne potwierdzenie działania</td></tr>
</table>
<p>To ważne rozróżnienie dla pacjenta. To, że preparat wolno nałożyć na skórę jako kosmetyk, nie oznacza, że jego działanie potwierdzono medycznie ani że nadaje się do wstrzykiwania. Dlatego dobór preparatu i nadzór nad zabiegiem powinny należeć do lekarza.</p>`,
  },
  {
    title: 'Bezpieczeństwo i możliwe powikłania',
    tocLabel: 'Bezpieczeństwo',
    content: `<p>Bezpieczeństwo egzosomów zależy przede wszystkim od drogi podania. Przy aplikacji miejscowej po zabiegu krótkie badania opisują dobry profil tolerancji, natomiast iniekcje niezarejestrowanych preparatów wiążą się z realnym ryzykiem.</p>
<p>Po stosowaniu miejscowym po mikronakłuwaniu najczęstsze odczyny są łagodne i przemijające: zaczerwienienie, obrzęk czy uczucie napięcia skóry, które zwykle ustępują w ciągu kilku dni. Inaczej wygląda to po wstrzyknięciu preparatu w skórę.</p>
<h3>Co opisano po iniekcjach egzosomów</h3>
<ul>
<li><strong>Powikłania miejscowe.</strong> W opisach przypadków po iniekcjach egzosomów raportowano martwicę skóry, guzki oraz odczyny zapalne typu ziarniniakowego, czasem z bliznowaceniem i niepełnym ustępowaniem.</li>
<li><strong>Zakażenia.</strong> Zgłaszano też ciężkie zakażenia po podaniu nieuregulowanych produktów egzosomowych, co było jednym z powodów ostrzeżeń wydanych przez agencje.</li>
<li><strong>Niska immunogenność to nie to samo co bezpieczeństwo.</strong> Argument, że egzosomy nie zawierają całych komórek, nie usuwa ryzyka zanieczyszczeń ani braku kontroli jakości preparatu.</li>
</ul>
<p>Te doniesienia nie przekreślają metody, ale pokazują, dlaczego kwalifikację powinien prowadzić lekarz i dlaczego nie traktujemy egzosomów jako rutynowej terapii iniekcyjnej.</p>`,
  },
  {
    title: 'Egzosomy na tle metod o lepszej dokumentacji',
    tocLabel: 'Egzosomy a inne metody',
    content: `<p>Egzosomy najłatwiej zrozumieć w zestawieniu z pokrewnymi metodami regeneracyjnymi. Część z nich ma znacznie lepiej udokumentowane działanie, dlatego egzosomy traktujemy raczej jako uzupełnienie niż samodzielny zabieg pierwszego wyboru.</p>
<p>Kieruje się je głównie do osób, którym zależy na poprawie jakości i kondycji skóry oraz na wsparciu regeneracji po zabiegach laserowych czy mikronakłuwaniu, a nie na zmianie objętości lub konturu twarzy. W jednym niewielkim badaniu z randomizacją efekt egzosomów był porównywalny z osoczem bogatopłytkowym, ale to wciąż pojedyncza, mała praca.</p>
<table>
<tr><th>Metoda</th><th>Co to jest</th><th>Charakter dowodów</th></tr>
<tr><td><strong>Egzosomy</strong></td><td>Gotowy preparat pęcherzyków zewnątrzkomórkowych, stosowany miejscowo</td><td>Wczesne i słabe; głównie jako wsparcie po zabiegach</td></tr>
<tr><td><strong><a href="/medycyna-estetyczna/osocze-bogatoplytkowe/">Osocze bogatopłytkowe (PRP)</a></strong></td><td>Frakcja własnej krwi pacjenta bogata w płytki</td><td>Ograniczone i niejednorodne</td></tr>
<tr><td><strong><a href="/medycyna-estetyczna/stymulatory-tkankowe/">Polinukleotydy</a></strong></td><td>Oczyszczone fragmenty DNA podawane w iniekcji</td><td>Lepiej i niezależnie zbadane jako biostymulator</td></tr>
<tr><td><strong><a href="/medycyna-estetyczna/skin-booster/">Mezoterapia kwasem hialuronowym</a></strong></td><td>Iniekcje niesieciowanego kwasu hialuronowego</td><td>Ugruntowane działanie nawilżające</td></tr>
</table>
<p>Wśród metod regeneracyjnych polinukleotydy mają obecnie lepiej udokumentowane działanie jako iniekcyjny biostymulator niż egzosomy (Lampridou i wsp. 2025). To nie przekreśla egzosomów. Ich dzisiejsze miejsce to raczej rola wspomagająca niż samodzielny zabieg pierwszego wyboru.</p>`,
  },
  {
    title: 'Przeciwwskazania, kwalifikacja i cena we Wrocławiu',
    tocLabel: 'Przeciwwskazania i cena',
    content: `<p>Terapię egzosomami poprzedza konsultacja lekarska, która ocenia, czy zabieg jest dla pacjenta bezpieczny i celowy, i pozwala zweryfikować sam preparat. Część stanów wyklucza zabieg lub wymaga szczególnej ostrożności.</p>
<h3>Jak ocenić preparat egzosomalny</h3>
<p>Przed zabiegiem warto zapytać o pochodzenie egzosomów, o deklarowane przeznaczenie preparatu, czyli do stosowania zewnętrznego czy w iniekcji, oraz o jego status. Brak rzetelnych danych o składzie i standaryzacji to sygnał ostrzegawczy, a propozycja wstrzyknięcia egzosomów powinna budzić czujność.</p>
<h3>Przeciwwskazania do terapii egzosomami</h3>
<ul>
<li>ciąża i karmienie piersią (brak danych o bezpieczeństwie),</li>
<li>aktywna choroba nowotworowa,</li>
<li>czynne zakażenie, stan zapalny lub zmiany skórne w miejscu zabiegu,</li>
<li>choroby autoimmunologiczne i zaburzenia gojenia, wymagające indywidualnej oceny,</li>
<li>nadwrażliwość lub alergia na składniki preparatu.</li>
</ul>
<p>To lista orientacyjna. Pełną kwalifikację lekarz ustala na podstawie wywiadu oraz charakterystyki konkretnego preparatu. Zabieg powinien wykonywać lekarz, bo jest to procedura medyczna, a nie kosmetyczna.</p>
<h3>Ile kosztuje terapia egzosomami we Wrocławiu? Cena i NFZ</h3>
<p>Terapia egzosomami jest świadczeniem estetycznym i nie podlega refundacji NFZ, więc pacjent pokrywa jej koszt w całości. Cena zależy od preparatu, obszaru i liczby zabiegów w serii, dlatego ustalamy ją indywidualnie po konsultacji. Aktualne widełki znajdziesz w <a href="/cennik/">cenniku</a>, a termin zarezerwujesz przez <a href="/rejestracja/">rejestrację</a>.</p>
<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej ani indywidualnej kwalifikacji do zabiegu.</p>`,
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: `<ol>
<li>Welsh J.A. i wsp. 2024. Minimal information for studies of extracellular vesicles (MISEV2023). J Extracell Vesicles. PMID 38326288.</li>
<li>Gurung S. i wsp. 2021. The exosome journey: from biogenesis to uptake and intracellular signalling. Cell Commun Signal. PMID 33892745.</li>
<li>Kalluri R., LeBleu V.S. 2020. The biology, function, and biomedical applications of exosomes. Science. PMID 32029601.</li>
<li>Prasai A. i wsp. 2022. Role of Exosomes in Dermal Wound Healing: A Systematic Review. J Invest Dermatol. PMID 34461128.</li>
<li>Hajialiasgary Najafabadi A. i wsp. 2024. Exosomes in skin photoaging: biological functions and therapeutic opportunity. Cell Commun Signal. PMID 38217034.</li>
<li>Nahm W.J. i wsp. 2025. Exosomes in Dermatology: A Comprehensive Review of Current Applications, Clinical Evidence, and Future Directions. Int J Dermatol. PMID 40533901.</li>
<li>Liu H. i wsp. 2025. Plant-derived exosome-like nanovesicles: a novel therapeutic perspective for skin diseases. J Nanobiotechnology. PMID 41074041.</li>
<li>Stack E.R. i wsp. 2026. Clinical Advances in Exosome-Based Therapies for Aesthetic Medicine: A Systematic Review and Meta-analysis of Human Clinical Trials. Aesthet Surg J. PMID 41800726.</li>
<li>Al Shammrie F.F. i wsp. 2025. The Efficacy of MSC-Derived Exosome-Based Therapies in Treating Scars, Aging and Hyperpigmentation: A Systematic Review of Human Clinical Outcomes. Reports (MDPI). PMID 41441544.</li>
<li>Flores Rodríguez J.C. i wsp. 2026. Efficacy of Exosome-Based Therapies for Skin Rejuvenation: A Systematic Review of Human Studies. Cureus. PMID 41756341.</li>
<li>Alzahrani A. i wsp. 2026. Exosomes in Skin Rejuvenation: Systematic Review of Anti-Aging Effects and Clinical Applications. Dermatol Pract Concept. PMID 41912205.</li>
<li>Proffer S.L. i wsp. 2022. Efficacy and Tolerability of Topical Platelet Exosomes for Skin Rejuvenation: Six-Week Results. Aesthet Surg J. PMID 35689936.</li>
<li>Kwon H.H. i wsp. 2020. Combination Treatment with Human Adipose Tissue Stem Cell-derived Exosomes and Fractional CO2 Laser for Acne Scars: A 12-week Prospective, Double-blind, Randomized, Split-face Study. Acta Derm Venereol. PMID 33073298.</li>
<li>Park G.H. i wsp. 2023. Efficacy of combined treatment with human adipose tissue stem cell-derived exosome-containing solution and microneedling for facial skin aging. J Cosmet Dermatol. PMID 37377400.</li>
<li>Estupiñan B. i wsp. 2025. Adipose Mesenchymal Stem Cell-Derived Exosomes Versus Platelet-Rich Plasma Treatment for Photoaged Facial Skin: An Investigator-Blinded, Split-Face, Non-Inferiority Trial. J Cosmet Dermatol. PMID 40414798.</li>
<li>Bai G. i wsp. 2024. Clinical applications of exosomes in cosmetic dermatology. Skin Health Dis. PMID 39624733.</li>
<li>Mahmoud R.H. i wsp. 2025. Exosomes: A Comprehensive Review for the Practicing Dermatologist. J Clin Aesthet Dermatol. PMID 40256340.</li>
<li>Domaszewska-Szostek A. i wsp. 2025. Effectiveness of Extracellular Vesicle Application in Skin Aging Treatment and Regeneration: Do We Have Enough Evidence from Clinical Trials? Int J Mol Sci. PMID 40076975.</li>
<li>Lampridou S. i wsp. 2025. The Effectiveness of Polynucleotides in Esthetic Medicine: A Systematic Review. J Cosmet Dermatol. PMID 39645667.</li>
<li>Verma N., Arora S. 2025. Navigating the Global Regulatory Landscape for Exosome-Based Therapeutics: Challenges, Strategies, and Future Directions. Pharmaceutics. PMID 40871013.</li>
<li>Fujita M. i wsp. 2024. The urgent need for clear and concise regulations on exosome-based interventions. Stem Cell Reports. PMID 39454583.</li>
<li>Park K.Y. 2025. Adverse Reactions Following Intradermal Injection of Exosome-Based Formulations: A Case Series. J Cosmet Dermatol. PMID 41097876.</li>
<li>AlBargawi S. 2025. Necrosis Following Dermal Injection of Lyophilized Exosomes: A Case Report. J Cosmet Dermatol. PMID 40820962.</li>
<li>Tawanwongsri W., Vachiramon V. 2024. Skin necrosis after intradermal injection of lyophilized exosome: A case report and a review of the literature. J Cosmet Dermatol. PMID 38327119.</li>
<li>U.S. Food and Drug Administration. 2019. Public Safety Notification on Exosome Products. https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products</li>
<li>U.S. Food and Drug Administration. Public Safety Alert Due to Marketing of Unapproved Stem Cell and Exosome Products. https://www.fda.gov/safety/medical-product-safety-information/public-safety-alert-due-marketing-unapproved-stem-cell-and-exosome-products</li>
</ol>`,
  },
];

export default function TerapiaEgzosamamiPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Terapia egzosomami Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Egzosomy w odnowie skóry: jak mają działać, co mówią dowody i jaki mają status. We Wrocławiu stosujemy je wyłącznie miejscowo, po konsultacji z lekarzem."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/terapia-egzosomami"
    />
  );
}
