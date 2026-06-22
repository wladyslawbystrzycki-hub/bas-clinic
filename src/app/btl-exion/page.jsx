import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'BTL Exion Wrocław - Medycyna estetyczna',
  description: 'BTL Exion - nieinwazyjna technologia odmładzania i ujędrniania skóry. Bas Clinic Wrocław.',
  path: '/btl-exion/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'BTL Exion' },
];

const FAQ = [
  { question: 'Czym jest zabieg BTL Exion?', answer: 'BTL Exion to nieinwazyjna technologia łącząca monopolarną radiofrekwencję z ultradźwiękami, która dociera do najaktywniejszych fibroblastów w skórze właściwej. System kontroli impulsu AI automatycznie dostosowuje parametry energii RF dla optymalnych rezultatów.' },
  { question: 'Ile zabiegów BTL Exion jest potrzebnych?', answer: 'Optymalne rezultaty uzyskuje się po serii 4 zabiegów. Badania kliniczne wykazały po takiej serii wzrost produkcji kwasu hialuronowego o 224%, zwiększenie elastyny o 50% oraz wzrost syntezy kolagenu o 47%.' },
  { question: 'Czy zabieg BTL Exion jest bolesny?', answer: 'Zabieg jest komfortowy i bezbolesny. Podczas zabiegu pacjent odczuwa przyjemne ciepło. Nie wymaga znieczulenia ani okresu rekonwalescencji - można natychmiast wrócić do codziennych aktywności.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest BTL Exion?', content: '<p>BTL Exion to innowacyjne urządzenie medyczne łączące monopolarną radiofrekwencję z mechaniczną stymulacją falami ultradźwiękowymi. Technologia dociera do najaktywniejszych fibroblastów w skórze właściwej, łącząc stres termiczny generowany przez radiofrekwencję ze stymulacją ultradźwiękową. System kontroli impulsu AI eliminuje potrzebę wielokrotnych przejść podczas zabiegu.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Zabieg rozpoczyna się od oczyszczenia skóry i nałożenia żelu przewodzącego. Następnie lekarz aplikuje głowicę urządzenia na wybrane obszary twarzy lub szyi. System AI automatycznie dostosowuje parametry energii dla optymalnych rezultatów. Cały zabieg trwa około 30-45 minut. Po zabiegu skóra może być lekko zaczerwieniona, co ustępuje w ciągu kilku godzin.</p>' },
  { title: 'Udowodnione efekty kliniczne', content: '<p>Badania kliniczne po serii 4 zabiegów BTL Exion wykazały imponujące rezultaty: wzrost produkcji kwasu hialuronowego o <strong>224%</strong>, zwiększenie elastyny o <strong>50%</strong> oraz wzrost syntezy kolagenu o <strong>47%</strong>. Efekty to wyraźne ujędrnienie skóry, redukcja zmarszczek, poprawa owalu twarzy oraz napięty, odmłodzony wygląd skóry. Rezultaty narastają przez kilka miesięcy po zabiegu.</p>' },
];

export default function BtlExionPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="BTL Exion Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Nieinwazyjna technologia odmładzania i ujędrniania skóry z wykorzystaniem fal radiowych i ultradźwięku skupionego."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="btl-exion"
    />
  );
}
