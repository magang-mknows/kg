import { FC, ReactElement } from "react";
import Card from "@/components/Common/Card";
import Dummy from "@/assets/dummy.png";
import { useRecoilValue } from "recoil";
import {InformationState} from "@/stores/Landing";

const dataDummy: { id: number; deskripsi: string; judul: string; tag: string }[] = [
  {
    id: 1,
    deskripsi:
      "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
    judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
    tag: "Programmer",
  },
  {
    id: 2,
    deskripsi:
      "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
    judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
    tag: "Pertanian",
  },
  {
    id: 3,
    deskripsi:
      "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
    judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
    tag: "Ekonomi",
  },
  {
    id: 4,
    deskripsi:
      "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
    judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
    tag: "Programmer",
  },
];

const tagColor: { id: number; tag: string; color: string }[] = [
  { id: 1, tag: "Programmer", color: "#FEDBD7" },
  { id: 2, tag: "Pertanian", color: "#E3FBDA" },
  { id: 3, tag: "Ekonomi", color: "#FEF6D0" },
];

const InformationSection: FC = (): ReactElement => {
  const getInformation = useRecoilValue(InformationState);
  const handleColor = (tag: string): string => {
    let color = "";
    tagColor.map((tagText) => {
      if (tagText.tag == tag) {
        color = tagText.color;
      }
    });
    return color;
  };

  return (
    <section className="w-full px-16 pb-32 pt-24">
      <h1 className="text-center text-5xl lg:text-5xl md:text-3xl font-bold mb-24 text-[#000000] dark:text-[#f9feff]">
        Informasi Untuk Membantu Karirmu
      </h1>
      <div className="flex justify-between grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-5 md:gap-x-5 md:gap-y-5 gap-y-5">
        {getInformation.slice(0, 3).map((dummy,i) => {
          const color = handleColor(dummy.tag);
          return (
            <Card
              key={i}
              className="border rounded-lg px-3 shadow-md"
              src={Dummy}
              icon={
                <div
                  className="my-4"
                  style={{ width: "180px", background: `${color}`, borderRadius: "8px" }}
                >
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#404040",
                    }}
                    className="text-center"
                  >
                    #{dummy.tag}
                  </p>
                </div>
              }
              hasImage={true}
              titleStyle={"text-xl font-bold mt-1"}
              title={dummy.judul}
            >
              <p className="w-full text-base font-medium mt-3.5" style={{ color: "#A3A3A3" }}>
                {dummy.deskripsi.substring(0, 226)}...
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default InformationSection;
