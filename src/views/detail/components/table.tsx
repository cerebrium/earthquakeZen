import React from "react";
import { Feature } from "../../../data";
import { formatDate } from "../../../utils";

type Props = {
  feature: Feature | null;
};

const Table: React.FC<Props> = ({ feature }): JSX.Element => {
  const labels = ["Title", "Magnitude", "Time", "Status", "Tsunami", "Type"];
  const keys = ["title", "mag", "time", "status", "tsunami", "type"];

  return (
    <table>
      <tbody>
        {labels.map((label: string, idx: number): JSX.Element => {
          if (!feature) {
            return <></>;
          }

          let value = (feature.properties as any)[keys[idx]];
          if (label === "Time") {
            value = formatDate(new Date(value));
          }

          return (
            <tr>
              <td>
                <strong>{label}</strong>
              </td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
