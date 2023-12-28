import { useState } from "react";
import "../../styles/style.css";
const Email = ({next}) => {
  const [email,setEmail]= useState('')
  const [isDisabled,setDisabled] = useState(true);
  return (
    <div className=" h-full flex flex-col justify-center">
      <h3 className=" font-thin text-5xl mb-1 ">Forgot</h3>
      <h1 className=" font-semibold font-600  text-5xl ">your password</h1>
      <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-8">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search.
      </p>
      <div className=" flex flex-col mt-2 space-y-3">
      <label className="text-[#908F94] font-outfit-400 text-lg">Email Address:</label>
      <input 
      type="email" 
      className="outline-none border-2 h-12 border-[#D8E0EF] rounded-xl pl-6 font" 
      placeholder="Enter Email Address"
      onChange={(e)=>{
        setEmail(e.target.value)
        if(e.target.value!=''){
          setDisabled(false)
        }else{
          setDisabled(true)
        }
      }}
      />
        <button 
        disabled={isDisabled}
        className={`text-white bg-[#AE70FF]  rounded-full flex justify-center ${isDisabled ? "opacity-30" : 'opacity-100'} items-center cursor-pointer mt-2 py-3.5 w-2/5`}
        onClick={()=>{
          void next("STEP2");
        }}
        >Forgot my password
        <img src="assets/pic4.svg" alt="none" className="ml-5" />
        </button>
      </div>
    </div>
  );
};

export default Email;
