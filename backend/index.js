const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

// Usuarios
app.get("/users", async (req, res) => {
  try {
    const response = await fetch("https://api-books-ac3j.onrender.com/users");
    const users = await response.json();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo usuarios" });
  }
});

// Libros
app.get("/books", async (req, res) => {
  try {
    const response = await fetch("https://api-books-ac3j.onrender.com/books");
    const books = await response.json();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo libros" });
  }
});

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
