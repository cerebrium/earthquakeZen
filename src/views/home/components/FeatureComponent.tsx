import React from "react";
import { Link } from "react-router-dom";
import { Feature } from "../../../data";
import { formatDate } from "../../../utils";

export type FeatureComponentProps = {
  feature: Feature;
};

const FeatureComponent: React.FC<FeatureComponentProps> = ({
  feature,
}: FeatureComponentProps): JSX.Element => {
  let eventDate = new Date(feature.properties.time);
  return (
    <tr>
      <td>
        <Link to={`/detail/${feature.id}`}>{feature.properties.place}</Link>
      </td>
      <td>{feature.properties.mag}</td>
      <td>{formatDate(eventDate)}</td>
    </tr>
  );
};

export default FeatureComponent;
