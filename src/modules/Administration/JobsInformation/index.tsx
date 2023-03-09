import { FC, ReactElement } from "react";
import Accordion from "@/components/Administration/Accordion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/Form";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Button from "@/components/Common/Button";
import { handleError } from "@/utilities/helper";
import { useJobInformationStatus } from "@/hooks/Administration/useJobInformationStatus";

const JobsInformation: FC = (): ReactElement => {
  const schema = z.object({
    fathername: z.string().min(1, { message: "Nama ayah harus diisi" }),
    mothername: z.string().min(1, { message: "Nama ibu harus diisi" }),
    live: z.string().min(1, { message: "Tinggal dengan harus diisi" }),
    fatherjob: z.string().min(1, { message: "Pekerjaan ayah harus diisi" }),
    motherjob: z.string().min(1, { message: "Pekerjaan ibu harus diisi" }),
    fatherincome: z.string().min(1, { message: "Penghasilan ayah harus diisi" }),
    motherincome: z.string().min(1, { message: "Penghasilan ibu harus diisi" }),
    ownjob: z.string().min(1, { message: "Pekerjaan sendiri harus diisi" }),
    ownincome: z.string().min(1, { message: "Penghasilan sendiri harus diisi" }),
    collegefeespaidby: z.string().min(1, { message: "Biaya kuliah harus diisi" }),
  });

  const { setJobStatus, getJobStatus } = useJobInformationStatus();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = handleSubmit(() => {
    try {
      setJobStatus(true);
    } catch (err) {
      setJobStatus(false);
      throw handleError(err);
    }
  });

  return (
    <Accordion
      title="Informasi Pekerjaan"
      idAccordion={"job-information"}
      disabled={getJobStatus ? true : false}
    >
      <Form onSubmit={onSubmit}>
        <div className="lg:flex w-full gap-[55px] ">
          <div className="w-full">
            <ControlledTextField
              name={"fathername"}
              hasLabel
              control={control}
              label={"Nama Ayah"}
              type={"name"}
              required
              placeholder={"Masukan nama ayah"}
            />

            <ControlledTextField
              name={"mothername"}
              control={control}
              hasLabel
              label={"Nama Ibu"}
              type={"name"}
              required
              placeholder={"Masukan nama ibu"}
            />
          </div>
          <div className="w-full">
            <ControlledTextField
              name={"fatherjob"}
              control={control}
              label={"Pekerjaan Ayah"}
              hasLabel
              type={"text"}
              required
              placeholder={"Pilih pekerjaan ayah"}
            />

            <ControlledTextField
              name={"motherjob"}
              control={control}
              hasLabel
              label={"Pekerjaan Ibu"}
              type={"text"}
              required
              placeholder={"Pilih pekerjaan ibu"}
            />
          </div>
          <div className="w-full">
            <ControlledTextField
              name={"fatherincome"}
              control={control}
              label={"Penghasilan Ayah"}
              hasLabel
              type={"number"}
              required
              placeholder={"Masukan penghasilan ayah"}
            />
            <div className="">
              <ControlledTextField
                name={"motherincome"}
                control={control}
                hasLabel
                label={"Penghasilan Ibu"}
                type={"number"}
                required
                placeholder={"Masukan penghailan ibu"}
              />
            </div>
          </div>
        </div>
        <hr className="my-5 text-[#D9D9D9]" />
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <ControlledTextField
              name={"ownjob"}
              control={control}
              hasLabel
              label={"Pekerjaan Sendiri"}
              type={"text"}
              required
              placeholder={"Masukan pekerjaan sendiri"}
            />
            <ControlledTextField
              name={"live"}
              hasLabel
              control={control}
              label={"Tinggal Dengan"}
              type={"text"}
              required
              placeholder={"Masukan tinggal dengan"}
            />
          </div>
          <div className="w-full">
            <ControlledTextField
              name={"ownincome"}
              control={control}
              hasLabel
              label={"Penghasilan Sendiri"}
              type={"number"}
              required
              placeholder={"Masukan penghasilan sendiri"}
            />
            <ControlledTextField
              name={"collegefeespaidby"}
              control={control}
              hasLabel
              label={"Biaya Kuliah Ditanggung Oleh"}
              type={"text"}
              required
              placeholder={"Masukan biaya kuliah ditanggung oleh"}
            />
            <div className="flex w-full my-8 justify-end">
              <Button
                disabled={!isValid}
                className="my-4 w-[252px] rounded-[8px] disabled:bg-gray-400 disabled:text-gray-200 bg-blue-600 text-white font-bold p-3 text-1xl"
                text={"Simpan Informasi Pekerjaan"}
                type={"submit"}
              />
            </div>
          </div>
        </div>
      </Form>
    </Accordion>
  );
};

export default JobsInformation;
