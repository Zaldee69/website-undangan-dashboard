const Protocol = () => {
  return (
    <section>
      <div className=" flex  mt-32 justify-center">
        <p className="bg-[#EFF5F3] px-10 p-5  xs:text-4xl border-y-2 font-beau block text-[#848383] text-6xl  ">
          Information
        </p>
      </div>
      <div className="flex flex-col ss:w-4/5 xs:w-4/5 w-2/4 mx-auto mt-10 mb-20 items-center">
        <h1 className="font-quick font-bold">Protocol Covid 19 </h1>
        <p className="text-center font-semibold text-lg mt-3 font-quick block">
          Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami
          harapkan kedatangan para tamu undangan agar menjalankan protokol yang
          berlaku.
        </p>
        <div className="flex gap-10 mt-10 flex-row">
          <div className=" flex flex-col gap-10">
            <div className="flex justify-center flex-col items-center">
              <img
                className="w-16"
                src="/assets/icons/SVG/Outline/COVID-Icons (2).svg"
                alt=""
              />
              <span className="font-quick text-base font-semibold text-center" >Wajib menggunakan masker</span>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                className="w-16"
                src="/assets/icons/SVG/Outline/COVID-Icons (22).svg"
                alt=""
              />
              <span className="font-quick text-base font-semibold text-center xl:mt-5" >Mencuci tangan dengan handsanitizer</span>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex justify-center  flex-col items-center">
              <img
                className="w-16 "
                src="/assets/icons/SVG/Outline/COVID-Icons (7).svg"
                alt=""
              />
              <span className="font-quick text-base font-semibold text-center mt-5" >Menjaga jarak minimal 1.5M</span>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                className="w-16"
                src="/assets/icons/SVG/Outline/COVID-Icons (9).svg"
                alt=""
              />
              <span className="font-quick text-base font-semibold text-center" >Jangan berkerumun</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;
