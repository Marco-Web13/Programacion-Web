<template>
    <div class="contenedor">
        <form @submit.prevent="registrarUsuario" class="formulario">
            <h2>Registro de Usuario</h2>
            <div class="grupo">
                <label >Correo</label>
                <input type="email" v-model="correo" required>
            </div>
            <div class="grupo">
                <label >Contraseña</label>
                <input type="password" v-model="clave" required>
            </div>
            <div class="error" v-if="error">
                {{ error }}
            </div>
            <button type="submit">Registrarse</button>

        </form>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import '../../../firebase/config';

    const correo = ref('');
    const clave = ref('');
    const error = ref(null);
    const router = useRouter();

    const registrarUsuario = async () => {
        error.value = null;
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, correo.value, clave.value);
            // Redirigir al usuario a la página de inicio
            router.push({name: 'bienvenida'});
        } catch (err) {
            switch (err.code){
                case 'auth/email-already-in-use':
                    error.value = 'El correo ya está en uso.';
                    break;
                case 'auth/weak-password':
                    error.value = 'La contraseña debe tener al menos 6 caracteres.';
                    break;
                default:
                    error.value = 'Error al registrar el usuario. Inténtalo de nuevo.';
            }
        }
    };
</script>

<style scoped>
.contenedor {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    
}

.formulario {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.grupo {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}
input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.error {
    color: red;
    font-size: 0.9em;
    margin-top: 0.5em;
}
</style>