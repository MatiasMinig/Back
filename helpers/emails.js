import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "21f9516b96bce2",
          pass: "a824257c8e691d"
        }
      });

      // Información del email
      const info = await transport.sendMail({
        from: '"Infotravel - Administrador" <infotravelifts16@gmail.com>',
        to: email,
        subject: "Infotravel- Confirma tu cuenta",
        text: "Comprueba tu cuenta en Infotravel",
        html: ` <p>Hola: ${nombre} comprueba tu cuenta en Infotravel</p>
        <p>Tu cuenta ya esta casi lista, solo deber comprobarla en el siguiente enlace:
        <a href="${process.env.FRONT_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        
        `,
      })
};