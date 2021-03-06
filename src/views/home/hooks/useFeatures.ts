import { useEffect, useState } from "react";
import { data, Feature } from "../../../data";

export type FeaturesResult = [
  (key: "mag" | "title" | "time") => void,
  {
    features: Feature[];
  }
];

export const useFeatures = (): FeaturesResult => {
  const [features, setFeatures] = useState<Array<Feature>>([]);
  const [previousSort, setPreviousSort] = useState<string>("");

  useEffect((): void => {
    setFeatures(data.features as Feature[]);
  }, []);

  const sortFeatures = (key: "mag" | "title" | "time"): void => {
    let localFeatures = [...features];
    if (previousSort === key) {
      setFeatures(localFeatures.reverse());
      return;
    } else {
      setPreviousSort(key);
    }

    if (key === "title") {
      /*

        In sorting via title, the decision was made
        to sort by the state, then if states are equal,
        sort by the ciy. 

        There is an edge case where CA !== California

        Case is handled by taking first two letters of state
        and using these as a key for sorting. Removed white space
        and made lowercase.

        result CA -> ca, California -> ca

      */
      setFeatures((prev): Feature[] =>
        prev.sort((a, b): 0 | 1 | -1 => {
          let stateA = a.properties[key].split(",");
          let stateB = b.properties[key].split(",");
          if (
            stateA[1].trim().substring(0, 2).toLowerCase() <
            stateB[1].trim().substring(0, 2).toLowerCase()
          ) {
            return -1;
          }
          if (
            stateA[1].trim().substring(0, 2).toLowerCase() >
            stateB[1].trim().substring(0, 2).toLowerCase()
          ) {
            return 1;
          }
          let cityA = stateA[0].split("of")[1].trim().toLowerCase();
          let cityB = stateB[0].split("of")[1].trim().toLowerCase();
          if (cityA < cityB) {
            return -1;
          }
          if (cityA > cityB) {
            return 1;
          }
          return 0;
        })
      );
    } else {
      setFeatures((prev): Feature[] =>
        prev.sort((a, b): 0 | 1 | -1 => {
          if (a.properties[key] < b.properties[key]) {
            return -1;
          }
          if (a.properties[key] > b.properties[key]) {
            return 1;
          }
          return 0;
        })
      );
    }
  };

  return [sortFeatures, { features }];
};
