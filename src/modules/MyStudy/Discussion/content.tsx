import { FC, ReactElement } from "react";
import Image from "next/image";
import profileDummy from "@/assets/diskusi/profile-dummy.svg";
import down from "@/assets/diskusi/down.svg";
import redo from "@/assets/diskusi/redo.svg";
import CardAuthor from "@/components/DiscussionMyStudy/cardDiscussion";
import CardComment from "@/components/DiscussionMyStudy/cardComment";

const ContentDiskusi: FC = (): ReactElement => {
  return (
    <>
      <CardAuthor
        title={"Manajemen Keuangan"}
        author={"Bakti Husada"}
        avatar={profileDummy}
        time={"20 menit"}
        content={"halo"}
        role={"mahasiswa"}
      />
      {/* reply */}
      <div className="flex flex-row gap-4">
        <p className="text-[#106FA4] font-[600] text-[16px]">3 Balasan</p>
        <Image src={down} alt={"down"} />
      </div>

      <CardComment
        styleCard="md:ml-14 ml-9 bg-[#F5F5F5]"
        title={"Manajemen Keuangan"}
        author={"Bakti Husada"}
        avatar={profileDummy}
        time={"20 menit"}
        content={
          "Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas"
        }
        role={"mahasiswa"}
      />
      {/* reply */}
      <div className="flex flex-row gap-4 ml-14">
        <p className="text-[#106FA4] font-[600] text-[16px]">3 Balasan</p>
        <Image src={down} alt={"down"} />
      </div>

      <CardComment
        styleCard="md:ml-28 ml-23 bg-[#F5F5F5]"
        title={"Manajemen Keuangan"}
        author={"Bakti Husada"}
        avatar={profileDummy}
        time={"20 menit"}
        content={
          "Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas"
        }
        role={"mahasiswa"}
      />

      {/* redo*/}
      <div className="flex flex-row gap-4 ml-28">
        <Image src={redo} alt={"redo"} />
        <p className="text-[#106FA4] font-[600] text-[16px]">Lihat 8 komentar lain</p>
      </div>
    </>
  );
};

export default ContentDiskusi;
