import {useState} from "react";
import "../styles/style.css";
import Email from "../components/forgot/email";
import OTP from "../components/forgot/otp"
import Thanks from "../components/forgot/thanks"
import Message from "../components/authLayout/message";
import LoginRegisterButton from "../components/authLayout/login-register-button"

const Forgot = () => {
  const [step,setStep]= useState('STEP1');
  const updateStep=(newState)=>{
    setStep(newState)
  }

  return (
    <div className="w-screen h-screen flex relative ">
      <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center">
        <div className="w-9/12 h-full ml-10">
          <div className=" w-full pt-5 h-1/6">
            <img src="assets/logo.svg" alt="none" />
          </div>
<div  className="w-full h-3/5">
  {step=="STEP1" && <Email next={updateStep} />}
  {step=="STEP2" && <OTP next={updateStep} />}
  {step=="STEP3" && <Thanks next={updateStep} />}

</div>
         
        
        </div>
      </div>
      <div className="w-1/2 h-full relative ">
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

export default Forgot;
