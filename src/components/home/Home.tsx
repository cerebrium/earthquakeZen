import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useFeatures } from "./useFeatures/useFeatures";
import "./Home.css";
import { formatDate } from "../../utils";

const Home: React.FC = () => {
  const [sortFeatures, { features }] = useFeatures();

  const sortedFeatures = useMemo(() => {
    if (features?.length) {
      return features.map((feature, idx) => {
        let eventDate = new Date(feature.properties.time);
        return (
          <tr>
            <td>
              <Link to={`/detail/${feature.id}`}>
                {feature.properties.place}
              </Link>
            </td>
            <td>{feature.properties.mag}</td>
            <td>{formatDate(eventDate)}</td>
          </tr>
        );
      });
    }
  }, [features]);

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
          <tbody>{sortedFeatures}</tbody>
        </table>
      </section>
    </section>
  );
};

export default Home;
