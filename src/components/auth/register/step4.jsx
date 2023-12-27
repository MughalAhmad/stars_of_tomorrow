import { useState } from "react";
import DatePicker from "react-datepicker";
import "../style.css";
const Step4 = ({next}) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <>
    <div className="flex">
      <h3 className="font-extralight font text-5xl mr-4 text-[#242D43]">It’s</h3>
      <h1 className=" font-semibold font  text-5xl text-[#242D43] ">time for you!</h1>
      </div>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-3">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      
      <p className="font-outfit text-[#908F94] my-3 font-normal">Avatar image:</p>
      <div className="w-full flex h-32">
        <div className="w-1/2 flex items-center">
<div className="w-24 h-24 border-2 rounded-full border-[#AE70FF] flex justify-center items-center ">
    <img src="assets/pic9.svg" alt="none" className="w-7 h-7"/>
</div>
<div className="ml-5 ">
    <p className="font font-semibold">Upload Image</p>
    <p className="font-outfit-400 text-[#908F94]">Max. size 2 Mb</p>
</div>
        </div>
        <div className="w-1/2 flex justify-center items-center ">
        <div className="bg-[#AE70FF] w-52 h-14 rounded-full flex justify-center items-center cursor-pointer">
        <img src="assets/pic8.svg" alt="none" className="mr-4 w-6 h-6" />
        <button className="text-white font-manrope font-semibold	">Upload image</button>
      </div>
        </div>
      </div>
      <p className="font-outfit text-[#908F94] my-3 font-normal">Cover image:</p>
      <div className="w-full flex flex-col h-44 border-2 rounded-2xl border-[#D8E0EF] justify-center items-center">
      <img src="assets/pic9.svg" alt="none" className="w-10 h-10"/>
        <p className="font-outfit-400 text-[#908F94] text-lg my-2 ">Max. size 2 Mb</p>
        <div className="bg-[#AE70FF] w-52 h-14 rounded-full flex justify-center items-center cursor-pointer">
        <img src="assets/pic8.svg" alt="none" className="mr-4 w-6 h-6" />
        <button className="text-white font-manrope font-semibold	">Upload image</button>
      </div>
      </div>
<div className="flex  w-full h-12 mt-4">
      <input type="checkbox" className="w-5 h-5 mt-1"/>
      <p className="w-2/3 font-outfit text-[#908F94] ml-2">
      By continuing, you agree to jofind Term of Use and confirm that you have read Privacy Policy
      </p>
      </div>
      <div className=" h-20 flex items-center ">
      <div className="border-2 border-[#AE70FF] w-60 h-11 rounded-full flex justify-center items-center mr-6 cursor-pointer"
      onClick={()=>{
        void next("STEP3")
      }}
      >
      <img src="assets/pic7.svg" alt="none" className="mr-5" />
        <button className="text-[#AE70FF]">Previous Page</button>
      </div>
      <div className="bg-[#AE70FF] w-60 h-11 rounded-full flex justify-center items-center cursor-pointer"
      onClick={()=>{
        void next("STEP5")
      }}
      >
        <button className="text-white">Finalize!</button>
        <img src="assets/pic4.svg" alt="none" className="ml-5" />
      </div>
      </div>
    </>
  );
};

export default Step4;
