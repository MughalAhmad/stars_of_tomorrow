import { useState } from "react";
import "../../styles/style.css";
const OTP = ({next}) => {
    const [otp, setOtp] = useState(new Array(6).fill(""))
    const [isDisabled,setDisabled] = useState(true);

  return (
    <div className=" h-full flex flex-col justify-center">
      <h3 className=" font-thin text-5xl mb-1 ">Type your</h3>
      <h1 className=" font-semibold font-600  text-5xl ">code from email</h1>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-8">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      <div className=" flex flex-col mt-2 space-y-4">
      <label className="text-[#908F94] font-outfit-400 text-lg">Code:</label>
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
      <button 
        disabled={isDisabled}
        className={`text-white bg-[#AE70FF]  rounded-full flex justify-center ${isDisabled ? "opacity-30" : 'opacity-100'} items-center cursor-pointer mt-2 py-3.5 w-2/5`}
        onClick={()=>{
          void next("STEP3");
        }}
        >Forgot my password
        <img src="assets/pic4.svg" alt="none" className="ml-5" />
        </button>
      </div>
    </div>
  );
};

export default OTP;
