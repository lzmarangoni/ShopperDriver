import mongoose, { Schema, model, Document } from 'mongoose';
import {ConfirmRideModel} from './ConfirmRideModel.ts'
interface ConfirmRideData extends ConfirmRideModel, Document {}

const ConfirmRideSchema = new Schema<ConfirmRideData>({
    _id: {type: mongoose.Schema.Types.ObjectId},
    customer_id: {type: String, required: true},
    origin: {type: String, required: true},
    destination: {type: String, required: true},
    distance: { type: Number, required: true },
    duration: {type: String, required: true},
    driver: {
        id:{ type: Number, required: true },
        name: {type: String, required: true}
    },
    value: { type: Number, required: true }
});

const ConfirmeRide = model<ConfirmRideData>('Ride', ConfirmRideSchema);

export default ConfirmeRide;
