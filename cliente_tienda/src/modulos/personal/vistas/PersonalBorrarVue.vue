<template>
    <div class="container mt-5" v-if="personal[0]">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"> Borrar Personal</h3>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Esta seguro de borrar el personal <strong>{{ personal[0].nombre }}</strong>? <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID:
                    <input type="text" class="form-control" v-model="personal.nombre" disabled/>
                </div>
                <div class="mb-3">
                    Nombre:
                    <input type="text" class="form-control" v-model="personal.nombre" disabled/>
                </div>
                <div class="mb-3">
                    Direccion:
                    <input type="text" class="form-control" v-model="personal.direccion" disabled/>
                </div>
                <div class="mb-3">
                    Telefono:
                    <input type="text" class="form-control" v-model="personal.telefono" disabled/>
                </div>
                <div class="mb-3">
                    Estatus:
                    <input type="text" class="form-control" v-model="personal.estatus" disabled/>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarPersonal(personal[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onMounted, watch } from 'vue';
// import type { PersonalAgregar } from '../interfaces/personal-interfaces';
import { usePersonal } from '../controladores/usePersonal';
import { useRouter, useRoute } from 'vue-router';

const {traePersonalId, borrarPersonal, mensaje, personal} = usePersonal(); 
let idPersona = 0;
const routeRedirect = useRouter(); // Redireccionar después de borrar
const route = useRoute(); // Obtener el ID de la ruta

watch(() => mensaje.value, newId =>{routeRedirect.push('/personal')});

onMounted(async () => {
    idPersona = Number(route.params.id);
    await traePersonalId(idPersona);
});

// let personal = ref<PersonalAgregar>({
//     nombre: '',
//     direccion: '',
//     telefono: '',
//     estatus: 0
// });
</script>

<style scoped>

</style>