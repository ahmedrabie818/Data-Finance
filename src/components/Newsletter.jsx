import React from "react";

function Newsletter() {
  return (
    <div className="w-full px-4 py-16 ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3  text-white ">
        <div className="lg:col-span-2">
          <h1 className=" font-bold md:text-4xl sm:text-3xl text-2xl py-3">
            Want tips and tricks to optimize your flow
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full ">
            <input
              type="text"
              className="flex w-full p-3 rounded-md text-black "
              placeholder="Enter your Email"
            />
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium  ml-4 my-6 px-6 py-3 ">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our
            <span className="text-[#00df9a]"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
