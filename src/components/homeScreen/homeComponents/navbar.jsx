import {useState} from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [careerButton, setCareerButton] = useState(false)
    const check=()=>{
      console.log("hello")
      setCareerButton(true)
    }
    const options = [`Modeling ${'(0)'}`, `Advertising agencies ${'(0)'}` ,`Casting Directors ${'(0)'}`];
    const options1 = [`Full-Time ${'(0)'}`, `Part-Time ${'(0)'}` ,`Remote ${'(0)'}`,`Intership ${'(0)'}`,`Contract ${'(0)'}`];
    const options2 = ["Dashboard", "Messages" ,"offers","Settings","Logout"];


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
      <div className="bg-yellow-500 w-2/4 h-full flex justify-between items-center">
      <div className=" h-12   flex  bg-[#AE70FF] rounded-full  items-center relative"
      onClick={handleToggle}
      >
        <img src="assets/pic12.svg" alt="none" className="w-10 h-10 mx-2"/>
      <button
        type="button"
        className=" w-1/2 text-lg font-outfit text-[#D8E0EF] bg-[#AE70FF] rounded-full  "
        // id="options-menu"
      >
        All offers
       
      </button>
      <p className='text-[#AE70FF] w-auto bg-[#CFECF4] px-2 mx-2 text-xs rounded-full'>999+</p>
      <svg
          className="w-5 h-5 mx-2 text-white"
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
        <div className=" flex absolute w-96 h-56 left-0 top-20">
          <div className='w-3/5 h-full bg-[#AE70FF] rounded-l-xl text-white'>
            <h1 className='font-semibold text-sm pl-3 pt-3'>Offers category:</h1>
            {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-sm text-white cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
            
            </div>
            <div className='w-2/5 h-full bg-[#8c51d9] rounded-r-xl'>
            <h1 className='font-semibold text-sm pl-3 pt-3 text-white'>Employement Type:</h1>
            {options1.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-sm text-white cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
            </div>
        </div>
      )}
    </div>
        <a
          href="#"
          className="text-[#908F94] font-outfit hover:text-[#AE70FF] transition duration-300"
        >
          Casting directors
        </a>
        <a
          href="#"
          className="text-[#908F94] font-outfit hover:text-[#AE70FF] transition duration-300"
        >
          Advertising agencies
        </a>
        <a
          href="#"
          className="text-[#908F94] font-outfit hover:text-[#AE70FF] transition duration-300"
        >
          My Projects
        </a>
        <div className="w-32 py-2 h-auto relative"
      onClick={handleToggle}
      >
      <button
        type="button"
        className="inline-flex py-2 pl-2 justify-center w-full items-center text-lg font-outfit text-[#908F94] hover:text-white hover:bg-[#AE70FF] hover:rounded-full  "
        // id="options-menu"
      >
      My Carrer
         <svg
          className="w-5 h-5 mx-1 text-[#908F94] hover:text-white"
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
     

      {/* {isOpen && (
        <div className=" flex absolute w-96 h-56 left-0 top-20">
          <div className='w-3/5 h-full bg-[#AE70FF] rounded-l-xl text-white'>
            <h1 className='font-semibold text-sm pl-3 pt-3'>Offers category:</h1>
            {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-sm text-white cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
            
            </div>
            <div className='w-2/5 h-full bg-[#8c51d9] rounded-r-xl'>
            <h1 className='font-semibold text-sm pl-3 pt-3 text-white'>Employement Type:</h1>
            {options1.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-sm text-white cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
            </div>
        </div>
      )} */}
    </div>
      </div>

      <div className='bg-blue-500 w-1/3 h-full'>
      <div className=" h-12  w-1/3 flex  bg-[#3A445F] rounded-full  items-center relative"
      onClick={handleToggle}
      >
        <img src="assets/pic13.svg" alt="none" className="w-10 h-10 mx-2"/>
      <button
        type="button"
        className=" w-1/2 text-lg font-outfit text-[#D8E0EF] bg-[#3A445F] rounded-full  "
        // id="options-menu"
      >
        My account
       
      </button>
      <svg
          className="w-5 h-5 mx-2 text-white"
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
        <div className=" flex absolute w-96 h-56 left-0 top-20">
          <div className='w-3/5 h-full bg-[#AE70FF] rounded-xl text-white'>
            
            {options2.map((option) => (
              <>
              <img src='assets/pic13.svg' alt='none'/>
            <div
              key={option}
              className="px-4 py-2 text-sm text-white cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
            </>
          ))}
            
            </div>
        </div>
      )}
    </div>
      </div>


  </nav>
  )
}

export default Navbar