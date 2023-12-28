import { useState } from "react";
import "../../styles/style.css";
const Thanks = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""))
  return (
    <div className=" h-full flex flex-col justify-center">
      <h3 className=" font-thin text-5xl mb-1 ">You have</h3>
      <h1 className=" font-semibold font-600  text-5xl ">new password!</h1>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-8">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      <div className="bg-[#AE70FF] w-60 h-11 my-8 rounded-full flex justify-center items-center cursor-pointer">
        <button className="text-white">Go to your profile</button>
        <img src="assets/pic4.svg" alt="none" className="ml-5" />
      </div>
    </div>
  );
};

export default Thanks;
