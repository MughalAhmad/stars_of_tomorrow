import {useState} from 'react';
import "../style.css";
import { useNavigate } from 'react-router-dom';

const LoginRegisterButton = () => {
  const navigate =useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const options = [
      'Login', 
      'Register'
    ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    console.log(`Selected: ${option}`);
    setIsOpen(false);
    option=="Login"?navigate("/"):navigate("/register")
  };
  return (
     <div className=" h-14 w-56  right-32 top-14 flex  bg-[#3A445F] justify-between rounded-full items-center">
        <img src="assets/pic11.svg" alt="none" className="ml-2 w-10 h-10"/>
      <button
        type="button"
        className="inline-flex justify-center w-full items-center md:text-lg text-md font-outfit text-[#D8E0EF]  outline-none "
        id="options-menu"
        onClick={handleToggle}

      >
        Login / Register
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute w-56 right-0 mt-40 space-y-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LoginRegisterButton