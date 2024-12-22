import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

function Card() {
  return (
    <div className="bg-white w-full py-[10rem] px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl p-4 my-4 rounded-lg flex flex-col hover:scale-105 duration-300">
          <img src={single} alt="" className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="font-bold text-center text-2xl py-8">Single user</h2>
          <p className="font-bold text-4xl  text-center ">149$</p>
          <div className=" font-medium text-center">
            <p className="py-2 border-b mt-8">500 GB Storage</p>
            <p className="py-2 border-b ">1 Granted User </p>
            <p className="py-2 border-b ">Send up to 2 GB</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[200px] rounded-md py-3 my-6 font-medium mx-auto ">
            Start Trail
          </button>
        </div>
        <div className="bg-gray-100 w-full shadow-xl p-4 my-4 rounded-lg flex flex-col hover:scale-105 duration-300">
          <img src={double} alt="" className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="font-bold text-center text-2xl py-8">double user</h2>
          <p className="font-bold text-4xl  text-center ">149$</p>
          <div className=" font-medium text-center">
            <p className="py-2 border-b mt-8">500 GB Storage</p>
            <p className="py-2 border-b ">1 Granted User </p>
            <p className="py-2 border-b ">Send up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md py-3 my-6 font-medium mx-auto ">
            Start Trail
          </button>
        </div>
        <div className="w-full shadow-xl p-4 my-4 rounded-lg flex flex-col hover:scale-105 duration-300">
          <img src={triple} alt="" className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="font-bold text-center text-2xl py-8">triple user</h2>
          <p className="font-bold text-4xl  text-center ">149$</p>
          <div className=" font-medium text-center">
            <p className="py-2 border-b mt-8">500 GB Storage</p>
            <p className="py-2 border-b ">1 Granted User </p>
            <p className="py-2 border-b ">Send up to 2 GB</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[200px] rounded-md py-3 my-6 font-medium mx-auto ">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
