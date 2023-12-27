import React from 'react'

const Signup = ({state}) => {
  return (
    <div className="w-screen h-screen bg-red-200 flex">
    <div className="w-1/2 h-full bg-yellow-100 flex items-center justify-center">
    <div className="w-11/12 h-5/6 bg-orange-200 rounded-lg flex flex-col items-center">
      <h1 className="text-5xl   text-white font-bold py-3">Signup</h1>
      <div className=" flex flex-col w-1/2 mb-2">
      <label className="text-xl py-2 px-1  font-bold text-white ">First-Name</label>
      <input type="email" placeholder="Enter your email" className="w-full h-12 rounded-lg p-1 outline-none"/>
      </div>
      <div className=" flex flex-col w-1/2 mb-2">
      <label className="text-xl py-2 px-1  font-bold text-white ">Last-Name</label>
      <input type="email" placeholder="Enter your email" className="w-full h-12 rounded-lg p-1 outline-none"/>
      </div>
      <div className=" flex flex-col w-1/2 mb-2">
      <label className="text-xl py-2 px-1  font-bold text-white ">E-mail</label>
      <input type="email" placeholder="Enter your email" className="w-full h-12 rounded-lg p-1 outline-none"/>
      </div>
      <div className=" flex flex-col w-1/2 mb-2 ">
      <label className="text-xl py-2 px-1  font-bold text-white ">Password</label>
      <input type="password" placeholder="Enter your email" className="w-full h-12 rounded-lg p-1 outline-none"/>
      </div>
      <div className=" flex flex-col w-1/2 mb-2">
      <label className="text-xl py-2 px-1  font-bold text-white ">Confirm-Password</label>
      <input type="password" placeholder="Enter your email" className="w-full h-12 rounded-lg p-1 outline-none"/>
      </div>
      <div className=" flex flex-col w-1/2 ">
      <label className="text-xl py-2 px-1  font-bold text-white ">Role</label>
      <select className="w-full h-12 rounded-lg p-1 outline-none">
        <option selected></option>
        <option>Trainee</option>
        <option>Instructor</option>
      </select>
      </div>
      <p className="text-white font-bold py-2">Already have an account<span className="cursor-pointer hover:text-orange-500 ml-2"
      onClick={()=>{
       void state(true)
      }}
      >{"Login"}</span></p>
      <button className="bg-orange-500 w-36 h-10 text-xl text-white rounded-xl mt-1 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-2">Signup</button>
    </div>
    </div>
    <div className="w-1/2 h-full bg-yellow-500">
      <img src="assets/img2.jpg" alt="none" className="w-full h-full"/>

    </div>

   </div>
  )
}

export default Signup