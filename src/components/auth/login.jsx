import {useState} from "react";
import "./style.css";
const Login = () => {
  const [selectRoleColor, setSelectRoleColor] = useState("1");
  const handleSelectRole=(val)=>{
    if(val==="model"){
      setSelectRoleColor("1")
    }
    else if(val === "agency"){
      setSelectRoleColor("2")
    }
    else{
      setSelectRoleColor("3")
    }
  }
  return (
    <div className="w-screen h-screen flex relative ">
      <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center">
        <div className="w-9/12 h-full ml-10">
          <div className=" w-full mt-5">
            <img src="assets/logo.svg" alt="none" />
          </div>
          <div className=" w-full h-36 flex items-center">
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step1</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step2</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step3</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step4</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
            <div className="w-32 h-12 justify-evenly pl-1 flex flex-col">
              <span className="ml-2 text-[#242D43] font-manrope">Step5</span>
              <div class="w-28 h-2 bg-[#D8E0EF] rounded-full "></div>
            </div>
          </div>

          <h1 className="font-medium font text-6xl ">Get more jealous</h1>
          <h3 className="font-normal font text-4xl ">
            and more excellent jobs
          </h3>
          <p className="w-2/3 font-manrope font-semibold text-[#908F94] mt-3">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search.
          </p>
          <p className="font-outfit text-[#908F94] my-3 font-normal">
            Select who are you:
          </p>
          {/* 1 */}
          <div className="w-full h-24 flex rounded-xl"
          style={{border:selectRoleColor=="1"?"2px solid #AE70FF":"2px solid #D8E0EF" }}
          >
            <div className=" w-9 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-1/2 h-24 rounded-full"
                onClick={()=>{
                  handleSelectRole("model")
                }}
              />
            </div>
            <div className=" w-10/12 flex flex-col justify-center">
              <p className="pl-2 font-medium font text-2xl">I’m a model</p>
              <p className="pl-2 font-manrope font-semibold text-[#908F94] text-xs">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search.
              </p>
            </div>
            <div className=" w-24 flex justify-center items-center">
              <img src="assets/pic3.svg" alt="none" />
            </div>
          </div>
          {/* 2 */}
          <div className="w-full h-24  flex rounded-xl my-4"
           style={{border:selectRoleColor=="2"?"2px solid #AE70FF":"2px solid #D8E0EF" }}
          >
            <div className=" w-9 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-1/2 h-24 bg-slate-600 rounded-full"
                onClick={()=>{
                  handleSelectRole("agency")
                }}
              />
            </div>
            <div className=" w-10/12 flex flex-col justify-center">
              <p className="pl-2 font-medium font text-2xl">
                We’re Advertising agency
              </p>
              <p className="pl-2 font-manrope font-semibold text-[#908F94] text-xs">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search.
              </p>
            </div>
            <div className=" w-24 flex justify-center items-center">
              <img src="assets/pic3.svg" alt="none" />
            </div>
          </div>
          {/* 3 */}
          <div className="w-full h-24 flex rounded-xl"
          style={{border:selectRoleColor=="3"?"2px solid #AE70FF":"2px solid #D8E0EF" }}
          >
            <div className=" w-9 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-1/2 h-24 bg-slate-600 rounded-full"
                onClick={()=>{
                  handleSelectRole("director")
                }}
              />
            </div>
            <div className=" w-10/12 flex flex-col justify-center">
              <p className="pl-2 font-medium font text-2xl">
                I’m Casting director
              </p>
              <p className="pl-2 font-manrope font-semibold text-[#908F94] text-xs">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search.
              </p>
            </div>
            <div className=" w-24 flex justify-center items-center">
              <img src="assets/pic5.svg" alt="none" />
            </div>
          </div>
          <div className="bg-[#AE70FF] w-60 h-11 rounded-full flex justify-center items-center mt-5">
            <button className="text-white">Next Page</button>
            <img src="assets/pic4.svg" alt="none" className="ml-5" />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full ">
        <img
          src="assets/pic1.svg"
          alt="none"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" w-full h-15 absolute bottom-8 flex items-center flex-col">
        <div className="w-5/6 h-0.5 bg-[#E9ECF2]" />
        <div className="w-5/6 flex justify-between mt-4">
          <p className="text-[#848FAC] font-manrope font-medium">
            Copyright © 2023 — Stars of Tomorrow. All Rights Reserved
          </p>
          <p className="text-[#242D43] font-manrope font-medium">
            Terms and conditions | Polcy Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
