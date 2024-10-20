import PropTypes from 'prop-types';

// TODO: update this component to match the design in public/mockups/amigo-counter.png
export default function PetCounter(props) {
  const { images, count } = props;
  return (
    <div className="bg-rose-500">
      <div className="todo-update-this-class">
        {images.map((image, index) => (
          <img 
              key={index}
              src={image}
              alt={`Pet ${index + 1}`}
              className="-ml-3" />
        ))}
      </div>
      <span className="italic">TODO: UPDATE THIS MESSAGE</span>
    </div>
  );
};

PetCounter.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOfPets: PropTypes.number.isRequired,
};
