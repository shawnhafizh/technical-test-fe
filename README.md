# Technical Test Junior Front End

Aplikasi ini dibangun menggunakan Next.js, React, dan Ant Design, dan berfungsi sebagai antarmuka untuk mengelola produk.

## Daftar Isi

- [Persyaratan Sistem](#persyaratan-sistem)
- [Langkah Instalasi](#langkah-instalasi)
- [Menjalankan Aplikasi dalam mode Development](#menjalankan-aplikasi-dalam-mode-development)
- [Fitur Aplikasi](#fitur-aplikasi)

## Persyaratan Sistem

- Node.js (versi 18 atau yang lebih baru)
- Next.js (versi 14.x)
- `npm` atau `yarn`
- Ant Design (versi 5.x atau yang lebih baru)

## Langkah Instalasi

### Lakukan clone repositori ini

  ```bash
  git clone https://github.com/shawnhafizh/technical-test-fe.git
  cd technical-test-fe
  ```

### Install Dependencies
  Masuk ke folder utama proyek, lalu jalankan perintah:

  Menggunakan `yarn`
  ```bash
  yarn install
  ```
  atau menggunakan `npm`
  ```bash
  npm install
  ```

## Menjalankan Aplikasi dalam mode Development (Tanpa Firebase)

### Menyiapkan Backend

Siapkan backend dari project ini, yaitu **technical-test-be**. Lalu, buka project tersebut dan lakukan beberapa hal serperti:
1. **Install Depencencies**
  
    Jika project backend masih baru atau fresh. Jalankan perintah ini:

    Menggunakan `yarn`
    ```bash
    yarn install
    ```
    atau menggunakan `npm`
    ```bash
    npm install
    ```
2. **Menjalankan Backend**

    Jika sudah berhasil, jalankan backend dengan perintah:

    Menggunakan `yarn`
    ```bash
    yarn dev
    ```
    atau menggunakan `npm`
    ```bash
    npm run dev
    ```

### Menjalankan Frontend
Setelah proses menyiapkan backend berhasil, jalankan project frontend dengan:

Menggunakan `yarm`
```bash
yarn dev
```
atau menggunakan `npm`
```bash
npm run dev
```

Sekarang, aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

## Fitur Aplikasi

### Halaman Daftar Produk
  - Tabel produk yang menampilkan:
    1. Nama Produk
    2. Harga
    3. Kategori
    4. Deskripsi (truncated dengan Tooltip saat di-hover)
    5. Aksi (Edit, Hapus)
  - Navigasi halaman (pagination).
  - Real-time search box dengan  *debounce* 300ms untuk optimasi performa.
  - Tombol "Create Product" untuk membuka modal menambahkan produk baru.

### Search Funtion
  - Parameter pencarian dikirimkan ke backend untuk pemfilteran data berdasarkan **nama produk**, **kategori**, dan **deskripsi**.

### Modal Form (Create/Edit)
  - Modal untuk create/edit produk.


