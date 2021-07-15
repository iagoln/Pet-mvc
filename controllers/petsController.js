const petsJson = require('../database/pets.json') 
const petsController= {
    index:(req,res) => {
      return res.rend("index")  
    },
    show: (req, res) => {
      const { id } = req.params
      let resultado = petsJson.pets.filter(function (pet) {
          return pet.id == id
      })
      return res.send(resultado)
  }
}
module.exports = petsController;
