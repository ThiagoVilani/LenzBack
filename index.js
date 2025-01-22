const email = require("./controllers/email.controller.js");
const express = require("express");
require("dotenv").config(); // Cargar variables de entorno al inicio
const app = express();
const nodemailer = require('nodemailer');

//Configurar los archivos estaticos
app.use(express.static('public'));

//-------------------------------------------------------
// Deshabilitar cors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
  //-------------------------------------------------------


//Variables de entorno
process.loadEnvFile();


//Tomar datos del body
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Inicio rutas
// const productoRoutes = require("./routes/producto.routes.js");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thiagovilani19@gmail.com',
      pass: 'vcai wvpa jfov mrla'
    }
  });
  
  app.post('/enviar-email', (req, res) => {
    const [nombre,numeroTelefono,ubicacion,mensaje] = req.body;
    email.TomarYEnviarInfo(nombre,numeroTelefono,ubicacion,mensaje);
  });


app.listen(process.env.PORT || 3000, () => {
  console.log("App started");
});