import React from "react";
import { useFeatures } from "./hooks/useFeatures";
import "./styles/Home.css";
import { FeatureComponent } from "./components";

const Home: React.FC = () => {
  const [sortFeatures, { features }] = useFeatures();

  const handleClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ): void => {
    /*

      using innerText and operating off of it can be seen as 
      a security risk. However, since this switch statement is
      only allowing certain text it should be safe. In a production 
      environment I would opt to sanitize potential input though.

    */

    switch ((e.target as any).textContent) {
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
            {features?.map(
              (feature): JSX.Element => (
                <FeatureComponent feature={feature} />
              )
            )}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Home;
