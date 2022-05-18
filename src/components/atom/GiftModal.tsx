import {BsGift} from "react-icons/bs"

const GiftModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm bg-transparent text-black border-none absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg pb-3 font-quick font-bold">
           Kirim Hadiah
          </h3>
          <hr/>
          <div className="flex flex-col items-center mt-5 font-quick">
            <BsGift size={40}/>
            <p className="font-bold text-lg">Kirim Hadiah</p>
            <span className="text-sm font-semibold" >Untuk Satrio & Mitsuha</span>
          </div>
         <div>
           <p className="font-bold text-sm">BCA</p>
           <span className="text-sm font-semibold" >1234567</span>
           <span className="text-sm font-semibold block" >a/n Satrio</span>
           
         </div>
        </div>
      </div>
    </div>
  );
};

export const GiftModalButton = () => {
  return (
    <label
      style={{ left: "50%", right: "50%", transform: "translate(-50%,  -50%)" }}
      htmlFor="my-modal-3"
      className="btn text fixed bottom-5 focus:bg-[#9CC2BB] bg-[#9CC2BB] w-32 border-none z-50   modal-button"
    >
      Kirim Hadiah
    </label>
  );
};

export default GiftModal;
