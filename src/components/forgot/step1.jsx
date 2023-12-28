import { useState } from "react";
import "../../styles/style.css";
const Step1 = ({next}) => {
  return (
    <div className=" h-full flex flex-col justify-center">
      <h3 className=" font-thin text-5xl mb-1 ">Forgot</h3>
      <h1 className=" font-semibold font-600  text-5xl ">your password</h1>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-8">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      <div className=" flex flex-col mt-2">
      <label className="text-[#908F94] font-outfit-400 text-lg my-3">Email Address:</label>
      <input type="email" className="outline-none border-2 h-12 border-[#D8E0EF] rounded-xl pl-6 font" placeholder="Enter Email Address"/>
      </div>
    
      <div className="bg-[#AE70FF] w-60 h-11 my-5 rounded-full flex justify-center items-center cursor-pointer"
       onClick={()=>{
        void next("STEP2");
      }}
      >
        <button className="text-white">Forgot my password</button>
        <img src="assets/pic4.svg" alt="none" className="ml-5" />
      </div>
    </div>
  );
};

export default Step1;
