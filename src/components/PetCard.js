import PropTypes from "prop-types";
export default function PetCard(props) {
    const { emoji, info } = props;
    return (
        <div className="bg-rose-50 border-2 border-rose-200 text-black p-5 rounded-3xl flex flex-col justify-center gap-5">
            <h2 className="text-4xl p-2 sm:text-3xl">{emoji}</h2>
            <p className="text-xl p-2 sm:text-lg">{info}</p>
        </div>
    );
}

PetCard.propTypes = {
    emoji: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
};