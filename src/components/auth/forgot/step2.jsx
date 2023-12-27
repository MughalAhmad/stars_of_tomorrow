import { useState } from "react";
import "../style.css";
const Step2 = ({next}) => {
    const [otp, setOtp] = useState(new Array(6).fill(""))
  return (
    <div className=" h-full flex flex-col justify-center">
      <h3 className=" font-thin text-5xl mb-1 ">Type your</h3>
      <h1 className=" font-semibold font-600  text-5xl ">code from email</h1>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-8">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      <div className=" flex flex-col mt-2">
      <label className="text-[#908F94] font-outfit-400 text-lg my-3">Code:</label>
      <div className=" w-2/3 flex justify-between">
        <input type="number" 
        className="w-24 h-20 border-2 pl-3 rounded-xl bg-transparent outline-none font
        text-center font-semibold text-5xl border-gray-400 focus:border-gray-700
        focus:text-gray-700 text-gray-400"
        />
         <input type="number" 
        className="w-24 h-20 border-2 pl-3 rounded-xl bg-transparent outline-none font
        text-center font-semibold text-5xl border-gray-400 focus:border-gray-700
        focus:text-gray-700 text-gray-400"
        />
         <input type="number" 
        className="w-24 h-20 border-2 pl-3 rounded-xl bg-transparent outline-none font
        text-center font-semibold text-5xl border-gray-400 focus:border-gray-700
        focus:text-gray-700 text-gray-400"
        />
         <input type="number" 
        className="w-24 h-20 border-2 pl-3 rounded-xl bg-transparent outline-none font
        text-center font-semibold text-5xl border-gray-400 focus:border-gray-700
        focus:text-gray-700 text-gray-400"
        />
      </div>
      </div>
      <div className="bg-[#AE70FF] w-60 h-11 my-8 rounded-full flex justify-center items-center cursor-pointer"
       onClick={()=>{
        void next("STEP3");
      }}
      >
        <button className="text-white">Forgot my password</button>
        <img src="assets/pic4.svg" alt="none" className="ml-5" />
      </div>
    </div>
  );
};

export default Step2;
