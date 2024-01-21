import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import Loader from "./Loader";

const Details = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(["details", id], fetchPet);

  if (isLoading) {
    return <Loader />;
  }

  const pet = data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
