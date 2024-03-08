import mongoose from "mongoose"
import { MONGODB_URI } from '../config'

export async function conexionBaseDatos() {
    try {
        const baseDatos = await mongoose.connect(MONGODB_URI)
        console.log(`Base de Datos ${baseDatos.connection.name} conectada con exito`)
    } catch (error) {
        console.error(error)
    }
}
