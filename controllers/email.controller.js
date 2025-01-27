const nodemailer = require('nodemailer');

function CrearTransport(){
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'thiagovilani19@gmail.com',
          pass: 'vcai wvpa jfov mrla'
        }
    });
}


async function TomarYEnviarInfo(transporter,nombre,numeroTelefono,ubicacion,mensaje){
    const mailOptions = {
        from: 'thiagovilani19@gmail.com', //Habria que crear un mail especial para enviar estas cosas
        to: 'lenzelectricidadinmuebles@gmail.com',
        subject: 'Nuevo mensaje del formulario',
        text: `Nombre: ${nombre}\nNumero de telefono: ${numeroTelefono}\nUbicacion: ${ubicacion}\nMensaje: ${mensaje}`
    };
      
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo');
        }else{
            console.log('Correo enviado: ' + info.response);
            res.status(200).send('Correo enviado con éxito');
        }
    });
}


module.exports.TomarYEnviarInfo = TomarYEnviarInfo;
module.exports.CrearTransport = CrearTransport;