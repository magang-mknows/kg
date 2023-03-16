export const NAVBAR_MENU = [];

export const navbarMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Studi-ku",
    link: "/studi-ku",
  },
  {
    name: "Penugasan",
    link: "/penugasan",
  },
  {
    name: "Rencana Studi",
    link: "/rencana-studi",
  },
  {
    name: "Nilai & Sertifikat",
    link: "/nilai-sertifikat",
  },
];

export const featureList = [
  { link: "/", name: "Administrasi" },
  { link: "/", name: "Rencana Study" },
  { link: "/", name: "Studi-ku" },
  { link: "/", name: "Program Study" },
  { link: "/", name: "Pelatihan-ku" },
  { link: "/", name: "Nilai & Sertifikat" },
  { link: "/", name: "Penugasan" },
  { link: "/", name: "Forum Diskusi" },
  { link: "/", name: "Lainnya" },
];

export const notifListDummy = [
  { link: "/", name: "Lorem ipsum 1 ", time: "now" },
  { link: "/", name: "Lorem ipsum 2", time: "now" },
];

export const publicRoutes = [
  "/",
  "/auth/login",
  "/auth/register",
  "/auth/forgot",
  "/penugasan",
  "/dashboard",
  "/studiku",
  "/administrasi",
  "/rencana-studi",
  "/kontrak-krs",
  "/program-studi",
  "/nilai-sertifikat",
  "/detail",
  "/drill-simulasi",
  "/ubah-profile",
  "/ubah-password",
  "/event",
  "/semua-fitur",
];

export const assigmentBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Penugasan",
    link: "/penugasan",
  },
];

export const administrationBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Administrasi",
    link: "/administrasi",
  },
];

export const myStudyBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Studi-ku",
    link: "/studiku",
  },
];

export const studyPlanBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Fakultas",
    link: "/rencana-studi",
  },
];

export const quizBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Studi-ku",
    link: "/studiku",
  },
  {
    name: "Menejemen Keuangan",
    link: "/studiku/quiz",
  },
  {
    name: "Quiz",
    link: "/studiku/quiz",
  },
];

export const studyProgramBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Fakultas",
    link: "/rencana-studi",
  },
  {
    name: "Program Studi",
    link: "/program-studi",
  },
];

export const contractStudyBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Fakultas",
    link: "/rencana-studi",
  },
  {
    name: "Program Studi",
    link: "/program-studi",
  },
  {
    name: "Kontrak KRS",
    link: "/kontrak-krs",
  },
];

export const scoreBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Nilai & Sertfikat",
    link: "/nilai-sertifikat",
  },
];
export const dashboardBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];
export const acaraKampusBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Acara Kampus",
    link: "/acara-kampus",
  },
];
export const drillSimulation = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Simulasi, Drill & Assessment",
    link: "/simulasi-drill",
  },
];
export const allFeatures = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Semua Fitur",
    link: "/semmua-fitur",
  },
];
export const rescheduleSimulationBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Simulasi, Drill & Assessment",
    link: "/simulasi-drill",
  },
  {
    name: "Pengajuan Perubahan Jadwal Simulasi",
    link: "/perubahan-simulasi",
  },
];

// private information section
export const optionsGender = [
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

export const optionsLastEducation = [
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

// job information section
export const optionFatherJob = [
  {
    value: "pilih",
    label: "Pilih pekerjaan ayah",
  },
  {
    value: "PROFESSIONAL",
    label: "Professional (Dokter, Pengacara, Insiyur)",
  },
  {
    value: "SERVICE",
    label: "Pekerja Layanan (Kasir, Pramusaji, Pramugari)",
  },
  {
    value: "MANUAL",
    label: "Pekerja Manual (Pekerja Konstruksi, Pekerja Pabrik)",
  },
  {
    value: "JOBLESS",
    label: "Tidak Bekerja atau Ayah Rumah Tangga",
  },
];

export const optionMotherJob = [
  {
    value: "pilih",
    label: "Pilih pekerjaan ibu",
  },
  {
    value: "PROFESSIONAL",
    label: "Professional (Dokter, Pengacara, Insiyur)",
  },
  {
    value: "SERVICE",
    label: "Pekerja Layanan (Kasir, Pramusaji, Pramugari)",
  },
  {
    value: "MANUAL",
    label: "Pekerja Manual (Pekerja Konstruksi, Pekerja Pabrik)",
  },
  {
    value: "JOBLESS",
    label: "Tidak Bekerja atau Ibu Rumah Tangga",
  },
];

export const optionOwnJob = [
  {
    value: "pilih",
    label: "Pilih pekerjaan sendiri",
  },
  {
    value: "PROFESSIONAL",
    label: "Professional (Dokter, Pengacara, Insiyur)",
  },
  {
    value: "SERVICE",
    label: "Pekerja Layanan (Kasir, Pramusaji, Pramugari)",
  },
  {
    value: "MANUAL",
    label: "Pekerja Manual (Pekerja Konstruksi, Pekerja Pabrik)",
  },
  {
    value: "JOBLESS",
    label: "Tidak Bekerja atau Mengurus Rumah Tangga",
  },
];

export const optionFatherIncome = [
  {
    value: "pilih",
    label: "Pilih penghasilan ayah",
  },
  {
    value: "RICH",
    label: "> Rp 9.000.000/bulan",
  },
  {
    value: "UPPERMED",
    label: "Rp 6.000.000 - Rp 8.999.999/bulan",
  },
  {
    value: "LOWERMED",
    label: "Rp 3.000.000 - Rp 5.999.999/bulan",
  },
  {
    value: "POOR",
    label: "Rp 1.000.000 - Rp 2.999.999/bulan",
  },
];

export const optionMotherIncome = [
  {
    value: "pilih",
    label: "Pilih penghasilan ibu",
  },
  {
    value: "RICH",
    label: "> Rp 9.000.000/bulan",
  },
  {
    value: "UPPERMED",
    label: "Rp 6.000.000 - Rp 8.999.999/bulan",
  },
  {
    value: "LOWERMED",
    label: "Rp 3.000.000 - Rp 5.999.999/bulan",
  },
  {
    value: "POOR",
    label: "Rp 1.000.000 - Rp 2.999.999/bulan",
  },
];

export const optionOwnIncome = [
  {
    value: "pilih",
    label: "Pilih penghasilan sendiri",
  },
  {
    value: "RICH",
    label: "> Rp 9.000.000/bulan",
  },
  {
    value: "UPPERMED",
    label: "Rp 6.000.000 - Rp 8.999.999/bulan",
  },
  {
    value: "LOWERMED",
    label: "Rp 3.000.000 - Rp 5.999.999/bulan",
  },
  {
    value: "POOR",
    label: "Rp 1.000.000 - Rp 2.999.999/bulan",
  },
];

export const optionLiveWith = [
  {
    label: "Pilih tinggal dengan",
    value: "pilih",
  },
  {
    value: "PARENT",
    label: "Orang tua",
  },
  {
    value: "RELATIVE",
    label: "Keluarga dekat (Paman, Bibi, Kakek atau Nenek)",
  },
  {
    value: "SCHOLARSHIP",
    label: "Beasiswa",
  },
  {
    value: "SELF",
    label: "Tinggal sendiri",
  },
];

export const optionCollegeFeesPaid = [
  {
    value: "pilih",
    label: "Pilih biaya kuliah ditanggung oleh",
  },
  {
    value: "PARENT",
    label: "Orang tua",
  },
  {
    value: "RELATIVE",
    label: "Keluarga dekat (Paman, Bibi, Kakek atau Nenek)",
  },
  {
    value: "SCHOLARSHIP",
    label: "Beasiswa",
  },
  {
    value: "SELF",
    label: "Penghasilan sendiri",
  },
];

export const guideBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Panduan",
    link: "/panduan",
  },
];
