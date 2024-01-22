import { QueryStatus, useQuery } from "react-query";
import fetchBreedList from "./fetchBreedList";
import { Animal, BreedListAPIResponse } from "./APIResponsesTypes";

export default function useBreedList(animal: Animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus,
  ];
}