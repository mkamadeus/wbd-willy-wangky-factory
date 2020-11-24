import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    // localStorage.removeItem("token");
    // history.push("/login");
  };

  return (
    <div className="flex justify-between items-center p-6">
      <div>
        <div className="text-4xl font-bold relative">
          Welcome, mkamadeus!
          <div
            className="absolute bottom-0 bg-gradient-to-r from-teal-400 to-blue-500"
            style={{ width: 200, height: 6, left: 50 }}
          />
        </div>
        <div className="mt-2 italic text-gray-600">
          What are you going to do?
        </div>
      </div>
      <div>
        <button
          className="p-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
