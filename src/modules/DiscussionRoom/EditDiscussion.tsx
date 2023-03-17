import { FC, Fragment, ReactElement } from "react";
import Form from "@/components/Form";

import { useAdministrationStatus } from "@/hooks/Administration/useAdministrationStatus";
import { useFileInformationStatus } from "@/hooks/Administration/useFileInformationStatus";
import { handleError } from "@/utilities/helper";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ControlledUploadField from "@/components/ControlledInputs/ControlledUploadField";
import { z } from "zod";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import GlobalButton from "@/components/Common/GlobalButton";

const EditDiscussion: FC = (): ReactElement => {
  const { setAdministrationStatus } = useAdministrationStatus();
  const { setFileStatus, getFileStatus } = useFileInformationStatus();

  const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_MEDIA_TYPES = ["image/jpeg", "image/jpg", "image/webp", "video/mp4"];

  const validationSchema = z.object({
    judulDiskusi: z.string().max(250, { message: "Maks. 250 Karakter" }),
    upload_ktp: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        "Harus ada file yang di upload.",
      )
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => ACCEPTED_MEDIA_TYPES.includes(files?.[0].type),
        "hanya menerima .jpg, .jpeg, dan .webp.",
      ),
  });
  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      judulDiskusi: "",
      upload_ktp: undefined,
    },
  });

  const onSubmit = handleSubmit(() => {
    try {
      setAdministrationStatus("finished");
      setFileStatus(true);
    } catch (err) {
      setFileStatus(false);
      throw handleError(err);
    }
  });

  return (
    <Fragment>
      <div className="flex flex-col justify-center w-1/3 ">
        <Form>
          <h1 className="text-center text-neutral-800 text-[20px] font-semibold dark:text-white">
            Edit Diskusi
          </h1>
          <div className="flex flex-col w-full gap-4">
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"fullname"}
                label={"Judul Diskusi"}
                name={"fullname"}
                placeholder={"Ketik Judul Diskusi Kamu"}
                required={true}
                className="px-2 py-2 rounded-lg outline-none md:mb-2 md:py-3 focus:outline-none"
                labelClassName="block  mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
              <p className="text-[12px] text-[#A3A3A3] -mt-2 ">Maks. 250 karakter</p>
            </div>
            <div className="form-label">
              <section className="flex flex-col my-2 ">
                <label className={"font-medium text-neutral-800 text-1xl dark:text-white"}>
                  Isi Diskusi
                </label>
                <div className="flex flex-col my-2 border-2 border-neutral-300 gap-y-2 p-[12px] rounded-lg">
                  <input
                    type="text"
                    className="px-2 py-1 bg-transparent border-2 border-transparent rounded-lg outline-none focus:outline-1 focus:border-1 focus:outline-none"
                    placeholder="Mau diskusi apa hari ini?"
                  />
                  <div className="flex items-center justify-center w-full p-2 border-2 rounded-lg border-neutral-300 hover:text-white">
                    <label className="flex flex-col items-center w-full px-4 py-6 bg-[#F5F5F5] rounded-lg cursor-pointer hover:text-white">
                      <svg
                        width="47"
                        height="32"
                        viewBox="0 0 47 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.52994 26.5959L0.0741255 3.5526C-0.154718 2.58767 0.152836 1.54839 0.906417 0.949319C1.27727 0.647111 1.73989 0.480053 2.21826 0.475598L17.319 0.00042035C17.7161 -0.00763828 18.1068 0.100327 18.4434 0.31108C18.78 0.521832 19.0478 0.826213 19.2139 1.18691L20.7182 4.3091L39.8813 4.32805C41.2893 4.32805 42.7673 6.28123 42.5997 7.92104L44.2395 27.1118C44.0019 29.4265 41.9584 31.1684 39.9716 31.1684H9.69431C7.61868 31.1742 5.86227 29.3624 5.52994 26.5959Z"
                          fill="#9DE6F5"
                        />
                        <g opacity="0.3">
                          <path
                            d="M5.53006 26.5959L0.0742476 3.5526C-0.154596 2.58767 0.152958 1.54839 0.906539 0.949319C1.27739 0.647111 1.74001 0.480053 2.21838 0.475598L17.3192 0.00042035C17.7162 -0.00763829 18.107 0.100327 18.4435 0.31108C18.7801 0.521832 19.0479 0.826213 19.214 1.18691L20.7183 4.3091L39.8814 4.32805C41.2894 4.32805 42.7675 6.28123 42.5998 7.92104L44.2396 27.1118C44.002 29.4265 41.9585 31.1684 39.9718 31.1684H9.69443C7.6188 31.1742 5.86239 29.3624 5.53006 26.5959Z"
                            fill="#525252"
                          />
                        </g>
                        <path
                          d="M5.79105 27.2646L4.34802 1.73608L40.0885 1.19531L41.342 26.7806L5.79105 27.2646Z"
                          fill="#E0E0E0"
                        />
                        <path
                          d="M5.62785 2.78534C5.62417 2.83164 5.60709 2.87585 5.57868 2.91259C5.55028 2.94933 5.51179 2.97701 5.46792 2.99223C5.42404 3.00745 5.37669 3.00957 5.33163 2.99831C5.28658 2.98706 5.24577 2.96293 5.21421 2.92886C5.18265 2.8948 5.16169 2.85228 5.1539 2.80649C5.14611 2.76071 5.15182 2.71365 5.17034 2.67107C5.18886 2.62848 5.21938 2.59221 5.25818 2.56668C5.29698 2.54116 5.34237 2.52749 5.38881 2.52734C5.42148 2.52847 5.45361 2.53605 5.48334 2.54965C5.51307 2.56325 5.53982 2.58259 5.56204 2.60658C5.58426 2.63056 5.60152 2.6587 5.61281 2.68938C5.62411 2.72007 5.62922 2.75268 5.62785 2.78534Z"
                          fill="#EBEBEB"
                        />
                        <path
                          d="M6.5551 2.78534C6.55142 2.83164 6.53433 2.87585 6.50593 2.91259C6.47753 2.94933 6.43904 2.97701 6.39516 2.99223C6.35129 3.00745 6.30393 3.00957 6.25888 2.99831C6.21382 2.98706 6.17302 2.96293 6.14146 2.92886C6.10989 2.8948 6.08894 2.85228 6.08115 2.80649C6.07336 2.76071 6.07907 2.71365 6.09759 2.67107C6.11611 2.62848 6.14663 2.59221 6.18543 2.56668C6.22422 2.54116 6.26961 2.52749 6.31605 2.52734C6.34873 2.52847 6.38086 2.53605 6.41059 2.54965C6.44032 2.56325 6.46707 2.58259 6.48929 2.60658C6.51151 2.63056 6.52876 2.6587 6.54006 2.68938C6.55135 2.72007 6.55647 2.75268 6.5551 2.78534Z"
                          fill="#EBEBEB"
                        />
                        <path
                          d="M7.48332 2.78534C7.47964 2.83164 7.46256 2.87585 7.43415 2.91259C7.40575 2.94933 7.36726 2.97701 7.32339 2.99223C7.27951 3.00745 7.23215 3.00957 7.1871 2.99831C7.14204 2.98706 7.10124 2.96293 7.06968 2.92886C7.03812 2.8948 7.01716 2.85228 7.00937 2.80649C7.00158 2.76071 7.00729 2.71365 7.02581 2.67107C7.04433 2.62848 7.07485 2.59221 7.11365 2.56668C7.15245 2.54116 7.19784 2.52749 7.24428 2.52734C7.31014 2.53 7.37227 2.55864 7.41707 2.60699C7.46187 2.65534 7.48569 2.71947 7.48332 2.78534Z"
                          fill="#EBEBEB"
                        />
                        <path
                          d="M18.4385 2.78516L20.5942 15.5975L3.63211 18.1454L1.47632 5.33304L18.4385 2.78516Z"
                          fill="#EBEBEB"
                        />
                        <path
                          d="M18.4396 2.78516L18.3579 2.79973L18.1204 2.83763L17.1991 2.98339L13.7286 3.51541L1.48472 5.37532L1.52116 5.32722C2.16543 9.14031 2.90152 13.5117 3.68279 18.1381L3.62594 18.0987L20.5895 15.5581L20.5546 15.6033C19.9147 11.7436 19.3885 8.5456 19.0124 6.30818C18.8287 5.18874 18.6844 4.31127 18.5853 3.70928C18.5372 3.41047 18.5008 3.18162 18.4746 3.0242C18.4483 2.86678 18.4396 2.78516 18.4396 2.78516C18.4396 2.78516 18.4556 2.86095 18.4833 3.014C18.511 3.16705 18.5503 3.39589 18.6014 3.69033C18.7049 4.2894 18.855 5.16396 19.0474 6.27757C19.4307 8.51937 19.9773 11.7246 20.6362 15.5917L20.6435 15.6296H20.6026L3.63906 18.192L3.59096 18.1993L3.58222 18.1527C2.80531 13.5262 2.07214 9.15488 1.43225 5.34034V5.29952H1.47598L13.7563 3.47752L17.221 2.96736L18.1349 2.83617L18.3681 2.80265L18.4396 2.78516Z"
                          fill="#263238"
                        />
                        <path
                          d="M4.08073 17.251L19.852 14.8824L17.9673 3.68359L2.19604 6.0522L4.08073 17.251Z"
                          fill="#455A64"
                        />
                        <g opacity="0.3">
                          <path
                            d="M4.08069 17.2528L8.41852 9.46484L12.5625 13.3071L14.4851 10.6309L19.852 14.8842L4.08069 17.2528Z"
                            fill="black"
                          />
                        </g>
                        <g opacity="0.3">
                          <path
                            d="M13.1348 7.88021C13.1573 8.03839 13.148 8.19946 13.1074 8.35398C13.0668 8.50849 12.9957 8.65334 12.8983 8.78002C12.801 8.9067 12.6793 9.01266 12.5405 9.09167C12.4016 9.17069 12.2484 9.22117 12.0897 9.24016C11.7687 9.29511 11.4389 9.22279 11.1703 9.03856C10.9017 8.85432 10.7154 8.57266 10.6511 8.25336C10.6284 8.09527 10.6375 7.93423 10.678 7.77972C10.7184 7.62521 10.7893 7.48035 10.8866 7.35364C10.9838 7.22694 11.1054 7.12095 11.2442 7.04192C11.3829 6.96288 11.5361 6.91239 11.6947 6.89342C12.016 6.83766 12.3464 6.90963 12.6154 7.09397C12.8845 7.2783 13.0708 7.56044 13.1348 7.88021Z"
                            fill="black"
                          />
                        </g>
                        <path
                          d="M6.8217 28.4788L6.33923 3.63975L42.893 3.5625L42.7429 28.1085L6.8217 28.4788Z"
                          fill="#EBEBEB"
                        />
                        <path
                          d="M8.45915 4.60956C8.45547 4.65585 8.43839 4.70007 8.40998 4.73681C8.38158 4.77355 8.34309 4.80123 8.29922 4.81645C8.25534 4.83167 8.20799 4.83378 8.16293 4.82253C8.11788 4.81128 8.07707 4.78714 8.04551 4.75308C8.01395 4.71901 7.99299 4.67649 7.9852 4.63071C7.97741 4.58493 7.98312 4.53787 8.00164 4.49529C8.02016 4.4527 8.05068 4.41643 8.08948 4.3909C8.12828 4.36538 8.17367 4.35171 8.22011 4.35156C8.28597 4.35422 8.3481 4.38286 8.3929 4.43121C8.4377 4.47956 8.46152 4.54369 8.45915 4.60956Z"
                          fill="#E0E0E0"
                        />
                        <path
                          d="M9.3145 4.60956C9.31081 4.65592 9.29369 4.70019 9.26522 4.73696C9.23675 4.77373 9.19817 4.80139 9.15422 4.81657C9.11026 4.83175 9.06284 4.83377 9.01775 4.8224C8.97266 4.81103 8.93186 4.78675 8.90036 4.75255C8.86886 4.71834 8.84802 4.67569 8.8404 4.62982C8.83277 4.58394 8.83869 4.53684 8.85743 4.49429C8.87616 4.45173 8.90691 4.41556 8.94589 4.39021C8.98488 4.36486 9.03041 4.35143 9.07691 4.35156C9.10946 4.35288 9.14143 4.36059 9.17099 4.37428C9.20056 4.38796 9.22713 4.40734 9.2492 4.4313C9.27127 4.45526 9.2884 4.48334 9.2996 4.51393C9.31081 4.54452 9.31587 4.57702 9.3145 4.60956Z"
                          fill="#E0E0E0"
                        />
                        <path
                          d="M7.54887 4.60956C7.54519 4.65585 7.52811 4.70007 7.4997 4.73681C7.4713 4.77355 7.43281 4.80123 7.38894 4.81645C7.34507 4.83167 7.29771 4.83378 7.25265 4.82253C7.2076 4.81128 7.16679 4.78714 7.13523 4.75308C7.10367 4.71901 7.08271 4.67649 7.07492 4.63071C7.06713 4.58493 7.07284 4.53787 7.09136 4.49529C7.10988 4.4527 7.1404 4.41643 7.1792 4.3909C7.218 4.36538 7.26339 4.35171 7.30983 4.35156C7.37569 4.35422 7.43782 4.38286 7.48262 4.43121C7.52742 4.47956 7.55124 4.54369 7.54887 4.60956Z"
                          fill="#E0E0E0"
                        />
                        <path
                          d="M7.6709 29.0854V5.46788L44.0745 5.39062L42.1199 29.5927L7.6709 29.0854Z"
                          fill="#FAFAFA"
                        />
                        <path
                          d="M5.90294 26.5497L8.0806 8.80342C8.24968 7.41578 9.23793 6.38672 10.4026 6.38672H43.6549C45.0615 6.38672 46.1532 7.8691 45.987 9.55263L44.2379 27.0861C43.7278 30.7302 42.327 31.2549 40.3403 31.2549H9.26709C7.18854 31.2549 5.17413 30.7331 5.90294 26.5497Z"
                          fill="#F4B557"
                        />
                      </svg>

                      <span className="mt-2 text-[14px] text-black">Tambahkan foto/video</span>
                      <span className="mt-2 text-[12px] text-[#737373] ">
                        atau seret dan letakkan
                      </span>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </section>
              <p className="text-[12px] text-[#A3A3A3]">Maks. 1000 karakter</p>
            </div>
            <div className="flex justify-end">
              <GlobalButton
                className="!w-[111px] !h-[40px]"
                type={"submit"}
                text={"Ubah"}
                color={"green"}
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 17.2486V20.9986H6.75L17.81 9.93859L14.06 6.18859L3 17.2486ZM20.71 7.03859C21.1 6.64859 21.1 6.01859 20.71 5.62859L18.37 3.28859C17.98 2.89859 17.35 2.89859 16.96 3.28859L15.13 5.11859L18.88 8.86859L20.71 7.03859Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default EditDiscussion;
