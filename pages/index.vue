<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStore';
const store = useUsersStore();
const user: any = computed(() => store.user);
</script>

<template>
  <div>
    <section class="relative h-screen">
      <div class="h-full">
        <nuxt-img
          class="h-full w-full object-cover object-bottom"
          src="/img/school.png"
          quality="80"
          format="webp"
        />
        <div
          class="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"
        >
          <h1 class="text-white text-3xl w-[580px] font-black text-center">
            Bienvenidos al Sistema de Reservas para la Gestión de Recintos
            Deportivos de la Universidad de Tarapacá
          </h1>
        </div>
      </div>
    </section>
    <section class="py-[120px]">
      <h2 class="text-xl font-bold text-center">
        Reservas deportivas simplificadas
      </h2>
      <p class="text-center text-black/50 font-bold">
        reserva, revive y gestiona
      </p>
      <div class="flex justify-center gap-x-10 mt-6">
        <article
          class="flex flex-col justify-between w-[288px] h-[214px] py-[30px] px-5 text-center shadow-effect-1 rounded-md"
        >
          <h3 class="text-lg font-bold">Haz tu reserva</h3>
          <p class="text-sm font-light">
            Encuentra el espacio perfecto para tu juego en nuestra sección de
            reservas deportivas.
          </p>
          <button
            class="uppercase w-fit mx-auto bg-gradient-to-b from-orange-yellow to-dark-orange-yellow text-sm text-white font-bold px-9 py-2 rounded-full shadow-lg"
          >
            Reservar
          </button>
        </article>
        <article
          class="flex flex-col justify-between w-[288px] h-[214px] py-[30px] px-5 text-center shadow-effect-1 rounded-md"
        >
          <h3 class="text-lg font-bold">Historial de reservas</h3>
          <p class="text-sm font-light">
            Explora tu historial de reservas de canchas y revive los momentos de
            gloria en cada jugada.
          </p>
          <button
            class="uppercase w-fit mx-auto bg-gradient-to-b from-orange-yellow to-dark-orange-yellow text-sm text-white font-bold px-9 py-2 rounded-full shadow-lg"
          >
            Ver historial
          </button>
        </article>
        <article
          class="flex flex-col justify-between w-[288px] h-[214px] py-[30px] px-5 text-center shadow-effect-1 rounded-md"
        >
          <h3 class="text-lg font-bold">Gestión de reservas</h3>
          <p class="text-sm font-light">
            Simplifica la gestión de canchas con nuestra sección de reservas,
            donde cada partido encuentra su lugar.
          </p>
          <button
            class="uppercase w-fit mx-auto bg-gradient-to-b from-orange-yellow to-dark-orange-yellow text-sm text-white font-bold px-9 py-2 rounded-full shadow-lg"
          >
            Gestionar reservas
          </button>
        </article>
      </div>
    </section>
    <section>
      <h1
        class="bg-dark-blue font-black uppercase text-2xl py-6 tracking-widest text-white text-center"
      >
        Noticias
      </h1>
      <div class="py-[120px]">
        <NoticesSwiper />
      </div>
    </section>
    <section>
      <h1
        class="bg-dark-blue font-black uppercase text-2xl py-6 tracking-widest text-white text-center"
      >
        Recintos
      </h1>
      <div class="py-[120px]">
        <EnclousuresSwiper />
      </div>
    </section>
    <section>
      <nuxt-img src="/img/google-maps.png" :format="'webp'" :quality="80" />
    </section>
  </div>
</template>
