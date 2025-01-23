const email = require("./controllers/email.controller.js");
const express = require("express");
require("dotenv").config(); // Cargar variables de entorno al inicio
const app = express();
const FC = require("./controllers/funcionesConfig.js");
const bodyParser = require("body-parser");
//|-|-|-|-||-|-|-|-||-|-|-|-||-|-|-|-||-|-|-|-||-|-|-|-|


//Configurar los archivos estaticos
app.use(express.static('public'));

// Deshabilitar cors
app.use(FC.DeshabilitarCors());

//Variables de entorno
process.loadEnvFile();

//Tomar datos del body
app.use(bodyParser.json());

//Creo transporter para enviar los emails
const transporter = await email.CrearTransport();
  
//  Ruta
app.post('/enviar-email', (req, res) => {
  const [nombre,numeroTelefono,ubicacion,mensaje] = req.body;
  email.TomarYEnviarInfo(transporter,nombre,numeroTelefono,ubicacion,mensaje);
});


app.listen(process.env.PORT || 3000, () => {
  console.log("App started");
});