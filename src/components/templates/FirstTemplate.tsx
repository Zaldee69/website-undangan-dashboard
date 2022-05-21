import { RiInstagramFill, RiTwitterFill, RiFacebookFill } from "react-icons/ri";
import GiftModal, { GiftModalButton } from "../atom/GiftModal";
import Countdown from "../molecules/Countdown";
import Footer from "../molecules/Footer";
import GuestBox from "../molecules/GuestBox";
import LoveStory from "../molecules/LoveStory";
import Protocol from "../molecules/Protocol";
import WeddingEvent from "../molecules/WeddingEvent";
import Gallery from "./../molecules/Gallery";
import LazyImage from "../atom/LazyImage";
import Cover from './../atom/Cover';
import { useState, useEffect } from 'react';

export const FirstTemplate = () => {

  const [isScroll, setIsScroll] = useState<boolean>(false)


  useEffect(() => {
    disableScroll()
  }, [])

  const disableScroll = () => {
    window.scrollTo(0, 0);
   const  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

   window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
};
  }

  const enabledScroll = () => {
    window.onscroll = function() {};
    setIsScroll(true)
  }

  return (
    <div className="overflow-hidden  relative pb-40">
      <Cover isScroll={isScroll} enabledScroll={enabledScroll} />
      <GiftModalButton />
      <div className="relative shadow-lg">
        <GiftModal />
        <LazyImage
          width="100%"
          className="object-cover w-full h-screen"
          src="/assets/images/1.jpg"
        />

        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="absolute  justify-center items-center w-full  flex flex-col gap-10 h-full top-0"
        >
          <h1 className="font-beau sm:text-5xl xs:text-6xl xxsm:text-4xl md:text-8xl ss:text-7xl  xl:text-9xl text-white">
            Satrio & Mitsuha
          </h1>
          <span className="text-white text-3xl xs:text-xl  ss:text-2xl font-quick border-t py-3 border-b tracking-widest">
            WE'RE GETTING MARRIED
          </span>
        </div>
        <div className="absolute flex w-full items-center justify-center  bottom-0">
          <div className="flex flex-col items-center rounded-tl-full opacity-60 rounded-tr-full justify-center xs:h-32 xs:w-60 h-40 w-80 bg-white">
            <span className="font-beau mt-5 xs:text-4xl text-5xl opacity-100">
              Save the date
            </span>
            <span className="font-quick text-xl">23 Dec 2020</span>
          </div>
        </div>
      </div>
      <article className="lg:p-32 xs:px-10 ss:px-10  md:px-10 xs:py-20">
        <div className="shadow-lg ss:shadow-none xs:shadow-none">
          <div className="grid-cols-2 grid xs:grid-cols-1 ss:grid-cols-1">
            <div>
              <LazyImage
                className="xl:h-[465px] md:h-full w-full object-top object-cover"
                src="assets/images/6.jpg"
              />
            </div>
            <div className="bg-[#F7FAF9] shadow-lg p-10">
              <p className="font-quick font-semibold">THE GROOM</p>
              <span className="font-quick font-light block text-lg mt-5">
                Hi i am Satrio, Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Fugiat aliquid atque unde vitae provident rem
                ex sunt, omnis officia possimus similique laudantium,
                repudiandae quae, porro optio iure voluptates veritatis magni
                officia possimus similique laudantium, repudiandae quae, porro
                optio iure voluptates veritatis magni.
              </span>
              <p className="font-beau text-3xl mt-5">
                - Satrio Lowo Totonegoro
              </p>
              <div className="flex flex-row mt-10 gap-1">
                <a
                  href=""
                  className="bg-[#70A79C] inline-block p-2 rounded-full"
                >
                  <RiInstagramFill color="#fff" size={18} />
                </a>
                <a
                  href=""
                  className="bg-[#70A79C] inline-block p-2 rounded-full"
                >
                  <RiFacebookFill color="#fff" size={18} />
                </a>
                <a
                  href=""
                  className="bg-[#70A79C] inline-block p-2 rounded-full"
                >
                  <RiTwitterFill color="#fff" size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row ss:shadow-lg xs:shadow-lg ss:mt-10 xs:mt-10">
            <div className="grid-cols-2 grid xs:grid-cols-1 ss:grid-cols-1">
              <div className="bg-[#F7FAF9] w-full p-10">
                <p className="font-quick font-semibold text-right">THE BRIDE</p>
                <span className="font-quick font-light block text-right text-lg mt-5">
                  Hi i am Mitsuha, Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Fugiat aliquid atque unde vitae provident
                  rem ex sunt, omnis officia possimus similique laudantium,
                  repudiandae quae, porro optio iure voluptates veritatis magni
                  officia possimus similique laudantium, repudiandae quae, porro
                  optio iure voluptates veritatis magni.
                </span>
                <p className="font-beau text-3xl mt-5 text-right">
                  Mitsuha Paddlepop -
                </p>
                <div className="flex justify-end flex-row mt-10 gap-1">
                  <a
                    href=""
                    className="bg-[#70A79C] inline-block p-2 rounded-full"
                  >
                    <RiInstagramFill color="#fff" size={18} />
                  </a>
                  <a
                    href=""
                    className="bg-[#70A79C] inline-block p-2 rounded-full"
                  >
                    <RiFacebookFill color="#fff" size={18} />
                  </a>
                  <a
                    href=""
                    className="bg-[#70A79C] inline-block p-2 rounded-full"
                  >
                    <RiTwitterFill color="#fff" size={18} />
                  </a>
                </div>
              </div>
              <div>
                <LazyImage
                  className="xl:h-[455px] md:h-full w-full  xl:object-cover"
                  src="assets/images/7.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <section>
        <Countdown />
      </section>
      <LoveStory />
      <Protocol />
      <WeddingEvent />
      <Gallery />
      <GuestBox />
      <Footer />
    </div>
  );
};
