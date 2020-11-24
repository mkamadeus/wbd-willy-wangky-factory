/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 14:02:14
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 19:46:15
 */

import { login } from "@/api/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

type LoginForm = {
  username: string;
  password: string;
};
const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const [mutate] = useMutation(login);
  const history = useHistory();

  const onSubmit = async (credentials: LoginForm) => {
    // TODO : Verify
    await mutate(credentials)
      .then((status) => {
        // FIXME : If verified, navigate
        status = status as boolean;
        if (status) {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="flex flex-col rounded shadow p-2 bg-white">
          <div className="mb-2">
            <h1 className="text-3xl font-bold text-center">Login</h1>
          </div>
          <div className="p-2">
            <form className="flex-flex-col" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-2">
                <label htmlFor="username">Username</label>
                <input
                  className="rounded border border-gray-300 w-full p-1 focus:outline-none"
                  type="text"
                  name="username"
                  placeholder="Username"
                  ref={register}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password">Password</label>
                <input
                  className="rounded border border-gray-300 w-full p-1 focus:outline-none"
                  type="password"
                  name="password"
                  placeholder="*******"
                  ref={register}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded shadow hover:shadow-lg p-2 focus:outline-none transition duration-150"
                >
                  Login
                </button>
              </div>
            </form>
            {/* {errors && (
              <div className="bg-red-300 border border-red-400 rounded text-red-700 p-1">
                Invalid Credentials
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
