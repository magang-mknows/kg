import { FC, ReactElement } from "react";
import PopupBerhasil from "@/assets/popup-modal-berhasil.svg";
import VectorBerhasil from "@/assets/vector-popup-modal-berhasil.svg";

import PopupModal from "../Common/PopupModal";

const PopupModalSuccess: FC = (): ReactElement => {
  return (
    <PopupModal
      popupTitle={"Anda Telah Selesai Melakukan Simulasi!"}
      description={"Kamu telah melakukan simulasi di hari Senin, 17 Januari 2023 Pukul 16:30 WIB."}
      lookup={false}
      image={PopupBerhasil}
      icon={VectorBerhasil}
    />
  );
};

export default PopupModalSuccess;
