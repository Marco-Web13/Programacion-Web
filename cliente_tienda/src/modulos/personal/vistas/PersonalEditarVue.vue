<template>
    <div class="container mt-5" v-if="personal[0]">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"> Editar Personal</h3>
            </div>
            <div class="alert alert-success" role="alert" v-if="mensaje==1">
                Datos editados correctamente
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID:
                    <input type="text" class="form-control" v-model="personal[0].id" disabled/>
                </div>
                <div class="mb-3">
                    Nombre:
                    <input type="text" class="form-control" v-model="personal[0].nombre"/>
                </div>
                <div class="mb-3">
                    Direccion:
                    <input type="text" class="form-control" v-model="personal[0].direccion"/>
                </div>
                <div class="mb-3">
                    Telefono:
                    <input type="text" class="form-control" v-model="personal[0].telefono"/>
                </div>
                <div class="mb-3">
                    Estatus:
                    <input type="text" class="form-control" v-model="personal[0].estado"/>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarPersonal(personal[0])">Editar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';
// import type { PersonalAgregar } from '../interfaces/personal-interfaces';
import { usePersonal } from '../controladores/usePersonal';
import { useRoute } from 'vue-router';

const {traePersonalId, actualizarPersonal,mensaje, personal} = usePersonal(); 
let idPersona = 0;
const route = useRoute();

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