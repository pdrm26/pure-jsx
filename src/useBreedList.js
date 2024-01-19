import { useEffect, useState } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breeds, setBreeds] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!localCache[animal]) {
      requestbreeds();
    } else {
      setBreeds(localCache[animal]);
    }

    const requestbreeds = async () => {
      setStatus("loading");
      setBreeds([]);
      const res = await fetch(`example/${animal}`);
      const json = await res.json();
      setStatus("loaded");
      setBreeds(json.breeds);
      localCache[animal] = json.breeds;
    };
  }, [animal]);

  return [status, breeds];
}
