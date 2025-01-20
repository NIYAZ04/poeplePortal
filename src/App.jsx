import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileList from "./components/ProfileList/ProfileList";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
