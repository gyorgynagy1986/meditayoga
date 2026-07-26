export const site = {
  name: "MEDITA Jóga",
  tagline: "Jóga mindenkié – találd meg benne a saját utad",
  openingDate: "2026. augusztus",
  openingNote: "Nyitás: 2026 augusztusában",
  email: "info@meditajoga.hu",
  phone: "+36 30 647 9502",
  address: "6640 Csongrád, Fő utca 6–10., 1. emelet 42. ajtó",
  // Ide kerül majd a foglalási rendszer linkje (pl. MotiBro / Salonic)
  bookingUrl: "/foglalas",
};

export type Instructor = {
  slug: string;
  name: string;
  role: string;
  classes: string[];
  bio: string;
  /** Részletes bemutatkozás – bekezdésenként. A legtöbb szöveg még
   *  helykitöltő, az oktatók saját szövegeire cserélendő! */
  story: string[];
};

/* ABC-sorrendben. Gerda (jógakerék, üdvözletek, gerincjóga) babát vár,
   egyelőre nem tart órákat – ha visszatér, vegyük fel újra. */
export const instructors: Instructor[] = [
  {
    slug: "edit",
    name: "Edit",
    role: "alapító · jógaoktató",
    classes: ["Stresszoldó jóga", "Yin jóga / Női jóga", "Reformer pilates", "Női meditáció"],
    bio: "A MEDITA Jóga alapítója. Hatha, astanga és női jógaoktató, reformer pilates oktató, női meditációvezető.",
    story: [
      "Bozóné Simon Edit vagyok, a MEDITA Jóga alapítója. A mozgás és a sport mindig is része volt az életemnek – a futástól az aerobicon és úszáson át a pilatesig és teniszig több mozgásformát kipróbáltam, míg a testmozgás természetes igénnyé vált számomra.",
      "A jógával körülbelül tíz évvel ezelőtt találkoztam először. Nem tartottam magam hajlékonynak – mégis azonnal magával ragadott az ászanák szépsége, a légzésfigyelés, a relaxáció és a meditáció befelé fordító világa. Megtapasztaltam, hogy a jóga nem a hajlékonyságról szól, hanem egy belső útról, amely mindenki számára másként bontakozik ki.",
      "Elvégeztem egy 200 órás hatha jógaoktatói alapképzést Budapesten, majd 100 órás női jógaoktatói, astanga jógaoktatói, reformer pilates oktatói és női meditációvezető képzésen vettem részt.",
      "Hiszem, hogy a jóga mindenkié. A MEDITA Jógát azért hoztam létre, hogy legyen egy tér, ahol mindenki megtapasztalhatja a jóga jótékony hatásait – szinttől és előképzettségtől függetlenül.",
    ],
  },
  {
    slug: "ildiko",
    name: "Ildikó",
    role: "mozgásoktató",
    classes: ["Saját testsúlyos, eszközös erősítő torna"],
    bio: "Erősítő óráin saját testsúlyos és eszközös gyakorlatokkal építheted a stabil, erős testet.",
    story: [
      "Ildikó erősítő óráin saját testsúlyos és eszközös gyakorlatokkal építheted a stabil, erős, egészséges testet.",
      "A részletes bemutatkozó szöveg hamarosan érkezik.",
    ],
  },
  {
    slug: "kata",
    name: "Kata",
    role: "mozgásoktató",
    classes: ["Mozgásos torna / aerobic"],
    bio: "Energikus, zenés óráin a mozgás öröme és az állóképesség fejlesztése a lényeg.",
    story: [
      "Kata energikus, zenés óráin a mozgás öröme és az állóképesség fejlesztése a lényeg – jó hangulatban, közösségben.",
      "A részletes bemutatkozó szöveg hamarosan érkezik.",
    ],
  },
  {
    slug: "lilla",
    name: "Lilla",
    role: "pilates oktató",
    classes: ["Talaj pilates"],
    bio: "Talaj pilates óráin a mélyizmok erősítése, a testtartás javítása és a kontrollált mozgás áll a fókuszban.",
    story: [
      "Lilla talaj pilates óráin a mélyizmok erősítése, a testtartás javítása és a precíz, kontrollált mozgás áll a fókuszban.",
      "A részletes bemutatkozó szöveg hamarosan érkezik.",
    ],
  },
  {
    slug: "niki",
    name: "Niki",
    role: "mozgásoktató",
    classes: ["MOVE / mobilizáció"],
    bio: "Mobilizációs óráin az ízületek egészséges mozgástartományának visszanyerése és a testtudatos mozgás a cél.",
    story: [
      "Niki MOVE óráin az ízületek egészséges mozgástartományának visszanyerése és a testtudatos, kontrollált mozgás a cél – kortól és edzettségtől függetlenül.",
      "A részletes bemutatkozó szöveg hamarosan érkezik.",
    ],
  },
  {
    slug: "vanda",
    name: "Vanda",
    role: "jógaoktató",
    classes: ["Hatha jóga"],
    bio: "Hatha jóga óráin a klasszikus ászanagyakorlás, a légzés és a relaxáció harmóniája vár.",
    story: [
      "Vanda hatha jóga óráin a klasszikus ászanagyakorlás, a tudatos légzés és a relaxáció harmóniája vár – minden szintre.",
      "A részletes bemutatkozó szöveg hamarosan érkezik.",
    ],
  },
];

/* Az óratípusok pontosítása folyamatban – az egyeztetett órarend
   alapján frissítendő. */
export const classTypes = [
  { name: "Stresszoldó jóga", desc: "Lassú, nyugtató gyakorlás a mindennapi feszültség oldására." },
  { name: "Yin jóga / Női jóga", desc: "Hosszan kitartott pózok, mély ellazulás, a női test ciklusaira hangolva." },
  { name: "Hatha jóga", desc: "Klasszikus ászanák, légzésfigyelés és relaxáció – minden szintre." },
  { name: "Reformer pilates", desc: "Gépi pilates a mélyizmok precíz erősítésére." },
  { name: "Talaj pilates", desc: "Matracos pilates a stabil törzsért és a szép testtartásért." },
  { name: "Női meditáció", desc: "Befelé figyelés, elcsendesedés, női kör – vezetett meditációval." },
  { name: "MOVE / mobilizáció", desc: "Ízületi mobilizáció és testtudatos mozgás." },
  { name: "Erősítő és zenés órák", desc: "Aerobic, saját testsúlyos és eszközös erősítő torna." },
];

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
