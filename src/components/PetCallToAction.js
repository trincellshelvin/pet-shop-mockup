import PropTypes from "prop-types";

export default function PetCallToAction(props) {
  const { ctaText } = props;
  return (
    <div className="bg-rose-600 mb-4 p-3 flex justify-center items-center rounded-xl">
      <button className="bg-white p-3 m-2 w-4/5 text-blue-950 font-semibold rounded-lg">
        {ctaText}
      </button>
    </div>
  );
}

PetCallToAction.propTypes = {
  ctaText: PropTypes.string.isRequired,
};