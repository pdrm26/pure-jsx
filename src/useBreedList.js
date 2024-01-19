import { useEffect, useState } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setStatus("loading");
      setBreedList([]);
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );
      const json = await res.json();
      setStatus("loaded");
      setBreedList(json.breeds);
      localCache[animal] = json.breeds;
    }
  }, [animal]);

  return [breedList, status];
}
