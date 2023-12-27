import { useState } from "react";
import DatePicker from "react-datepicker";
import "../style.css";
const Step3 = ({next,count}) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <>
    <div className="flex">
      <h3 className=" font-thin text-5xl mr-4">More</h3>
      <h1 className=" font-semibold font-600  text-5xl ">informations</h1>
      </div>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-3">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      
      <p className="font-outfit text-[#908F94] my-3 font-normal">Birthday Date:</p>
        <input type="date" className="w-full h-12 rounded-lg text-xl outline-none px-5 font border-2 border-[#D8E0EF] focus:border-[#AE70FF]" />
        <p className="font-outfit text-[#908F94] my-3 font-normal">Additional information:</p>
        <textarea className="w-full h-80 max-h-80 rounded-lg text-xl outline-none px-5 pt-4 font border-2 border-[#D8E0EF] focus:border-[#AE70FF]"  placeholder="Additional information..."/>
      <div className=" h-20 flex items-center ">
      <div className="border-2 border-[#AE70FF] w-60 h-11 rounded-full flex justify-center items-center mr-6 cursor-pointer"
      onClick={()=>{
        void next("STEP2")
        void count(2)
      }}
      >
      <img src="assets/pic7.svg" alt="none" className="mr-5" />
        <button className="text-[#AE70FF]">Previous Page</button>
      </div>
      <div className="bg-[#AE70FF] w-60 h-11 rounded-full flex justify-center items-center cursor-pointer"
      onClick={()=>{
        void next("STEP4")
        void count(4)
      }}
      >
        <button className="text-white">Next Page</button>
        <img src="assets/pic4.svg" alt="none" className="ml-5" />
      </div>
      </div>
    </>
  );
};

export default Step3;
