import { FC, ReactElement } from "react";
import Post from "./Post";
import Comment from "./Post/Coment";

import Search from "./Search";

import PopupModalCreateDiscussion from "../PopupModalCreateDiscussion";
import PopupModalDeleteDiscussion from "../PopupModalDeleteDiscussion";
import PopupModalEditDiscussion from "../PopupModalEditDiscussion";
import SuspenseError from "@/modules/Common/SuspenseError";

const Content: FC = (): ReactElement => {
  return (
    <section className="bg-white dark:bg-[#1B1E21] rounded-md shadow-sm py-8 px-8 ">
      <Search />
      <Post />
      <Comment />
      <SuspenseError>
        <PopupModalEditDiscussion />
        <PopupModalCreateDiscussion />
        <PopupModalDeleteDiscussion />
      </SuspenseError>
    </section>
  );
};

export default Content;
