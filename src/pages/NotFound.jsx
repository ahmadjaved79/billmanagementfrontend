import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Lost Astronaut"
        className="w-80 h-auto mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
