const clients = require("./clients");
const checkDay = require("./checkDay");
const emailBody = require("./emailBody");
const enviarEmail = require("./envia-email");

clients().map(client => {
    const subject = `Olá ${client.name}, A CarStore agradece a sua recente visita!`

    if (checkDay() && client.marketing === true) {
        console.log(enviarEmail(client.email, subject, emailBody(client.name)))
    }
});