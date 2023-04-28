import { FC, ReactElement } from "react";
import Accordion from "@/components/Administration/Accordion";
import Form from "@/components/Form";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleError } from "@/utilities/helper";
import Button from "@/components/Common/Button";
import ControlledSelectField from "@/components/ControlledInputs/ControlledSelectField";
import { optionsGender, optionsLastEducation } from "@/utilities/constant";
import {
  usePrivateInformationStatus,
  useAdministrationStatus,
  useFetchAllAdministration,
  useUpdateBiodataAdm,
} from "../hooks";
import { TBiodataAdm } from "../type";

const PrivateInformationSection: FC = (): ReactElement => {
  const validationSchema = z.object({
    gender: z.string().min(1, { message: "Jenis kelamin harus diisi" }),
    phone: z.string().min(1, { message: "Nomor handphone harus diisi" }),
    birthdate: z.string().min(1, { message: "Tanggal lahir harus diisi" }),
    birthplace: z.string().min(1, { message: "Tempat lahir harus diisi" }),
    address: z.string().min(1, { message: " Alamat harus diisi" }),
    last_education: z.string().min(1, { message: " Pendidikan terakhir harus diisi" }),
    nim: z.string().optional(),
    university: z.string().optional(),
    major: z.string().optional(),
    semester: z.string().optional(),
    // fullname: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    // email: z.string().min(1, { message: "Email harus diisi" }).email({
    //   message: "Email harus valid",
    // }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { setPrivateStatus, getPrivateStatus } = usePrivateInformationStatus();
  const { setAdministrationStatus } = useAdministrationStatus();
  const { mutate } = useUpdateBiodataAdm();
  const { data } = useFetchAllAdministration();
  const getBiodata = data?.data?.biodata;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      // email: "",
      // fullname: "",
      gender: getBiodata?.gender,
      phone: getBiodata?.phone,
      birthdate: getBiodata?.birthdate,
      birthplace: getBiodata?.birthplace,
      address: getBiodata?.address,
      last_education: getBiodata?.last_education,
      nim: getBiodata?.nim,
      university: getBiodata?.university,
      major: getBiodata?.major,
      semester: getBiodata?.semester,
    },
  });

  const onSubmit = handleSubmit((PayloadData) => {
    try {
      mutate(PayloadData as TBiodataAdm);
      setPrivateStatus(true);
      setAdministrationStatus("onProgress");
    } catch (err) {
      setPrivateStatus(false);
      throw handleError(err);
    }
  });

  return (
    <Accordion
      idAccordion={getPrivateStatus ? "" : "privat-information"}
      title="Informasi Pribadi"
      disabled={getPrivateStatus ? true : false}
    >
      <Form onSubmit={onSubmit}>
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            {/* <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"fullname"}
                label={"Nama Lengkap"}
                name={"HURUNG ANAA"}
                placeholder={"Masukkan nama lengkap"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block  mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div> */}
            <div className="form-label">
              <ControlledSelectField
                control={control}
                hasLabel
                label="Jenis Kelamin"
                name="gender"
                defaultValue="Pilih jenis kelamin"
                required={true}
                options={optionsGender}
                className=" rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
                labelClassName="block mb-1 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"placeOfBirth"}
                label={"Tempat Lahir"}
                name="birthplace"
                placeholder={"Masukkan tempat lahir"}
                required
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"address"}
                label={"Alamat Lengkap"}
                name={"address"}
                placeholder={"Masukkan alamat lengkap"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"nim"}
                label={"NIM atau NPM (optional)"}
                name={"nim"}
                placeholder={"masukkan NIM atau NPM (optional)"}
                required={false}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"prodi"}
                label={"Program Studi (optional)"}
                name={"major"}
                placeholder={"Masukkan Program Studi (optional)"}
                required={false}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
          </div>
          <div className="w-full">
            {/* <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"email"}
                label={"Alamat Email"}
                name="HURUNG ANAAA"
                placeholder={"Masukkan alamat email"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div> */}
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"number"}
                label={"Nomor Handphone"}
                name={"phone"}
                placeholder={"Masukkan nomor handphone"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"date"}
                label={"Tanggal Lahir"}
                name={"birthdate"}
                placeholder={"Masukkan tanggal lahir"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledSelectField
                control={control}
                hasLabel
                label="Pendidikan Terakhir"
                name="last_education"
                defaultValue="Pilih pendidikan terakhir"
                required={true}
                options={optionsLastEducation}
                className=" rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
                labelClassName="block mb-1 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"name"}
                label={"Universitas Asal (optional)"}
                name={"university"}
                placeholder={"Masukkan universitas asal"}
                required={false}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"semester"}
                label={"Semester (optional)"}
                name={"semester"}
                placeholder={"Masukkan pendidikan terakhir"}
                required={false}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="flex w-full my-8 justify-end">
              <Button
                disabled={!isValid}
                className="my-4 w-[211px] rounded-[8px] disabled:bg-gray-400 disabled:text-gray-200 bg-blue-600 text-white font-bold p-3 text-1xl"
                text={"Simpan Informasi Pribadi"}
                type={"submit"}
              />
            </div>
          </div>
        </div>
      </Form>
    </Accordion>
  );
};

export default PrivateInformationSection;
