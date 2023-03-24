import Modal from "@/components/Common/Modal";
import { usePopupUploadStudyPlan } from "@/hooks/StudyPlan/usePopupUploadStudyPlan";
import { FC, ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";
import UploadDragbleFieldStudyPlan from "./UploadDragableFieldStudyPlan";

const PopupUploadStudyPlan: FC = (): ReactElement => {
  const { popupUploadStatus, setPopupUploadStatus } = usePopupUploadStudyPlan();

  return (
    <Modal
      lookup={popupUploadStatus}
      onClose={() => setPopupUploadStatus(false)}
      hasButton={false}
      hasImage={false}
      withClose={false}
      widthModal={"!w-[78%]"}
    >
      <AiOutlineClose
        onClick={() => setPopupUploadStatus(false)}
        className="text-2xl leading-6 font-extrabold text-black dark:text-gray-400 cursor-pointer absolute top-4 sm:top-10 right-4 sm:right-8"
      />
      <div className="w-full flex flex-col gap-y-9 p-1 my-3 dark:bg-gray-900">
        <div className="w-[90%] xl:w-full mx-auto sm:mx-0">
          <h5 className="text-xl text-black dark:text-neutral-300 font-semibold">
            Silahkan mengirimkan bukti untuk dapat mengkonversi mata kuliah ini
          </h5>
          <p className="text-lg text-neutral-700 dark:text-neutral-500">
            Logika Algoritma (ABIW233)
          </p>
        </div>
        <UploadDragbleFieldStudyPlan
          name="upload"
          className="border-2 border-dashed !border-primary-400 !rounded-[13.5px] h-[340px]"
          required={true}
        />
        <div className="w-full flex items-center">
          <button className="py-4 mx-auto px-[10%] bg-green-500 text-xs text-white font-semibold rounded-lg">
            Upload File
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PopupUploadStudyPlan;
