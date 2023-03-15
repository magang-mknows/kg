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
import { usePrivateInformationStatus } from "@/hooks/Administration/usePrivateInformationStatus";
import ControlledSelectField from "@/components/ControlledInputs/ControlledSelectField";

const JobsInformation: FC = (): ReactElement => {
  const schema = z.object({
    fathername: z.string().min(1, { message: "Nama ayah harus diisi" }),
    mothername: z.string().min(1, { message: "Nama ibu harus diisi" }),
    livewith: z.string().min(1, { message: "Tinggal dengan harus diisi" }),
    fatherjob: z.string().min(1, { message: "Pekerjaan ayah harus diisi" }),
    motherjob: z.string().min(1, { message: "Pekerjaan ibu harus diisi" }),
    fatherincome: z.string().min(1, { message: "Penghasilan ayah harus diisi" }),
    motherincome: z.string().min(1, { message: "Penghasilan ibu harus diisi" }),
    ownjob: z.string().min(1, { message: "Pekerjaan sendiri harus diisi" }),
    ownincome: z.string().min(1, { message: "Penghasilan sendiri harus diisi" }),
    collegefeespaid: z.string().min(1, { message: "Biaya kuliah harus diisi" }),
  });

  const { setJobStatus, getJobStatus } = useJobInformationStatus();
  const { getPrivateStatus } = usePrivateInformationStatus();

  type ValidationSchema = z.infer<typeof schema>;
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      fathername: "",
      mothername: "",
      motherjob: "",
      fatherincome: "",
      motherincome: "",
      ownjob: "",
      livewith: "",
      ownincome: "",
      collegefeespaid: "",
      fatherjob: "",
    },
  });

  const onSubmit = handleSubmit(() => {
    try {
      setJobStatus(true);
    } catch (err) {
      setJobStatus(false);
      throw handleError(err);
    }
  });

  const optionFatherJob = [
    {
      label: "Pilih pekerjaan ayah",
      value: "pilih",
    },
    {
      value: "karyawan-swasta",
      label: "Karyawan Swasta",
    },
    {
      value: "dokter",
      label: "Dokter",
    },
    {
      value: "guru",
      label: "Guru",
    },
  ];

  const optionMotherJob = [
    {
      label: "Pilih pekerjaan ibu",
      value: "pilih",
    },
    {
      value: "karyawan-swasta",
      label: "Karyawan Swasta",
    },
    {
      value: "dokter",
      label: "Dokter",
    },
    {
      value: "guru",
      label: "Guru",
    },
  ];

  const optionOwnJob = [
    {
      label: "Pilih pekerjaan sendiri",
      value: "pilih",
    },
    {
      value: "karyawan-swasta",
      label: "Karyawan Swasta",
    },
    {
      value: "dokter",
      label: "Dokter",
    },
    {
      value: "guru",
      label: "Guru",
    },
  ];

  const optionFatherIncome = [
    {
      label: "Pilih penghasilan ayah",
      value: "pilih",
    },
    {
      value: "< Rp 1.000.000",
      label: "< Rp 1.000.000",
    },
    {
      value: "Rp 1.000.000 - Rp 5.000.000",
      label: "Rp 1.000.000 - Rp 5.000.000",
    },
    {
      value: "> Rp 5.000.000",
      label: "> Rp 5.000.000",
    },
  ];

  const optionMotherIncome = [
    {
      label: "Pilih penghasilan ibu",
      value: "pilih",
    },
    {
      value: "< Rp 1.000.000",
      label: "< Rp 1.000.000",
    },
    {
      value: "Rp 1.000.000 - Rp 5.000.000",
      label: "Rp 1.000.000 - Rp 5.000.000",
    },
    {
      value: "> Rp 5.000.000",
      label: "> Rp 5.000.000",
    },
  ];

  const optionOwnIncome = [
    {
      label: "Pilih penghasilan sendiri",
      value: "pilih",
    },
    {
      value: "< Rp 1.000.000",
      label: "< Rp 1.000.000",
    },
    {
      value: "Rp 1.000.000 - Rp 5.000.000",
      label: "Rp 1.000.000 - Rp 5.000.000",
    },
    {
      value: "> Rp 5.000.000",
      label: "> Rp 5.000.000",
    },
  ];

  const optionLiveWith = [
    {
      label: "Pilih tinggal dengan",
      value: "pilih",
    },
    {
      value: "orang-tua ",
      label: "Orang tua",
    },
    {
      value: "saudara",
      label: "Saudara",
    },
    {
      value: "sendiri",
      label: "Sendiri",
    },
  ];

  const optionCollegeFeesPaid = [
    {
      label: "Pilih biaya kuliah ditanggung oleh",
      value: "pilih",
    },
    {
      value: "orang-tua ",
      label: "Orang tua",
    },
    {
      value: "saudara",
      label: "Saudara",
    },
    {
      value: "sendiri",
      label: "Sendiri",
    },
  ];

  return (
    <Accordion
      title="Informasi Pekerjaan"
      idAccordion={getJobStatus ? "" : "privat-information"}
      disabled={getPrivateStatus ? (getJobStatus ? true : false) : true}
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
              className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
            />

            <ControlledTextField
              name={"mothername"}
              control={control}
              hasLabel
              label={"Nama Ibu"}
              type={"name"}
              required
              placeholder={"Masukan nama ibu"}
              className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
            />
          </div>
          <div className="w-full mt-2">
            <ControlledSelectField
              control={control}
              options={optionFatherJob}
              name={"fatherjob"}
              label={"Pekerjaan Ayah"}
              hasLabel
              labelClassName="block mb-1 dark:text-white text-sm font-medium text-gray-900 "
              required
              defaultValue="Pilih pekerjaan ayah"
              className=" rounded-lg md:mb-5 mb-2 py-2 md:py-3 px-2  outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
            />

            <ControlledSelectField
              control={control}
              options={optionMotherJob}
              name={"motherjob"}
              label={"Pekerjaan Ibu"}
              hasLabel
              labelClassName={"block mb-1 dark:text-white text-sm font-medium text-gray-900"}
              required
              defaultValue="Pilih pekerjaan ibu"
              className=" rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
            />
          </div>
          <div className="w-full mt-2">
            <ControlledSelectField
              control={control}
              options={optionFatherIncome}
              name={"fatherincome"}
              label={"Penghasilan Ayah"}
              hasLabel
              labelClassName={"block mb-1 dark:text-white text-sm font-medium text-gray-900"}
              required
              defaultValue="Pilih penghasilan ayah"
              className=" rounded-lg md:mb-5 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
            />

            <ControlledSelectField
              control={control}
              options={optionMotherIncome}
              name={"motherincome"}
              label={"Penghasilan Ibu"}
              hasLabel
              labelClassName={"block mb-1 dark:text-white text-sm font-medium text-gray-900"}
              required
              defaultValue="Pilih penghasilan ibu"
              className=" rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
            />
          </div>
        </div>
        <hr className="my-5 text-[#D9D9D9]" />
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <ControlledSelectField
              control={control}
              options={optionOwnJob}
              name={"ownjob"}
              label={"Pekerjaan Sendiri"}
              hasLabel
              labelClassName="block mb-1 dark:text-white text-sm font-medium text-gray-900 "
              required
              defaultValue="Pilih pekerjaan sendiri"
              className=" rounded-lg md:mb-5 py-2 md:py-3 px-2  outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
            />
            <ControlledSelectField
              control={control}
              options={optionLiveWith}
              name={"livewith"}
              label={"Tinggal Dengan"}
              hasLabel
              labelClassName={"block mb-1 dark:text-white text-sm font-medium text-gray-900"}
              required
              defaultValue="Pilih tinggal dengan"
              className=" rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
            />
          </div>
          <div className="w-full">
            <ControlledSelectField
              control={control}
              options={optionOwnIncome}
              name={"ownincome"}
              label={"Penghasilan Sendiri"}
              hasLabel
              labelClassName={"block mb-1 dark:text-white text-sm font-medium text-gray-900"}
              required
              defaultValue="Pilih penghasilan sendiri"
              className=" rounded-lg md:mb-5 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
            />
            <ControlledSelectField
              control={control}
              options={optionCollegeFeesPaid}
              name={"collegefeespaid"}
              label={"Biaya Kuliah Ditanggung Oleh"}
              hasLabel
              labelClassName={"block mb-1 dark:text-white text-sm font-medium text-gray-900"}
              required
              defaultValue="Masukan biaya kuliah ditanggung oleh"
              className=" rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
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
