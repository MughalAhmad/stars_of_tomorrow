import { useState } from "react";
import "../style.css";
import Login from "./login";
import Message from "../authComponets/message";
import LoginRegisterButton from "../authComponets/login-register-button";

const MainLogin = () => {
  return (
    <div className="w-screen h-screen flex relative ">
          <div className="w-full flex flex-row justify-between md:px-40 px-4 mt-5 z-30 absolute top-0">
            <img src="assets/logo.svg" alt="none" />
            <LoginRegisterButton />
          </div>
      <div className="md:w-1/2 w-full h-full bg-white flex flex-col items-center justify-center md:mt-0 mt-10">
        <div className="md:w-9/12 w-full h-full md:ml-10 p-4">
          <div className="h-full flex flex-col justify-center">
            <Login />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:block hidden h-full relative z-20">
        <img
          src="assets/pic1.svg"
          alt="none"
          className="w-full h-full object-cover"
        />
        <Message />
      </div>
      <div className=" w-full h-fit absolute bottom-8 md:flex hidden items-center flex-col z-30">
        <div className="w-5/6 h-0.5 bg-[#E9ECF2]"/>
        <div className="w-5/6 flex justify-between mt-4">
          <p className="text-[#848FAC] font-manrope font-medium">
            Copyright © 2023 — Stars of Tomorrow. All Rights Reserved
          </p>
          <p className="text-[#242D43] font-manrope font-medium">
            Terms and conditions | Polcy Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
