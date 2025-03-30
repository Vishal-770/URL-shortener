# 🔗 URL Shortener

## 📌 Description

A simple URL shortener built using Node.js, Express.js, Mongoose, and EJS. This project allows users to shorten long URLs and access them through short links.

## ✨ Features

- 🔹 Generate short URLs using `nanoid`
- 🔹 Store URLs in MongoDB using Mongoose
- 🔹 Redirect users when accessing a short URL
- 🔹 Basic frontend using EJS
- 🔹 Live reload during development using `nodemon`

## 🛠 Tech Stack

- **🖥 Backend:** Node.js, Express.js
- **💾 Database:** MongoDB, Mongoose
- **🎨 Templating Engine:** EJS
- **🔍 Others:** Nanoid, Nodemon

## 📂 File Structure

```
project-root/
│── 📁 controllers/       # Controllers for handling requests
│── 📁 models/            # Mongoose models
│── 📁 node_modules/      # Dependencies
│── 📁 routes/            # Routes for URL shortening
│── 📁 views/             # EJS templates
│── 🔌 connection.js      # MongoDB connection setup
│── 📜 package.json       # Project dependencies and scripts
│── 📜 package-lock.json  # Lock file for dependencies
│── 🚀 server.js          # Main entry point of the application
│── 📝 task.txt           # Task list or notes
```

## ⚡ Installation

1. 🚀 Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```
2. 📦 Install dependencies:
   ```sh
   npm install
   ```
3. ⚙️ Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```sh
   MONGO_URI=<your-mongodb-uri>
   PORT=4000
   ```
4. ▶️ Start the development server:
   ```sh
   npm run dev
   ```
   The server will run on `http://localhost:`4000

## 🚀 Usage

- 🌐 Open `http://localhost:`4000 in your browser.
- 🔗 Enter a long URL to generate a short URL.
- 📌 Use the generated short link to access the original URL.

## 📜 Scripts

- `npm start` - 🚀 Start the server in production mode.
- `npm run dev` - 🔄 Start the server with `nodemon` for development.

## 📦 Dependencies

- 📌 express
- 📌 mongoose
- 📌 ejs
- 📌 nanoid
- 📌 nodemon (for development)

## 🤝 Contributing

Feel free to submit issues or pull requests to improve the project.

## 📜 License

This project is licensed under the MIT License.

