import { useGetAllDiscussion } from "@/hooks/Discussion/useGetAllDiscussion";
import { FC, ReactElement } from "react";
import PostCard from "./PostCard";

const Post: FC = (): ReactElement => {
  const { data } = useGetAllDiscussion();
  const postList = data?.data;

  return (
    <div>
      <section className="relative w-full py-4">
        {postList?.map((item, index) => (
          <PostCard
            key={index}
            type="post"
            hasImage={false}
            countLikes={3}
            time="100 hari"
            userName="Bandi Sukanto"
            text={item.content}
            title={item.title}
          />
        ))}
      </section>
    </div>
  );
};

export default Post;
