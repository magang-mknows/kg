import { atom, selector } from "recoil";
import { Data, Instruction, OptionSubject, Question } from "./type";
import Icon from "@/assets/myStudy/mahasiswa.svg";
import Icon2 from "@/assets/myStudy/matkul.svg";
import Icon3 from "@/assets/myStudy/sks.svg";
import Icon4 from "@/assets/myStudy/semester.svg";
import ImgChoiceFaculty2 from "@/assets/StudyPlan/choicefaculty2.svg";

export const dataCardState = atom<Array<Data>>({
  key: "option-faculty-state",
  default: [
    { icon: Icon, jumlah: "-", detail: "mahasiswa", warna: "#E9F6FD" },
    { icon: Icon2, jumlah: "-", detail: "matkul", warna: "#E3FBDA" },
    { icon: Icon3, jumlah: "-", detail: "sks", warna: "#FEF6D0" },
    { icon: Icon4, jumlah: "-", detail: "semester", warna: "#E9F6FD" },
  ],
});

export const optionCourseState = atom<Array<OptionSubject>>({
  key: "option-course-state",
  default: [
    {
      src: ImgChoiceFaculty2,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/software-engineering",
    },
  ],
});

//seacrch
export const queryOptionCourse = atom({
  key: "query-option-course",
  default: "",
});

export const filterOptionCourse = selector({
  key: "filter-option-course",
  get: ({ get }) =>
    get(optionCourseState).filter((item) =>
      item.namaDosen.toLowerCase().includes(get(queryOptionCourse).toLowerCase()),
    ),
});

export const quizQuestionState = atom<Array<Question>>({
  key: "quiz-question-state",
  default: [
    {
      question: "Berapakah harga yang diharuskan saat 10% bunga dari bank ?",
      choices: ["20.000", "30.000", "50.000", "70.000"],
      rightAnswer: "30.000",
    },
    {
      question: "Mengapa dinamakan nasi ?",
      choices: [
        "karena nasi ditemukan di bulan",
        "karena nasi adalah bahasa indonesia",
        "karena lapar",
        "karena memang dari sananya",
      ],
      rightAnswer: "karena lapar",
    },
    {
      question: "Bagaimana cara kita memandang dunia ?",
      choices: [
        "Sesuai dengan kondisi",
        "Dengan sederhana",
        "Dengan Kompleks",
        "Sesuai kepercayaan masing-masing",
      ],
      rightAnswer: "Sesuai dengan kondisi",
    },
    {
      question: "Apa hukum rokok bagi seorang muslim ?",
      choices: ["Halal", "Makruh", "Membunuhmu", "Haram"],
      rightAnswer: "Membunuhmu",
    },
    {
      question: "Apakah yang harus dilakukan jika keuntungan berbanding terbalik dengan kerugian ?",
      choices: ["sangat baik", "cukup", "buruk", "diperhitungkan kembali"],
      rightAnswer: "buruk",
    },
  ],
});

//penugasan part 1
export const dataTabelState = atom<Array<Instruction>>({
  key: "instructions-assignment",
  default: [
    {
      matkul: "Accounting 1",
      pertemuan: 1,
      dosen: "Post - Bob S.Kom, M.Kom-Dosen-0001",
      waktu: "23 Febuari 2023, 9:19 AM",
      file: "Tugas1.pdf",
      deadline: "25/02/2023 24:59 WIB",
    },
  ],
});
