import { FC, ReactElement } from "react";
import Accordion from "@/components/Administration/Accordion";
import Form from "@/components/Form";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleError } from "@/utilities/helper";
import Button from "@/components/Common/Button";
import { usePrivateInformationStatus } from "@/hooks/Administration/usePrivateInformationStatus";
import { useAdministrationStatus } from "@/hooks/Administration/useAdministrationStatus";
import ControlledSelectField from "@/components/ControlledInputs/ControlledSelectField";

const PrivateInformationSection: FC = (): ReactElement => {
  const validationSchema = z.object({
    fullname: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    address: z.string().min(1, { message: " Alamat harus diisi" }),
    placeOfBirth: z.string().min(1, { message: "Tempat lahir harus diisi" }),
    lastEducation: z.string().min(1, { message: "Pendidikan terakhir harus diisi" }),
    dateOfBirth: z.string().min(1, { message: "Tanggal lahir harus diisi" }),
    phoneNumber: z.string().min(1, { message: "Nomor handphone harus diisi" }),
    nim: z.string().optional(),
    prodi: z.string().optional(),
    semester: z.string().optional(),
    university: z.string().optional(),
    gender: z.string().min(1, { message: "Jenis kelamin harus diisi" }),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { setPrivateStatus, getPrivateStatus } = usePrivateInformationStatus();
  const { setAdministrationStatus } = useAdministrationStatus();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      gender: "",
      email: "",
      address: "",
      nim: "",
      fullname: "",
      semester: "",
      placeOfBirth: "",
      phoneNumber: "",
      lastEducation: "",
      dateOfBirth: "",
      university: "",
      prodi: "",
    },
  });

  const onSubmit = handleSubmit(() => {
    try {
      setPrivateStatus(true);
      setAdministrationStatus("onProgress");
    } catch (err) {
      setPrivateStatus(false);
      throw handleError(err);
    }
  });

  const optionsGender = [
    {
      value: "pilih",
      label: "Pilih jenis kelamin",
    },
    {
      value: "P",
      label: "Perempuan",
    },
    {
      value: "L",
      label: "Laki - Laki",
    },
  ];

  const optionsLastEducation = [
    {
      value: "pilih",
      label: "Pilih pendidikan terakhir",
    },
    {
      value: "NA",
      label: "Tidak lulus SD / belum tamat SD",
    },
    {
      value: "ELEMENTARY",
      label: "Tamat SD / setingkat",
    },
    {
      value: "HIGHSCHOOL",
      label: "Tamat SMP / setingkat",
    },
    {
      value: "SENIORHS",
      label: "Tamat SMA / setingkat",
    },
    {
      value: "DIPLOMA",
      label: "Diploma 1 / 2 / 3",
    },
    {
      value: "BACHELOR",
      label: "Sarjana (S1)",
    },
    {
      value: "MAGISTRATE",
      label: "Magister (S2)",
    },
    {
      value: "DOCTORATE",
      label: "Doktor (S3)",
    },
  ];

  return (
    <Accordion
      idAccordion={getPrivateStatus ? "" : "privat-information"}
      title="Informasi Pribadi"
      disabled={getPrivateStatus ? true : false}
    >
      <Form onSubmit={onSubmit}>
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"fullname"}
                label={"Nama Lengkap"}
                name={"fullname"}
                placeholder={"Masukkan nama lengkap"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block  mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
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
                name={"placeOfBirth"}
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
                name={"prodi"}
                placeholder={"Masukkan Program Studi (optional)"}
                required={false}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"email"}
                label={"Alamat Email"}
                name={"email"}
                placeholder={"Masukkan alamat email"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"number"}
                label={"Nomor Handphone"}
                name={"phoneNumber"}
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
                name={"dateOfBirth"}
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
                name="lastEducation"
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
