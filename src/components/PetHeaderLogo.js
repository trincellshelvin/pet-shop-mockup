import PropTypes from 'prop-types';

// This component is **finished** and ready to be used.
// Try it in storybook and **create a story** for it with a different logo or brand name.
// TODO: Create a story for this component in the src/stories/PetHeaderLogo.stories.js file
export default function PetHeaderLogo(props) {
  // Get properties of "props" object
  const {logoSrc, brandName} = props;
  // The above line is the syntactic sugar for the following:
  // const logoSrc = props.logoSrc;
  // const brandName = props.brandName;

  return (
    <div className="flex items-center bg-rose-500 w-full">
      <img src={logoSrc} alt="Pet Logo" className="w-8 h-8" />
      <h1 className="text-xl text-rose-50 ml-2">{brandName}</h1>
    </div>
  );
}

PetHeaderLogo.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
};