import PetCounter from './PetCounter';

const meta = {
  component: PetCounter,
};

export default meta;

export const Default = {
  args: {
    images: [
      "/img/dog-mini-1.png",
      "/img/cat-mini-1.png",
      "/img/dog-mini-2.png",
      "/img/cat-mini-2.png"
    ],
    numberOfPets: 1001
  }
};

export const Pets300 = {
  args: {
    images: [
      "/img/dog-mini-1.png",
      "/img/cat-mini-1.png",
      "/img/dog-mini-2.png",
      "/img/cat-mini-2.png"
    ],

    numberOfPets: 300
  }
};