# How To Use Git Properly

## New please read this shit

## If you new in this project Read the Initial Setup Section

## Contribution Guide

### If your local change not commited

### 1.Stash dulu kerjaan kamu supaya gak ilang

` git stash`

### 2.1 Setelah itu kamu perlu pull perubahan dari branch main

`git pull origin main`

#### 2.2 Setelah kamu berhasil melakukan pembaruan dari branch main selanjutnya kamu perlu mengembalikan pekerjaan mu sebelum nya yang ter stash

`git stash pop`

### 3.Tapi jika ketika melakukan step kedua terjadi error maka ikuti langkah yang bawah

## If Your Local Change is Commited

### 1. Pindah dulu ke Branch main

`git checkout main`

### 2.Kemudian pull perubahan terbaru dari branch main

`git pull`

### 3.Kemudian Pindah lagi ke branch dirimu

`git checkout <branch mu>`

### 4.Selanjutnya kita perlu merge perubahan terbaru dari main

`git merge main`

### 5.Kita perlu mengembalikan pekerjaan nya jika sebelumnya udah ke stash

`git stash pop`

# NextJS TailwindCSS BOILERPLATE

Boilerplate NextJS dengan TailwindCSS sebagai Styling Unit

Requirements :

- React
- Next
- Racoil
- Zod
- Tanstack Query
- React Hook Form
- Jest
- TailwindCSS
- HeadlessUI
- ESLint
- Prettier
- Nix Devenv
- Nix Direnv
- Docker
- Axios
- Husky

## Recomendation Code Editor

Visual Studio Code

### Recomendation Extension

- Stylelint
- TailwindCSS Intelesense
- Prettier
- Error Lens
- ESLint

## Initial Setup

- Clone Project ini ( Direkomendasikan menggunakan SSH )

> `git clone git@github.com:ary-bod/frontend-boiler`

## Install NodeJS dan Yarn

- Anda perlu menginstall dulu NodeJS dan Yarn ( Direkomendasikan menggunakan NodeJS Versi LTS )

> `npm i -g yarn`

## Install Dependency

- Pasang Dependency

> `yarn install`

## Run Development Server

- Project bisa dijalankan dengan beberapa metode berikut

> `yarn dev`

## Development With Nix

Development dengan Nix membuat proses Develop menjadi lebih mudah dan ringkas, semua dependency akan terurus dengan sendirinya, juga independent artinya tidak akan menggangu environment yang lain

- Pasang Nixpkgs

> `sh <(curl -L https://nixos.org/nix/install) --no-daemon`

- Pasang nix-flakes

> `nix-env -iA nixpkgs.nixFlakes`

- Setup nix-flakes \
  Edit file yang ada di `~/.config/nix/nix.conf` atau `/etc/nix/nix.conf` dan tambahkan:

> `experimental-features = nix-command flakes`

- Pasang nix-direnv

> `nix-env -f '<nixpkgs>' -iA nix-direnv`

- Setup nix-direnv

> `source $HOME/.nix-profile/share/nix-direnv/direnvrc`

- Masuk ke folder yang sudah di clone kemudian jalankan perintah berikut

> `direnv allow`

- Dan enjoy tinggal tunggu dependency terinstall dengan sendirinya

## Development with Docker

Docker harus di pasang dulu jika belum ada

- Pasang Docker bisa di unduh di https://docker.com

- Setup Docker

> `docker compose up`

## Setup Env

ENV di sesuaikan seperti yang ada di contoh .env.example

- Rename file .env.example menjadi .env.local
- Isi ENV sesuai dengan yang ada di dalam file .env.local nya

## Setup Husky

Untuk bisa menggunakan husky agar berjalan baik dan benar maka perlu di inisialisasi dulu

- Jalankan perintah
  > `npx husky-init`

## Demo App

- [Development Build](https://frontend-boiler-three.vercel.app/)

# How to use Layout

BaseLayout memuat content antara lain, yaitu Navbar dan Footer. Component ini digunakan untuk membungkus component MainLayout atau 'section' element.

MainLayout berfungsi untuk meng-sama-rata-kan jarak antara tepi window dengan main content. Dengan kata lain, horizontal padding-nya sama. Perlu diketahui juga, bahwa secara default, MainLayout hanya memiliki 2 kolom. Jadi anda bisa membuat section element sendiri jika kolom anda 1 atau lebih dari 2.

ContentLayout, fungsinya untuk membungkus items dengan flex-wrap. Otomatis items yang dibungkus akan ke tengah. Optional jika ingin menggunakan Layout ini.

## Usage/Examples

```typescript
export default function Examples() {
  return (
    <BaseLayout>
      <MainLayout>
        <div>Anjay</div>
        // optional
        <ContentLayout>/* ---- content ---- */</ContentLayout>
      </MainLayout>
    </BaseLayout>
  );
}
```

# How to use Button

Button memiliki sembilan parameter

- buttonType = merupakan tipe button yang akan digunakan, ada tiga tipe yaitu "call to action" atau cta, "auth button", dan "scroll to top button". Yang membedakan ketiganya hanya ukuran buttonnya.
- text
- link = terdapat dua tipe yaitu "link internal" atau page, dan "link external" atau to, namun untuk menggunakan link external harus menambahkan https:// didepan linknya.
- size = ukuran dari button, terdapat empat ukuran yang sudah disesuaikan dengan tipe button di figma.
- color = dengan menambahkan parameter color, kita dapat menyesuaikan warna button serta warna teks dari button tersebut.
- icon = untuk menambahkan icon dapat menggunakan icon dari react-icon yang akan di-render sebagai ReactNode dan icon external dengan format file jpg, jpeg, png, dan svg yang akan di-render sebagai StaticImageData

## Button/Examples

```typescript
export default function Examples() {
  return (
    <GlobalButton
    buttonType = "auth", // "cta" | "auth" | "scroll"
    text = "Login"
    page = "/internal-page" // to = "https://external-page",
    size = "small", // "small" | "base" | "regular" | "large"
    color = "black", // "black" | "white" | "lightBlue" | "red" | "blue" | "green" | "purple"
    icon = {iconImg} // hasImg
    />
  );
}
```
