import { FC, ReactElement } from "react";
import PopupLoading from "@/assets/popup-modal-berhasil.svg";
import VectorBerhasil from "@/assets/popup-modal-jadwal.svg";

import PopupModal from "../Common/PopupModal";

const PopupModalSubmission: FC = (): ReactElement => {
  return (
    <PopupModal
      popupTitle={"Anda Telah Selesai Melakukan Simulasi!"}
      description={
        "Kamu telah mengajukan simulasi di hari Senin, 17 Januari 2023 Pukul 16:30 WIB, Link Zoom simulasi akan dikirimkan melalui email."
      }
      lookup={false}
      image={PopupLoading}
      icon={VectorBerhasil}
    />
  );
};

export default PopupModalSubmission;
