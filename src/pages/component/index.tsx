import Button from "@/components/Common/Button";
import GlobalButton from "@/components/Common/GlobalButton";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import ControlledUploadField from "@/components/ControlledInputs/ControlledUploadField";
import Form from "@/components/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PopupModalSchedule from "@/components/PopupModal/PopupModalSchedule";
import PopupModalSubmission from "@/components/PopupModal/PopupModalSubmission";
import PopupModalSuccess from "@/components/PopupModal/PopupModalSuccess";
import {
  PopupModalSuccessOpen,
  PopupModalScheduleOpen,
  PopupModalSubmissionOpen,
} from "@/stores/Common";
import { useSetRecoilState } from "recoil";

const Test = (): ReactElement => {
  const MAX_FILE_SIZE = 5000000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/webp"];

  const validationSchema = z.object({
    name: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    upload_image: z
      .any()
      .refine((files: File[]) => files?.length >= 1, "Harus ada file yang di upload.")
      .refine((files: File[]) => files[0].size <= MAX_FILE_SIZE, "Ukuran maksimun adalah 5mb.")
      .refine(
        (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files[0].type),
        "hanya menerima .jpg, .jpeg, dan .webp.",
      ),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    mode: "all",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: "",
      upload_image: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const setModalSuccess = useSetRecoilState(PopupModalSuccessOpen);
  const setModalSchedule = useSetRecoilState(PopupModalScheduleOpen);
  const setModalSubmission = useSetRecoilState(PopupModalSubmissionOpen);

  return (
    <section className="flex flex-col items-center w-full px-6 gap-y-5">
      <GlobalButton
        onClick={() => setModalSuccess(true)}
        text={"Open Modal Success"}
        size="regular"
        color="blue"
      />
      <GlobalButton
        onClick={() => setModalSchedule(true)}
        text={"Open Modal Schedule"}
        size="regular"
        color="blue"
      />
      <GlobalButton
        onClick={() => setModalSubmission(true)}
        text={"Open Modal Submission"}
        size="regular"
        color="blue"
      />
      <PopupModalSuccess />
      <PopupModalSchedule />
      <PopupModalSubmission />
      <Form onSubmit={onSubmit}>
        <ControlledTextField
          hasLabel
          label="Nama"
          control={control}
          type={"text"}
          required
          name={"name"}
          placeholder={"Masukan Nama Anda"}
        />
        <ControlledUploadField
          hasLabel
          multiple
          control={control}
          name={"upload_image"}
          label={"Upload gambar"}
        />
        <Button
          disabled={!isValid}
          text={"Submit"}
          type="submit"
          className="w-auto h-auto p-4 text-white bg-blue-400 disabled:bg-gray-200"
        />
      </Form>
    </section>
  );
};

export default Test;
