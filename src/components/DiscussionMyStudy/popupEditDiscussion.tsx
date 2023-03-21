import { FC, ReactElement } from "react";
import PopupModal from "../Common/PopupModal";
import { usePopupEditDiscussion } from "@/hooks/Common/usePopupEditDiscussion";

const PopupEditDiscussion: FC = (): ReactElement => {
  const { setPopupStatus, getPopupStatus } = usePopupEditDiscussion();
  return (
    <>
      <PopupModal
        lookup={getPopupStatus}
        onClose={() => setPopupStatus(!getPopupStatus)}
        popupTitle={"Edit Komentar"}
      >
        <h1>Ubah Komentar</h1>
        <p>Maks. 1000 karater</p>
        <button>Ubah</button>
      </PopupModal>
    </>
  );
};

export default PopupEditDiscussion;
