import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleSummary = () => {
    navigate(`/profile/${profile.id}`);
  };

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={handleSummary}>Summary</button>
    </div>
  );
};

export default ProfileCard;
