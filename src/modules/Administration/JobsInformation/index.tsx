import { FC, ReactElement } from "react";
import Accordion from "@/components/Administration/Accordion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/Form";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Button from "@/components/Common/Button";

const JobsInformation: FC = (): ReactElement => {
  const validationSchema = z.object({
    fathername: z.string().min(1, { message: "Nama ayah harus diisi" }),
    mothername: z.string().min(1, { message: "Nama ibu harus diisi" }),
    live: z.string().min(1, { message: "Tinggal dengan harus diisi" }),
    fatherjob: z.string().min(1, { message: "Pekerjaan ayah harus diisi" }),
    motherjob: z.string().min(1, { message: "Pekerjaan ibu harus diisi" }),
    fatherincome: z.string().min(1, { message: "Penghasilan ayah harus diisi" }),
    motherincome: z.string().min(1, { message: "Penghasilan ibu harus diisi" }),
    ownincome: z.string().min(1, { message: "Penghasilan sendiri harus diisi" }),
    collegefeespaidby: z.string().min(1, { message: "Biaya kuliah harus diisi" }),
  });
  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
  });
  return (
    <Accordion title="Informasi Pekerjaan" idAccordion="job-information">
      <Form>
        <div className="lg:flex w-full gap-[55px] ">
          <div className="w-full">
            <div className="">
              Nama Ayah
              <ControlledTextField
                name={"fathername"}
                control={control}
                label={"fathername"}
                type={"name"}
                required={true}
                placeholder={"Masukan nama ayah"}
              />
            </div>
            <div className="">
              Nama Ibu
              <ControlledTextField
                name={"mothername"}
                control={control}
                label={"mothername"}
                type={"name"}
                required={true}
                placeholder={"Masukan nama ibu"}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="">
              Pekerjaan Ayah
              <ControlledTextField
                name={"fatherjob"}
                control={control}
                label={"fatherjob"}
                type={"text"}
                required={true}
                placeholder={"Pilih pekerjaan ayah"}
              />
            </div>
            <div className="">
              Pekerjaan Ibu
              <ControlledTextField
                name={"motherjob"}
                control={control}
                label={"motherjob"}
                type={"text"}
                required={true}
                placeholder={"Pilih pekerjaan ibu"}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="">
              Penghasilan Ayah
              <ControlledTextField
                name={"fatherincome"}
                control={control}
                label={"fatherincome"}
                type={"number"}
                required={true}
                placeholder={"Masukan penghasilan ayah"}
              />
            </div>
            <div className="">
              Penghasilan Ibu
              <ControlledTextField
                name={"motherincome"}
                control={control}
                label={"motherincome"}
                type={"number"}
                required={true}
                placeholder={"Masukan penghailan ibu"}
              />
            </div>
          </div>
        </div>
        <hr className="my-5 text-[#D9D9D9]" />
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <div className="">
              Pekerjaan Sendiri
              <ControlledTextField
                name={"ownjob"}
                control={control}
                label={"ownjob"}
                type={"text"}
                required={true}
                placeholder={"Masukan pekerjaan sendiri"}
              />
            </div>
            <div className="">
              Tinggal Dengan
              <ControlledTextField
                name={"live"}
                control={control}
                label={"live"}
                type={"text"}
                required={true}
                placeholder={"Masukan tinggal dengan"}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="">
              Penghasilan Sendiri
              <ControlledTextField
                name={"ownincome"}
                control={control}
                label={"ownincome"}
                type={"number"}
                required={true}
                placeholder={"Masukan penghasilan sendiri"}
              />
            </div>
            <div className="">
              Biaya Kuliah Ditanggung Oleh
              <ControlledTextField
                name={"collegefeespaidby"}
                control={control}
                label={"collegefeespaidby"}
                type={"text"}
                required={true}
                placeholder={"Masukan biaya kuliah ditanggung oleh"}
              />
            </div>
            <div className="flex w-full my-8 justify-end">
              <Button
                disabled={!isValid}
                className="my-4 w-[211px] rounded-[8px] disabled:bg-gray-400 disabled:text-gray-200 bg-blue-600 text-white font-bold p-3 text-1xl"
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
