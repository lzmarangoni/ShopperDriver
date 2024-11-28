import axios from 'axios';
import Motoristas from '../../models/MotoristaSchema.ts';

class RideEstimateController {
    static async estimateRide(req, res) {
        const { origin, destination } = req.body;

        if (!origin || !destination || origin.latitude === destination.latitude && origin.longitude === destination.longitude) {
            
            return res.status(400).json({ error_code: "INVALID_DATA", error_description: 'Os dados fornecidos no corpo da requisição são inválidos' });
        }

        try {
            const googleRoutesApiUrl = `https://routes.googleapis.com/directions/v2:computeRoutes`;
            const response = await axios.post(
                googleRoutesApiUrl,
                {
                    origin: { location: { latLng: origin } },
                    destination: { location: { latLng: destination } },
                    travelMode: 'DRIVE'
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
                        'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline',
                    },
                }
            );
            const listaDeMotoristas = await Motoristas.find({})

            if (!listaDeMotoristas) {
                return res.status(404).json({ message: "Motoristas não encontrados" });
            }
            const route = response.data.routes[0];
            const responseFormatado = {
                origin: {
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                },
                destination: {
                    latitude: destination.latitude,
                    longitude: destination.longitude,
                },
                distance: route.distanceMeters,
                duration: route.duration,
                routeResponse: route,
                options: listaDeMotoristas
            };

            res.json(responseFormatado);

        } catch (error) {
            res.status(400).json({ error_code: "INVALID_DATA", error_description: 'Os dados fornecidos no corpo da requisição são inválidos' });
            console.error(error.response?.data || error.message);
            res.status(500).json({ error: 'Falha ao calcular a rota, entre em contato com o Suporte.' });
        }

    }
}

export default RideEstimateController