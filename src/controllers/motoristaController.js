import Motorista from '../../models/MotoristaSchema.ts'

class MotoristaController {

    static async listarMotoristas (req, res){
        try{
            const listaDeMotoristas = await Motorista.find({});
            res.status(200).json(listaDeMotoristas)
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }
}

export default MotoristaController
