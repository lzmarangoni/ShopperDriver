import express from 'express'
import MotoristaController from '../controllers/motoristaController.js'

const routes = express.Router()
routes.get('/motoristas', MotoristaController.listarMotoristas)

export default routes