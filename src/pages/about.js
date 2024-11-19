// TODO: create a new page component based on the bottom half of the design in public/mockups/home.png

import PetAboutText from "@/components/PetAboutText";
import PetCard from "@/components/PetCard";
import SecondaryImage from "@/components/SecondayImage";

// You fill first need to create three components: SecondaryImage, PetAboutText, and PetCard in the src/components folder.

// You should also create stories for each of these components in the src/components folder using storybook.

// Use these three components to create the About page
// Look in the public/mockups folder for the design
// 1. Create a component called SecondaryImage based on the design in public/mockups/secondary-image.png
// 2. Create a component called PetAboutText based on the design in public/mockups/description-title.png
// 3. Create a component called PetCard based on the design in public/mockups/amigo-card.png
// Optional: include the "Header from the Home page" at the top of the About page

export default function AboutPage() {
    return (
        <div className="bg-white">
            <main className="grid grid-cols-2 auto-rows-min">
                <section className="m-4">
                    <SecondaryImage src="img/pet-app-layers.png" />
                </section>
                <section className="my-4 mx-5">
                    <PetAboutText title="Not an app,  a little box of friends..." />
                    <div className="grid grid-cols-2 gap-5">
                        <PetCard
                            emoji="🐕"
                            info="FindAFriend is a product developed to help you find the ideal pet for your lifestyle!"
                        />
                        <PetCard
                            emoji="🐈"
                            info="NGOs register pets available for adoption, providing details such as size, energy level, independence level, sociability, and gender."
                        />
                        <div className="col-span-2">
                            <PetCard
                                emoji="🦮"
                                info="Filter the pets according to your preferences and lifestyle. Then just contact the NGO to schedule a visit and meet your perfect match in person!"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}