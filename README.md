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
            <div>
                Anjay
            </div>
            // optional
            <ContentLayout>
                /* ---- content ---- */ 
            </ContentLayout>
        </MainLayout>
    </BaseLayout>
  )
}

```

