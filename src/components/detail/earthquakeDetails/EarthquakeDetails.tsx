import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDataProvider } from "../../../context/EarthquakeContext";
import { formatDate } from "../../../utils";
import "./EarthquakeDetails.css";

export const EarthquakeDetails: React.FC = () => {
  const { id } = useParams();
  const [findElement, { activeFeature }] = useDataProvider();

  useEffect(() => {
    if (id) {
      findElement(id);
    }
  }, [id]);

  const feature = useMemo(() => {
    if (activeFeature) {
      return (
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Title</strong>
              </td>
              <td>{activeFeature.properties.title}</td>
            </tr>
            <tr>
              <td>
                <strong>Magnitude</strong>
              </td>
              <td>{activeFeature.properties.mag}</td>
            </tr>
            <tr>
              <td>
                <strong>Time</strong>
              </td>
              <td>{formatDate(new Date(activeFeature.properties.time))}</td>
            </tr>
            <tr>
              <td>
                <strong>Status</strong>
              </td>
              <td>{activeFeature.properties.status}</td>
            </tr>
            <tr>
              <td>
                <strong>Tsunami</strong>
              </td>
              <td>{activeFeature.properties.tsunami}</td>
            </tr>
            <tr>
              <td>
                <strong>Type</strong>
              </td>
              <td>{activeFeature.properties.type}</td>
            </tr>
          </tbody>
        </table>
      );
    }
  }, [activeFeature]);

  return (
    <div className="detail-body">
      <div className="table-container">
        <h3>{activeFeature ? activeFeature.properties.title : "searching"}</h3>
        {feature}
      </div>
    </div>
  );
};
