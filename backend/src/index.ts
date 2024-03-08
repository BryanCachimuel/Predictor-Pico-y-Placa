import app from "./app"
import { conexionBaseDatos } from './database/database'

async function main() {
    await conexionBaseDatos()
    app.listen(app.get('port'), () => {
        console.log('Servidor en el Puerto: ', app.get('port'))
    })
}

main()