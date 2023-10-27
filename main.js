const clients = require("./clients");           // -
const checkDay = require("./checkDay");         // ---  Importação das funções externas;
const emailBody = require("./emailBody");       // --
const enviarEmail = require("./envia-email");   // -

clients().map(({ name, email, marketing }) => {  // Desestruturação dos dados do cliente;
    const subject = `Olá ${name}, A CarStore agradece a sua recente visita!` // Criação do subject;
    
    try {   // Tentativa de envio de email para clientes
        if (checkDay() && marketing === true) {     // Checando se o dia é segunda feira e o cliente concordou com o envio de emails de marketing;
            const { status, message } = enviarEmail(email, subject, emailBody(name)); // Inicio da função de envio de emails;
            console.log(`Status: ${status}, ${message}`); // Retorno do status e mensagem do status;
        }
    } catch (e) {   // Captura de erro caso aja algum;
        const { status, message } = enviarEmail(email, subject, emailBody(name)); // Captura de status e mensagem de erro;
        console.log(`Status: ${status}, ${message}`); // Retorno do status e mensagem de erro.
    }
});