import express from 'express'
import estimate from '../routes/rideEstimateRoutes.js'
import motoristas from '../routes/motoristaRoutes.js'
import confirm from '../routes/confirmRideRoutes.js'

const routes = (app)=>{
    app.route('/').get((req, res) => res.status(200).send("Dados carregados com sucesso!"))
    app.use(express.json(), estimate, motoristas, confirm )
}

export default routes
