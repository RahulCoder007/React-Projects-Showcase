import React, { useState } from "react";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import { Logo, Button, Input } from "../components/index";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  //creating a method login() to check from appwrite and then updating the store's state

  const login = async (data) => {
    console.log("data::Login", data);
    try {
      setError(""); //flush out old errors after submit again
      const session = await authService.login(data); //check from backend (most of the appwrite service returns a promise)
      console.log("session::Login", session);
      if (session) {
        const userData = await authService.getCurrentUser(); //extract all data from backend
        console.log("userData::Login", userData);
        if (userData) dispatch(storeLogin(userData)); //update the state of store with that info
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-black/60 text-base">
          Don&apos;t have a account?&nbsp;
          <Link
            to="/signup"
            className="font-medium duration-200 hover:underline transition-all"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              type="email"
              label="Email: "
              placeholder="Enter your Email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              type="password"
              label="Password: "
              placeholder="Enter your Password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
