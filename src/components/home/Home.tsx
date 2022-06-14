import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useFeatures } from "./useFeatures/useFeatures";
import "./Home.css";
import { formatDate } from "../../utils";
import { FeatureComponent } from "./subComoponents";

const Home: React.FC = () => {
  const [sortFeatures, { features }] = useFeatures();

  const handleClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ): void => {
    switch ((e.target as any).innerText) {
      case "Magnitude":
        sortFeatures("mag");
        break;
      case "Time":
        sortFeatures("time");
        break;
      case "Title":
        sortFeatures("title");
        break;
      default:
        break;
    }
  };

  return (
    <section className="home-container">
      <h3>USGS All Earthquakes, Past Hour</h3>
      <section className="table-container">
        <table className="table">
          <thead>
            <tr onClick={(e) => handleClick(e)}>
              <th>Title</th>
              <th>Magnitude</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {features?.map((feature) => {
              return <FeatureComponent feature={feature} />;
            })}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Home;
