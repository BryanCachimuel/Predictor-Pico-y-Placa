import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose'

@modelOptions({
    schemaOptions: {
        versionKey: false,
        timestamps: true,
    }
})

class Predictor {
    @prop({ type: String, required: true, trim: true })
    placa: string;

    @prop({ type: String, required: true })
    fecha: string;

    @prop({ type: Number})
    hora: number;

    @prop({ type: Number})
    minutos: number;

    @prop({ type: String })
    mensaje_circulacion: string;
}

const predictorModel = getModelForClass(Predictor)
export default predictorModel
