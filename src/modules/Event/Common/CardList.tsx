import Card from "@/components/Common/Card";
import { FC, ReactElement } from "react";
import { CardListProps } from "@/modules/Event/types";

const CardList: FC<CardListProps> = ({
  title,
  slug,
  image,
  price,
  status,
  day,
  date,
}): ReactElement => {
  return (
    <Card
      className="w-full bg-white rounded-lg h-fit"
      title={title}
      titleStyle="text-[16px]"
      src={image}
      href={"/acara-kampus/" + slug}
      hasImage={true}
      imgwidth={10}
      imgheight={10}
    >
      <div className="flex flex-col ">
        {price && (
          <h1 className="text-[18px] text-[#ED3768]">
            {price && price} {status && status}
          </h1>
        )}
        {status && <h1 className="text-[18px] text-[#3EB449]">{status && status}</h1>}

        <p className="text-[14px] text-[#A3A3A3]">
          <>
            {day}, {date}
          </>
        </p>
      </div>
    </Card>
  );
};

export default CardList;
