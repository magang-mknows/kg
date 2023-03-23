import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import circle from "@/assets/diskusi/circle.svg";
import like from "@/assets/diskusi/like.svg";
import comment from "@/assets/diskusi/comment.svg";
import edit from "@/assets/diskusi/edit.svg";
import deleteICon from "@/assets/diskusi/delete.svg";
import { MdDelete } from "react-icons/md";
import { cardAuthor } from "./type";
import more from "@/assets/diskusi/more.svg";
import PopupModal from "../Common/PopupModal";
import { usePopupEditDiscussion } from "@/hooks/Common/usePopupEditDiscussion";
import { usePopupDeleteDiscussion } from "@/hooks/Common/usePopupDeleteDiscussion";

const CardDiscussion: FC<cardAuthor> = ({
  title,
  avatar,
  time,
  content,
  author,
  role,
  styleCard,
}): ReactElement => {
  const [open, setOpen] = useState(false);
  const { setPopupEditStatus, getPopupEditStatus } = usePopupEditDiscussion();
  const { setPopupDeleteStatus, getPopupDeleteStatus } = usePopupDeleteDiscussion();
  return (
    <>
      <div
        className={`card px-10 py-8 bg-[#F5F5F5] rounded-[8px] ml-14 mb-4 mt-8 relative dark:bg-[#1B1E21] dark:border-[#1B1E21] ${styleCard}`}
      >
        <div className="profile flex flex-row gap-5 items-center justify-between">
          <div className="kiri flex flex-row gap-4">
            <Image src={avatar} alt={"img-profile"} />
            <div className="">
              <h1 className="text-[##171717] font-[600] text-[14px]">Komentar: {title}</h1>
              <p className="font-[400] text-[12px] text-[#171717] flex flex-row gap-1 dark:text-white/80">
                oleh{" "}
                <span className="text-[#2D9A41] dark:text-yellow-500">
                  {author} <span>({role})</span>
                </span>
                <Image src={circle} alt={"circle"} />
                <span className="text-[#737373]">{time}</span>
              </p>
            </div>
          </div>
          <button className="kanan" onClick={() => setOpen(open === true ? false : true)}>
            <Image src={more} alt={"more"} />
          </button>
        </div>
        {open && (
          <div className="flex min-w-max absolute justify-end w-full -ml-20  ">
            <div className=" bg-white px-6 py-4 rounded-[8px] flex flex-col gap-2 text-[#171717] font-[400] text-[16px] dark:bg-[#222529] dark:text-white/80">
              <button
                className="flex flex-row gap-1 justify-start mb-2"
                onClick={() => setPopupEditStatus(true)}
              >
                <Image src={edit} alt={"edit"} />
                <p>Edit</p>
              </button>
              <button
                className="flex flex-row gap-1 ml-1"
                onClick={() => setPopupDeleteStatus(true)}
              >
                <MdDelete className="text-[#EE2D24] text-[20px]" />
                <p>Delete</p>
              </button>
            </div>
          </div>
        )}

        <p className="desc mt-8 text-[#171717] text-[14px] font-[400] dark:text-white/80">
          {content}
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
      <div className="edit-popup">
        <PopupModal
          lookup={getPopupEditStatus}
          onClose={() => setPopupEditStatus(false)}
          popupTitle={"Edit Komentar"}
          description={"Ubah Komentar"}
        >
          <p>Maks. 1000 karater</p>
          <button>Ubah</button>
        </PopupModal>
      </div>
      <div className="delete-popup">
        <PopupModal
          icon={deleteICon}
          lookup={getPopupDeleteStatus}
          onClose={() => setPopupDeleteStatus(false)}
          popupTitle={"Konfirmasi"}
          description={"Apakah anda ingin menghapus postingan ini?"}
        >
          <div className="flex flex-row gap-6 mt-4">
            <button className="bg-white outline outline-[#106FA4] h-[46px] w-[236px] text-[#106FA4] font-[600] text-[16px] rounded-[8px]">
              Ya, Hapus
            </button>
            <button className="bg-[#106FA4] h-[46px] w-[236px] text-white font-[600] text-[16px] rounded-[8px]">
              Tidak
            </button>
          </div>
        </PopupModal>
      </div>
    </>
  );
};
export default CardDiscussion;
