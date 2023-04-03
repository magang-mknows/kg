import { FC, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "@/components/Common/Modal";
import { PopupProfilProps } from "./type";
import Like from "@/assets/leaderboard/like.svg";
import Chat from "@/assets/leaderboard/chat.svg";
import Clock from "@/assets/leaderboard/clock.svg";
import Circle from "@/assets/leaderboard/circle.svg";
import Building from "@/assets/leaderboard/building.svg";
import { usePopupGetUser } from "@/hooks/Leaderborad/usePopupGetUser";

const PopupProfil: FC<PopupProfilProps> = ({
  lookup,
  onClose,
  widthModal,
  ...props
}): ReactElement => {
  const data = [
    {
      src: Like,
      title: "Jumlah like yang didapat",
      desc: 100,
      colorBg: "bg-[#CDF5FA]",
      colorText: "text-[#106FA4]",
    },
    {
      src: Chat,
      title: "Jumlah Diskusi",
      desc: 50.0,
      colorBg: "bg-[#FEF6D0]",
      colorText: "text-[#FAB317]",
    },
    {
      src: Clock,
      title: "IPK",
      desc: "4.00",
      colorBg: "bg-[#E3FBDA]",
      colorText: "text-[#3EB449]",
    },
    {
      src: Building,
      title: "Sertifikat",
      desc: "10.000",
      colorBg: "bg-[#FEDBD7]",
      colorText: "text-[#ED3768]",
    },
  ];

  return (
    <Modal lookup={lookup as boolean} withClose={true} widthModal={widthModal} onClose={onClose}>
      <div>
        <h1 className="mb-5 text-[#737373] font-[500] text-[18px]">
          Rank <span className="text-[#106FA4] font-[600] text-[28px]">{props.index}</span> Global
        </h1>
        <div className="ml-5 flex flex-row outline justify-between outline-[#E5E5E5] bg-[#FAFAFA] rounded-[8px] px-3 h-[125px] w-[636px] items-center">
          <div className="flex items-center gap-7">
            <Image
              src={props.img as unknown as StaticImageData}
              alt={"avatar"}
              className="w-24 h-24"
            />
            <div className="">
              <p className="text-[#171717] font-[600] text-[24px]">{props.name}</p>
              <div className="flex flex-row text-[#737373] text-[20px] font-[500] gap-2">
                <p>Teknik</p>
                <Image src={Circle} alt={"circle"} />
                <p>Semester 1</p>
              </div>
            </div>
          </div>
          <div className="flex item-center">
            <button className="bg-[#FAB317] text-white text-[16px] font-[600] rounded-[8px] px-2 py-1">
              {props.score} Poin
            </button>
          </div>
        </div>
        <div className="content w-full mt-5">
          <div className="flex flex-row w-full justify-around flex-wrap">
            {data.map((items, i) => (
              <div
                key={i}
                className={`px-3 py-3 ${items.colorBg} gap-4 rounded-[8px] w-[310px] h-[101px] flex flex-row items-center mb-5`}
              >
                <Image src={items.src} alt={"like"} className="w-18" />
                <div className={`text-[16px] font-[500] ${items.colorText}`}>
                  <p>{items.title}</p>
                  <p className="text-[24px]">{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="mb-5 ml-5 rounded-[8px] bg-[#106FA4] text-white text-[16px] font-[600] w-[636px] h-[56px]">
          Lihat Profile
        </button>
      </div>
    </Modal>
  );
};

export default PopupProfil;
