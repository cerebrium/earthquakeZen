import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useDataProvider } from "../../context/EarthquakeContext";
import "./Home.css";
import { formatDate } from "../../utils";

const Home: React.FC = () => {
  const [_, { features, activeFeature }] = useDataProvider();

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

  return (
    <section className="home-container">
      <h3>USGS All Earthquakes, Past Hour</h3>
      <section className="table-container">
        <table className="table">
          <thead>
            <tr>
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
