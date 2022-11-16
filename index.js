import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';

// Habilitar express
const app = express();

dotenv.config();

// Conectar la base de datos
conectarDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
});



