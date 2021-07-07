
const servicojson = require('../database/servicos.json')
const servicoController = {
    index: (req, res) => {
        return res.json(servicojson.servicos)
    },
    show: (req, res) => {
        const { id } = req.params
        let resultado = servicojson.servicos.filter(function (servico) {
            return servico.id == id
        })
        return res.send(resultado)
    }
}

module.exports = servicoController;