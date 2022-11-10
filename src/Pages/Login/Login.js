import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Login/Login.jpg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import toast from 'react-hot-toast'

const Login = () => {
  const { logIn, googleSignInAndLogin, githubSignInAndLogin } =
    useContext(AuthContext);
  const [error, setError] = useState('')

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user.email) {
          toast.success("Successfully Login!");
        }
        form.reset()
    }).catch(error=> setError(error.message))
  };
  const handleGoogleLogIn = () => {
    googleSignInAndLogin()
      .then((result) => {
        const user = result.user;
        if (user.email) {
          toast.success("Successfully Login!");
        } else if (!user.email) {
          toast.error("Failed to Login! Try Again.");
        }
      })
      .catch((error) => console.error(error));
  };
  const handleGithubLogIn = () => {
    githubSignInAndLogin()
      .then((result) => {
        const user = result.user;
        if (user.email) {
          toast.success("Successfully Login!");
        } else if (!user.email) {
          toast.error("Failed to Login! Try Again.");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="lg:grid grid-cols-2 md:flex-col  container mx-auto my-20">
      <img className="h-[50vh]" src={img} alt="" />
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm container mx-auto h-[600px]">
        <form onSubmit={handleLogin}>
          <div>
            <h1 className="text-5xl text-center my-10">LOG IN</h1>
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <div className="mb-4 text-red-600">{error}</div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Sign in
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register
            </Link>
          </p>
        </form>
        <div className="mt-8 flex items-center justify-center gap-6">
          <button onClick={handleGoogleLogIn} type="submit">
            <FcGoogle className="w-9 h-9"></FcGoogle>
          </button>
          <button onClick={handleGithubLogIn} type="submit">
            <BsGithub className="w-8 h-8"></BsGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
