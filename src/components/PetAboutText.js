import PropTypes from "prop-types";
export default function PetAboutText({ title }) {
    return (
        <div className="bg-white p-5 font-sans">
            <h1 className="text-blue-800 text-5xl font-bold leading-tight">
                {title}
            </h1>
        </div>
    );
}

PetAboutText.propTypes = {
    title: PropTypes.string.isRequired,
};