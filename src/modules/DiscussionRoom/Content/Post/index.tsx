import { FC, ReactElement } from "react";
import userIcon from "@/assets/discussionRoom/userIcon.svg";
import Image from "next/image";
import { GoCommentDiscussion } from "react-icons/go";
import { AiFillCloseCircle, AiFillLike } from "react-icons/ai";
import PostOption from "./PostOption";
import PostCard from "./PostCard";

import dummyCourse from "@/assets/dashboard/dummyCourse.png";

const Post: FC = (): ReactElement => {
  return (
    <div>
      <section className="relative w-full py-4">
        <PostCard
          type="post"
          hasImage={false}
          countLikes={3}
          time="100 hari"
          userName="Bandi Sukanto"
          text="Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas?"
          title="Diskusi Manajemen Keuangan"
        />
      </section>
    </div>
  );
};

export default Post;
