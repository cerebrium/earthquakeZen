import React, { useEffect, useState } from "react";
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

  useEffect(() => {
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
    localFeatures.sort((a, b): 0 | 1 | -1 => {
      if (a.properties[key] < b.properties[key]) {
        return -1;
      }
      if (a.properties[key] > b.properties[key]) {
        return 1;
      }
      return 0;
    });
    setFeatures(localFeatures);

    console.log(features);
  };

  useEffect(() => {
    console.log("features changing");
  }, [features]);

  return [sortFeatures, { features }];
};
