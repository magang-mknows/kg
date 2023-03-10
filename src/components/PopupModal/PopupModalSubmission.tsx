import { FC, ReactElement } from "react";
import PopupLoading from "@/assets/popup-modal-jadwal.svg";
import VectorBerhasil from "@/assets/vector-popup-modal-berhasil.svg";

import PopupModal from "../Common/PopupModal";
import { usePopupSubmissionStatus } from "@/hooks/Common/usePopupSubmissionStatus";

const PopupModalSubmission: FC = (): ReactElement => {
  const { getPopupStatus, setPopupStatus } = usePopupSubmissionStatus();
  return (
    <PopupModal
      onClose={() => setPopupStatus(!getPopupStatus)}
      popupTitle={"Berhasil Mengajukan Simulasi!"}
      description={
        "Kamu telah mengajukan simulasi di hari Senin, 17 Januari 2023 Pukul 16:30 WIB, Link Zoom simulasi akan dikirimkan melalui email."
      }
      lookup={getPopupStatus}
      image={PopupLoading}
      icon={VectorBerhasil}
    />
  );
};

export default PopupModalSubmission;
