import PetHeaderLogo from '../components/PetHeaderLogo';
import PetHeaderMenu from '../components/PetHeaderMenu';
import PetCounter from '../components/PetCounter';
import PetHeroImage from '../components/PetHeroImage';
import PetCallToAction from '../components/PetCallToAction';

export default function Home() {

  return (
    <div className="bg-rose-500">
      <div class="container mx-auto px-4">
        <div className="flex justify-around py-3">
          <PetHeaderLogo logoSrc="/img/paw-face-sm.png" brandName="FindAFriend" />
          <PetHeaderMenu menuItems={["Home", "Sobre o app", "Animais disponíveis", "Sobre a FindAFriend", "Contact"]} />
        </div>
        <main className="mt-10 flex">
          <section className="w-1/2">
            <PetCounter images={["/img/dog-mini-1.png", "/img/cat-mini-1.png", "/img/dog-mini-2.png", "/img/cat-mini-2.png"]} count={324} />
          </section>
          <section className="w-1/2 flex flex-col">
            <PetHeroImage src="/img/hero-dog.png" />
            <PetCallToAction ctaText="Acesse agora"/>
          </section>

        </main>
        <h1 className="text-2xl mt-8">
          TODO...
        </h1>
        <p>
          Add all your finished components to create a website that looks like the top (pink) part of this image. Work on the components. Create stories for them in storybook. Test them. Make sure they are working as expected. Then, add them to this page.
        </p>
        <p>
          When complete, work on the bottom (white) part of the image. Create a new page for it at `about.js`. Add the components you need to create the page. Test them. Make sure they are working as expected. Then, add them to the new page. (Be sure to use PropTypes so storybook can help you test your components.)
        </p>
        <div>
          <img src="/mockups/home.png" alt="Home Page Mockup" />
        </div>

      </div>
    </div>
  );
}