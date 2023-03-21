import { FC, ReactElement } from "react";
import Image from "next/image";
import circle from "@/assets/diskusi/circle.svg";
import like from "@/assets/diskusi/like.svg";
import comment from "@/assets/diskusi/comment.svg";
import send from "@/assets/diskusi/send.svg";
import file from "@/assets/diskusi/file.svg";
import { cardAuthor } from "./type";

const CardDiscussion: FC<cardAuthor> = ({
  title,
  avatar,
  time,
  content,
  author,
  role,
}): ReactElement => {
  return (
    <>
      <div
        className={`card px-10 py-8 bg-white border rounded-[8px] mb-4 dark:bg-[#1B1E21] dark:border-[#1B1E21]`}
      >
        <div className="profile flex flex-row gap-5 items-center">
          <Image src={avatar} alt={"img-profile"} />
          <div className="">
            <h1 className="text-[##171717] font-[600] text-[14px]">{title}</h1>
            <p className="font-[400] text-[12px] text-[#171717] flex flex-row gap-1 dark:text-white/80">
              oleh{" "}
              <span className="text-[#2D9A41] dark:text-yellow-500">
                {author} <span>{role}</span>
              </span>
              <Image src={circle} alt={"circle"} />
              <span className="text-[#737373]">{time}</span>
            </p>
          </div>
        </div>
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
        {/* <div className="comment  border rounded-[8px] mt-4 px-3 flex justify-end h-[44px] dark:bg-[#222529]">
          <input
            type="text"
            className="w-full outline-none text-[14px] font-[400] dark:bg-[#222529]"
            placeholder="Ketikan Balasan disini"
          />

          <div className="flex flex-row gap-4">
            <Image src={file} alt={"file"} />
            <Image src={send} alt={"send"} />
          </div>
        </div> */}
      </div>
    </>
  );
};
export default CardDiscussion;
