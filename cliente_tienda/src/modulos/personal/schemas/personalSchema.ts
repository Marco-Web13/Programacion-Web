// pip install @vee-validate/zod zod
// pip install zod --save

import { toTypedSchema } from "@vee-validate/zod";
import zod from "zod";

export const personalSchema = toTypedSchema(
    zod.object({
        id: zod.number({message: "Requerido"}).int().positive({message: "Debe ser un número positivo"}),
        nombre: zod.string().min(1, {message: "Debe tener al menos un caracter"}).max(250, {message: "Debe tener como máximo 250 caracteres"}),
        direccion: zod.string().min(1, {message: "Direccion requerida"}).max(250, {message: "Debe tener como máximo 250 caracteres"}),
        telefono: zod.string().min(10, {message: "Debe tener al menos 10 caracteres"}).max(15, {message: "Debe tener como máximo 15 caracteres"}),
        estado: zod.string({message: "Requerido"})
    }).or(
        zod.object({
            id: zod.number({message: "Requerido"}).int().positive({message: "Debe ser un número positivo"}),
            nombre: zod.string().min(1, {message: "Debe tener al menos un caracter"}).max(250, {message: "Debe tener como máximo 250 caracteres"}),
            direccion: zod.string().min(1, {message: "Debe tener al menos un caracter"}).max(250, {message: "Debe tener como máximo 250 caracteres"}),
            telefono: zod.string().min(10, {message: "Debe tener al menos 10 caracteres"}).max(15, {message: "Debe tener como máximo 15 caracteres"}),
            estado: zod.string({message: "Requerido"})
    }))
)