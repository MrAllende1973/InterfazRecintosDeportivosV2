<script setup lang="ts">
definePageMeta({
  layout: 'authentication',
});

import { useUsersStore } from '@/stores/usersStore';

const store = useUsersStore();
const router = useRouter();
const message = ref('');
const loading = ref(false);

const user = ref({
  names: 'Alan Marcelo',
  surnames: 'Ortega García',
  rut: '20215252K',
  dateOfBirth: '1999-06-21',
  email: 'alanortegagarcia765@gmail.com',
  password: '123123123.',
  genre: 'Masculino',
});

const registerUser = async () => {
  const data = await store.addUser(user.value);

  if (data.status !== 'success')
    return (message.value = 'El usuario ya existe.');

  message.value = 'Registrado correctamente';

  loading.value = true;

  router.push('/login');
};
</script>

<template>
  <div class="grid grid-cols-2 h-[80%] w-[70%] bg-white rounded-xl shadow-2xl">
    <div class="relative h-full">
      <video
        class="min-h-full object-cover rounded-l-xl"
        src="/videos/auth.mp4"
        type="video/mp4"
        muted
        autoplay
        loop
      ></video>
      <nuxt-img
        class="absolute top-6 left-6 w-[200px]"
        src="/img/uta_horizontal.png"
      />
    </div>
    <div class="flex flex-col justify-center items-center">
      <form class="px-10 py-12" @submit.prevent="registerUser()" method="post">
        <h1 class="text-2xl font-bold uppercase">Registrarse</h1>
        <div class="flex flex-col gap-y-4 mt-6">
          <div class="grid grid-cols-2 gap-x-6">
            <div class="grid gap-y-1">
              <label>Nombres</label>
              <input
                class="border-2 border-red-orange outline-none rounded-md px-4 py-1 w-full"
                type="text"
                v-model="user.names"
              />
            </div>
            <div class="grid gap-y-1">
              <label>Apellidos</label>
              <input
                class="border-2 border-red-orange outline-none rounded-md px-4 py-1 w-full"
                type="text"
                v-model="user.surnames"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-x-6">
            <div class="grid gap-y-1">
              <label>Rut</label>
              <input
                class="border-2 border-red-orange outline-none rounded-md px-4 py-1 w-full"
                type="text"
                v-model="user.rut"
              />
            </div>
            <div class="grid gap-y-1">
              <label>Fecha Nacimiento</label>
              <input
                class="border-2 border-red-orange outline-none rounded-md px-4 py-1 w-full"
                type="date"
                v-model="user.dateOfBirth"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-x-6">
            <div class="grid gap-y-1">
              <label>Correo Electrónico</label>
              <input
                class="border-2 border-red-orange outline-none rounded-md px-4 py-1 w-full"
                type="text"
                v-model="user.email"
              />
            </div>
            <div class="grid gap-y-1">
              <label>Contraseña</label>
              <input
                class="border-2 border-red-orange outline-none rounded-md px-4 py-1 w-full"
                type="password"
                v-model="user.password"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-y-1">
            <div class="mr-3">
              <label>Género</label>
              <select
                class="border-2 border-red-orange outline-none rounded-md px-4 py-1 w-full"
                name="genre"
                v-model="user.genre"
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
          </div>
        </div>
        <button
          class="bg-azure w-full rounded-md mt-10 text-white py-2 uppercase"
          type="submit"
        >
          <span v-if="!loading">Registrarse</span>
          <Icon
            v-else
            class="animate-spin"
            name="fluent:spinner-ios-16-filled"
          />
        </button>
        <span>{{ message }}</span>
      </form>
    </div>
  </div>
</template>
