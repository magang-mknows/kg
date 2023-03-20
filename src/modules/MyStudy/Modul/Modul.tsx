import Loading from "@/components/Loading";
import Image from "next/image";
import BaseLayouts from "@/layouts/Base";
import { lazy, ReactElement, Suspense } from "react";
import { contentModulBreadCumbs } from "@/utilities/constant";
import YouTube, { YouTubeProps } from "react-youtube";
import MainLayouts from "@/layouts/Main";
import GlobalButton from "@/components/Common/GlobalButton";

import Play from "@/assets/myStudy/button-play.svg";
import Document from "@/assets/myStudy/iconDoc.svg";

const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const ModulContent = (): ReactElement => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "300",
    width: "800",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <BaseLayouts widthHScreen={false}>
      <Suspense fallback={<Loading />}>
        <MainLayouts withPadding={false}>
          <div className="px-10">
            <BreadCrumbs items={contentModulBreadCumbs} />
          </div>
          <div className="flex lg:flex-col h-full w-screen justify-screen items-center px-32 ">
            <h1 className="lg:text-3xl text-lg font-bold py-4">Mata Kuliah 1</h1>
            <div className="flex w-full h-full gap-8">
              <div className="flex w-[65%]">
                <div className="flex flex-col w-full h-auto gap-4 justify-center items-center">
                  <YouTube videoId="wqFzwWRdteM" opts={opts} onReady={onPlayerReady} />
                  <div className="shadow-md rounded-lg p-10 w-full h-full">
                    <h1 className="font-bold text-xl">Introduce Manajemen Keuangan</h1>
                    <p className="text-gray-500 py-4">
                      Manajemen keuangan merupakan segala aktivitas perusahaan yang berkaitan dengan
                      usaha untuk mendapatkan pendanaan yang diperlukan dengan biaya minimal dan
                      syarat-syarat yang paling menguntungkan, serta usaha untuk menggunakan dana
                      tersebut se-efisien mungkin.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full shadow-md rounded-lg p-6">
                <div className="flex flex-col h-[40%]">
                  <h1 className="font-bold text-xl">Video Lainnya</h1>
                  <div className="flex justify-center items-center gap-y-4 py-4">
                    <Image src={Play} alt="icon" />
                    <p className="font-bold">Introduce Manajemen Keuangan</p>
                  </div>
                </div>
                <div className="flex flex-col h-[60%]">
                  <h1 className="font-bold text-xl">Dokumen Lainnya</h1>
                  <div className="flex justify-center items-center gap-x-2 gap-y-4 py-4">
                    <Image src={Document} alt="icon" />
                    <p className="font-bold">Fungsi Manajemen Keuangan</p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center">
                  <GlobalButton
                    text="Selesaikan Modul"
                    size="regular"
                    icon={
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.0889 10.915L11.0011 16.0049L8.49951 16.5052L8.99982 14.0036L14.0903 8.91377C14.3548 8.64886 14.7137 8.5 15.088 8.5C15.4622 8.5 15.8212 8.64886 16.0856 8.91377L16.0916 8.91911C16.6419 9.47105 16.6407 10.3645 16.0889 10.915Z"
                          stroke="white"
                          stroke-width="1.5"
                        />
                        <path
                          d="M6.4958 14.5042H2.4933C1.94067 14.5042 1.49268 14.0562 1.49268 13.5036V2.49672C1.49268 1.94409 1.94067 1.49609 2.4933 1.49609H12.4996C13.0522 1.49609 13.5002 1.94409 13.5002 2.49672V6.99953"
                          stroke="white"
                          stroke-width="1.5"
                        />
                        <path d="M6.49561 4.49609H10.4981" stroke="white" stroke-width="1.5" />
                        <path d="M4.49463 7.5H10.4984" stroke="white" stroke-width="1.5" />
                        <path d="M4.49463 10.5H9.49775" stroke="white" stroke-width="1.5" />
                      </svg>
                    }
                  />
                </div>
              </div>
              ;
            </div>
          </div>
        </MainLayouts>
      </Suspense>
    </BaseLayouts>
  );
};

export default ModulContent;
