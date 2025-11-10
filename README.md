# Praktikum 6 - Web Service Engineering (P6-RESTful-BestPractices)

Proyek ini merupakan hasil praktikum ke-6 mata kuliah Web Service Engineering. Fokus dari praktikum ini adalah implementasi **Best Practice RESTful API** menggunakan Node.js dan Express.

Proyek ini melengkapi fungsionalitas CRUD dasar dengan fitur-fitur penting untuk membuat API yang lebih robust, aman, dan konsisten.

## 👤 Identitas Mahasiswa

* **Nama** : SITI MAGFIRATUN WARAHMAH
* **NIM** : 230104040059
* **Kelas** : TI23B
* **Dosen** : Muhayat, M.IT

## ✨ Fitur Utama (Best Practices)

API ini menerapkan beberapa prinsip best practice:

1.  **Middleware Validasi Input:** Menggunakan middleware (`validateProduct.js`) untuk memvalidasi body request. Request `POST` dan `PUT` wajib menyertakan `name` dan `price`. Jika tidak, API akan merespon dengan status `400 Bad Request`.
2.  **Global Error Handler:** Terdapat middleware (`errorHandler.js`) yang berfungsi sebagai penangkap error terpusat. Jika terjadi error tak terduga di server (misalnya, typo variabel), server tidak akan mati dan akan mengembalikan respon standar `500 Internal Server Error`.
3.  **Logging Request:** Menggunakan logger `morgan` untuk mencatat (log) setiap request yang masuk ke konsol (terminal), yang mencatat HTTP method, path, status code, dan waktu respon.
4.  **Standar Respon JSON:** Semua respon dari API, baik sukses maupun gagal, mengikuti struktur JSON yang konsisten (`{ success, message, data }`) untuk memudahkan client.
5.  **HTTP Method & Status Code:** Penggunaan HTTP method (GET, POST, PUT, PATCH, DELETE) dan status code (200, 201, 400, 404, 500) yang tepat dan konsisten.

## 🗺️ Tabel Endpoint API

Berikut adalah daftar endpoint yang tersedia (berjalan di `http://localhost:3000`):

| Method | Endpoint | Deskripsi | Status Sukses | Status Error |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/api/products` | Mengambil semua data produk. | `200 OK` | `500` |
| **GET** | `/api/products/:id` | Mengambil data produk spesifik. | `200 OK` | `404 Not Found`, `500` |
| **POST** | `/api/products` | Menambah produk baru (ada validasi). | `201 Created` | `400 Bad Request`, `500` |
| **PUT** | `/api/products/:id` | Memperbarui seluruh data produk (ada validasi). | `200 OK` | `400 Bad Request`, `404 Not Found`, `500` |
| **PATCH** | `/api/products/:id` | Memperbarui sebagian data produk. | `200 OK` | `404 Not Found`, `500` |
| **DELETE** | `/api/products/:id` | Menghapus data produk. | `200 OK` | `404 Not Found`, `500` |
| **GET** | `/api/products/crash/test` | Simulasi 500 Internal Server Error. | - | `500 Internal Server Error` |

## 📦 Struktur Respon Standar

**Respon Sukses (Contoh: 200 OK / 201 Created):**
```json
{
  "success": true,
  "message": "Product updated",
  "data": {
    "id": 1,
    "name": "Laptop Pro X",
    "price": 1200000,
    "stock": 12
  }
}
