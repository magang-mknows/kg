import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import circle from "@/assets/diskusi/circle.svg";
import like from "@/assets/diskusi/like.svg";
import comment from "@/assets/diskusi/comment.svg";
import { cardAuthor } from "./type";
import edit from "@/assets/diskusi/edit.svg";
import { MdDelete } from "react-icons/md";
import more from "@/assets/diskusi/more.svg";

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
    </>
  );
};
export default CardDiscussion;
