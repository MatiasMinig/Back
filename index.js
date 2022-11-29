import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';


// Habilitar express
const app = express();
app.use(express.json()); // con esto funcion me muestra los datos de tipo json 

// Busca el .env
dotenv.config();

// Conectar la base de datos
conectarDB();

// Configurar CORS
const whitelist = [process.env.FRONT_URL,];

const corsOptions = {
    origin: function(origin, callback) {
        if(whitelist.includes(origin)) {
            // Puede Consultar la API
            callback(null, true);
        } else {
            // No esta permitido
            callback(new Error("Error de Cors"));
        }
    },
};

app.use(cors(corsOptions));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

// Routing
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
});



