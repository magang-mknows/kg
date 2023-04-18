import { atom, selector } from "recoil";
import { OptionSubject, Question } from "./type";
import ImgChoiceFaculty2 from "@/assets/StudyPlan/choicefaculty2.svg";

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

export const confirmModuleState = atom({
  key: "confirm-module-state",
  default: false,
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
      id: 1,
      question: "Berapakah harga yang diharuskan saat 10% bunga dari bank ?",
      choices: ["20.000", "30.000", "50.000", "70.000"],
      rightAnswer: "30.000",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      question: "Apa hukum rokok bagi seorang muslim ?",
      choices: ["Halal", "Makruh", "Membunuhmu", "Haram"],
      rightAnswer: "Membunuhmu",
    },
    {
      id: 5,
      question: "Apakah yang harus dilakukan jika keuntungan berbanding terbalik dengan kerugian ?",
      choices: ["sangat baik", "cukup", "buruk", "diperhitungkan kembali"],
      rightAnswer: "buruk",
    },
  ],
});

export const currentQuizNumberState = atom({
  key: "currentQuizNumberState",
  default: 1,
});

export const userAnswer = atom({
  key: "userAnswer",
  default: Array,
});
