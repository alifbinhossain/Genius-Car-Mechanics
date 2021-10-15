import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <h1 className="text-center text-success mt-3">Please Log In</h1>
      <button
        onClick={signInWithGoogle}
        className="btn btn-success mx-auto d-block mt-3"
      >
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
