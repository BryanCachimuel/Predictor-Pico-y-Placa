import { z } from "zod";

export const CrearPredictorSchema = z.object({
    body: z.object({
        placa: z.string(),
        fecha: z.string(),
    }),
})

export type CrearPredictorType = z.infer<typeof CrearPredictorSchema>["body"]