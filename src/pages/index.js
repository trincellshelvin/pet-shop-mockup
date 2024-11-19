import PetHeaderLogo from "../components/PetHeaderLogo";
import PetHeaderMenu from "../components/PetHeaderMenu";
import PetCounter from "../components/PetCounter";
import PetHeroImage from "../components/PetHeroImage";
import PetCallToAction from "../components/PetCallToAction";
import PetHeroText from "../components/PetHeroText";

export default function Home() {
  return (
    <div className="bg-rose-500">
      <div class="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <PetHeaderLogo
            logoSrc="/img/paw-face-sm.png"
            brandName="FindAFriend"
          />
          <PetHeaderMenu
            menuItems={["About", "Contacts", "Download", "Pricing", "Account"]}
          />
        </div>
        <main className="mt-10 grid grid-cols-2 auto-rows-min gap-4">
          <section className="w-full">
            <PetCounter
              images={[
                "/img/dog-mini-1.png",
                "/img/cat-mini-1.png",
                "/img/dog-mini-2.png",
                "/img/cat-mini-2.png",
              ]}
              numberOfPets={324}
            />
          </section>
          <section className="w-full row-span-2 flex flex-col justify-between gap-4">
            <PetHeroImage src="/img/hero-dog.png" />
            <PetCallToAction ctaText="Access Now" />
          </section>
          <section className="w-full">
            <PetHeroText
              title="Happiness in the form of a pet"
              description="The ideal pet is ready for your lifestyle!"
            />
          </section>
        </main>
      </div>
    </div>
  );
}