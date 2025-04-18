# 🛠️ eCommerce Product Listing API (Express.js + MongoDB)

This is the simple backend API for a simple eCommerce product listing app built using **Express.js**, **MongoDB (Mongoose)**, and **Cloudinary** for image uploads.

---

## 🚀 Features

- CRUD operations for products
- Image upload to Cloudinary
- Search products by name
- Responsive RESTful API structure
- Environment-based configuration using `.env`

---

## 🧰 Technologies Used

- Node.js + Express.js
- MongoDB + Mongoose
- Cloudinary (via Multer)
- Dotenv for config
- Deployed on Railway

---

## 📦 API Endpoints

### `GET /products`
Fetch all products (optionally filter by `?search=term`)

### `GET /products/:id`
Fetch single product by ID

### `POST /products`
Create a new product  
🔒 Requires multipart form data with:
- `name` (string)
- `description` (string)
- `price` (number)
- `currency` (string)
- `image` (file)

### `PUT /products/update/:id`
Update a product (including optional image update)

### `DELETE /products/delete/:id`
Delete a product by ID

---

## ⚙️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/Chinthana7858/sparkglobalassignment_server.git
cd server
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

```env
MONGO_URI=your_mongo_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```

4. **Run the server locally**

```bash
npm run dev
```

or

```bash
node server.js
```

---



