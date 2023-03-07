import { FC, ReactElement } from "react";
import VectorLoading from "@/assets/vector-popup-modal-loading.svg";
import PopupBerhasil from "@/assets/popup-modal-berhasil.svg";

import PopupModal from "../Common/PopupModal";

const PopupModalSchedule: FC = (): ReactElement => {
  return (
    <PopupModal
      popupTitle={"Anda Telah Selesai Melakukan Simulasi!"}
      description={"Kamu telah melakukan simulasi di hari Senin, 17 Januari 2023 Pukul 16:30 WIB."}
      lookup={false}
      icon={VectorLoading}
      image={PopupBerhasil}
    />
  );
};

export default PopupModalSchedule;
