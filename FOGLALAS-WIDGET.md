# Timeify foglalási widget — lokális tesztelés

A `/foglalas` oldal a Timeify óralista widgetjét ágyazza be iframe-ben
(`components/BookingWidget.tsx`). A Timeify egy KÜLÖN projekt
(`D:\id\service-reservation`), tehát két dev szervert kell futtatni.

## Beállítás

`lib/data.ts` → `site.booking`, felülírható env-ből (`.env.local`):

| változó | lokális érték | mit jelent |
|---|---|---|
| `NEXT_PUBLIC_TIMEIFY_ORIGIN` | `http://localhost:3000` | a **Timeify** app címe, nem ezé az oldalé |
| `NEXT_PUBLIC_TIMEIFY_SLUG` | `zen-yoga` | a stúdió azonosítója (Timeify Studio → Integráció) |

Amíg a slug nincs beállítva, a `/foglalas` a „hamarosan" nézetet mutatja
(`app/foglalas/page.tsx`).

## Indítás

```bash
# 1) Timeify (másik repo) — a 3000-es porton
cd D:\id\service-reservation
npm run dev

# 2) Ez az oldal — MÁSIK porton, különben ütközik
cd D:\webdev\edit
npm run dev -- -p 3001
```

Nyisd meg: <http://localhost:3001/foglalas>

Ha a Timeify adatbázisa üres, előbb kell egy admin user és minta-adat:

```bash
cd D:\id\service-reservation
npx tsx --env-file=.env src/scripts/createAdminUser.ts <email> <jelszo>
npx tsx --env-file=.env src/scripts/seedBookingV2.ts
```

A seed két tenantet hoz létre: `zen-yoga` (csoportos órák — ehhez való ez a
widget) és `luna-nails` (időpontfoglalás — ahhoz még nincs widget).

## Mit érdemes végigpróbálni

1. Betölt-e az óralista, és **együtt nő-e** az iframe magassága a tartalommal.
2. Görgess le, majd nyiss foglalás modált: a modál a **látható sávba** kerül-e,
   a háttér elsötétül-e az egész oldalon, és a gazdaoldal nem görög-e alatta.
3. **ESC** és a sötétítésre kattintás bezárja-e a modált.
4. Foglalás végigvitele: a visszaigazolás az iframe-en belül jelenik meg,
   nem ugrik ki a Timeify oldalra.
5. Oktató-szűrő, betelt/lejárt órák szürkítése.

## Ha üres marad az iframe

- **CSP / frame-ancestors**: a Timeify Studio → Integráció oldalán a „Hol jelenhet
  meg a widget?" mező korlátozza a beágyazást. Ha ki van töltve, `localhost:3001`-et
  is fel kell venni (a http és https variánst is elfogadja). Üresen hagyva bárhol
  beágyazható.
- **Rossz origin**: a `NEXT_PUBLIC_TIMEIFY_ORIGIN` a Timeify portja legyen (3000),
  ne ezé az oldalé.
- **Nincs órarend**: ha a tenantnak nincs jövőbeli órája, a lista üres — futtasd a seedet.
- Böngésző konzol: a widget minden hibát `[Timeify]` előtaggal logol.

## Architektúra: KÉT iframe

A `BookingWidget` két iframe-et rendel:

| | lista | modál |
|---|---|---|
| URL | `/embed/<slug>?days=…` | `/embed/<slug>?modal=1` |
| hol | az oldal folyamában | `position: fixed; inset: 0`, rejtve |
| magasság | a tartalomhoz nő (postMessage) | mindig 100% |

**Miért két iframe:** a lista magassága a tartalmat követi, hogy a mi oldalunk
görgethesse — így viszont több ezer px magas. Egy ilyen iframe-en belül a
`position: fixed` a magas dobozra vonatkozik, nem a képernyőre, tehát a modál a
doboz közepére, a látótéren kívülre kerülne. Korábbi kerülőutak (a látható sáv
üzengetése, majd az iframe teljes képernyős átvétele) mind layout-ugrást
okoztak. A modál-iframe viszont maga a viewport → sima flex-centrálás.

A modál-iframe **üresjáratban, előre betöltődik**, tehát kattintásra azonnal ott
van. A lista-iframe-hez modál nyitásakor hozzá sem nyúlunk: nem mozdul, nem
változik a szélessége, nem ugrik a görgetése.

## Protokoll

```
lista → host : timeify:embed:height      { slug, height }
               timeify:embed:openBooking { slug, classInstanceId }
host  → lista: timeify:embed:bookingTaken{ slug }    (= "átveszem a modált")
               timeify:embed:refresh     { slug }
modál → host : timeify:modal:ready       { slug }
               timeify:modal:close       { slug }
               timeify:modal:booked      { slug }
host  → modál: timeify:modal:open        { slug, classInstanceId }
```

- **`ready`**: a modál akkor jelez, amikor felcsatolta a message figyelőjét — a
  host addig sorba állítja a kattintást, különben az `open` elveszne.
- **`bookingTaken`**: ha ez 400 ms-en belül nem érkezik meg, a lista maga nyit
  modált (fallback régi, cache-elt gazdaoldali loaderhez).
- **`booked`**: a lista frissül a háttérben, de a modál nyitva marad — a
  visszaigazolást és a foglalási kódot még el kell olvasni.

Az iframe URL-je `?host=<a mi originünk>` paramétert kap — ebből tudja a widget,
kinek küldhet üzenetet és kitől fogadhat el. A magyar **prefix nélkül** él
(`/embed/<slug>`), a `/hu/embed/...` fölösleges 308 átirányítás lenne.

Az iframe URL-je `?host=<a mi originünk>` paramétert kap — ebből tudja a widget,
kinek küldhet üzenetet és kitől fogadhat el. A magyar **prefix nélkül** él
(`/embed/<slug>`), a `/hu/embed/...` fölösleges 308 átirányítás lenne.
