import request from 'supertest'
import app from '../app'


describe('GET /listar_verificador', () => { 

    test('Debería responder con código de estado 200', async () => {
        const respuesta = await request(app).get("/listar_verificador").send()
        expect(respuesta.statusCode).toBe(200)
    })

    test('Deberia responder con un arreglo', async () => {
        const respuesta = await request(app).get("/listar_verificador").send()
        expect(respuesta.body).toBeInstanceOf(Array)
    })
 })

 describe('POST /verificador', () => {

    test('Debería responder con código de estado 200', async () => {
        const respuesta = await request(app).post("/verificador").send()
        expect(respuesta.statusCode).toBe(200)
    })

    test('Debería tener como content-type: application/json en la cabecera', async () => {
        const respuesta = await request(app).post("/verificador").send()
        expect(respuesta.headers["content-type"]).toEqual(expect.stringContaining("json"))
    })

 })

