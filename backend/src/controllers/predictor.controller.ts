import { Response, Request, NextFunction } from 'express'
import Predictor from '../models/predictor.model'
import { CrearPredictorType } from '../schema/predictor.schema'

export const crearPlaca = async (req: Request<unknown, unknown, CrearPredictorType>, res: Response, next: NextFunction) => {
    try {
        let momentoActual: Date = new Date();
        let hora:number = momentoActual.getHours();
        let minutos:number = momentoActual.getMinutes();
        let mensaje_circulacion: string = ""

        const {placa, fecha} = req.body

        let fechaEvaluar = fecha
        const dias = [
            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes',
            'sabado',
            'domingo'
          ];
          const numeroDia: number = new Date(fechaEvaluar).getDay();
          const nombreDia: string = dias[numeroDia];


        const placaEncontrada = await Predictor.findOne({placa})

        if(!placaEncontrada){

            switch (nombreDia) {
                case "lunes":
                    if((placa.slice(-1) === "1" || placa.slice(-1) === "2") && (hora >= 6 && hora <= 9)  || (hora >= 16  && hora <= 21)){
                        mensaje_circulacion = "Este Vehiculo si puede Circular"
                    }else{
                        mensaje_circulacion = "Este Vehiculo no puede Circular"
                    }
                    break;
                
                case "martes":
                    if((placa.slice(-1) === "3" || placa.slice(-1) === "4") && (hora >= 6 && hora <= 9)  || (hora >= 16  && hora <= 21)){
                        mensaje_circulacion = "Este Vehiculo si puede Circular"
                    }
                    else{
                        mensaje_circulacion = "Este Vehiculo no puede Circular"
                    }
                    break;
                
                case "miercoles":
                    if((placa.slice(-1) === "5" || placa.slice(-1) === "6") && (hora >= 6 && hora <= 9)  || (hora >= 16  && hora <= 21)){
                        mensaje_circulacion = "Este Vehiculo si puede Circular"
                    }else{
                        mensaje_circulacion = "Este Vehiculo no puede Circular"
                    }
                    break;
                
                case "jueves":
                    if((placa.slice(-1) === "7" || placa.slice(-1) === "8") && (hora >= 6 && hora <= 9)  || (hora >= 16  && hora <= 21)){
                        mensaje_circulacion = "Este Vehiculo si puede Circular"
                    }else{
                        mensaje_circulacion = "Este Vehiculo no puede Circular"
                    }
                    break;
                
                case "viernes":
                    if((placa.slice(-1) === "9" || placa.slice(-1) === "0") && (hora >= 6 && hora <= 9)  || (hora >= 16  && hora <= 21)){
                        mensaje_circulacion = "Este Vehiculo si puede Circular"
                    }else{
                        mensaje_circulacion = "Este Vehiculo no puede Circular"
                    }
                    break;
                
                case "sabado":
                    if(placa.slice(-1) === "1" || placa.slice(-1) === "2" || placa.slice(-1) === "3" || placa.slice(-1) === "4" || placa.slice(-1) === "5" 
                      || placa.slice(-1) === "6" || placa.slice(-1) === "7" || placa.slice(-1) === "8" || placa.slice(-1) === "9" || placa.slice(-1) === "0"){
                        mensaje_circulacion = "Todos los Vehiculos pueden Circular"
                    }
                    break;

                case "domingo":
                    if(placa.slice(-1) === "1" || placa.slice(-1) === "2" || placa.slice(-1) === "3" || placa.slice(-1) === "4" || placa.slice(-1) === "5" 
                      || placa.slice(-1) === "6" || placa.slice(-1) === "7" || placa.slice(-1) === "8" || placa.slice(-1) === "9" || placa.slice(-1) === "0"){
                        mensaje_circulacion = "Todos los Vehiculos pueden Circular"
                    }
                    break;
                
                default:
                    mensaje_circulacion = "Este Vehiculo no puede Circular"
                    break;
            }

            const nuevaPlaca = new Predictor({placa,fecha,hora,minutos,mensaje_circulacion})
            const guardarPlaca = await nuevaPlaca.save();
            res.json(guardarPlaca)
        }else{
            return res.status(400).json({message: "La Placa ya existente"});
        }      
    } catch (error) {
        next(error)
    }
}

export const obtenerPlacas = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const placas = await Predictor.find()
        return res.json(placas)
    } catch (error) {
        next(error)
    }
}