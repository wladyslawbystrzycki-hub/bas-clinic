import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Higienizacja zębów Wrocław',
  description: 'Higienizacja zębów we Wrocławiu: skaling, piaskowanie, polerowanie i fluoryzacja. Usuwamy kamień nazębny i osad oraz dbamy o zdrowie dziąseł w Bas Clinic.',
  path: '/stomatologia/higienizacja/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Higienizacja' },
];

const FAQ = [
  { question: 'Czy higienizacja zębów boli?', answer: 'Higienizacja zębów jest zwykle niebolesna i dobrze tolerowana. Przy nadwrażliwości zębów lub stanie zapalnym dziąseł możliwy bywa przejściowy dyskomfort, dlatego w razie potrzeby stosuje się znieczulenie miejscowe lub powierzchniowe. Po zabiegu zęby mogą być przez kilka dni nieco bardziej wrażliwe na zimno i ciepło.' },
  { question: 'Jak często robić higienizację zębów?', answer: 'Częstotliwość dobiera się indywidualnie według ryzyka. Standardowo zaleca się higienizację co około 6 miesięcy, ale osoby z chorobą przyzębia, palacze oraz pacjenci z aparatem ortodontycznym, implantami czy cukrzycą zwykle korzystają z wizyt co 3-4 miesiące. Optymalny odstęp ustala lekarz po ocenie stanu dziąseł.' },
  { question: 'Czy higienizacja zębów jest refundowana przez NFZ?', answer: 'NFZ refunduje samo usuwanie kamienia nazębnego (skaling) raz w roku kalendarzowym u dorosłych, a u kobiet w ciąży i w połogu częściej, w gabinetach z umową z NFZ. Pełna higienizacja z piaskowaniem, polerowaniem i fluoryzacją u dorosłych jest zabiegiem prywatnym. Aktualny zakres określa katalog świadczeń NFZ.' },
  { question: 'Czy higienizacja wybiela zęby?', answer: 'Higienizacja nie wybiela zębów, ale usuwa osad i przebarwienia zewnętrzne po kawie, herbacie czy nikotynie, dzięki czemu zęby odzyskują swój naturalny odcień i wyglądają jaśniej. Aby zmienić właściwy kolor zębów, potrzebne jest wybielanie, a higienizacja jest dla niego zalecanym etapem przygotowania.' },
  { question: 'Czym różni się skaling od piaskowania?', answer: 'Skaling usuwa twardy kamień nazębny, najczęściej skalerem ultradźwiękowym, także przy linii dziąseł. Piaskowanie usuwa miękki osad i przebarwienia zewnętrzne strumieniem wody, powietrza i drobnego proszku. Obie metody się uzupełniają, dlatego pełna higienizacja zwykle łączy skaling, piaskowanie i polerowanie.' },
  { question: 'Gdzie zrobić higienizację zębów we Wrocławiu?', answer: `Higienizację zębów wykonasz w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na zabieg lub konsultację umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest higienizacja zębów (profesjonalne czyszczenie)?',
    tocLabel: 'Czym jest',
    content: (
      <>
        <p>Higienizacja zębów to profesjonalne oczyszczenie jamy ustnej z osadu, kamienia nazębnego i przebarwień, którego nie da się wykonać samą szczoteczką w domu. Zabieg usuwa twarde złogi i biofilm bakteryjny z powierzchni zębów, także w miejscach trudno dostępnych przy linii dziąseł i między zębami.</p>
        <p>Aby zrozumieć, po co wykonuje się higienizację, warto rozróżnić dwa pojęcia. <strong>Płytka nazębna</strong> (biofilm bakteryjny) to miękki nalot, który tworzy się na zębach każdego dnia i który usuwasz szczotkowaniem oraz nitkowaniem. Gdy płytka pozostaje na zębach zbyt długo, mineralizuje się składnikami śliny i twardnieje w <strong>kamień nazębny</strong> (calculus). Kamienia nie usuniesz już w domu, ponieważ jest twardo związany ze szkliwem, a jego szorstka powierzchnia sprzyja dalszemu odkładaniu się płytki i drażni dziąsła.</p>
        <p>Profesjonalna higienizacja, nazywana też profesjonalnym czyszczeniem zębów, jest podstawowym zabiegiem profilaktycznym i częścią opieki nad pacjentami z chorobami dziąseł. Jest uzupełnieniem, a nie zamiennikiem, codziennej higieny domowej. To jeden z elementów szerszej oferty <Link href="/stomatologia/">stomatologii w naszej klinice</Link> we Wrocławiu.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega higienizacja: skaling, piaskowanie, polerowanie i fluoryzacja',
    tocLabel: 'Etapy zabiegu',
    content: (
      <>
        <p>Pełna higienizacja składa się zwykle z czterech etapów: skalingu, piaskowania, polerowania i fluoryzacji. Wizyta zaczyna się od oceny stanu dziąseł i zębów, a kończy instruktażem higieny domowej. Cały zabieg trwa najczęściej około 40-60 minut, zależnie od ilości osadu i kamienia.</p>
        <p>Czasem na początku płytkę uwidacznia się specjalnym barwnikiem. Pokazuje to miejsca wymagające dokładniejszego czyszczenia i ułatwia naukę prawidłowej higieny. Następnie wykonuje się kolejne etapy:</p>
        <ol>
          <li><strong>Skaling</strong> - usunięcie kamienia nazębnego, najczęściej skalerem ultradźwiękowym o drgającej, chłodzonej wodą końcówce, która kruszy złogi nad dziąsłem i tuż pod jego brzegiem.</li>
          <li><strong>Piaskowanie</strong> - oczyszczenie powierzchni zębów strumieniem wody, powietrza i drobnego proszku, który usuwa miękki osad oraz przebarwienia po kawie, herbacie czy nikotynie, także między zębami. Współczesne proszki niskoabrazyjne (na bazie glicyny lub erytrytolu) są łagodne dla szkliwa i dziąseł.</li>
          <li><strong>Polerowanie</strong> - wygładzenie powierzchni zębów gumką i pastą polerską. Gładka powierzchnia wolniej gromadzi nowy osad.</li>
          <li><strong>Fluoryzacja</strong> - pokrycie zębów preparatem z fluorem (lakier lub żel), który wzmacnia szkliwo i zmniejsza ryzyko próchnicy. Profesjonalnie aplikowany lakier fluorkowy ogranicza próchnicę u dzieci i młodzieży średnio o około 40% (Marinho i wsp., 2013).</li>
        </ol>
        <p>Na koniec zwykle otrzymujesz indywidualny instruktaż higieny: dobór szczoteczki, technikę szczotkowania, nitkowania i czyszczenia szczoteczkami międzyzębowymi. To codzienna higiena domowa, a nie sam zabieg w gabinecie, najmocniej decyduje o zdrowiu zębów i dziąseł.</p>
      </>
    ),
  },
  {
    title: 'Skaling, piaskowanie czy GBT: czym różnią się metody?',
    tocLabel: 'Metody i różnice',
    content: (
      <>
        <p>Skaling, piaskowanie i polerowanie usuwają różne rodzaje osadu i wzajemnie się uzupełniają, dlatego pełna higienizacja zwykle łączy wszystkie te metody. Żadna z nowszych technik nie zastępuje usuwania twardego kamienia.</p>
        <table>
          <tbody>
            <tr>
              <th>Metoda</th>
              <th>Co usuwa</th>
              <th>Na czym polega</th>
            </tr>
            <tr>
              <td>Skaling ultradźwiękowy</td>
              <td>Twardy kamień nazębny</td>
              <td>Drgająca, chłodzona wodą końcówka kruszy zmineralizowane złogi</td>
            </tr>
            <tr>
              <td>Instrumentacja ręczna</td>
              <td>Resztkowy kamień, opracowanie powierzchni</td>
              <td>Ręczne skalery i kirety, często łączone z ultradźwiękami</td>
            </tr>
            <tr>
              <td>Piaskowanie</td>
              <td>Miękki osad i przebarwienia zewnętrzne</td>
              <td>Strumień wody, powietrza i drobnego proszku (glicyna, erytrytol)</td>
            </tr>
            <tr>
              <td>Polerowanie</td>
              <td>Chropowatość po usunięciu osadu</td>
              <td>Gumka i pasta polerska wygładzające powierzchnię</td>
            </tr>
          </tbody>
        </table>
        <h3>Czym jest Guided Biofilm Therapy (GBT)?</h3>
        <p>Guided Biofilm Therapy (GBT) to nazwany protokół higienizacji oparty na wybarwieniu biofilmu, piaskowaniu drobnym proszkiem i usuwaniu kamienia urządzeniem ultradźwiękowym. W badaniach klinicznych GBT daje efekty porównywalne z klasycznym skalingiem i polerowaniem, zwykle przy krótszym czasie zabiegu, ale bez udowodnionej przewagi zdrowotnej nad metodą klasyczną (Cyris i wsp., 2024). Również poszczególne proszki do piaskowania, glicyna i erytrytol, działają podobnie skutecznie i żaden nie okazał się wyraźnie lepszy od pozostałych.</p>
        <p>W praktyce liczy się dokładne i bezpieczne usunięcie osadu oraz kamienia, a nie nazwa handlowa protokołu czy proszku. Metodę dobiera się do ilości i twardości złogów oraz wrażliwości dziąseł.</p>
      </>
    ),
  },
  {
    title: 'Jak często robić higienizację zębów? Co mówią badania',
    tocLabel: 'Jak często',
    content: (
      <>
        <p>Nie ma jednej częstotliwości higienizacji dobrej dla wszystkich. Standardowo zaleca się wizytę profilaktyczną co około 6 miesięcy, ale odstęp powinien być dobierany indywidualnie na podstawie ryzyka choroby.</p>
        <p>Popularne hasło „higienizacja co pół roku dla każdego&quot; jest uproszczeniem. U zdrowych dorosłych, którzy regularnie dbają o higienę, najlepsze dostępne dowody nie wykazały istotnej różnicy w stanie dziąseł między planowym, rutynowym skalingiem i polerowaniem a brakiem takich zabiegów (przegląd Cochrane, Lamont i wsp., 2018). Z tego powodu wytyczne zalecają indywidualizację odstępów zamiast sztywnego schematu dla wszystkich.</p>
        <p>To nie znaczy, że higienizacja jest zbędna. Usunięcie twardego kamienia, którego nie zdejmiesz w domu, jest realnym i mierzalnym efektem zabiegu, a regularna wizyta pozwala wcześnie wykryć próchnicę czy stan zapalny dziąseł. Korzyść jest największa u osób z czynnikami ryzyka. Częstszych wizyt, zwykle co 3-4 miesiące, potrzebują przede wszystkim:</p>
        <ul>
          <li>osoby z chorobą przyzębia lub po jej leczeniu (faza podtrzymująca),</li>
          <li>palacze,</li>
          <li>osoby z cukrzycą,</li>
          <li>pacjenci z aparatem ortodontycznym lub implantami,</li>
          <li>osoby ze skłonnością do szybkiego odkładania kamienia,</li>
          <li>kobiety w ciąży, ze względu na nasiloną reakcję dziąseł.</li>
        </ul>
        <p>Dlatego optymalną częstotliwość ustalamy podczas wizyty, po ocenie stanu dziąseł i indywidualnego ryzyka.</p>
      </>
    ),
  },
  {
    title: 'Higienizacja a zdrowie dziąseł: zapalenie dziąseł i choroba przyzębia',
    tocLabel: 'Dziąsła i przyzębie',
    content: (
      <>
        <p>Bakterie z nieusuniętej płytki nazębnej są główną przyczyną zapalenia dziąseł. Regularne usuwanie biofilmu i kamienia jest podstawą profilaktyki oraz leczenia chorób przyzębia.</p>
        <p>Gdy płytka bakteryjna gromadzi się przy dziąsłach, rozwija się <strong>zapalenie dziąseł</strong> (gingivitis): dziąsła stają się zaczerwienione, obrzęknięte i krwawią podczas szczotkowania. Zapalenie dziąseł jest odwracalne i ustępuje po usunięciu płytki oraz kamienia i przy dobrej higienie domowej. Zaniedbane u części osób może jednak przejść w <strong>zapalenie przyzębia</strong> (periodontitis), które prowadzi do nieodwracalnej utraty tkanek podtrzymujących ząb i kości, a w zaawansowanych przypadkach do rozchwiania i utraty zębów.</p>
        <p>W leczeniu zapalenia przyzębia profesjonalne usuwanie płytki i kamienia, połączone z instruktażem higieny i kontrolą czynników ryzyka, stanowi pierwszy etap terapii zgodnie z wytycznymi European Federation of Periodontology (Sanz i wsp., 2020). Po zakończonym leczeniu konieczne są regularne wizyty podtrzymujące, aby utrzymać efekt. Zaawansowana choroba przyzębia wymaga specjalistycznego leczenia periodontologicznego, wykraczającego poza samą higienizację.</p>
        <p>Stan dziąseł wiąże się też ze zdrowiem ogólnym. Zależność między zapaleniem przyzębia a cukrzycą jest dwukierunkowa: niewyrównana cukrzyca zwiększa ryzyko choroby przyzębia, a nieleczone zapalenie przyzębia może utrudniać kontrolę glikemii. Palenie tytoniu kilkukrotnie zwiększa ryzyko i nasila przebieg choroby dziąseł, a zmiany hormonalne w ciąży nasilają reakcję dziąseł na płytkę. Te grupy odnoszą szczególną korzyść z regularnej, profesjonalnej kontroli higieny.</p>
      </>
    ),
  },
  {
    title: 'Higienizacja przy aparacie, implantach i przed wybielaniem',
    tocLabel: 'Aparat, implanty, wybielanie',
    content: (
      <>
        <p>Niektóre sytuacje wymagają szczególnie starannej higienizacji. Aparat ortodontyczny, implanty i planowane wybielanie to typowe przykłady, w których profesjonalne czyszczenie ma szczególne znaczenie.</p>
        <h3>Przy aparacie ortodontycznym</h3>
        <p>Zamki i druty <Link href="/stomatologia/ortodoncja/">aparatu stałego</Link> utrudniają czyszczenie i sprzyjają gromadzeniu płytki, co u wielu pacjentów prowadzi do białych plam próchnicowych (odwapnień) wokół zamków. Dlatego w trakcie leczenia ortodontycznego zaleca się częstszą higienizację oraz staranną codzienną higienę i stosowanie fluoru.</p>
        <h3>U pacjentów z implantami</h3>
        <p>Wokół <Link href="/stomatologia/implanty-zebowe/">implantów zębowych</Link> również odkłada się biofilm, który może wywołać zapalenie błony śluzowej wokół implantu. Jest ono odwracalne, ale nieleczone może przejść w zapalenie z utratą kości (periimplantitis). Regularna profesjonalna higienizacja i kontrola są elementem opieki, która pomaga zachować implant w zdrowiu na lata.</p>
        <h3>Przed wybielaniem i innymi zabiegami</h3>
        <p>Higienizacja jest zalecanym etapem przygotowania przed <Link href="/stomatologia/wybielanie-zebow/">wybielaniem zębów</Link>. Usuwa osad i przebarwienia zewnętrzne, dzięki czemu preparat wybielający działa równomierniej, a lekarz może ocenić rzeczywisty kolor zębów. Warto pamiętać, że wybielanie nie zmienia koloru wypełnień ani koron. Czyste zęby ułatwiają też diagnostykę i leczenie, na przykład <Link href="/stomatologia/leczenie-zebow/">próchnicy</Link>, oraz prace protetyczne. Higienizacja pomaga również ograniczyć nieświeży oddech, którego częstą przyczyną są bakterie rozkładające resztki w jamie ustnej i na języku.</p>
      </>
    ),
  },
  {
    title: 'Czy higienizacja boli, przeciwwskazania i zalecenia po zabiegu',
    tocLabel: 'Komfort, przeciwwskazania, po zabiegu',
    content: (
      <>
        <p>Higienizacja jest zwykle dobrze tolerowana i u większości pacjentów nie wiąże się z bólem. Po zabiegu warto przez kilka godzin ograniczyć barwiące pokarmy i napoje.</p>
        <h3>Czy higienizacja zębów boli?</h3>
        <p>Zabieg najczęściej jest niebolesny, choć przy nadwrażliwości zębów lub stanie zapalnym dziąseł możliwy bywa przejściowy dyskomfort. W razie potrzeby stosuje się znieczulenie miejscowe lub preparaty znieczulające powierzchniowo. Po higienizacji zęby bywają przez kilka dni bardziej wrażliwe na zimno i ciepło.</p>
        <h3>Zalecenia po zabiegu (biała dieta)</h3>
        <p>Bezpośrednio po fluoryzacji zwykle zaleca się powstrzymanie od jedzenia i picia przez około 1-2 godziny. Przez pierwszą dobę lub dwie warto ograniczyć produkty silnie barwiące: kawę, mocną herbatę, czerwone wino, buraki oraz palenie tytoniu, ponieważ świeżo oczyszczone zęby łatwiej chłoną przebarwienia. Przy nadwrażliwości pomocna jest łagodna pasta z fluorem.</p>
        <h3>Przeciwwskazania do higienizacji zębów</h3>
        <p>Higienizacja jest bezpiecznym zabiegiem, ale w niektórych sytuacjach trzeba ją odłożyć lub zmodyfikować. Względne lub czasowe przeciwwskazania obejmują między innymi:</p>
        <ul>
          <li>ostre infekcje i stany zapalne jamy ustnej (np. opryszczka, afty, ostre zapalenie dziąseł),</li>
          <li>świeże rany po zabiegach chirurgicznych w jamie ustnej,</li>
          <li>niestabilną astmę i ciężkie choroby układu oddechowego (ostrożność przy piaskowaniu z aerozolem),</li>
          <li>pierwszy trymestr ciąży, gdy zabiegi planowe zwykle odkłada się na drugi trymestr,</li>
          <li>stany wymagające osłony antybiotykowej, ustalanej indywidualnie z lekarzem.</li>
        </ul>
        <p>O zakresie i terminie zabiegu zawsze decyduje lekarz po badaniu. Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji ani indywidualnego zalecenia lekarskiego.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje higienizacja we Wrocławiu? Cena i NFZ',
    tocLabel: 'Cena i NFZ Wrocław',
    content: (
      <>
        <p>Koszt higienizacji zależy od zakresu zabiegu (sam skaling czy pełny pakiet ze skalingiem, piaskowaniem, polerowaniem i fluoryzacją) oraz ilości osadu i kamienia. Aktualne ceny w Bas Clinic we Wrocławiu znajdziesz w naszym cenniku.</p>
        <p>Na NFZ refundowane jest jedynie samo usuwanie kamienia nazębnego (skaling), wykonywane przez lekarza, gdy uzna je za konieczne. Dorosłym przysługuje ono raz w roku kalendarzowym, a kobietom w ciąży i w połogu częściej, w gabinetach z umową z NFZ. Pełna higienizacja, obejmująca piaskowanie, polerowanie i fluoryzację u dorosłych, jest zabiegiem prywatnym. Szczegółowy zakres świadczeń określa aktualny katalog NFZ.</p>
        <p>Indywidualną wycenę i termin ustalisz podczas <Link href="/rejestracja/">rejestracji</Link>, a pełną listę zabiegów stomatologicznych z cenami znajdziesz w <Link href="/cennik/">cenniku</Link>.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Lamont T, Worthington HV, Clarkson JE, Beirne PV. Routine scale and polish for periodontal health in adults. Cochrane Database of Systematic Reviews 2018;12:CD004625.</li>
        <li>Fee PA, Riley P, Worthington HV, Clarkson JE, Boyers D, Beirne PV. Recall intervals for oral health in primary care patients. Cochrane Database of Systematic Reviews 2020;10:CD004346.</li>
        <li>Clarkson J, Ramsay C, Lamont T i wsp. Examining the impact of oral hygiene advice and/or scale and polish on periodontal disease: the IQuaD cluster factorial randomised controlled trial. British Dental Journal 2021;230:229-235.</li>
        <li>Sanz M, Herrera D, Kebschull M i wsp. Treatment of stage I-III periodontitis: the EFP S3 level clinical practice guideline. Journal of Clinical Periodontology 2020;47(Suppl 22):4-60.</li>
        <li>Caton JG, Armitage G, Berglundh T i wsp. A new classification scheme for periodontal and peri-implant diseases and conditions. Journal of Clinical Periodontology 2018;45(Suppl 20):S1-S8.</li>
        <li>Chapple ILC, Mealey BL, Van Dyke TE i wsp. Periodontal health and gingival diseases and conditions on an intact and a reduced periodontium. Journal of Clinical Periodontology 2018;45(Suppl 20):S68-S77.</li>
        <li>Trombelli L, Farina R, Silva CO, Tatakis DN. Plaque-induced gingivitis: case definition and diagnostic considerations. Journal of Clinical Periodontology 2018;45(Suppl 20):S44-S67.</li>
        <li>Tonetti MS, Greenwell H, Kornman KS. Staging and grading of periodontitis. Journal of Periodontology 2018;89(Suppl 1):S159-S172.</li>
        <li>Sanz M, Ceriello A, Buysschaert M i wsp. Scientific evidence on the links between periodontal diseases and diabetes (IDF/EFP). Journal of Clinical Periodontology 2018;45:138-149.</li>
        <li>Kassebaum NJ, Bernabe E, Dahiya M i wsp. Global burden of severe periodontitis in 1990-2010. Journal of Dental Research 2014;93:1045-1053.</li>
        <li>Gheorghe DN, Bennardo F, Silaghi M i wsp. Subgingival use of air-polishing powders: a systematic review. Journal of Clinical Medicine 2023;12:6936.</li>
        <li>Zhu M, Zhao M, Hu B i wsp. Efficacy of glycine powder air-polishing in supportive periodontal therapy: a systematic review and meta-analysis. Journal of Periodontal and Implant Science 2021;51:147-162.</li>
        <li>Yuan Z, Tang Y, Zhou Y i wsp. Clinical effects of erythritol, glycine and trehalose as subgingival air-polishing powders. Frontiers in Physiology 2025;16:1593204.</li>
        <li>Cyris M, Festerling J, Kahl M i wsp. Guided biofilm therapy versus conventional protocol: clinical outcomes in non-surgical periodontal therapy. BMC Oral Health 2024;24:1108.</li>
        <li>Zhang X, Hu Z, Zhu X, Li W, Chen J. Ultrasonic versus manual subgingival scaling at different probing pocket depths: a systematic review and meta-analysis. BMC Oral Health 2020;20:176.</li>
        <li>Marinho VCC, Worthington HV, Walsh T, Clarkson JE. Fluoride varnishes for preventing dental caries in children and adolescents. Cochrane Database of Systematic Reviews 2013;7:CD002279.</li>
        <li>Heitz-Mayfield LJA, Salvi GE. Peri-implant mucositis. Journal of Clinical Periodontology 2018;45(Suppl 20):S237-S245.</li>
        <li>Sonesson M, Twetman S. Prevention of white spot lesions with fluoride varnish during orthodontic treatment with fixed appliances: a systematic review. European Journal of Orthodontics 2023;45:485-491.</li>
        <li>National Institute for Health and Care Excellence (NICE). Dental checks: intervals between oral health reviews. Clinical guideline CG19, 2004 (aktualizacja 2018).</li>
        <li>Narodowy Fundusz Zdrowia. Poradnik pacjenta: leczenie stomatologiczne w ramach NFZ.</li>
      </ol>
    ),
  },
];

export default function HigienizacjaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Higienizacja zębów Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Profesjonalna higienizacja jamy ustnej w Bas Clinic we Wrocławiu. Skaling, piaskowanie, polerowanie i fluoryzacja oraz indywidualny instruktaż higieny jamy ustnej."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/higienizacja-faq-bas-clinic-wroclaw.webp"
      faqImageAlt="Pacjentka po higienizacji w gabinecie Bas Clinic we Wrocławiu"
      slug="stomatologia/higienizacja"
    />
  );
}
