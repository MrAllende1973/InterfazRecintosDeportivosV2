<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStore';
const store = useUsersStore();

const user: any = computed(() => store.user);

const logout = () => {
  store.logoutUser();
  navigateTo('/login');
};
</script>

<template>
  <header
    class="fixed flex items-center justify-between z-10 top-0 left-0 w-full h-[70px] px-14 bg-white/20 backdrop-blur-lg shadow-lg"
  >
    <div class="flex items-center gap-x-10 h-full">
      <nuxt-img
        class="h-full py-2 ml-10"
        src="/img/uta_horizontal.png"
        format="webp"
        quality="80"
      />
      <h1 class="text-lg font-bold" v-if="user">
        Bienvenido/a {{ user.Nombres }} {{ user.Apellidos }}
      </h1>
    </div>
    <div v-if="!user" class="flex items-center gap-x-2">
      <nuxt-link to="/login">Iniciar Sesión</nuxt-link>
      <nuxt-link class="bg-azure text-white rounded-md px-3 py-2" to="/register"
        >Registrarse</nuxt-link
      >
    </div>
    <button v-else class="bg-azure text-white rounded-md px-3 py-2" @click="logout">
      Cerrar Sesión
    </button>
  </header>
</template>
