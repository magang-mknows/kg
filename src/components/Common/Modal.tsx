import Image from "next/image";
import { FC, Fragment, ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ModalProps } from "./types";

const Modal: FC<ModalProps> = ({
  title,
  children,
  button,
  lookup,
  hasButton,
  withClose,
  onClose,
}): ReactElement => {
  return (
    <Fragment>
      {lookup && (
        <div
          className="relative z-[999999999]"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full w-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-auto">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                  <div className="flex items-center justify-between w-full">
                    <Image
                      src="/logo-light.svg"
                      width={82}
                      height={35}
                      alt={"Logo kg"}
                      loading="lazy"
                    />
                    {withClose && (
                      <AiOutlineClose
                        onClick={onClose}
                        className="text-2xl text-gray-400 font-bold cursor-pointer"
                      />
                    )}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {title && (
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        {title}
                      </h3>
                    )}
                    <div className="flex w-full items-center">{children}</div>
                  </div>
                </div>
                {hasButton && (
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    {button}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
