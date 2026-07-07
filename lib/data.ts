export const site = {
  name: "MEDITA Jóga",
  tagline: "Jóga mindenkié – találd meg benne a saját utad",
  openingDate: "2026. július",
  openingNote: "Nyitás: 2026 júliusában",
  email: "hello@meditayoga.hu",
  phone: "+36 30 123 4567",
  address: "Cím hamarosan",
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
    slug: "gerda",
    name: "Gerda",
    role: "jógaoktató",
    classes: ["Jógakerék", "Üdvözletek", "Gerincjóga"],
    bio: "A jógakerék és a gerincjóga szerelmese. Óráin a gerinc egészsége és az áramló mozgás kerül középpontba.",
    story: [
      "Gerda óráin a gerinc egészsége és az áramló, tudatos mozgás kerül középpontba. A jógakerék segítségével a hátrahajlítások és a mellkasnyitás biztonságosan, fokozatosan válnak elérhetővé.",
      "Az üdvözlet-alapú órák dinamikus, mégis meditatív gyakorlást kínálnak, amely erősít, nyújt és lecsendesíti az elmét.",
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
];

export const classTypes = [
  { name: "Stresszoldó jóga", desc: "Lassú, nyugtató gyakorlás a mindennapi feszültség oldására." },
  { name: "Yin jóga / Női jóga", desc: "Hosszan kitartott pózok, mély ellazulás, a női test ciklusaira hangolva." },
  { name: "Hatha jóga", desc: "Klasszikus ászanák, légzésfigyelés és relaxáció – minden szintre." },
  { name: "Gerincjóga", desc: "A gerinc egészségét támogató, átmozgató gyakorlás." },
  { name: "Reformer pilates", desc: "Gépi pilates a mélyizmok precíz erősítésére." },
  { name: "Talaj pilates", desc: "Matracos pilates a stabil törzsért és a szép testtartásért." },
  { name: "Jógakerék", desc: "Hátrahajlítások és mellkasnyitás biztonságosan, jógakerékkel." },
  { name: "Női meditáció", desc: "Befelé figyelés, elcsendesedés, női kör – vezetett meditációval." },
  { name: "MOVE / mobilizáció", desc: "Ízületi mobilizáció és testtudatos mozgás." },
  { name: "Erősítő és zenés órák", desc: "Aerobic, saját testsúlyos és eszközös erősítő torna." },
];

/* A stúdió terei – a képek látványtervek, a kész stúdió
   fotóira cserélendők a nyitás után. */
export const studioSpaces = [
  {
    name: "Jógaterem",
    desc: "Tágas, világos tér zsályazöld matracokkal, len párnákkal és rejtett polcvilágítással – a csoportos órák otthona.",
    image: "/studio/jogaterem.jpg",
  },
  {
    name: "Reformer terem",
    desc: "Természetes fa reformer gépek, ívelt tükrök meleg fénnyel – precíz, egyénre szabott pilates gyakorláshoz.",
    image: "/studio/reformer.jpg",
  },
  {
    name: "Recepció és közösségi tér",
    desc: "Bordázott tölgy pult, kerámia, gyertyafény – érkezz meg, lassulj le, igyál egy teát óra előtt vagy után.",
    image: "/studio/recepcio.jpg",
  },
];

export const studioValues = [
  { name: "Nyugalom", desc: "Meleg bézs falak, tompított fények, illatok és csend – minden részlet a lelassulást szolgálja." },
  { name: "Egyensúly", desc: "Természetes anyagok: tölgy, len, kerámia. Letisztult terek, amelyekben a gyakorlásé a főszerep." },
  { name: "Energia", desc: "A mozgás öröme – a dinamikus óráktól a mély ellazulásig minden megfér egy fedél alatt." },
];
