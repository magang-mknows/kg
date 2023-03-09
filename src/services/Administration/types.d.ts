import { CommonResponseInterface } from "../types";

export type AdministrationItemsTypes = {
  nama: string;
  nim: string;
  kelas: string;
};

export type AdministrationResponseTypes = CommonResponseInterface<AdministrationItemsTypes>;
