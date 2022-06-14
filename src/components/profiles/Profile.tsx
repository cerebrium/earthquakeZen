import React from "react";
import "./styles/Profile.css";
import { profile } from "../../data/index";

const Profile: React.FC = () => {
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
            <tr>
              <td>
                <strong>First Name</strong>
              </td>
              <td>{profile.firstName}</td>
            </tr>
            <tr>
              <td>
                <strong>Last Name</strong>
              </td>
              <td>{profile.lastName}</td>
            </tr>
            <tr>
              <td>
                <strong>Phone</strong>
              </td>
              <td>{profile.phone}</td>
            </tr>
            <tr>
              <td>
                <strong>Email</strong>
              </td>
              <td>
                <a href={`mailto:${profile.email}`} target="_blank">
                  {profile.email}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Bio</strong>
              </td>
              <td>{profile.bio}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
