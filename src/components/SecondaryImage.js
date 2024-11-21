import PropTypes from "prop-types";

export default function SecondaryImage(props) {
    const { src } = props;
    return (
        <div className="rounded-2xl border-2 border-rose-50">
            <img
                src={src}
                alt="about hero image"
                className="rounded-2xl object-cover"
            />
        </div>
    );
}

SecondaryImage.propTypes = {
    src: PropTypes.string.isRequired,
};