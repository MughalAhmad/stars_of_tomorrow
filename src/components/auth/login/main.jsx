import {useState} from "react";
import "../style.css";
import Login from "./login";
import Message from "../authComponets/message";
import LoginRegisterButton from "../authComponets/login-register-button";

const MainLogin = () => {
  return (
    <div className="w-screen h-screen flex relative ">
      <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center">
        <div className="w-9/12 h-full ml-10">
          <div className=" w-full mt-5">
            <img src="assets/logo.svg" alt="none" />
          </div>
<div className="mt-10" >
<Login/>
</div>
         
        
        </div>
      </div>
      <div className="w-1/2 h-full relative">
        <img
          src="assets/pic1.svg"
          alt="none"
          className="w-full h-full object-cover"
        />
        <Message/>
        <LoginRegisterButton/>
      </div>
      <div className=" w-full h-15 absolute bottom-8 flex items-center flex-col">
        <div className="w-5/6 h-0.5 bg-[#E9ECF2]" />
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
