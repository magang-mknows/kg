import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import profileDummy from "@/assets/diskusi/profile-dummy.svg";
import like from "@/assets/diskusi/like.svg";
import comment from "@/assets/diskusi/comment.svg";
import send from "@/assets/diskusi/send.svg";
import file from "@/assets/diskusi/file.svg";
import circle from "@/assets/diskusi/circle.svg";
import more from "@/assets/diskusi/more.svg";
import edit from "@/assets/diskusi/edit.svg";
import down from "@/assets/diskusi/down.svg";
import redo from "@/assets/diskusi/redo.svg";
import { MdDelete } from "react-icons/md";

const ContentDiskusi: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="card px-10 py-8 bg-white border rounded-[8px] mb-4">
        <div className="profile flex flex-row gap-5 items-center">
          <Image src={profileDummy} alt={"img-profile"} />
          <div className="">
            <h1 className="text-[##171717] font-[600] text-[14px]">
              Manajemen Keuangan | Pertemuan 1
            </h1>
            <p className="font-[400] text-[12px] text-[#171717] flex flex-row gap-1">
              oleh <span className="text-[#2D9A41] ">Andri Hermawan (dosen)</span>{" "}
              <Image src={circle} alt={"circle"} />
              <span className="text-[#737373]">10 jam</span>
            </p>
          </div>
        </div>
        <p className="desc mt-8 text-[#171717] text-[14px] font-[400]">
          Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan
          dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas?
        </p>
        <div className="like-comment flex gap-5 text-[#737373] font-[500] text-[14px]">
          <p className="flex flex-row mt-8 gap-2 items-center">
            <Image src={like} alt={"like"} />
            Suka
          </p>
          <p className="flex flex-row mt-8 gap-2 items-center">
            <Image src={comment} alt={"comment"} />
            Balas
          </p>
        </div>
        <div className="comment  border rounded-[8px] mt-4 px-3 flex justify-end h-[44px]">
          <input
            type="text"
            className="w-full outline-none text-[14px] font-[400]"
            placeholder="Ketikan Balasan disini"
          />

          <div className="flex flex-row gap-4">
            <Image src={file} alt={"file"} />
            <Image src={send} alt={"send"} />
          </div>
        </div>
      </div>
      {/* reply */}
      <div className="flex flex-row gap-4">
        <p className="text-[#106FA4] font-[600] text-[16px]">3 Balasan</p>
        <Image src={down} alt={"down"} />
      </div>
      {/* card 2 */}
      <div className="card px-10 py-8 bg-[#F5F5F5] rounded-[8px] ml-14 mb-4 mt-8 relative">
        <div className="profile flex flex-row gap-5 items-center justify-between">
          <div className="kiri flex flex-row gap-4">
            <Image src={profileDummy} alt={"img-profile"} />
            <div className="">
              <h1 className="text-[##171717] font-[600] text-[14px]">
                Komentar: Manajemen Keuangan | Pertemuan 1
              </h1>
              <p className="font-[400] text-[12px] text-[#171717] flex flex-row gap-1">
                oleh <span className="text-[#2D9A41] ">Andri Hermawan (dosen)</span>{" "}
                <Image src={circle} alt={"circle"} />
                <span className="text-[#737373]">10 jam</span>
              </p>
            </div>
          </div>
          <button className="kanan" onClick={() => setOpen(open === true ? false : true)}>
            <Image src={more} alt={"more"} />
          </button>
        </div>
        {open && (
          <div className="flex min-w-max absolute justify-end w-full -ml-20 ">
            <div className=" bg-white px-6 py-4 rounded-[8px] flex flex-col gap-2 text-[#171717] font-[400] text-[16px]">
              <div className="flex flex-row gap-1 justify-start mb-2">
                <Image src={edit} alt={"edit"} />
                <p>Edit</p>
              </div>
              <div className="flex flex-row gap-1 ml-1">
                <MdDelete className="text-[#EE2D24] text-[20px]" />
                <p>Delete</p>
              </div>
            </div>
          </div>
        )}

        <p className="desc mt-8 text-[#171717] text-[14px] font-[400]">
          Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan
          dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas?
        </p>
        <div className="like-comment flex gap-5 text-[#737373] font-[500] text-[14px]">
          <p className="flex flex-row mt-8 gap-2 items-center">
            <Image src={like} alt={"like"} />
            Suka
          </p>
          <p className="flex flex-row mt-8 gap-2 items-center">
            <Image src={comment} alt={"comment"} />
            Balas
          </p>
        </div>
      </div>
      {/* reply */}
      <div className="flex flex-row gap-4 ml-14">
        <p className="text-[#106FA4] font-[600] text-[16px]">3 Balasan</p>
        <Image src={down} alt={"down"} />
      </div>
      {/* card 3 */}
      <div className="card px-10 py-8 bg-[#F5F5F5]  rounded-[8px] ml-28 mb-4 mt-8">
        <div className="profile flex flex-row gap-5 items-center justify-between">
          <div className="kiri flex flex-row gap-4">
            <Image src={profileDummy} alt={"img-profile"} />
            <div className="">
              <h1 className="text-[##171717] font-[600] text-[14px]">
                Komentar: Manajemen Keuangan | Pertemuan 1
              </h1>
              <p className="font-[400] text-[12px] text-[#171717] flex flex-row gap-1">
                oleh <span className="text-[#2D9A41] ">Andri Hermawan (dosen)</span>{" "}
                <Image src={circle} alt={"circle"} />
                <span className="text-[#737373]">10 jam</span>
              </p>
            </div>
          </div>
          <div className="kanan">
            <Image src={more} alt={"more"} />
          </div>
        </div>
        <p className="desc mt-8 text-[#171717] text-[14px] font-[400]">
          Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan
          dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas?
        </p>
        <div className="like-comment flex gap-5 text-[#737373] font-[500] text-[14px]">
          <p className="flex flex-row mt-8 gap-2 items-center">
            <Image src={like} alt={"like"} />
            Suka
          </p>
          <p className="flex flex-row mt-8 gap-2 items-center">
            <Image src={comment} alt={"comment"} />
            Balas
          </p>
        </div>
      </div>
      {/* redo*/}
      <div className="flex flex-row gap-4 ml-28">
        <p className="text-[#106FA4] font-[600] text-[16px]">Lihat 8 komentar lain</p>
        <Image src={redo} alt={"redo"} />
      </div>
    </>
  );
};

export default ContentDiskusi;
