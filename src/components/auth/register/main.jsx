import {useState} from "react";
import "../style.css";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Message from "../authComponets/message";
import LoginRegisterButton from "../authComponets/login-register-button"

const MainRegister = () => {
  const [step,setStep]= useState('STEP1');
  const updateStep=(newState)=>{
    setStep(newState)
  }
  
  return (
    <div className="w-screen h-screen flex relative ">
      <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center">
        <div className="w-9/12 h-full ml-10">
          <div className=" w-full mt-5">
            <img src="assets/logo.svg" alt="none" />
          </div>
          <div className=" w-full h-32 flex items-center">
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step1</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step2</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step3</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step4</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step5</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
          </div>
<div>
  {step=="STEP1" && <Step1 next={updateStep}/> }
  {step=="STEP2" && <Step2 next={updateStep}/>}
  {step=="STEP3" && <Step3 next={updateStep}/>}
  {step=="STEP4" && <Step4 next={updateStep}/>}
  {step=="STEP5" && <Step5 next={updateStep}/>}
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
        <LoginRegisterButton />
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

export default MainRegister;
