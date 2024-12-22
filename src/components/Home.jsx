import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div className="text-white">
        <div className="max-w[800px]  h-screen  flex  flex-col mx-auto w-full justify-center text-center mt-[-96px]">
          <p className="uppercase font-bold text-[#00df9a] p-2 ">
            Growing with data analytics
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold sm:py-4">
            Growing with data
          </h1>
          <p className=" md:text-5xl sm:text-4xl font-bold mb-4">
            fast , flexable finance for
            <span>
              <ReactTyped
                className="ml-2"
                backSpeed={140}
                typeSpeed={120}
                strings={[" BTB", " BTC", "SASS"]}
                loop
              />
            </span>
          </p>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            monitor Your data analytics to increase revenue for BTB, BTC& SASS
            platform .
          </p>

          <button className="bg-[#00df9a] w-[200px] rounded-md text-black py-3 mx-auto my-6 font-medium">
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
