import React from "react";
import { useParams } from "react-router-dom";
import MapComponent from "../MapComponent/MapComponent";
import profiles from "../../data/profiles.json";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <p>Profile not found.</p>;

  return (
    <div className="profile-details">
      <h1>{profile.name}</h1>
      <p>{profile.details}</p>
      <MapComponent latitude={profile.latitude} longitude={profile.longitude} />
    </div>
  );
};

export default ProfileDetails;
