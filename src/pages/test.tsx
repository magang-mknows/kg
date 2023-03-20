import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import ControlledUploadDragbleField from "@/components/ControlledInputs/ControlledUploadDragbleField";
import ControlledUploadField from "@/components/ControlledInputs/ControlledUploadField";
import { NextPage } from "next";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import videoDummy from "@/assets/guide/video-dummy.svg";

const TestPages: NextPage = (): ReactElement => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      upload: undefined,
      upload_media: undefined,
      upload_gender: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log(typeof videoDummy);

  return (
    <section className="flex items-center justify-center bg-gray-50 w-full h-screen">
      <form onSubmit={onSubmit}>
        <ControlledTextField
          control={control}
          name="name"
          type="text"
          hasLabel
          placeholder="Masukan nama"
          label="Nama"
        />
        <ControlledUploadDragbleField control={control} name="upload_media" />
        <ControlledUploadDragbleField control={control} name="upload_gender" />
        <ControlledUploadField control={control} name="upload" />
        <button className="text-white bg-blue-400 w-auto h-auto p-4 rounded-lg">Submit</button>
      </form>
    </section>
  );
};

export default TestPages;
