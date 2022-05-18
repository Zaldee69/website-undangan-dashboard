import { IoMdPaperPlane } from "react-icons/io";

const GuestBoxInput = () => {
  return (
    <div className=" flex pb-20 xs:px-5 ss:px-5 justify-center items-center mt-10">
      <div className="form-control w-full rounded bg-white shadow-xl max-w-3xl p-10">
        <label className="label">
          <span className="label-text font-quick font-bold text-base">
            Nama
          </span>
        </label>
        <input
          type="text"
          placeholder="Masukkan Nama"
          className="input input-bordered w-full max-w-2xl placeholder:font-quic font-quick "
        />
        <label className="label">
          <span className="label-text font-quick font-bold text-base">
            Kedatangan
          </span>
        </label>
        <select className="select font-quick select-bordered w-full max-w-2xl">
          <option>Tidak Hadir</option>
          <option>Hadir</option>
        </select>
        <label className="label ">
          <span className="label-text font-quick font-bold  text-base">
            Pesan/Doa
          </span>
        </label>
        <textarea className="textarea w-full resize-none max-w-2xl font-quick textarea-bordered"></textarea>
        <button className=" border-none normal-case font-quick text-lg hover:bg-[#9CC2BB]  focus:bg-[#9CC2BB] btn bg-[#9CC2BB] mx-auto mt-10 w-52">
          Kirim <IoMdPaperPlane className="ml-2" size={30} />
        </button>
      </div>
    </div>
  );
};

export default GuestBoxInput;
