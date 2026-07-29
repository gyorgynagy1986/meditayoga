export const site = {
  name: "MEDITA Jóga",
  url: "https://www.meditajoga.hu",
  tagline: "Jóga mindenkié – találd meg benne a saját utad",
  openingDate: "2026. augusztus",
  openingNote: "Nyitás: 2026 augusztusában",
  email: "info@meditajoga.hu",
  phone: "+36 30 647 9502",
  address: "6640 Csongrád, Fő utca 6–10., 1. emelet 42. ajtó",
  // Ide kerül majd a foglalási rendszer linkje (pl. MotiBro / Salonic)
  bookingUrl: "/foglalas",

  /**
   * Timeify foglalási widget (a /foglalas oldal ezt olvassa).
   *
   *   origin — a Timeify app címe. Lokálisan a Timeify dev szerver (3000-es port),
   *            élesben a saját domain. NEM ennek az oldalnak a címe!
   *   slug   — a stúdió azonosítója; a Timeify Studio → Integráció oldalon látszik.
   *   days   — hány napra előre kérje le az órarendet.
   *
   * Mindkettő felülírható környezeti változóval, hogy ne kelljen kódot írni
   * a lokál ↔ éles váltáshoz (lásd .env.local).
   */
  booking: {
    origin: process.env.NEXT_PUBLIC_TIMEIFY_ORIGIN ?? "http://localhost:3000",
    slug: process.env.NEXT_PUBLIC_TIMEIFY_SLUG ?? "zen-yoga",
    days: 28,
  },
};

export type Instructor = {
  slug: string;
  name: string;
  role: string;
  classes: string[];
  bio: string;
  /** Részletes bemutatkozás – bekezdésenként, az oktatók saját szövegei. */
  story: string[];
};

/* ABC-sorrendben. Gerda (jógakerék, üdvözletek, gerincjóga) babát vár,
   egyelőre nem tart órákat – ha visszatér, vegyük fel újra. */
export const instructors: Instructor[] = [
  {
    slug: "edit",
    name: "Edit",
    role: "alapító · jóga- és reformer pilates oktató",
    classes: ["Relax jóga", "Napindító jóga", "Reformer pilates", "Női meditáció"],
    bio: "A MEDITA Jóga alapítója. Hatha, női és yin jógaoktató, reformer pilates oktató, női meditációvezető.",
    story: [
      "Bozóné Simon Edit vagyok, 46 éves. A mozgás és a sport mindig is része volt az életemnek. Bár sosem versenyszerűen vagy kiemelkedő szinten sportoltam, mégis folyamatosan jelen volt a mindennapjaimban. Kipróbáltam több mozgásformát is, mint a tánc, a futás, az aerobic és a tenisz, melyek mind hozzájárultak ahhoz, hogy a testmozgás természetes igénnyé váljon számomra.",
      "A jógával körülbelül 10 évvel ezelőtt találkoztam először. Kezdetben nem gondoltam, hogy ez az én utam lesz, mivel meglehetősen kötött és merev izomzattal rendelkezem. Ennek ellenére azonnal magával ragadott az ászanák szépsége, a gyakorlók testtudatossága, valamint a légzésfigyelés, a relaxáció és a meditáció nyugtató, befelé fordító világa.",
      "Az elmúlt évek során a jóga egyre fontosabb szerepet töltött be az életemben. Nemcsak a testemmel való kapcsolatom változott meg, hanem a belső egyensúly, a tudatosság és a jelenlét is egyre hangsúlyosabbá vált.",
      "Ezek az élmények és tapasztalatok indították el bennem a gondolatot, hogy szeretnék létrehozni egy saját jógastúdiót. Egy olyan teret, ahol mások is megtapasztalhatják a jóga, relaxáció, meditáció jótékony hatásait, függetlenül attól, hogy milyen szinten állnak, vagy milyen kihívásokkal érkeznek. Hiszem, hogy a jóga mindenki számára elérhető, és mindenki megtalálhatja benne a saját útját – ahogyan én is megtaláltam a sajátomat.",
    ],
  },
  {
    slug: "ildiko",
    name: "Ildikó",
    role: "fitness instruktor · funkcionális tréner",
    classes: ["Funkcionális köredzés"],
    bio: "Fitness instruktor, funkcionális tréner, gerinctréner. Vallja: tanulni és a mozgást elkezdeni sosem késő!",
    story: [
      "Kozma Ildikó vagyok, 42 éves. Mindig is életem része volt a sport, sokfélét kipróbáltam. 4 éve döntöttem úgy, hogy szeretném ha a sport iránti rajongásom másoknak is átadhatnám. Azóta már fitness instruktor, funkcionális tréner, gerinctréner, fascia mobilizáció és stretching tréner is vagyok. Emellett táplálkozási tanácsadóként és menopauza coachként segítem a nőket. Azt vallom, hogy tanulni és a mozgást elkezdeni sosem késő! A nőknek 40 felett van csak igazán szüksége a tudatos mozgásra.",
    ],
  },
  {
    slug: "kata",
    name: "Kata",
    role: "mozgásoktató · aerobic",
    classes: ["Fitball"],
    bio: "A mozgás, a zene és a tánc az éltető ereje. Vidám, dinamikus fitball óráin mindenkit szeretettel vár.",
    story: [
      "„Senki sem fordulhat vissza, hogy mindent elölről kezdjen. De bárki nekifoghat egy teljesen új befejezést elkezdeni.” Dan Zadra",
      "A mozgás, a zene, a tánc az éltető erőm. Olyan vagyok a sportban is, mint a zenében: mindenevő. Kisiskolásként kezdtem szertornázni, majd fősulis koromban jött az aerobic, utána meg a többi... Elmúltam 50, most sportedző képzésben tanulok, mert szeretek megújulni. A változatosság gyönyörködtet!",
    ],
  },
  {
    slug: "lilla",
    name: "Lilla",
    role: "pilates oktató",
    classes: ["Talaj pilates"],
    bio: "11 év balettmúlttal érkezett a pilateshez – óráin a testtudat, a tartás és a precizitás találkozik a könnyedséggel.",
    story: [
      "Sziasztok, Gróf Lilla vagyok, pilates oktató. Gyermekkorom óta a mozgás központi szerepet tölt be az életemben, hiszen 11 év balettmúlttal a hátam mögött megtanultam, milyen fegyelmezett, mégis légies tud lenni a test, ha összhangba kerül a lélekkel. A balett világából hozott testtudat, tartás és precizitás számomra természetes alapot jelentett, amikor rátaláltam a pilatesre. Mindenkit szeretettel várok Pilates óráimra, függetlenül attól, hogy most ismerkedik a mozgásformával vagy már tapasztaltabb. Célom, hogy az órák egyszerre legyenek hatékonyak és jólesők: erősítsenek, fejlesszék a testtudatot, és segítsenek kiszakadni a mindennapokból.",
    ],
  },
  {
    slug: "niki",
    name: "Niki",
    role: "mozgásoktató",
    classes: ["Move"],
    bio: "Futóedzők Csongrádon a férjével – a keresztedzés híve, óráin a jóleső mozgás és az energia kerül előtérbe.",
    story: [
      "Csongrádon a férjemmel évek óta tartunk futóedzéseket, heti rendszerességgel, ahol a tudatos felkészülés és a sérülésmegelőzés fontos szerepet kap. Hiszek a keresztedzés fontosságában, ezért is mélyítettem el a tudásomat ezen a területen – hogy ne csak hatékony, hanem kiegyensúlyozott, mindamellett változatos is legyen egy-egy edzés.",
    ],
  },
  {
    slug: "vanda",
    name: "Vanda",
    role: "jógaoktató · szomatikus női coach",
    classes: ["Stresszoldó jóga"],
    bio: "Jógaoktató és traumatudatos, szomatikus női coach. Óráin a test és a lélek is gyógyul – garantált a lelassulás.",
    story: [
      "Szia, Vanda vagyok, jóga oktató és life coach mostmár 5-6 éve. Amióta csak az eszemet tudom járom az önismereti utat, millió tanfolyam, önismereti kurzus, kezelés, terápia és sok-sok belső munka van mögöttem. Az útnak azonban sosincs vége, Veletek fejlődőm! Mindig is azt hallottam másoktól, hogy a közelemben megnyugszanak, lecsendesednek attól a jelenléttől, amit én tudok nyújtani, ezért tudtam, hogy ezzel dolgom van. Ezért összeraktam mindent amit tudok, tapasztaltam, tanultam, hogy segíthesselek nőként kiteljesedni és megtalálni a lelassulást, belső békét, stresszmentes életet! Így aztán szeretettel várlak csoportos jóga óráimon, ahol a test és a lélek is gyógyul és garantált, hogy lelassulsz, megnyugszol. Jöhetsz magán órára is ha kezdő vagy, vagy ha egyedül lennél.",
    ],
  },
];

export type ClassType = {
  name: string;
  instructor: string;
  desc: string;
  variants?: { name: string; desc: string }[];
};

/* Óratípusok – az oktatók saját, szó szerinti leírásaival. */
export const classTypes: ClassType[] = [
  {
    name: "Relax jóga",
    instructor: "Edit",
    desc: "Relax jóga óráimon ötvözőm a női és yin jóga elemeit, mely által megtapasztalhatsz egy nyugodt, feltöltődést segítő gyakorlást, amelynek célja a test és az elme ellazítása. Az óra során finom nyújtások, légzőgyakorlatok és hosszabban kitartott, kényelmes pózok segítenek oldani a feszültséget, csökkenteni a stresszt és megteremteni a belső egyensúlyt. A relax jóga minden korosztály és edzettségi szint számára ajánlott, kezdőknek is, hiszen nem a teljesítmény, hanem a pihenés, a tudatos jelenlét és a regenerálódás áll a középpontban.",
  },
  {
    name: "Napindító jóga",
    instructor: "Edit",
    desc: "Indítsd a napot tudatosan és energikusan! Ezen az órán finom átmozgató gyakorlatokkal, nyújtásokkal és légzőgyakorlatokkal ébresztjük fel a testet, miközben felkészítjük az elmét a nap kihívásaira. A gyakorlás frissességet, könnyedséget és kiegyensúlyozottságot ad, így feltöltődve vághatsz neki a napnak. Az óra minden korosztály és gyakorlási szint számára ajánlott.",
  },
  {
    name: "Reformer pilates",
    instructor: "Edit",
    desc: "Reformer Pilates órákon belül számíthatsz:",
    variants: [
      { name: "Kezdő Reformer", desc: "Lassú tempójú, biztonságos óra, ahol az egész testet átmozgatjuk. A hangsúly a helyes kivitelezésen, a törzsizmok erősítésén és a mobilitás fejlesztésén van." },
      { name: "Reformer Flow Kezdő", desc: "Folyamatos, könnyed gyakorlatsorokkal fejlesztjük az erőt, az egyensúlyt és a koordinációt. Ideális azoknak, akik már ismerik az alapokat, de még kezdő szinten gyakorolnak." },
      { name: "Reformer Core", desc: "A mély törzsizmok erősítésén, a stabilitás és a helyes testtartás fejlesztésén van a hangsúly. A reformer gép segítségével hatékonyan dolgoztatjuk meg a has-, hát- és farizmokat, miközben az egész test harmonikusan erősödik. Az óra javítja a testtudatot, az egyensúlyt és a mozgásminőséget, így kiváló választás kezdőknek és újrakezdőknek is." },
      { name: "Reformer Power", desc: "Dinamikus, intenzív óra azoknak, akik szeretnek kihívások elé állni. Erősítő gyakorlatokkal, nagyobb terheléssel és folyamatos mozgással fejlesztjük az erőt, az állóképességet és a stabilitást. Ajánlott reformer tapasztalattal rendelkezőknek." },
      { name: "Tematikus Reformer órák", desc: "A reformer Pilates órák különböző nehézségi szinteken érhetők el, így kezdők és haladók egyaránt megtalálhatják a számukra megfelelő kihívást. A vendégek igényeihez és edzettségi szintjéhez igazodva a későbbiekben tematikus órákat is kialakítunk, amelyek egy-egy területre – például törzserő, alsótest, mobilitás vagy teljes testes erősítés – helyezik a hangsúlyt." },
    ],
  },
  {
    name: "Fitball",
    instructor: "Kata",
    desc: "A fitball órámon vidám, dinamikus óra keretében fogunk hasunkat, popsinkat feszesítő és az ülőmunkában elfáradt hátizmokat, vállövi izmokat átmozgató gyakorlatokkal haladni a flow felé. Bátran bevállalhatják azok is, akik gerincbántalmakkal, csontritkulással, ízületi problémákkal, túlsúllyal küzdenek köszönhetően a fitball kímélő-gyógyító hatásának. Mindenkit szeretettel várok!",
  },
  {
    name: "Funkcionális köredzés",
    instructor: "Ildikó",
    desc: "A funkcionális köredzésről röviden azt kell tudni, hogy minden edzés alkalmával olyan gyakorlatokat végzünk, amik támogatják testünket abban, hogy funkciójának megfelelő tudjuk használni, mindezt állomásokra bontva. Az edzés célja, hogy megerősítsük a törzs izomzatot, stabil lábakon álljunk és minden gond nélkül le tudjunk venni az edényeket a felső polcról, akár 20 év múlva is. Az edzés alatti jókedv pedig garantált :-)",
  },
  {
    name: "Move",
    instructor: "Niki",
    desc: "Számomra a mozgás a feltöltődés és a szabadság élménye. A Move óráimon nem a teljesítmény, hanem a jóleső mozdulatok, a könnyedség és az energia kerülnek előtérbe. Hiszem, hogy a mozgás nem fáraszt, hanem épp ellenkezőleg – életre kelt, és segít, hogy frissebben, lazábban zárd a napot.",
  },
  {
    name: "Talaj pilates",
    instructor: "Lilla",
    desc: "Mindenkit szeretettel várok Pilates óráimra, függetlenül attól, hogy most ismerkedik a mozgásformával vagy már tapasztaltabb. Célom, hogy az órák egyszerre legyenek hatékonyak és jólesők: erősítsenek, fejlesszék a testtudatot, és segítsenek kiszakadni a mindennapokból.",
  },
  {
    name: "Stresszoldó jóga",
    instructor: "Vanda",
    desc: "A stresszoldó jóga óráim alapját a hatha és női jóga elemek adják, de egy nagyon lágy, könnyed formában kivitelezve. Amivel találkozhatsz a gyakorlás alatt, azok az idegrendszert szabályozó, testhez visszakapcsoló, jelenbe megérkezős gyakorlatok. Emellett pedig szépen át is mozgatjuk a testet. Érdemes eljönnöd erre az óra típusra ha kiszakadnál a stresszes mindennapokból, sokat vagy feszült, túl sokat rohansz és nehéz lelassulni, kapcsolódnál magaddal és/vagy a nőiességeddel, értékes én időt töltenél magaddal vagy akkor is, ha szorongsz, esetleg szoktak pánikrohamjaid lenni. A gyakorlás könnyen követhető és kivitelezhető, kezdőknek és haladóknak is ajánlott.",
  },
];

/* Árlista – érvényes 2026. augusztus 1-től visszavonásig. */
export const priceGroups = [
  {
    name: "Jóga és pilates órák",
    items: [
      { name: "Alkalom", price: "3 000 Ft", note: "csoportos óra" },
      { name: "Bérlet · 5 alkalom", price: "14 000 Ft", note: "a vásárlástól számított 6 hétig érvényes" },
      { name: "Bérlet · 10 alkalom", price: "26 000 Ft", note: "a vásárlástól számított 12 hétig érvényes" },
      { name: "Havi korlátlan bérlet", price: "38 400 Ft", note: "a vásárlástól számított 1 hónapig érvényes" },
      { name: "Egyéni jóga óra", price: "9 000 Ft", note: "60 perc" },
      { name: "Diákkedvezmény", price: "20%", note: "" },
    ],
  },
  {
    name: "Reformer pilates",
    items: [
      { name: "Alkalom", price: "6 000 Ft", note: "csoportos óra" },
      { name: "Páros reformer óra", price: "11 600 Ft", note: "2 fő részére" },
      { name: "Bérlet · 5 alkalom", price: "27 500 Ft", note: "csoportos" },
      { name: "Bérlet · 10 alkalom", price: "50 000 Ft", note: "csoportos" },
      { name: "Diákkedvezmény", price: "20%", note: "" },
    ],
  },
];

export const priceNote = "Áraink 2026. augusztus 1-jétől visszavonásig érvényesek.";

/* A stúdió terei. A képek a kész stúdió fotóira cserélendők. */
export const studioSpaces = [
  {
    name: "LÓTUSZ · Nagy terem",
    desc: "60 m²-es tágas, világos tér 20 fő befogadására. Zsályazöld és bézs prémium jógamatracokkal, len párnákkal, jóga- és pilates eszközökkel, tükrökkel.",
    image: "/studio/jogaterem.jpg",
  },
  {
    name: "BLOOM · Kis terem",
    desc: "15 m²-es hangulatos reformer terem 2 db ALIGN géppel és kiegészítőkkel, tükrökkel – a precíz, egyénre szabott reformer pilates gyakorláshoz.",
    image: "/studio/reformer.jpg",
  },
  {
    name: "Recepció",
    desc: "Érkezz meg és lassulj le, egy tea vagy limonádé mellett.",
    image: "/studio/recepcio.jpg",
  },
];

export const studioValues = [
  { name: "Nyugalom", desc: "Meleg bézs falak, tompított fények, illatok és csend – minden részlet a lelassulást szolgálja." },
  { name: "Egyensúly", desc: "Természetes anyagok: tölgy, len, kerámia. Letisztult terek, amelyekben a gyakorlásé a főszerep." },
  { name: "Energia", desc: "A mozgás öröme – a dinamikus óráktól a mély ellazulásig minden megfér egy fedél alatt." },
];

/* Stúdió házirend – a /hazirend oldalon jelenik meg. */
export const houseRules = [
  "Érkezz az óra kezdete előtt legalább 10 perccel, hogy kényelmesen át tudj öltözni és le tudj lassulni.",
  "A stúdió az 1. emeleten található, amelyet a lépcsőházból a nyitott folyosón keresztül érsz el.",
  "A stúdió tereiben kinti cipő használata tilos – kérjük, az előtérben vedd le a cipőt.",
  "A jógaórákat mindig időben kezdjük, ezért késés esetén nem tudjuk garantálni a részvételt: a gyakorlás megkezdése után a csatlakozás megzavarná az időben érkezőket. Az óra elejei ráhangolódást követően azonban csendben még lehet csatlakozni.",
  "A stúdióban fontos a csend: kérünk, az órákat ne zavard meg az előtérben hangos beszélgetéssel vagy zajkeltéssel, és halkítsd le a mobilodat.",
  "A stúdió minden eszközt biztosít a gyakorláshoz (jógamatrac, tégla, heveder, pléd), de ha számodra kényelmesebb, hozhatod a saját matracodat is.",
  "Az óra után a használt stúdiómatrac letakarítása a résztvevő feladata. A matracot tisztítás után szorosan feltekerve tedd vissza a helyére, a többi eszközzel együtt.",
  "Zárható szekrényeket biztosítunk az értékeid megőrzéséhez – a kulcs mindig a nyitott szekrény zárjában marad. Ha véletlenül nálad maradna egy kulcs, haladéktalanul jelezd az oktatódnak.",
  "Ha betegnek érzed magad, köhögsz vagy folyik az orrod, ne gyere órára, amíg meg nem gyógyulsz.",
  "Lehetőleg ne teli hassal érkezz – nehezebb ételt az óra előtt már ne fogyassz.",
  "A szolgáltató a résztvevőkről – kizárólag azok hozzájárulása esetén – fénykép- és mozgóképfelvételt készíthet, amelyet a későbbiekben marketing célra használhat fel.",
];
