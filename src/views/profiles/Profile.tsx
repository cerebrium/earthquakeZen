import React from "react";
import "./styles/Profile.css";
import { profile } from "../../data/index";

const Profile: React.FC = (): JSX.Element => {
  const labels = ["First Name", "Last Name", "Phone", "Email", "Bio"];
  const keys = ["firstName", "lastName", "phone", "email", "bio"];

  return (
    <div className="profile">
      <h3>Profile </h3>
      <div className="content">
        <div className="image-container">
          <img
            src={profile.avatarImage}
            alt="Sally profile picture"
            className="profile-image"
          />
        </div>
        <table className="profile-info">
          <tbody>
            {labels.map((label: string, idx: number): JSX.Element => {
              let value = (profile as any)[keys[idx]];
              if (label === "Email") {
                value = (
                  <a href={`mailto:${value}`} target="_blank">
                    {value}
                  </a>
                );
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
      </div>
    </div>
  );
};

export default Profile;
