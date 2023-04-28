import { FC, ReactElement } from "react";
import Accordion from "@/components/Administration/Accordion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/Form";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Button from "@/components/Common/Button";
import { handleError } from "@/utilities/helper";
import ControlledSelectField from "@/components/ControlledInputs/ControlledSelectField";
import {
  useFetchAllAdministration,
  useJobInformationStatus,
  usePrivateInformationStatus,
  useUpdateFamilyAdm,
} from "../hooks";
import {
  optionFatherJob,
  optionMotherJob,
  // optionOwnJob,
  optionFatherIncome,
  optionMotherIncome,
  optionOwnIncome,
  optionCollegeFeesPaid,
  optionLiveWith,
} from "@/utilities/constant";
import { TFamilyAdm } from "../type";

const JobsInformation: FC = (): ReactElement => {
  const schema = z.object({
    father_name: z.string().min(1, { message: "Nama ayah harus diisi" }),
    father_occupation: z.string().min(1, { message: "Pekerjaan ayah harus diisi" }),
    father_salary: z.string().min(1, { message: "Penghasilan ayah harus diisi" }),
    mother_name: z.string().min(1, { message: "Nama ibu harus diisi" }),
    mother_occupation: z.string().min(1, { message: "Pekerjaan ibu harus diisi" }),
    mother_salary: z.string().min(1, { message: "Penghasilan ibu harus diisi" }),
    self_salary: z.string().min(1, { message: "Penghasilan sendiri harus diisi" }),
    live_with: z.string().min(1, { message: "Tinggal dengan harus diisi" }),
    tuition_payer: z.string().min(1, { message: "Biaya kuliah harus diisi" }),
    // self_occupation: z.string().min(1, { message: "Pekerjaan sendiri harus diisi" }),
  });

  const { setJobStatus, getJobStatus } = useJobInformationStatus();
  const { getPrivateStatus } = usePrivateInformationStatus();

  type ValidationSchema = z.infer<typeof schema>;
  const { mutate } = useUpdateFamilyAdm();
  const { data } = useFetchAllAdministration();
  const getFamily = data?.data?.familial;
  console.log("family", getFamily);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      father_name: getFamily?.father_name,
      father_occupation: getFamily?.father_occupation,
      father_salary: getFamily?.father_salary,
      mother_name: getFamily?.mother_name,
      mother_occupation: getFamily?.mother_occupation,
      mother_salary: getFamily?.self_salary,
      self_salary: getFamily?.self_salary,
      live_with: getFamily?.live_with,
      tuition_payer: getFamily?.tuition_payer,
      // self_occupation: "",
    },
  });

  const onSubmit = handleSubmit((PayloadData) => {
    try {
      mutate(PayloadData as TFamilyAdm);
      setJobStatus(true);
    } catch (err) {
      setJobStatus(false);
      throw handleError(err);
    }
  });

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
              name={"father_name"}
              hasLabel
              control={control}
              label={"Nama Ayah"}
              type={"name"}
              required
              placeholder={"Masukan nama ayah"}
              className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
            />

            <ControlledTextField
              name={"mother_name"}
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
              name={"father_occupation"}
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
              name={"mother_occupation"}
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
              name={"father_salary"}
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
              name={"mother_salary"}
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
              options={optionOwnIncome}
              name={"self_salary"}
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
              name={"live_with"}
              label={"Tinggal Dengan"}
              hasLabel
              labelClassName={"block mb-1 dark:text-white text-sm font-medium text-gray-900"}
              required
              defaultValue="Pilih tinggal dengan"
              className=" rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
            />
          </div>
          <div className="w-full">
            {/* <ControlledSelectField
              control={control}
              options={optionOwnIncome}
              name={"ownincome"}
              label={"Penghasilan Sendiri"}
              hasLabel
              labelClassName={"block mb-1 dark:text-white text-sm font-medium text-gray-900"}
              required
              defaultValue="Pilih penghasilan sendiri"
              className=" rounded-lg md:mb-5 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
            /> */}
            <ControlledSelectField
              control={control}
              options={optionCollegeFeesPaid}
              name={"tuition_payer"}
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
