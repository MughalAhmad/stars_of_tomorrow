import { useState } from "react";
import "../style.css";
const Step2 = ({next,count}) => {
  return (
    <>
      <h3 className=" font-thin text-5xl mb-1 ">Register to be</h3>
      <h1 className=" font-semibold font-600  text-5xl ">more famous</h1>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-3">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      <div className="w-full h-12 rounded-xl border-2 border-[#D8E0EF] cursor-pointer mt-6">
        <div className="w-full h-full flex justify-center items-center">
          <img src="assets/pic6.svg" alt="none" className="w-8 h-8" />
          <p className=" font text-lg ml-2">Sign Up with Google</p>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-6">
        <div className="w-64 bg-[#D8E0EF] h-0.5" />
        <p className="font-outfit text-[#908F94] mx-2">Or sign up with email</p>
        <div className="w-64 bg-[#D8E0EF] h-0.5" />
      </div>
      <div className=" flex flex-col">
      <label className="text-[#908F94] font-outfit-400 text-lg my-3">Full Name:</label>
      <input type="text" className="outline-none border-2 h-12 border-[#D8E0EF] rounded-xl pl-6 font " placeholder="Enter Full Name" />
      </div>
      <div className=" flex flex-col">
      <label className="text-[#908F94] font-outfit-400 text-lg my-3">Email Address:</label>
      <input type="email" className="outline-none border-2 h-12 border-[#D8E0EF] rounded-xl pl-6 font" placeholder="Enter Email Address"/>
      </div>
      <div className=" flex flex-col">
      <label className="text-[#908F94] font-outfit-400 text-lg my-3">Password:</label>
      <input type="password" className="outline-none border-2 h-12 border-[#D8E0EF] rounded-xl pl-6 font" placeholder="Enter Password" />
      </div>
      <div className=" h-20 flex items-center ">
      <div className="border-2 border-[#AE70FF] w-60 h-11 rounded-full flex justify-center items-center mr-6 cursor-pointer"
      onClick={()=>{
        void next("STEP1")
        void count(1)
      }}
      >
      <img src="assets/pic7.svg" alt="none" className="mr-5" />
        <button className="text-[#AE70FF]">Previous Page</button>
      </div>
      <div className="bg-[#AE70FF] w-60 h-11 rounded-full flex justify-center items-center cursor-pointer"
      onClick={()=>{
        void next("STEP3")
        void count(3)
      }}
      >
        <button className="text-white">Next Page</button>
        <img src="assets/pic4.svg" alt="none" className="ml-5" />
      </div>
      </div>
    </>
  );
};

export default Step2;
