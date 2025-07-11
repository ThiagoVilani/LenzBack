const nodemailer = require('nodemailer');

function CrearTransport(){
    return nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false, // IMPORTANTE: false para puerto 587
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
    });
}


async function TomarYEnviarInfo(transporter,nombre,numeroTelefono,ubicacion,mensaje,res){
    const mailOptions = {
        from: 'lenzelectricidadinmuebles@gmail.com', //Habria que crear un mail especial para enviar estas cosas
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

async function EnviarVisita(transporter){
    const mailOptions = {
        from: 'thiagovilani19@gmail.com', //Habria que crear un mail especial para enviar estas cosas
        to: 'lenzelectricidadinmuebles@gmail.com',
        subject: 'Visita a la pagina',
        text: `Nueva visita a la pagina`
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
module.exports.EnviarVisita = EnviarVisita;