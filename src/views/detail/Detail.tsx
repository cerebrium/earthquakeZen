import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDetail } from "./hooks/useDetail";
import "./styles/Details.css";
import Table from "./components/table";

const Detail: React.FC = (): JSX.Element => {
  const { id } = useParams();

  const [findFeature, { activeFeature }] = useDetail();

  useEffect((): void => {
    if (id) {
      findFeature(id);
    } else {
      const pathname: string[] = window.location.pathname.split("/");
      findFeature(pathname[pathname.length - 1]);
    }
  }, [id]);

  return (
    <div className="detail-body">
      <div className="table-container">
        <h3>
          {activeFeature
            ? activeFeature.properties.title
            : "No matching Document found"}
        </h3>
        {activeFeature && <Table feature={activeFeature} />}
      </div>
    </div>
  );
};

export default Detail;
