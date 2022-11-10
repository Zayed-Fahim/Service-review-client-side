import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Login/Login.jpg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import toast from "react-hot-toast";
const auth = getAuth();

const Signup = () => {
  const [error, setError] = useState("");
  // const [toast, setToast] = useState(false);
  const { createUser, googleSignInAndLogin, githubSignInAndLogin } =
    useContext(AuthContext);
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.email) {
          toast.success("Successfully Signup!");
        }
        form.reset();
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {});
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignInAndLogin()
      .then((result) => {
        const user = result.user;
        if (user.email) {
          toast.success("Successfully Create a Account!");
        } else if (!user.email) {
          toast.error("Ops! Failed to Register");
        }
      })
      .catch((error) => console.error(error));
  };
  const handleGithubSignIn = () => {
    githubSignInAndLogin()
      .then((result) => {
        const user = result.user;
        if (user.email) {
          toast.success("Successfully Create a Account!");
        } else if (!user.email) {
          toast.error("Ops! Failed to Register");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="lg:grid grid-cols-2 md:flex-col  container mx-auto my-24">
      <img className="h-[50vh]" src={img} alt="" />
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm container mx-auto h-[620px]">
        <form onSubmit={handleSignup}>
          <div>
            <h1 className="text-5xl text-center my-5">Sign Up</h1>
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputName2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
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
              id="exampleInputName2"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              required
            />
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
              name="email"
              aria-describedby="emailHelp"
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
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="text-red-600">{error}</div>
          <div className="flex justify-between items-center mb-6"></div>
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
            Sign Up
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Log in
            </Link>
          </p>
        </form>
        <div className="mt-8 flex items-center justify-center gap-6">
          <button onClick={handleGoogleSignIn} type="submit">
            <FcGoogle className="w-9 h-9"></FcGoogle>
          </button>
          <button onClick={handleGithubSignIn} type="submit">
            <BsGithub className="w-8 h-8"></BsGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
