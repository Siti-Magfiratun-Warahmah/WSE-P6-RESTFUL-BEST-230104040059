Praktikum 6 - Web Service Engineering (P6-RESTful-BestPractices)

Nama: SITI MAGFIRATUN WARAHMAH 
NIM: 230104040059 
Kelas: TI23B 

Proyek ini merupakan hasil praktikum ke-6 mata kuliah Web Service Engineering , dengan fokus pada implementasi Best Practice RESTful API menggunakan Node.js dan Express.
Proyek ini melengkapi fungsionalitas CRUD dasar dengan fitur-fitur penting seperti:
1. Middleware Validasi: Memastikan name dan price ada saat request POST dan PUT.
2. Global Error Handler: Menangkap error server (500) secara terpusat tanpa mematikan server.
3. Logging: Mencatat (log) setiap request yang masuk ke terminal menggunakan morgan.
4. Endpoint API

API ini mengelola data produk sederhana (/api/products) dengan operasi:
- GET /api/products → Ambil semua produk 
- GET /api/products/:id → Ambil produk berdasarkan ID 
- POST /api/products → Tambah produk baru (dilengkapi validasi) 
- PUT /api/products/:id → Ubah produk (dilengkapi validasi) 
- PATCH /api/products/:id → Ubah sebagian data produk 
- DELETE /api/products/:id → Hapus produk 
- GET /api/products/crash/test → Simulasi 500 Internal Server Error
