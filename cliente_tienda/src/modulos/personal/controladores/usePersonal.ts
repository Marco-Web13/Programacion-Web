import { ref } from "vue"
import type { Personal, PersonalAgregar } from "../interfaces/personal-interfaces"
import personalApi from "../api/personalAPI"


export const usePersonal = () => {
    const personal = ref<Personal[]>([])
    let mensaje = ref(0);
    
    const traePersonal = async () => {
        const respuesta = await personalApi.get<Personal[]>('/')
        personal.value = respuesta.data
        console.log("correcto: "+personal.value)
    }

    const traePersonalId = async (id: number) => {
        const respuesta = await personalApi.get<Personal[]>(`/${id}`)
        personal.value = respuesta.data
    }

    const agregarPersonal = async (personal: PersonalAgregar) => {
        const respuesta = await personalApi.post('/', personal)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1 // Agregado correctamente
        }
    }

    const actualizarPersonal = async (personal: Personal) => {
        const respuesta = await personalApi.put('/', personal)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1 // Actualizado correctamente
        }
    }

    const borrarPersonal = async (personal:Personal) => {
        const respuesta = await personalApi.delete('/', {data: {id: personal.id}})
        if (respuesta.data.fieldCount == 0) {
            mensaje.value = 1 // Borrado correctamente
        }
    }

    return {
        personal,
        traePersonal,
        traePersonalId,
        agregarPersonal,
        mensaje,
        actualizarPersonal,
        borrarPersonal
    }
}

