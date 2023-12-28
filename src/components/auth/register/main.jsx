import { useState } from "react";
import "../style.css";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Message from "../authComponets/message";
import LoginRegisterButton from "../authComponets/login-register-button";

const MainRegister = () => {
  const [step, setStep] = useState("STEP1");
  const [stepCount, setStepCount] = useState(1);
  const updateStep = (newState) => {
    setStep(newState);
  };
  const updateStepCount = (newState) => {
    setStepCount(newState);
  };

  return (
    <div className="w-screen h-screen flex relative ">
       <div className="w-full flex flex-row justify-between md:px-40 px-4 mt-5 z-30 absolute top-0">
            <img src="assets/logo.svg" alt="none" />
            <LoginRegisterButton />
          </div>
      <div className="md:w-1/2 md:p-0 p-4 h-full bg-white flex flex-col items-center justify-center md:mt-0 mt-10">
        <div className="md:w-9/12 h-full flex flex-col justify-center md:mt-0 mt-20">
        
          <div className="w-fit md:mt-0 mt-5 md:h-32 h-fit flex flex-wrap items-center justify-center">
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step1</span>
              <div
                className={`w-28 h-2  ${
                  stepCount >= 1 ? "bg-[#AE70FF]" : "bg-[#D8E0EF]"
                } rounded-full`}
              ></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step2</span>
              <div
                className={`w-28 h-2  ${
                  stepCount >= 2 ? "bg-[#AE70FF]" : "bg-[#D8E0EF]"
                } rounded-full`}
              ></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step3</span>
              <div
                className={`w-28 h-2  ${
                  stepCount >= 3 ? "bg-[#AE70FF]" : "bg-[#D8E0EF]"
                } rounded-full`}
              ></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step4</span>
              <div
                className={`w-28 h-2  ${
                  stepCount >= 4 ? "bg-[#AE70FF]" : "bg-[#D8E0EF]"
                } rounded-full`}
              ></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step5</span>
              <div
                className={`w-28 h-2  ${
                  stepCount >= 5 ? "bg-[#AE70FF]" : "bg-[#D8E0EF]"
                } rounded-full`}
              ></div>
            </div>
          </div>
          <div className="w-full py-5 ">
            {step == "STEP1" && (
              <Step1 next={updateStep} count={updateStepCount} />
            )}
            {step == "STEP2" && (
              <Step2 next={updateStep} count={updateStepCount} />
            )}
            {step == "STEP3" && (
              <Step3 next={updateStep} count={updateStepCount} />
            )}
            {step == "STEP4" && (
              <Step4 next={updateStep} count={updateStepCount} />
            )}
            {step == "STEP5" && (
              <Step5 next={updateStep} count={updateStepCount} />
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full md:block hidden relative">
        <img
          src="assets/pic1.svg"
          alt="none"
          className="w-full h-full object-cover"
        />
        <Message />
      </div>
      {/* <div className="w-full h-15 absolute bottom-8 flex items-center flex-col">
        <div className="w-5/6 h-0.5 bg-[#E9ECF2]" />
        <div className="w-5/6 flex justify-between mt-4">
          <p className="text-[#848FAC] font-manrope font-medium">
            Copyright © 2023 — Stars of Tomorrow. All Rights Reserved
          </p>
          <p className="text-[#242D43] font-manrope font-medium">
            Terms and conditions | Polcy Privacy
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default MainRegister;
