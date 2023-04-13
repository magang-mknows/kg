import { useGetAllDiscussion } from "@/hooks/Discussion/useGetAllDiscussion";
import SuspenseError from "@/modules/Common/SuspenseError";
import { FC, ReactElement } from "react";
import PopupModalDeleteDiscussion from "../../PopupModalDeleteDiscussion";
import PopupModalEditDiscussion from "../../PopupModalEditDiscussion";
import PopupModalReportDiscussion from "../../PopupModalReportDiscussion";
import PostCard from "./PostCard";

const Post: FC = (): ReactElement => {
  const { data } = useGetAllDiscussion();
  const postList = data?.data;

  return (
    <div>
      <section className="relative w-full py-4">
        {postList?.map((item: any, index: any) => (
          <div key={index}>
            <PostCard
              type="post"
              hasImage={false}
              countLikes={3}
              time="100 hari"
              userName="Bandi Sukanto"
              text={item.content}
              title={item.title}
            />
            <SuspenseError>
              <PopupModalEditDiscussion id={item.id} />
              <PopupModalDeleteDiscussion />
              <PopupModalReportDiscussion />
            </SuspenseError>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Post;
