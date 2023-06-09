import GlobalButton from "@/components/Common/GlobalButton";
import ContentLayouts from "@/layouts/Content";
import MainLayouts from "@/layouts/Main";
import Image from "next/image";
import { FC, ReactElement } from "react";
import quizHomeImg from "@/assets/quiz/quiz-home-person.svg";

const QuizHome: FC = (): ReactElement => {
  return (
    <MainLayouts
      withHScreen={false}
      withPadding={false}
      className="flex flex-col items-center gap-y-4 min-h-[705px] px-[20px] md:px-[88px] my-16 mb-15"
    >
      <div className="flex flex-col items-center gap-y-[18px] text-center">
        <h1 className="text-4xl font-semibold text-[#171717] dark:text-neutral-100">
          Quiz Manajemen Keuangan
        </h1>
        <p className="text-2xl font-normal text-[#737373]">Pertemuan 1</p>
      </div>
      <ContentLayouts
        withFlex={false}
        withGap={false}
        className="flex flex-col md:flex-row min-h-[550px] items-center gap-11 text-[#171717]"
      >
        <div className="h-[220px] md:h-[550px] w-[220px] md:w-[550px] relative overflow-hidden">
          <Image
            src={quizHomeImg}
            alt=""
            className="m-auto h-full w-full scale-125 left-0 absolute top-0"
          />
        </div>
        <div className="flex flex-col gap-y-[39px] h-[475px]">
          <div className="flex flex-col justify-between text-sm h-[380px] dark:text-neutral-100">
            <p className="">
              Quiz ini bertujuan untuk menguji pengetahuan Anda tentang materi yang telah dipelajari
              di pertemuan ini.
            </p>
            <p className="">Beberapa ketentuannya sebagai berikut:</p>
            <p className="">
              Terdapat <span className="font-bold">10 pertanyaan</span> yang harus dikerjakan dalam
              Quiz ini dan Setiap pertanyaan mempunyai bobot Nilai{" "}
              <span className="font-bold">10 Poin</span>
            </p>
            <p className="font-bold">Syarat Nilai Kelulusan : 80 Poin</p>
            <p className="font-bold">Durasi Ujian : 10 menit</p>
            <p className="">
              Setelah dimulai, quiz tidak dapat dihentikan, anda harus menyelesaikan quiz hingga
              selesai
            </p>
            <p className="">
              Anda mempunyai <span className="font-bold">3 kali kesempatan</span> mengulang quiz
            </p>
            <p className="">
              Apabila tidak memenuhi syarat kelulusan, maka Anda harus menunggu selama 1 menit untuk
              mengulang pengerjaan Quiz kembali.
            </p>
            <p className="">Selamat Mengerjakan!</p>
          </div>
          <GlobalButton
            text="Mulai Quiz (Sisa 3)"
            color="blue"
            size="regular"
            to="/studi-ku/course/quiz/mulai-quiz"
          />
        </div>
      </ContentLayouts>
    </MainLayouts>
  );
};

export default QuizHome;
