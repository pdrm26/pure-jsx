import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, lazy } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import { useQuery } from "react-query";
import Loader from "./Loader";
import ErrorBoundary from "./ErrorBoundary";

const Modal = lazy(() => import("./Modal"));

function Details() {
  const { id } = useParams();

  if (!id)
    throw new Error(
      "Why did you not give me an id?!!!! I wanted an id. I have no id",
    );

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery(["details", id], fetchPet);
  const [, setAdoptedPet] = useContext(AdoptedPetContext);

  if (isLoading) {
    return <Loader />;
  }

  const pet = data?.pets[0];

  if (!pet) throw new Error("no pet lol");

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}

export default function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}
