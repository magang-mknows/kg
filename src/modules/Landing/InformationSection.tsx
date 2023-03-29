import { FC, ReactElement } from "react";
import Card from "@/components/Common/Card";
import { useInformation } from "@/hooks/Landing/useInformation";

const tagColor: { id: number; tag: string; color: string }[] = [
  { id: 1, tag: "Programmer", color: "#FEDBD7" },
  { id: 2, tag: "Pertanian", color: "#E3FBDA" },
  { id: 3, tag: "Ekonomi", color: "#FEF6D0" },
];

const InformationSection: FC = (): ReactElement => {
  const { getInformation } = useInformation();

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
    <section className="py-10 lg:px-20 px-8">
      <h1 className="text-center text-2xl lg:text-5xl md:text-3xl font-bold mb-10 text-[#000000] dark:text-[#f9feff]">
        Informasi Untuk Membantu Karirmu
      </h1>
      <div className="grid w-auto lg:grid-cols-3 md:grid-cols-1 lg:gap-x-10 md:gap-x-5 md:gap-y-5 gap-y-5">
        {getInformation.slice(0, 3).map((dummy, i) => {
          const color = handleColor(dummy.tag);
          return (
            <Card
              key={i}
              href="/sekilas-ilmu"
              className="border rounded-lg lg:p-8 shadow-md"
              src={dummy.image}
              imgStyle="w-full"
              icon={
                <div
                  className="my-4 lg:w-[180px] md:w-[180px] w-[150px]"
                  style={{ background: `${color}`, borderRadius: "8px" }}
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
                {dummy.deskripsi}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default InformationSection;
