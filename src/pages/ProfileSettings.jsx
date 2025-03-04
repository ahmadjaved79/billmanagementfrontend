import React, { useState, useEffect } from "react";

const ProfileSettings = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  // ✅ Fetch user data from database
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

      const data = await response.json();
      setUser({
        name: data.name,
        email: data.email,
        profileImage: data.profileImage || "https://via.placeholder.com/150",
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  // ✅ Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUser({ ...user, profileImage: URL.createObjectURL(file) });
    }
  };

  // ✅ Handle profile update
  const handleSaveProfile = async () => {
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    if (selectedFile) formData.append("profileImage", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/api/user/update", {
        method: "POST",
        body: formData,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (!response.ok) throw new Error("Failed to update profile");

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md">
      {loading ? (
        <p className="text-gray-600">Loading user data...</p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">👤 Profile</h2>
          <div className="flex flex-col items-center">
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <input type="file" accept="image/*" className="mt-2" onChange={handleImageChange} />
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly
              className="w-full px-3 py-2 border rounded-lg bg-gray-100"
            />
          </div>

          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSaveProfile}
          >
            Save Profile
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileSettings;
