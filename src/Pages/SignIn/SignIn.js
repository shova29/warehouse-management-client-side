import React, { useRef } from "react";
import signin from "../../Assets/Images/signin/signin.png";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import SocialSignIn from "./SocialSignIn/SocialSignIn";
import Loading from "../Shared/Loading/Loading";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const customId = "custom-id-yes";
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    console.log(error?.message);
    errorElement = (
      <p className="text-red-500 text-center mt-3 font-bold mb-4">
        {error?.message}
      </p>
    );
  }
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateSignUp = (event) => {
    navigate("/signup");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Reset Password Link to Your Email!", {
        toastId: customId,
      });
    } else {
      toast.error("Please Enter Your Email Address!", {
        toastId: customId,
      });
    }
  };

  return (
    <div className="mb-16">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img src={signin} className="ml-12 w-96" alt={signin} />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-12">
            <h3 className="text-2xl text-rose-500 text-center font-bold mb-4">
              Sign in to your Account
            </h3>

            <form onSubmit={handleSignIn}>
              <div className="mb-6">
                <input
                  type="email"
                  ref={emailRef}
                  className=" block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  ref={passwordRef}
                  className=" block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-rose-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              >
                Sign in
              </button>
            </form>
            {errorElement}
            <p className="mt-4">
              Don't have an Account?{" "}
              <Link
                to="/signup"
                className="text-rose-600 pe-auto font-bold text-decoration-none"
                onClick={navigateSignUp}
              >
                Sign Up
              </Link>
            </p>
            <p className="mt-2 mb-6">
              Forget Password?{" "}
              <button
                onClick={resetPassword}
                className="text-rose-600 font-bold hover:text-rose-700 focus:text-rose-700 active:text-rose-800 duration-200 transition ease-in-out"
              >
                Reset Password
              </button>
            </p>

            <SocialSignIn></SocialSignIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
