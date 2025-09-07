import React, { useState } from "react";
import { LuSettings } from "react-icons/lu";

function App() {
  // State for user data
  const [user, setUser] = useState({
    photo: "",
    name: "",
    phone: "",
  });

  const [preview, setPreview] = useState(""); // preview for photo

  // Handle image upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser({ ...user, photo: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen bg-white     mb-20">
      {/* ---------- Form Section ---------- */}
      <div className="bg-white p-4 rounded-2xl  mb-[300px]">
        <h2 className="text-lg font-semibold mb-4">Enter Profile Details</h2>
        <form className="flex flex-col gap-4">
          {/* Upload Photo */}
          <input type="file" accept="image/*" onChange={handlePhotoChange} />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Enter mobile number"
            value={user.phone}
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />
        </form>
      </div>
      {/* ---------- Profile Section ---------- */}
      <div className="flex justify-between bg-white px-4 rounded-2xl">
        {/* Left side (profile info) */}
        <div className="flex ">
          {/* Profile Picture */}
          <img
            src={preview || ""} // fallback image
            alt=""
            className="w-16 h-16 rounded-full border-2 border-white object-cover"
          />

          {/* User Info */}
          <div className="flex flex-col">
            <span className="font-semibold text-lg my-0 pt-1">
              {user.name || "Your Name"}
            </span>
            <span className="text-xs text-gray-500">
              {user.phone || "Your Phone"}
            </span>
          </div>
        </div>

        {/* Settings Icon */}
        <button >
          <LuSettings size={28} />
        </button>
      </div>
      <img src="../quick.jpg" alt="Quick" className="w-full mt-6" />
    </div>
  );
}

export default App;
