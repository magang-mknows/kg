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

const CreateDiskusi: FC = (): ReactElement => {
  const { setAdministrationStatus } = useAdministrationStatus();
  const { setFileStatus, getFileStatus } = useFileInformationStatus();

  const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/webp", "application/pdf"];

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
        (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
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
        <h1 className="font-medium text-center text-neutral-800 text-1xl dark:text-white">
          Buat Diksusi Baru
        </h1>
        <Form>
          <div className="lg:flex w-full gap-[55px]">
            <div className="w-full">
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
                <ControlledUploadField
                  hasLabel
                  control={control}
                  required
                  name={"upload_ktp"}
                  accepted=".jpg, .jpeg, .mp4"
                  label={"Kartu Tanda Penduduk (KTP)"}
                />
                <p className="text-[12px] text-[#A3A3A3] -mt-2 ">Maks. 250 karakter</p>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default CreateDiskusi;
