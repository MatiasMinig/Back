import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';

// Habilitar express
const app = express();
app.use(express.json()); // con esto funcion me muestra los datos de tipo json 

// Busca el .env
dotenv.config();

// Conectar la base de datos
conectarDB();

// Routing
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
});



