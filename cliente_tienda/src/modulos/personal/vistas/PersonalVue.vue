<template>
    <section class="container">
        <h1>Personal</h1>
        <div>
            <RouterLink :to="{path: '/personal/agregar'}">
                <button class="btn btn-sm btn-outline-primary">Agregar <i class="fa fa-plus"></i></button>
            </RouterLink> 
        </div>
    </section>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Estatus</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="personal.length == 0">
                <td colspan="5" class="text-center">No hay personal registrado</td>
            </tr>
            <tr v-else v-for="(persona) in personal" :key="persona.id">
                <td>{{ persona.id }}</td>
                <td>{{ persona.nombre }}</td>
                <td>{{ persona.direccion }}</td>
                <td>{{ persona.telefono }}</td>
                <td>{{ persona.estado }}</td>
                <td class="centrado">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary">
                            <RouterLink class="nav-link item" :to="{path: '/personal/'+persona.id+'/editar'}"><i class="fa fa-pencil"></i></RouterLink>
                        </button>
                    </div>
                </td>
                <td class="centrado">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary">
                            <RouterLink class="nav-link item" :to="{path: '/personal/'+persona.id+'/borrar'}"><i class="fa fa-trash"></i></RouterLink>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { usePersonal } from '../controladores/usePersonal.ts';
    const {traePersonal, personal} = usePersonal()

    //Carga cuando la vista se monta
    onMounted( async () => {
        await traePersonal();
    })
</script>

<style scoped>
    section {
        display: flex;
        margin-top: 20px;
        flex-flow: row wrap;
        justify-content: space-around;
    }
</style>