import React from "react";

const Protocol = () => {
  return (
    <section>
      <div className=" flex  mt-32 justify-center">
        <p className="bg-[#EFF5F3] px-10 p-5  xs:text-4xl border-y-2 font-beau block text-[#848383] text-6xl  ">
          Information
        </p>
      </div>
      <div className="flex flex-col w-2/4 mx-auto mt-10 items-center">
        <h1>Protocol Covid 19 </h1>
        <p className="text-center block">
          Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami
          harapkan kedatangan para tamu undangan agar menjalankan protokol yang
          berlaku.
        </p>
        <div className="flex flex-row">
          <div>
            <div>
              <img src="/assets/icons/SVG/Outline/COVID-Icons (2).svg" alt="" />
              <span>Wajib menggunakan masker</span>
            </div>
            <div>
              <img src="/assets/icons/SVG/Outline/COVID-Icons (2).svg" alt="" />
              <span>Wajib menggunakan masker</span>
            </div>
          </div>
          <div>
            {" "}
            <div>
              <img src="/assets/icons/SVG/Outline/COVID-Icons (2).svg" alt="" />
              <span>Wajib menggunakan masker</span>
            </div>
            <div>
              <img src="/assets/icons/SVG/Outline/COVID-Icons (2).svg" alt="" />
              <span>Wajib menggunakan masker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;
