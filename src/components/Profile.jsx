import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Action to update profile
const updateProfile = (updatedData) => ({
  type: "UPDATE_PROFILE",
  payload: updatedData,
});

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch current user data from Redux store
  const user = useSelector((state) => state.auth.user);

  const [name, setName] = useState(user?.name || "");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!name.trim()) {
      alert("Name cannot be empty.");
      return;
    }
    if (password && password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    const updatedData = {
      name,
      password: password || user.password,
    };

    dispatch(updateProfile(updatedData));
    alert("Profile updated successfully!");
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        New Password:
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={() => navigate("/dashboard")}>Cancel</button>
    </div>
  );
};

export default Profile;
