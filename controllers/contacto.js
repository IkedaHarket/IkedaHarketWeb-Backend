const { transporter } = require("../helpers/sendCorreo")



const enviarCorreo = async(req,res)=>{
    try {
        const {correo,mensaje} = req.body
        // send mail with defined transport object
        await transporter.sendMail({
            from: 'Ikeda Web Contacto - Ikeda Bot', // sender address
            to: "sebaaignacio111@gmail.com", // list of receivers
            subject: "Contacto IkedaHarket.com", // Subject line
            html: `<h1>🍚 ${correo} 🍚</h1>
                    <hr />
                    <p>${mensaje} 🍙🍙🍙</p>
                    <br /><br />
                    <hr /> <i>Este correo a sido enviado desde la API de ikedaharket.com 🍛 </i>`, 
        });
        return res.status(200).json({
            ok:true,
            msg:"Mensaje Enviado correctamente"
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:"Error interno del servidor"
        })
    }
}

module.exports = {
    enviarCorreo,
}