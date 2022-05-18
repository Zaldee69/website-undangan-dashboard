import React from "react";

const Gallery = () => {
  return (
    <section className="xl:px-20 md:px-10 xs:px-5 xl:w-full">
      <div className=" flex  mt-32 justify-center">
        <p className="bg-[#EFF5F3] px-10 p-5  xs:text-4xl border-y-2 font-beau block text-[#848383] text-6xl  ">
          Our Gallery
        </p>
      </div>
      <div className="flex flex-row md:justify-center gap-3 mt-10 ss:justify-center xs:justify-center flex-wrap">
        <img className="xl:w-72 md:w-80 h-64 ss:w-80 hover:scale-105 ease-in duration-200 object-cover cursor-pointer"  src="/assets/images/1.jpg" alt="" />
        <img className="xl:w-72 md:w-80 h-64 ss:w-80 hover:scale-105 ease-in duration-200 object-cover cursor-pointer " src="/assets/images/2.jpg" alt="" />
        <img className="xl:w-72 md:w-80 h-64 ss:w-80 hover:scale-105 ease-in duration-200 object-cover cursor-pointer " src="/assets/images/3.jpg" alt="" />
        <img className="xl:w-72 md:w-80 h-64 ss:w-80 hover:scale-105 ease-in duration-200 object-cover cursor-pointer " src="/assets/images/4.jpg" alt="" />
        <img className="xl:w-72 md:w-80 h-64 ss:w-80 hover:scale-105 ease-in duration-200 object-cover cursor-pointer " src="/assets/images/6.jpg" alt="" />
        <img className="xl:w-72 md:w-80 h-64 ss:w-80 hover:scale-105 ease-in duration-200 object-cover cursor-pointer " src="/assets/images/7.jpg" alt="" />
        <img className="xl:w-72 md:w-80 h-64 ss:w-80 hover:scale-105 ease-in duration-200 object-cover cursor-pointer " src="/assets/images/5.jpg" alt="" />
        <img className="xl:w-72 md:w-80 h-64 ss:w-80 hover:scale-105 ease-in duration-200 object-cover cursor-pointer " src="/assets/images/5.jpg" alt="" />
      </div>
    </section>
  );
};

export default Gallery;
