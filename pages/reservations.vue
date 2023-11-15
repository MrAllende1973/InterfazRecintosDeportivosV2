<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStore';
import { useReservationsStore } from '@/stores/reservationsStore';
import axios from 'axios';
import moment from 'moment';
moment.updateLocale('es', {
  months:
    'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
      '_'
    ),
});

const userStore = useUsersStore();
const reservationStore = useReservationsStore();

const block: any = ref({});
const isOpenFormModal = ref(false);
const isOpenTermsModal = ref(true);
const reservations: any = ref(null);
const reservation = ref({
  career: '',
  activity: 'Partido amistoso de fútbol',
});
const checkbox = ref(false);
const message = ref('');
const loading = ref(false);

const user: any = computed(() => userStore.user);

const openModal = (_block: object) => {
  block.value = _block;
  isOpenFormModal.value = true;
};

const getCalendar = async () => {
  const response = await axios(
    'https://recintosdeportivos-production.up.railway.app/api/reservas/calendario'
  );

  const data = response.data;

  reservations.value = data;
};

const addReservation = async (data: object) => {
  if (!checkbox.value)
    return (message.value = 'AVISO: Debes leer los términos y condiciones.');

  loading.value = true;

  const response = await reservationStore.addReservation(data);

  if (response.status === 'success') {
    reservations.value.push(response.data);
    loading.value = false;
    isOpenFormModal.value = false;
  }
};

onMounted(() => {
  getCalendar();
});
</script>

<template>
  <div class="pt-[70px]">
    <div class="px-10 py-10 mx-auto">
      <div class="flex items-center gap-x-5">
        <h1 class="text-xl font-bold">
          Realiza tu reserva /
          <span class="text-black/30">Cancha de Fútbol</span>
        </h1>
        <NuxtLink
          class="bg-gradient-to-b from-orange-yellow to-dark-orange-yellow text-white px-4 py-1 hover:from-orange-yellow/80 hover:to-dark-orange-yellow/100 rounded-md"
          to="#"
          >Cambiar</NuxtLink
        >
      </div>
      <Horary
        @selected-block="(_block) => openModal(_block)"
        :reservations="reservations"
      />
    </div>
  </div>
  <Teleport to="body">
    <div
      v-if="isOpenFormModal"
      class="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50 z-30"
    >
      <form
        class="bg-white p-6 w-[700px] rounded-xl shadow-2xl"
        @submit.prevent="
          addReservation({
            user_id: user.ID_usuario,
            week_id: block.week,
            enclosure_id: 1,
            block_id: block.id,
            activity: reservation.activity,
            career: reservation.career,
          })
        "
      >
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold">Solicitar Reserva</h1>
          <div class="flex flex-col">
            <h2 class="font-semibold">
              {{ block.horary.day }} {{ block.horary.date }}
            </h2>
            <p>{{ block.horary.time }}</p>
          </div>
        </div>
        <div class="grid gap-y-4">
          <div class="grid grid-cols-2 gap-x-6">
            <div>
              <label>Nombre</label>
              <input
                class="border-2 w-full border-red-orange outline-none rounded-md px-2 py-2 mt-1"
                type="text"
                :placeholder="user.Nombres + ' ' + user.Apellidos"
                disabled
              />
            </div>
            <div>
              <label for="rut">Rut</label>
              <input
                id="rut"
                class="border-2 w-full border-red-orange outline-none rounded-md px-2 py-2 mt-1"
                type="text"
                :placeholder="user.Rut"
                disabled
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-x-6">
            <div>
              <label for="rut">Carrera</label>
              <select
                class="border-2 w-full h-11 border-red-orange outline-none rounded-md px-2 py-2 mt-1"
                name="career"
                v-model="reservation.career"
              >
                <option value="">Selecciona una carrera</option>
                <option value="Ing. Civil en Computación e Informática">
                  Ing. Civil en Computación e Informática
                </option>
              </select>
            </div>
            <div>
              <label for="rut">Recinto</label>
              <input
                id="rut"
                class="border-2 w-full border-red-orange outline-none rounded-md px-2 py-2 mt-1"
                type="text"
                placeholder="Cancha de Fútbol"
                disabled
              />
            </div>
            <!-- <div>
              <label for="rut">Fecha Reserva</label>
              <input
                id="rut"
                class="border-2 w-full border-red-orange outline-none rounded-md px-2 py-2 mt-1"
                type="text"
                :placeholder="block.horary.day + ', ' + block.horary.fullDate"
                disabled
              />
            </div> -->
          </div>
          <div class="grid grid-cols-2 gap-x-6">
            <div>
              <label for="rut">Horario</label>
              <input
                id="rut"
                class="border-2 w-full border-red-orange outline-none rounded-md px-2 py-2 mt-1"
                type="text"
                :placeholder="block.horary.time"
                disabled
              />
            </div>
            <div>
              <label for="rut">Actividad</label>
              <input
                id="rut"
                class="border-2 w-full border-red-orange outline-none rounded-md px-2 py-2 mt-1"
                type="text"
                v-model="reservation.activity"
              />
            </div>
          </div>
          <div class="flex flex-col gap-y-2 mt-5">
            <div class="flex items-center gap-x-2">
              <input
                class="w-5 h-5"
                type="checkbox"
                v-model="checkbox"
                @click="message = ''"
              />
              <span class="uppercase text-sm"
                >He leído y acepto los
                <button
                  class="uppercase text-azure hover:underline hover:underline-offset-2"
                  type="button"
                  @click="isOpenTermsModal = true"
                >
                  términos y condiciones
                </button>
              </span>
            </div>
            <span v-if="message" class="text-red-500">{{ message }}</span>
          </div>
        </div>
        <div class="flex justify-end mt-6">
          <button
            class="px-6 py-2 uppercase transition-colors hover:text-gray-700"
            type="button"
            @click="
              (isOpenFormModal = false),
                (isOpenTermsModal = true),
                (message = '')
            "
          >
            Cancelar
          </button>
          <button
            class="flex items-center justify-center gap-x-2 px-6 py-2 uppercase transition-colors bg-royal-blue hover:bg-royal-blue/95 text-white rounded-md"
            type="submit"
          >
            <Icon
              v-if="loading"
              name="line-md:loading-twotone-loop"
              size="24"
            />
            <span>Reservar</span>
          </button>
        </div>
      </form>
      <Terms
        v-if="isOpenTermsModal"
        @open-terms-modal="(value) => (isOpenTermsModal = value)"
      />
    </div>
  </Teleport>
</template>
