import { FC, ReactElement } from "react";
import Post from "./Post";
import Comment from "./Post/Coment";

import Search from "./Search";

import PopupModalCreateDiscussion from "../PopupModalCreateDiscussion";
import PopupModalDeleteDiscussion from "../PopupModalDeleteDiscussion";
import PopupModalEditDiscussion from "../PopupModalEditDiscussion";

const Content: FC = (): ReactElement => {
  return (
    <section className="bg-white dark:bg-[#1B1E21] rounded-md shadow-sm py-8 px-8 ">
      <Search />
      <Post />
      <Comment />
      <PopupModalCreateDiscussion />
      <PopupModalEditDiscussion />
      <PopupModalDeleteDiscussion />
    </section>
  );
};

export default Content;
