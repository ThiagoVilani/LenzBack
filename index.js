const express = require("express");
require("dotenv").config(); // Cargar variables de entorno al inicio
const app = express();
const path = require("path");

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


  // Importante para variables de entorno
//require("dotenv").config();
process.loadEnvFile();

// Importante para tomar datos del body!
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Inicio rutas
// const productoRoutes = require("./routes/producto.routes.js");


app.listen(process.env.PORT || 3000, () => {
    console.log("App started");
  });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thiagovilani19@gmail.com',
      pass: 'vcai wvpa jfov mrla'
    }
});

app.post('/enviar-email', (req, res) => {
    const { nombre, numeroTelefono, ubicacion, mensaje } = req.body;
  
    const mailOptions = {
      from: 'thiagovilani19@gmail.com',
      to: 'lenzelectricidadinmuebles@gmail.com',
      subject: 'Nuevo mensaje del formulario',
      text: `Nombre: ${nombre}\nNumero de telefono: ${numeroTelefono}\nUbicacion: ${ubicacion}\nMensaje: ${mensaje}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error al enviar el correo');
      } else {
        console.log('Correo enviado: ' + info.response);
        res.status(200).send('Correo enviado con éxito');
      }
    });
  });