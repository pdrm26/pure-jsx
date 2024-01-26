import { QueryStatus, useQuery } from "react-query";
import fetchBreedList from "./fetchBreedList";
import { Animal } from "./APIResponsesTypes";

export default function useBreedList(animal: Animal) {
  const results = useQuery(["breedlist", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus,
  ];
}
