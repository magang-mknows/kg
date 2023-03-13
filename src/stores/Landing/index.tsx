import { atom, selector } from "recoil";
import { Info } from "./type";

export const InformationState = atom<Array<Info>>({
  key: "information-state",
  default: [
    {
      deskripsi:
        "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
      judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
      tag: "Programmer",
    },
    {
      deskripsi:
        "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
      judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
      tag: "Pertanian",
    },
    {
      deskripsi:
        "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
      judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
      tag: "Ekonomi",
    },
    {
      deskripsi:
        "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
      judul: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
      tag: "Programmer",
    },
  ],
});
