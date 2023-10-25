const checkDay = () => {
    const day = new Date().getDay();   // Importação da data com a biblioteca Date;

    return day === 1;                  // Verificando se o dia é segunda feira;
}

module.exports = checkDay;             // Exportando a função.