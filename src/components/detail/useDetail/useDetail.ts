import { useState } from "react";
import { Feature, dataMap } from "../../../data";

export type FeaturesResult = [
  (id: string) => void,
  {
    activeFeature: Feature | null;
  }
];

export const useDetail = (): FeaturesResult => {
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);

  const findFeature = (id: string): void => {
    if (dataMap[id]) {
      setActiveFeature(dataMap[id]);
    }
  };

  return [findFeature, { activeFeature }];
};
