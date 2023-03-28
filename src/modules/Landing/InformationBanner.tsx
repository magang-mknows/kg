import Card from "@/layouts/Card";
import { FC, ReactElement } from "react";
import Image from "next/image";

import GlobalButton from "@/components/Common/GlobalButton";

import InfoLanding from "@/assets/landing/info-landing.svg";
import CardDot from "@/assets/landing/card-dot.svg";

const InformationBanner: FC = (): ReactElement => {
  return (
    <div className="flex lg:py-10">
      <Card img={InfoLanding} imgWidth={"w-full"} imgHeight={"h-full"}>
        <div className="flex flex-col lg:leading-[54px] gap-[14px] lg:gap-[28px] p-[32px] lg:px-[64px] place-content-center relative">
          <h1 className="text-[22px] lg:text-[44px] text-white font-semibold text-center lg:text-start">
            Temukan Kemudahan Belajar dengan Model Pembelajaran Fleksibel yang Inovatif
          </h1>
          <GlobalButton
            text="Lihat Semua!"
            hasImg={false}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.6153 0.384455C23.7722 0.541443 23.8868 0.735621 23.9484 0.948872C24.01 1.16212 24.0166 1.3875 23.9675 1.60398L23.5509 3.4464C23.0573 5.62386 21.9575 7.61715 20.3786 9.19575L14.2758 15.2986C15.6254 16.9702 16.063 18.5577 15.7214 20.0716C15.3652 21.6485 14.197 22.8128 13.4716 23.5369L13.3927 23.6158C13.2515 23.7568 13.08 23.8638 12.8912 23.9287C12.7024 23.9936 12.5014 24.0146 12.3032 23.9901C12.1051 23.9657 11.9152 23.8964 11.7479 23.7876C11.5805 23.6788 11.4402 23.5333 11.3374 23.3622L8.71839 18.9926C8.66322 18.9008 8.59702 18.8161 8.52127 18.7403L5.14397 15.3656L4.14524 14.7664L8.6908 9.71615C8.69383 9.71838 8.6969 9.72057 8.7 9.72272L14.8028 3.62249C16.3817 2.04336 18.3755 0.943506 20.5534 0.450162L22.3958 0.0322659C22.6124 -0.0166341 22.8378 -0.00985913 23.0511 0.0519581C23.2643 0.113775 23.4585 0.227305 23.6153 0.384455ZM7.60401 8.96052C6.33063 8.21803 5.10718 8.01171 3.92841 8.27717C2.35146 8.63461 1.18714 9.80157 0.463062 10.5283L0.384214 10.6058C0.243176 10.7471 0.136167 10.9186 0.0713081 11.1074C0.00644976 11.2961 -0.0145531 11.4972 0.00989309 11.6953C0.0343393 11.8934 0.103592 12.0834 0.212396 12.2507C0.3212 12.418 0.466696 12.5584 0.63784 12.6611L2.99801 14.0778L7.60401 8.96052Z"
                  fill="white"
                />
              </svg>
            }
            size="regular"
            className="bg-[#3EB449] leading-6 font-semibold px-0 lg:px-20 py-4"
          />

          <Image
            className="absolute bottom-0 right-0 hidden lg:block"
            src={CardDot}
            alt="card-dot"
          />
        </div>
      </Card>
    </div>
  );
};

export default InformationBanner;
