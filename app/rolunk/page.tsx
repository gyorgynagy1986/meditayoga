import type { Metadata } from "next";
import Link from "next/link";
import InstructorPortrait from "@/components/InstructorPortrait";
import { instructors, site } from "@/lib/data";

const edit = instructors.find((i) => i.slug === "edit");

export const metadata: Metadata = {
  title: "Rólunk",
  description:
    "Bozóné Simon Edit, a MEDITA Jóga alapítójának története – út a mozgástól a saját jógastúdióig.",
};

export default function RolunkPage() {
  return (
    <>
      <section className="bg-sand-100 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-mint-700">Rólunk</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-ink-900 sm:text-6xl">
            Egy belső út, amely mindenki számára másként bontakozik ki
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
          <div>
            <div className="sticky top-28">
              <InstructorPortrait
                name="Edit"
                photo={edit?.photo}
                className="aspect-[3/4] w-full max-w-sm"
                sizes="(min-width: 768px) 384px, 100vw"
                priority
              />
              <p className="mt-5 font-serif text-2xl text-ink-900">Bozóné Simon Edit</p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-taupe-400">
                alapító · jógaoktató
              </p>
            </div>
          </div>

          <div className="space-y-6 leading-8 text-ink-700">
            <p>
              Bozóné Simon Edit vagyok. A mozgás és a sport mindig is része volt
              az életemnek. Kipróbáltam több mozgásformát is – futás, aerobic,
              úszás, pilates, tenisz –, melyek mind hozzájárultak ahhoz, hogy a
              testmozgás természetes igénnyé váljon számomra.
            </p>
            <p>
              A mozgás számomra nemcsak fizikai aktivitást jelent, hanem
              egyfajta belső kapcsolódást is. Ebben a zene és a tánc különösen
              fontos szerepet tölt be az életemben. A mozdulat és a ritmus
              találkozása számomra az áramlás élményét adja – azt az állapotot,
              amikor igazán ki tudok kapcsolni, jelen tudok lenni, és megszűnik
              a külvilág zaja.
            </p>
            <p>
              A jógával körülbelül tíz évvel ezelőtt találkoztam először.
              Kezdetben nem gondoltam, hogy ez az én utam lesz – nem tartottam
              magam különösebben hajlékonynak, sőt inkább kötött, merev
              izomzattal rendelkeztem. Ennek ellenére azonnal magával ragadott
              az ászanák szépsége, a gyakorlók testtudatossága, valamint a
              légzésfigyelés, a relaxáció és a meditáció nyugtató, befelé
              fordító világa.
            </p>
            <blockquote className="rounded-2xl bg-mint-100 p-6 font-serif text-2xl leading-9 text-mint-800">
              „A jóga nem a hajlékonyságról vagy a tökéletes kivitelezésről
              szól, hanem egy belső útról, amely mindenki számára másként
              bontakozik ki.”
            </blockquote>
            <p>
              Saját bőrömön éltem meg, hogy akkor is lehet fejlődni és mély
              élményeket szerezni, ha valaki nem „ideális” alkatként kezdi el a
              jógát. Néhány év gyakorlás után elvégeztem egy 200 órás hatha
              jógaoktatói alapképzést Budapesten, majd további szakmai
              képzéseken vettem részt: 100 órás női jógaoktatói képzésen,
              astanga jógaoktatói képzésen, reformer pilates oktatói képzésen,
              valamint női meditációvezető képzésen.
            </p>
            <p>
              A jóga az életem meghatározó részévé vált, és megszületett bennem
              az elhatározás, hogy létrehozok egy saját jógastúdiót – egy jógás
              közösségi helyet. Egy olyan teret, ahol mások is
              megtapasztalhatják a jóga jótékony hatásait, függetlenül attól,
              hogy milyen szinten állnak, vagy milyen kihívásokkal érkeznek.
            </p>
            <p className="font-semibold text-ink-900">
              Hiszem, hogy a jóga mindenkié, és küldetésünk mindenki számára
              elérhetővé tenni, hogy mindenki megtalálhassa benne a saját útját
              – ahogyan én is megtaláltam a sajátomat.
            </p>
            <div className="pt-4">
              <Link
                href={site.bookingUrl}
                className="inline-block rounded-full bg-mint-700 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-mint-800"
              >
                Gyakorolj velünk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
