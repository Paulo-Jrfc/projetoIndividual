var dashboardModel = require("../models/dashboardModel");


function historicoVeicular(req, res) {
    dashboardModel.historicoVeicular().then((resultado) => { 
        res.status(200).json(resultado);
    });
    

}

module.exports = {
    historicoVeicular
}