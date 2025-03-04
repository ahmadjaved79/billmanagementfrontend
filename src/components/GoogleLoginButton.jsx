import React from "react";
import googleIcon from '../assets/google-icon.png';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-2 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200"
    >
      <img
        src={googleIcon}
        alt="Google Logo"
        className="w-5 h-5 mr-2"
      />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
