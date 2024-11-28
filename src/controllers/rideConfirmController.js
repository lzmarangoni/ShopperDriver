import Motoristas from '../../models/MotoristaSchema.ts';
import Ride from '../../models/ConfirmRideSchema.ts';
class RideConfirmController {

    static async aceitarViagem (req, res){
        try{
            const {id, origin, destination, driver,  } = req.params;
            const atualizacoes = req.body;
            const listaDeMotoristas = await Motoristas.find({})
            const motoristaAtual = listaDeMotoristas.find( motorista => motorista.id === atualizacoes.driver.id)
            if(motoristaAtual.kmMin < atualizacoes.distance){
                res.status(406).json({"error_code":"INVALID_DISTANCE", "error_description":"Quilometragem inválida  para o motorista"})
            }
            if(!id || !origin || !destination || origin.latitude === destination.latitude && origin.longitude === destination.longitude ){
                return res.status(400).json({
                    error_code: "MISSING_ID",
                    error_description: "O ID do documento é obrigatório",
                });
            }
            if (!motoristaAtual && !driver.id ) {
                res.status(404).json({"error_code":"DRIVER_NOT_FOUND", "error_description":"Motorista não encontrado"})

            }

            const confirmacaoCorrida = await Ride.findByIdAndUpdate({
                id,
                atualizacoes,     
                new: true 
            })

            res.status(200).json(confirmacaoCorrida)
        }catch(erro){
            res.status(400).json({"error_code":"INVALID_DATA", "error_description":"Os dados fornecidos no corpo da requisição são inválidos"})
            res.status(404).json({"error_code":"DRIVER_NOT_FOUND", "error_description":"Motorista não encontrado"})
            res.status(406).json({"error_code":"INVALID_DISTANCE", "error_description":"Quilometragem inválida  para o motorista"})
        }
    }
}

export default RideConfirmController
