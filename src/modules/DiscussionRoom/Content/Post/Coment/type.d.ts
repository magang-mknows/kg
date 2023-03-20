export type TCommentCardProps = {
  hasImage: boolean;
  imgSource?: StaticImport;
  text?: string;
  title?: string;
  userName: string;
  time: string;
  countLikes: number;
  type: "post" | "comment";
};
