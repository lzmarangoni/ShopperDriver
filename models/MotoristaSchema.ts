import mongoose, { Schema, model, Document } from 'mongoose';
import { MotoristaModel } from './motoristaModel.ts';

interface MotoristaDocument extends MotoristaModel, Document {}

const MotoristaSchema = new Schema<MotoristaDocument>({
    _id: {type: mongoose.Schema.Types.ObjectId},
    userId: { type: Number, required: true },
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    carro: { type: String, required: true },
    avaliacao: { type: String, required: true },
    taxa: { type: Number, required: true },
    kmMin: { type: Number, required: true },
});

const Motoristas = model<MotoristaDocument>('Motoristas', MotoristaSchema);

export default Motoristas;
