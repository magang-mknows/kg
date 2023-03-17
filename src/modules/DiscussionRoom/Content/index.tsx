import { FC, ReactElement } from "react";
import Post from "./Post";
import Comment from "./Post/Coment";

import Search from "./Search";

const Content: FC = (): ReactElement => {
  return (
    <section className="bg-white dark:bg-[#222529] rounded-md shadow-sm py-8 px-8 ">
      <Search />
      <Post />
      <Comment />
    </section>
  );
};

export default Content;
