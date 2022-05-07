import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialSignIn = () => {
  const [signInWithGoogle, googleUser, loadingForGoogle, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, loadingForGithub, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (googleError || githubError) {
    errorElement = (
      <p className="text-red-500 text-center mt-3 font-bold mb-4">
        {googleError?.message} {githubError?.message}
      </p>
    );
  }

  if (loadingForGoogle || loadingForGithub) {
    return <Loading></Loading>;
  }

  if (googleUser || githubUser) {
    navigate("/home");
  }
  return (
    <div className="mb-12">
      {" "}
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">OR</p>
      </div>
      {errorElement}
      <a
        onClick={() => signInWithGoogle()}
        className="px-7 py-3 text-gray-800 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ backgroundColor: "#f1f5f9" }}
        href="#!"
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Continue with Google
      </a>
      <a
        onClick={() => signInWithGithub()}
        className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        style={{ backgroundColor: "#292524" }}
        href="#!"
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Continue with Github
      </a>
    </div>
  );
};

export default SocialSignIn;
