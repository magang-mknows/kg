import { atom } from "recoil";
import { Info } from "./type";
import Dummy from "@/assets/landing/dummy.svg";
import Dummy1 from "@/assets/landing/dumy1.svg";
import Dummy2 from "@/assets/landing/dummy2.svg";

export const InformationState = atom<Array<Info>>({
  key: "information-state",
  default: [
    {
      image: Dummy,
      deskripsi:
        "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
      judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
      tag: "Programmer",
    },
    {
      image: Dummy1,
      deskripsi:
        "Umumnya, masyarakat mengenal tanaman refugia sebagai tanaman budidaya saja. Padahal, tanaman refugia merupakan jenis tumbuhan yang dapat menyediakan tempat perlindungan, sumber pakan atau sumberdaya yang lain bagi musuh alami...i",
      judul: "4 Tips yang mungkin belum kamu tau saat menanam sayur agar tidak mudah diserang hama",
      tag: "Pertanian",
    },
    {
      image: Dummy2,
      deskripsi:
        "Manajemen keuangan adalah salah satu faktor penting dalam menentukan kesuksesan sebuah bisnis. Mengingat keuangan adalah masalah vital, rincian aliran dana keluar dan masuk pun tentulah...",
      judul: "Perusahaanmu ada 5 poin penting ini dalam masalah keuangan mereka? ",
      tag: "Ekonomi",
    },
    {
      image: Dummy,
      deskripsi:
        "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
      judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
      tag: "Programmer",
    },
  ],
});
