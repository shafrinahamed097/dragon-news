import React from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";


const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <btnmbtn className="btn">
          <FaGoogle /> Login With Google
        </btnmbtn>
        <btnmbtn className="btn"><IoLogoGithub />Login with github</btnmbtn>
      </div>
    </div>
  );
};

export default SocialLogin;
