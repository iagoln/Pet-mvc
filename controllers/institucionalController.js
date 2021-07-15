const servicosPet = require('../database/servicos.json')

const institucionalController = {
    index: (req, res) => {
        return res.render('index');
    },
    cadastro: (req, res) => {
        return res.render('cadastro');
    },
    servicos: (req, res) => {
        return res.render('servicos',{"servicos":servicosPet.servicos});
    },

}

module.exports = institucionalController;