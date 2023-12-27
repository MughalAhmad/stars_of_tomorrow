import {useState} from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Login', 'Register'];
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSelect = (option) => {
      console.log(`Selected: ${option}`);
      setIsOpen(false);
    };
  return (
    <nav className="bg-gray-800 w-screen h-20 flex">
    <div className='bg-red-500 w-1/6 h-full flex justify-end'>
<img src='assets/logo1.svg' alt='none' className='w-2/4 h-full'/>
    </div>


      {/* Navigation Links */}
      <div className="bg-yellow-500 w-2/4 h-full flex justify-between">
      <div className=" h-16 w-64   flex  bg-[#AE70FF] justify-between rounded-full justify-evenly items-center relative"
      onClick={handleToggle}
      >
        <img src="assets/pic12.svg" alt="none" className="ml-2 w-10 h-10"/>
      <button
        type="button"
        className="inline-flex justify-center w-1/2 items-center text-lg font-outfit text-[#D8E0EF] bg-[#AE70FF] rounded-full  outline-none "
        id="options-menu"
        
      >
        All offers
       
      </button>
      <p>999</p>
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
        <a
          href="#"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          Casting directors
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          Advertising agencies
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          My Projects
        </a>
        <div className=" h-16 w-32  flex  bg-[#AE70FF] justify-between rounded-full items-center relative"
      onClick={handleToggle}
      >
      <button
        type="button"
        className="inline-flex justify-center w-full items-center text-lg font-outfit text-[#D8E0EF] bg-[#AE70FF] rounded-full  outline-none "
        id="options-menu"
        
      >
        All offers
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
      </div>

      <div className='bg-blue-500 w-1/3 h-full'>
r
      </div>


  </nav>
  )
}

export default Navbar