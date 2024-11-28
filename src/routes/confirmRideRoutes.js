import express from 'express'
import RideConfirmController from '../controllers/rideConfirmController.js'

const routes = express.Router()
routes.patch('/ride/confirm', RideConfirmController.aceitarViagem)

export default routes