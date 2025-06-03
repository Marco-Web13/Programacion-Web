<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"> Agregar Personal</h3>
            </div>
            <div class="alert alert-success" role="alert" v-if="mensaje==1">
                Datos agregados correctamente
            </div>
            <div class="card-body">
                <Form :validation-schema="personalSchema" @submit="onTodoBien">
                    <div class="mb-3">
                        Nombre:
                        <Field name="nombre" type="text" class="form-control" placeholder="Nombre del personal" v-model="personal.nombre"/>
                        <ErrorMessage name="nombre" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Direccion:
                        <Field name="direccion" type="text" class="form-control" placeholder="Nombre del personal" v-model="personal.direccion"/>
                        <ErrorMessage name="direccion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Telefono:
                        <Field name="telefono" type="text" class="form-control" placeholder="Nombre del personal" v-model="personal.telefono"/>
                        <ErrorMessage name="telefono" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Estatus:
                        <Field name="estado" type="text" class="form-control" placeholder="Nombre del personal" v-model="personal.estado"/>
                        <ErrorMessage name="estado" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        <!-- <button class="btn btn-primary" @click="agregarPersonal(personal)">Agregar</button> -->
                        <button class="btn btn-primary" type="submit">Agregar</button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PersonalAgregar } from '../interfaces/personal-interfaces';
import { usePersonal } from '../controladores/usePersonal';
// import { useRouter } from 'vue-router';
import { personalSchema } from '../schemas/personalSchema';
import {Field, Form, ErrorMessage} from 'vee-validate';
const {agregarPersonal, mensaje} = usePersonal(); 


let personal = ref<PersonalAgregar>({
    nombre: '',
    direccion: '',
    telefono: '',
    estado: 0
});

const onTodoBien = async() => {
    await agregarPersonal(personal.value);
    
    //console.log('Formulario enviado correctamente');
};
</script>

<style scoped>
.errorValidacion {
    color: red;
    font-weight: bold;
}
</style>