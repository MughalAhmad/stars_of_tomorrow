import { useState } from "react";
import "../style.css";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate =useNavigate()

  return (
    <>
      <h3 className=" font-thin text-5xl mb-1 ">Login to be</h3>
      <h1 className=" font-semibold font-600  text-5xl ">more famous</h1>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-8">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      <div className="w-full h-12 rounded-xl border-2 border-[#D8E0EF] cursor-pointer mt-8">
        <div className="w-full h-full flex justify-center items-center">
          <img src="assets/pic6.svg" alt="none" className="w-8 h-8" />
          <p className=" font text-lg ml-2">Sign in with Google</p>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-8">
        <div className="w-64 bg-[#D8E0EF] h-0.5" />
        <p className="font-outfit text-[#908F94] mx-2">Or sign in with email</p>
        <div className="w-64 bg-[#D8E0EF] h-0.5" />
      </div>
      <div className=" flex flex-col mt-2">
      <label className="text-[#908F94] font-outfit-400 text-lg my-3">Email Address:</label>
      <input type="email" className="outline-none border-2 h-12 border-[#D8E0EF] rounded-xl pl-6 font" placeholder="Enter Email Address"/>
      </div>
      <div className=" flex flex-col">
      <label className="text-[#908F94] font-outfit-400 text-lg my-3">Password:</label>
      <input type="password" className="outline-none border-2 h-12 border-[#D8E0EF] rounded-xl pl-6 font" placeholder="Enter Password" />
      </div>
      <div className="w-full flex my-4">
        <div className="w-1/2 flex">
<input type="checkbox" className="w-5 h-5 mt-1"/>
<p className="font-outfit text-[#908F94] ml-2">Remember me</p>
        </div>
        <div className="w-1/2 flex justify-end ">
<p className="text-[#AE70FF] font-outfitn cursor-pointer"
onClick={()=>{
  navigate("/forgot")
}}
>Recovery Password?</p>
</div>
      </div>
      <div className="bg-[#AE70FF] w-60 h-11 rounded-full flex justify-center items-center cursor-pointer">
        <button className="text-white">Next Page</button>
        <img src="assets/pic4.svg" alt="none" className="ml-5" />
      </div>
      <p className="text-[#908F94] font-outfit mt-5">Join with us? <span className="text-[#AE70FF] font-outfit cursor-pointer"
      onClick={()=>{
        navigate("/register")
      }}
      >Create account it’s free</span></p>
    </>
  );
};

export default Login;
