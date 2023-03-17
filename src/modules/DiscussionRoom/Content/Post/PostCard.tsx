import { FC, Fragment, ReactElement } from "react";
import Image from "next/image";

import userIcon from "@/assets/discussionRoom/userIcon.svg";
import PostOption from "./PostOption";
import { AiFillCloseCircle, AiFillLike } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { TCommentCardProps } from "./Coment/type";

import dummyCourse from "@/assets/dashboard/dummyCourse.png";

const CommentCard: FC<TCommentCardProps> = ({
  hasImage,
  text,
  imgSource,
  userName,
  title,
  time,
  type,
  countLikes,
}): ReactElement => {
  return (
    <Fragment>
      <div className="px-5 md:px-8 lg:px-10 py-5 bg-white dark:bg-[#222529] border-2 dark:border-none rounded-md shadow-sm">
        <div className="flex justify-between">
          <section className=" border-neutral-100/60 flex gap-4 items-center mb-6">
            <Image src={userIcon} alt="userIcon" />
            <div className="flex flex-col">
              <h1 className="font-bold dark:text-neutral-100 text-neutral-800 text-xs md:text-sm">
                {userName}
              </h1>
              <p className="text-neutral-400 dark:text-white/80 text-xs">{time}</p>
            </div>
          </section>
          <PostOption />
        </div>
        <section className="text-neutral-900 text-sm">
          {hasImage && <Image src={imgSource} alt={`imageby${userName}`} className="w-40" />}
          <h1 className=" font-bold mb-3 text-sm md:text-base dark:text-neutral-100">{title}</h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm pr-0 md:pr-4 lg:pr-20 mb-6 md:mb-8 lg:mb-10">
            {text}
          </p>

          <div className="flex items-center gap-6">
            <section className="flex items-center gap-2 text-primary-500 dark:text-[#17A2B8]">
              <AiFillLike />
              <h1 className="text-xs md:text-sm ">{countLikes}</h1>
            </section>
            <section className="flex items-center gap-2 text-primary-500 dark:text-[#17A2B8]">
              <GoCommentDiscussion />
              <h1 className="text-xs md:text-sm">Balas</h1>
            </section>
          </div>
        </section>
      </div>
      {type == "post" && (
        <section className="relative w-fit my-5">
          <Image src={dummyCourse} alt="test" className="w-36" />
          <AiFillCloseCircle className="text-neutral-300  text-2xl md:text-3xl absolute top-0 -right-8" />
          <div className="bg-neutral-300 h-3 w-[200%] my-3 rounded-md shadow-sm">
            <span className="h-full w-[65%] bg-green-500 dark:bg-[#17A2B8] block"></span>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default CommentCard;
