import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import LazyImage from "../atom/LazyImage";

const WeddingEvent = () => {
  return (
    <section className=" ss:px-0 md:px-0 xs:px-0">
      <div className="relative">
       <LazyImage src="assets/images/3.jpg" alt="countdown" className="h-72 xs:h-60 w-full object-cover"/>
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="absolute flex flex-col justify-center top-0 w-full h-full items-center"
        >
          <p className="text-white font-quick xs:text-2xl text-3xl">
            We are going to...
          </p>
          <h1 className="text-white font-beau ss:text-7xl xs:text-6xl text-8xl">
            Celebrate our love
          </h1>
        </div>
      </div>
      <div className=" flex mt-32 justify-center">
        <p className="bg-[#EFF5F3] px-10 p-5   border-y-2 font-beau block text-[#848383] text-6xl xs:text-4xl  ">
          Wedding Events
        </p>
      </div>
      <div className="flex flex-row py-10 xs:flex-col xl:px-40 ss:flex-col xs:mx-5 xs:gap-3 item-center ss:mx-10 bg-white  shadow-lg mt-10 rounded-sm ">
        <div className="relative justify-center items-center flex">
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            className="absolute flex items-center flex-col gap-10  h-full w-5/6"
          >
            <GiBigDiamondRing className="mt-20" size={80} color="#fff" />
            <div className="text-white font-quick flex flex-col  items-center">
              <h1 className="text-white text-5xl font-beau">Akad Nikah</h1>
              <p className="text-sm mt-2">Minggu, 12 Desember 2021</p>
              <p className="text-sm">Pukul 09.00 WIB</p>
              <p className="text-sm">Jl. Panglima Suta Kanan RT 04 No 42</p>
              <p className="text-sm">Lihat lokasi &gt;</p>
            </div>
          </div>
          <img
            style={{ height: "528px" }}
            src="assets/images/3.jpg"
            className=" object-cover w-5/6"
            alt=""
          />
        </div>
        <div className="relative justify-center ss:mt-20  xs:mt-10 items-center flex">
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            className="absolute flex items-center flex-col gap-10  h-full w-5/6"
          >
            <GiBigDiamondRing className="mt-20" size={80} color="#fff" />
            <div className="text-white font-quick flex flex-col  items-center">
              <h1 className="text-white text-5xl font-beau">Akad Nikah</h1>
              <p className="text-sm mt-2">Minggu, 12 Desember 2021</p>
              <p className="text-sm">Pukul 09.00 WIB</p>
              <p className="text-sm">Jl. Panglima Suta Kanan RT 04 No 42</p>
              <p className="text-sm">Lihat lokasi &gt;</p>
            </div>
          </div>
          <img
            style={{ height: "528px" }}
            src="assets/images/3.jpg"
            className=" object-cover w-5/6"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col mt-10 items-center gap-3">
        <h1 className="text-center font-quick">Tambahkan ke : </h1>
        <button className="bg-[#9CC2BB] text-base px-5 py-2 rounded-full">
          Google Calendar
        </button>
      </div>
    </section>
  );
};

export default WeddingEvent;
