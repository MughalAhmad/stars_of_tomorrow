import {useState} from "react";
import "../../styles/style.css";
const Step1 = ({next,count}) => {
  const [role, setRole] = useState("");

  return (
   <>         

          <h1 className="font-medium font text-6xl ">Get more jealous</h1>
          <h3 className="font-normal font text-4xl ">
            and more excellent jobs
          </h3>
          <p className="md:w-2/3 w-full font-manrope font-semibold text-[#908F94] mt-3">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search.
          </p>
          <p className="font-outfit text-[#908F94] my-3 font-normal">
            Select who are you:
          </p>
          {/* 1 */}
          <label htmlFor="model" className="w-full md:h-24 h-fit flex rounded-xl transition-colors duration-300 ease-in-out border border-[#D8E0EF] focus-within:border-blue-500"
          >
            <div className=" w-9 flex justify-center items-center">
              <input
              id="model"
                type="radio"
                name="role"
                {...role=='model'? "checked":''} 
                className="w-1/2 h-24 rounded-full peer/model"
                onClick={()=>{
                  setRole("model")
                }}
              />
            </div>
            <div className="w-10/12 flex flex-col justify-center">
              <p className="pl-2 font-medium font text-2xl">I’m a model</p>
              <p className="pl-2 font-manrope font-semibold text-[#908F94] text-xs">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search.
              </p>
            </div>
            <div className=" w-24 flex justify-center items-center">
              <img src="assets/pic3.svg" alt="none" />
            </div>
          </label>
          {/* 2 */}
          <label htmlFor="agency" className="w-full md:h-24 h-fit  flex rounded-xl my-4 transition-colors duration-300 ease-in-out border border-[#D8E0EF] focus-within:border-blue-500"
          >
            <div className=" w-9 flex justify-center items-center">
              <input
              id="agency"
                type="radio"
                name="role"
                className="w-1/2 h-24 bg-slate-600 rounded-full"
                onClick={()=>{
                  setRole("agency")
                }}
              />
            </div>
            <div className="w-10/12 flex flex-col justify-center">
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
          </label>
          {/* 3 */}
          <label htmlFor="director" className="w-full md:h-24 h-fit flex rounded-xl transition-colors duration-300 ease-in-out border border-[#D8E0EF] focus-within:border-blue-500"
          >
            <div className=" w-9 flex justify-center items-center">
              <input
              id="director"
                type="radio"
                name="role"
                className="w-1/2 h-24 bg-slate-600 rounded-full"
                onClick={()=>{
                  setRole("director")
                }}
              />
            </div>
            <div className="md:w-10/12 w-full flex flex-col justify-center">
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
          </label>
            <button
            onClick={()=>{
              void next("STEP2")
              void count(2)
            }}            
            disabled={!(role)}
            className="text-white bg-[#AE70FF] rounded-full flex justify-center items-center mt-5 px-8 py-2 cursor-pointer disabled:bg-gray">
              <span>Next Page</span>
            <img src="assets/pic4.svg" alt="none" className="ml-5" />
            </button>
          </>
  );
};

export default Step1;
