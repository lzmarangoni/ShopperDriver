import express from 'express'
import RideEstimateController from '../controllers/rideEstimateControlller.js'

const routes = express.Router();
routes.post('/ride/estimate', RideEstimateController.estimateRide)

export default routes