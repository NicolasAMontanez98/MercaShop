const nodemailer = require("nodemailer");

module.exports = {
  transporter: nodemailer.createTransport({
    host: "smtp.aol.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  }),
  welcome(names, id) {
    return {
      text: `${names} te damos la bienvenida a la familia Merca Shop.`,
      html: `
        <body style="background-image: url(https://res.cloudinary.com/dkrcosw87/image/upload/v1601016078/images/patternFood-opaque_fqmdgg.png);">
            <hr style="width: 100%; height: 50px; background: #EE4F4F"/>
            <div style="text-align: center; ">
                <img
                    src="https://res.cloudinary.com/dkrcosw87/image/upload/v1601012885/images/Merca_Shop_logo_qeunye.png"
                    title="MercaShop"
                    alt="MercaShop"
                    width="100px"
                    height="100px"
                    style="align-items: center; margin-left: 0px; margin-right: 15px"
                />
                <div>
                    <h1 style="margin-bottom: 0;">Valida tu correo para continuar</h1>
                    <h1 style="margin-bottom: 0;">MercaShop</h1>
                    <h2 style="margin-top: 0;">Tú tienda en línea</h2>
                </div>
            </div>
            <hr style="width: 100%; height: 5px; border-radius: 10px; background: #171717"/>
            <div style="text-align: center; ">
                <h2>Hola ${names} te damos la bienvenida a la familia MercaShop.</h2>
                <p style="font-size: large;">
                ¡Gracias por registrarte! Estás a pocos pasos de activar tu cuenta, 
                por favor valida tu correo y comienza a disfrutar de todo lo que MercaShop tiene 
                para ofrecerte.
                </p>
                <a href="${process.env.REACT_APP_URL}activar-cuenta/${id}" target="blank">
                <h3>Haz click aquí para confirmar tu correo</h3>
                </a>
            </div>
            <hr style="width: 100%; height: 50px; background: #EE4F4F"/>
            <p></p>
        </body>
      `,
    };
  },
  async verify(transporter) {
    const isConnected = await transporter.verify();
    console.log("Server is ready to send message", isConnected);
  },
};
