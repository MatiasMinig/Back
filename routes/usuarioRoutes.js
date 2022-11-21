import express from 'express';
const router = express.Router();
import {registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil} from '../controllers/usuarioController.js';
import checkAuth from '../middleware/checkAuth.js';

// Autenticación, Registro y Confirmación de Usuarios 
router.post('/', registrar); // Crea un nuevo usuario
router.post("/login", autenticar); // registro de usuario
router.get("/confirmar/:token", confirmar); // Confirmacion de cuenta via token
router.post("/olvide-password", olvidePassword ); // solicitar para recuperar password.
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword); // el de .get Comprueba que el token sea valido y que el usuario exista. 

router.get('/perfil', checkAuth, perfil);

export default router;