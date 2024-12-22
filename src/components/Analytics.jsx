import React from "react";
import laptop from "../assets/laptop.jpg";
function Analytics() {
  return (
    <div className="w-full py-16 px-4 bg-white ">
      <div className="max-w-[1240px] m-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md py-3 my-6 font-medium mx-auto md:mx-0 ">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
