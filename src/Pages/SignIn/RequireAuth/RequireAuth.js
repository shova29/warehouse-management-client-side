import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  // console.log(user);

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="container mx-auto w-1/2 mt-16 shadow-lg bg-white text-center">
        <h2 className="pt-6 font-bold text-red-500">
          Oops! Your email is not verified!!
        </h2>
        <h3 className="mt-6 font-bold text-green-800">
          Please verify your email address
        </h3>
        <button
          type="button"
          className="mt-6 mb-6 inline-block px-7 py-3 bg-rose-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent Verification Link to Your Email");
          }}
        >
          Send Verification Email Again
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
