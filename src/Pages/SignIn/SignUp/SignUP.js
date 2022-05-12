import React, { useState } from "react";
import signup from "../../../Assets/Images/signin/signup.png";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  let errorElement;

  const navigateSignin = () => {
    navigate("/signin");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (token) {
    // console.log("token", token);
    navigate("/home");
  }
  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword) {
      // console.log("Password didnt matched");
      setErrorMessage("Your Password did not matched!");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    // console.log("Updated profile");
  };
  return (
    <div className="mb-16">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12  sm:w-5/12 mb-12 md:mb-0">
            <img src={signup} className="w-fit" alt={signup} />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-12">
            <h3 className="text-2xl text-rose-500 text-center font-bold mb-4">
              Sign Up
            </h3>

            <form onSubmit={handleSignUp}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Your Name"
                  htmlFor="name"
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  className=" block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  htmlFor="email"
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  className=" block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  htmlFor="password"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="confirmPassword"
                  className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Confirm Password"
                  htmlFor="confirmPassword"
                  required
                />
              </div>
              <p className="text-rose-500 ml-2 mb-2">{errorMessage}</p>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-rose-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                // checked
              >
                Sign up
              </button>
            </form>
            {errorElement}
            <p className="ml-5 mt-6">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-rose-600 pe-auto font-bold text-decoration-none"
                onClick={navigateSignin}
              >
                Sign in
              </Link>
            </p>
            <SocialSignIn></SocialSignIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
