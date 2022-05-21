
import LazyImage from './LazyImage';

interface Props {
    enabledScroll : () => void
    isScroll : boolean
}

const Cover : React.FC<Props> = ({enabledScroll,isScroll }) => {
  return (
    <div className={`absolute ${isScroll ? "-translate-y-full" : null} transition w-full duration-1000  top-0 z-50`}>
         <div className="relative shadow-lg">
        <LazyImage
          width="100%"
          className="object-cover w-full h-screen"
          src="/assets/images/1.jpg"
        />

        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="absolute  justify-center items-center w-full  flex flex-col gap-10 h-full top-0"
        >
             <span className="text-white text-3xl xs:text-xl  ss:text-2xl font-quick border-t py-3 border-b tracking-widest">
            UNDANGAN PERNIKAHAN
          </span>
          <h1 className="font-beau sm:text-5xl xs:text-6xl xxsm:text-4xl md:text-8xl ss:text-7xl  xl:text-9xl text-white">
            Satrio & Mitsuha
          </h1>
        </div>
        <div className="absolute flex w-full items-center justify-center  bottom-0">
          <button onClick={enabledScroll} className='text-white border px-14 py-2 font-beau mb-20 text-3xl' >Lets get start</button>
        </div>
      </div>
    </div>
  )
}

export default Cover