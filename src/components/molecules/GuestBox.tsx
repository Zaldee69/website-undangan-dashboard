import React from 'react'
import GuestBoxInput from '../atom/GuestBoxInput'
import WishBox from './WishBox'

const GuestBox = () => {
  return (
    <section>
      <div className=" flex mt-32  justify-center">
        <p className="bg-[#EFF5F3] px-10 p-5 xs:text-4xl border-y-2 font-beau block text-[#848383] text-6xl  ">
          Guest Box
        </p>
      </div>
      <GuestBoxInput/>
      <WishBox/>
    </section>
  )
}

export default GuestBox