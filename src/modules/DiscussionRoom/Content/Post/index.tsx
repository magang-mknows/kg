import { FC, ReactElement } from "react";
import PostCard from "./PostCard";

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
