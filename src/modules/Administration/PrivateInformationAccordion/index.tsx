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

const PrivateInformationSection: FC = (): ReactElement => {
  const validationSchema = z.object({
    fullname: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    address: z.string().min(1, { message: " Alamat harus diisi" }),
    placeOfBirth: z.string().min(1, { message: "Tempat lahir harus diisi" }),
    lastEducation: z.string().min(1, { message: "Pendidikan terakhir harus diisi" }),
    dateOfBirth: z.string().min(1, { message: "Tanggal lahir harus diisi" }),
    phoneNumber: z.string().min(1, { message: "nomor handphone harus diisi" }),
    nim: z.string().optional(),
    prodi: z.string().optional(),
    semester: z.string().optional(),
    university: z.string().optional(),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { setPrivateStatus, getPrivateStatus } = usePrivateInformationStatus();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
  });

  const onSubmit = handleSubmit(() => {
    try {
      setPrivateStatus(true);
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
            <div className="form-label">
              <label>Nama Lengkap</label>
              <ControlledTextField
                control={control}
                type={"fullname"}
                label={"fullname"}
                name={"fullname"}
                placeholder={"Masukkan nama lengkap"}
                required={true}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            {/* <div className="form-label">
              <label>Jenis Kelamin</label>
              <SelectField
                label="gender"
                name="gender"
                defaultValue=""
                required={true}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              >
                <OptionField label="laki-laki" value="laki-laki" />
                <OptionField label="perempuan" value="perempuan" />
              </SelectField>
            </div> */}
            <div className="form-label">
              <label>Tempat Lahir</label>
              <ControlledTextField
                control={control}
                type={"placeOfBirth"}
                label={"placeOfBirth"}
                name={"placeOfBirth"}
                placeholder={"Masukkan tempat lahir"}
                required={true}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <label>Alamat Lengkap</label>
              <ControlledTextField
                control={control}
                type={"address"}
                label={"address"}
                name={"address"}
                placeholder={"Masukkan alamat lengkap"}
                required={true}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <label>NIM atau NPM (optional)</label>
              <ControlledTextField
                control={control}
                type={"nim"}
                label={"nim"}
                name={"nim"}
                placeholder={"masukkan NIM atau NPM (optional)"}
                required={false}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <label> Program Studi (optional)</label>
              <ControlledTextField
                control={control}
                type={"prodi"}
                label={"prodi"}
                name={"prodi"}
                placeholder={"Masukkan Program Studi (optional)"}
                required={false}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-label">
              <label>Alamat Email</label>
              <ControlledTextField
                control={control}
                type={"email"}
                label={"email"}
                name={"email"}
                placeholder={"Masukkan alamat email"}
                required={true}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <label>Nomor Handphone</label>
              <ControlledTextField
                control={control}
                type={"number"}
                label={"phoneNumber"}
                name={"phoneNumber"}
                placeholder={"Masukkan nomor handphone"}
                required={true}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <label>Tanggal Lahir</label>
              <ControlledTextField
                control={control}
                type={"date"}
                label={"dateOfBirth"}
                name={"dateOfBirth"}
                placeholder={"Masukkan tanggal lahir"}
                required={true}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <label>Pendidikan Terakhir</label>
              <ControlledTextField
                control={control}
                type={"lastEducation"}
                label={"lastEducation"}
                name={"lastEducation"}
                placeholder={"Masukkan pendidikan terakhir"}
                required={true}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <label>Universitas Asal (optional)</label>
              <ControlledTextField
                control={control}
                type={"name"}
                label={"university"}
                name={"university"}
                placeholder={"Masukkan universitas asal"}
                required={false}
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <label>Semester (optional)</label>
              <ControlledTextField
                control={control}
                type={"semester"}
                label={"semester"}
                name={"semester"}
                placeholder={"Masukkan pendidikan terakhir"}
                required={false}
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
