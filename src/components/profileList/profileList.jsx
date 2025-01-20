import React, { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard/profileCard";
import "./ProfileList.css";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/data/profiles.json")
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error loading profiles:", error));
  }, []);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="profile-list">
      <h1>Profiles</h1>
      <input
        type="text"
        placeholder="Search profiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="profile-grid">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
