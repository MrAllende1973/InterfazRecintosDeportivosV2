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
  email: 'alanortegagarcia123@gmail.com',
  password: '123123123.',
});

const loginUser = async () => {
  const data = await store.authUser(user.value);

  if (data === 'success') {
    loading.value = true;
    router.push('/');
  }
};
</script>

<template>
  <div class="grid grid-cols-2 h-[80%] w-[70%] bg-white rounded-xl shadow-2xl">
    <div class="relative h-full rounded-l-xl">
      <video
        class="h-full object-cover rounded-l-xl"
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
      <form class="w-[60%]" @submit.prevent="loginUser">
        <h1 class="text-2xl font-bold uppercase">Iniciar Sesión</h1>
        <div class="flex flex-col gap-y-6 mt-6">
          <div class="grid gap-y-1">
            <label>Correo Electrónico</label>
            <input
              class="border-2 border-red-orange outline-none rounded-md px-4 py-1"
              type="text"
              v-model="user.email"
            />
          </div>
          <div class="grid gap-y-1">
            <label>Contraseña</label>
            <input
              class="border-2 border-red-orange outline-none rounded-md px-4 py-1"
              type="password"
              v-model="user.password"
            />
          </div>
          <button
            class="bg-azure w-full rounded-md text-white py-2 uppercase"
            type="submit"
          >
            <span v-if="!loading">Ingresar</span>
            <Icon
              v-else
              class="animate-spin"
              name="fluent:spinner-ios-16-filled"
            />
          </button>
        </div>
      </form>
      <div class="flex gap-x-2 mt-5 font-bold">
        <h2>¿No tienes cuenta?</h2>
        <nuxt-link class="text-red-orange uppercase" to="/register"
          >Registrate</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
