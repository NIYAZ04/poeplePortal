import React, { useState } from "react";
import profilesData from "../../data/profiles.json";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState(profilesData);

  const handleDelete = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
