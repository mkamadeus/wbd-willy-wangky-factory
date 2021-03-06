import React, { useContext } from "react";
import { logout } from "@/api/auth";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { UserContext } from "@/context/UserContext";

const Navbar = () => {
  const history = useHistory();

  const userContext = useContext(UserContext);
  const [mutate] = useMutation(logout);

  const doLogout = () => {
    try {
      mutate();
      userContext.setUsername("");
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between items-center p-6">
      <div>
        <div className="text-4xl font-bold relative">
          Welcome, {userContext.username}!
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
            doLogout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
