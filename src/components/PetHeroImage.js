import PropTypes from 'prop-types';

// TODO: in storybook, create a story for this component
// update the value for src in the story
// The image is located in public/img/hero-dog.png
export default function PetHeroImage(props) {
  const { src } = props;
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-b from-rose-400 to-rose-600 rounded-2xl z-0"></div>
      <img
        src={src}
        alt="dog hero image"
        className="relative z-10 w-full object-cover"
      />
    </div>
  );
}

PetHeroImage.propTypes = {
  src: PropTypes.string.isRequired,
};
