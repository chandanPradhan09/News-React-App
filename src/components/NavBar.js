import React from "react";
export default function NavBar() {
  
  return (
    <div className="flex justify-between fixed w-full px-8 z-10 bg-white items-center h-16 text-xl border-b-2">
      <div className="compName">
          <img src="https://raw.githubusercontent.com/chandanPradhan09/codes/main/HTMl/logo-final.png" alt="" className="w-24 my-4"/>
      </div>
      <ul className="flex font-bold">
        <li className="mx-4 cursor-pointer">Headline</li>
        <li className="mx-4 cursor-pointer">Jobs</li>
        <li className="mx-4 cursor-pointer">Education</li>
        <li className="mx-4 cursor-pointer">Entertainment</li>
        <li className="mx-4 cursor-pointer">Lifestyle</li>
        <li className="mx-4 cursor-pointer">Business</li>
      </ul>
      <div className="utility flex space-x-4 justify-end">
        {/* <div className="lang flex">
          <select name="Language" id="">
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">Odia</option>
          </select>
        </div> */}
        <input type="text" id="search" placeholder="Search Here" className="px-2 rounded-md w-1/2 border-2 outline-none border-blue-200"/>
        <button id="btn" className="border-2 outline-2 outline-black bg-blue-500 rounded-xl hover:bg-blue-600 text-white p-2 px-5">Search</button>
      </div>
    </div>
  );
}
