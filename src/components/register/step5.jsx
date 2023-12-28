import { useState } from "react";
import "../../styles/style.css";
const Step5 = ({next,count}) => {
  console.log(count);
  return (
    <>
      <h3 className=" font-thin font text-5xl mb-1 ">Congratulations</h3>
      <h1 className=" font-semibold font  text-5xl ">Johanna!</h1>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-3">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      <div className="w-full flex h-32 border-2 border-[#D8E0EF] rounded-xl mt-6">
        <div className="w-1/2 flex items-center">
<div className="w-24 h-24 border-2 rounded-full border-[#AE70FF] flex justify-center items-center ml-3">
    <img src="assets/pic10.svg" alt="none" className="w-20 h-20"/>
</div>
<div className="ml-5">
    <p className="font-manrope font-bold text-3xl">Jolie Doe</p>
    <p className="font-manrope font-semibold text-[#908F94]">Warsaw, Poland</p>
</div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
        <div className="bg-[#AE70FF] w-56 h-14 rounded-full flex justify-center items-center cursor-pointer">
        <button className="text-white font-manrope font-semibold	">Show your profile</button>
        <img src="assets/pic4.svg" alt="none" className="ml-4 w-6 h-6" />
      </div>
        </div>
      </div> 
      <div className=" h-20 flex items-center mt-3">
      <div className="border-2 border-[#AE70FF] w-60 h-11 rounded-full flex justify-center items-center mr-6 cursor-pointer"
      onClick={()=>{
        void next("STEP1")
        void count(1)
      }}
      >
      <img src="assets/pic7.svg" alt="none" className="mr-5" />
        <button className="text-[#AE70FF]">Back to main page</button>
      </div>
      
      </div>
    </>
  );
};

export default Step5;
