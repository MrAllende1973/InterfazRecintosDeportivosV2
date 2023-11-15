<script setup lang="ts">
import 'moment/locale/es';
import moment from 'moment';
moment.updateLocale('es', {
  months:
    'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
      '_'
    ),
});

const props = defineProps<{
  reservations: any;
}>();

const emit = defineEmits<{
  selectedBlock: [block: object];
}>();

const currentDate = moment(new Date());
const daysOfWeek: any = [];
const weekNumber = currentDate.week();
// const weekNumber = 44;
const actualMonth = ref(moment().format('MMMM'));

const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];

const horaries = ref([
  '8:00 - 9:30',
  '9:40 - 11:10',
  '11:20 - 12:50',
  '13:00 - 14:30',
  '14:45 - 16:10',
  '16:20 - 17:50',
  '17:55 - 19:25',
  '19:30 - 21:00',
  '21:10 - 22:40',
]);

const getDaysOfWeek = () => {
  const dayOfWeek = currentDate.day();
  const firstDateOfWeek = currentDate.clone().subtract(dayOfWeek, 'days');

  for (let i = 1; i < 8; i++) {
    const dateOfWeek = firstDateOfWeek.clone().add(i, 'days');
    daysOfWeek.push(dateOfWeek.date());
  }
};

const selectedBlock = (block: object) => emit('selectedBlock', block);
const horaryPerBlock = (index: number) => {
  if (index <= 7) return horaries.value[0];
  if (index > 7 && index <= 14) return horaries.value[1];
  if (index > 14 && index <= 21) return horaries.value[2];
  if (index > 21 && index <= 28) return horaries.value[3];
  if (index > 28 && index <= 35) return horaries.value[4];
  if (index > 35 && index <= 42) return horaries.value[5];
  if (index > 42 && index <= 49) return horaries.value[6];
  if (index > 49 && index <= 56) return horaries.value[7];
  return horaries.value[8];
};
const dateOfBlock = (index: number) => {
  return (
    daysOfWeek[index % 7] + ' ' + actualMonth.value + ' ' + moment().year()
  );
};
const reservated = (id_block: number) => {
  let _reservated: any = {};
  props.reservations.forEach((reservation: any) => {
    if (reservation.Bloque_horario_id_bloque === id_block) {
      _reservated = reservation;
    }
  });
  return _reservated.Bloque_horario_id_bloque;
};

onMounted(() => {
  getDaysOfWeek();
});
</script>

<template>
  <div v-if="reservations" class="mt-10">
    <div class="flex items-center mt-5 text-lg font-bold">
      <span class="text-azure">{{ actualMonth }}</span>
      <div class="ml-3 text-black/30">
        <span>Semana</span>
        <span class="ml-1">{{ weekNumber }}</span>
      </div>
    </div>
    <div class="mt-4">
      <div class="grid grid-cols-12">
        <div class="col-span-1 h-12 border-r border-b"></div>
        <ul class="grid grid-cols-7 col-span-11">
          <li
            v-for="(day, index) in days"
            :key="index"
            class="h-12 border-r border-b"
          >
            <div class="flex gap-x-2 px-4 items-center h-full">
              <h2>{{ day }}</h2>
              <span class="text-lg text-black/30 font-bold">{{
                daysOfWeek[index]
              }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-12">
        <ul class="grid col-span-1">
          <li
            v-for="time in horaries"
            :key="time"
            class="flex items-center justify-center h-20 border-b border-r text-center"
          >
            {{ time }}
          </li>
        </ul>
        <ul class="grid grid-cols-7 col-span-11">
          <li
            v-for="(i, index) in 63"
            :key="i"
            class="relative h-20 border-b border-r group cursor-pointer"
            :class="reservated(i) ? 'bg-pink-300' : 'bg-green-300'"
            @click="
              selectedBlock({
                horary: {
                  time: horaryPerBlock(i),
                  day: days[index % 7],
                  date: daysOfWeek[index % 7],
                },
                week: weekNumber,
                id: i,
              })
            "
          >
            <div
              class="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-10"
            ></div>
          </li>
        </ul>
      </div>
    </div>

    <ul class="flex gap-x-5 mt-10">
      <li class="flex items-center gap-x-2">
        <div class="w-8 h-8 bg-green-400 rounded-full"></div>
        <span>Disponible</span>
      </li>
      <li class="flex items-center gap-x-2">
        <div class="w-8 h-8 bg-red-400 rounded-full"></div>
        <span>No disponible</span>
      </li>
      <li class="flex items-center gap-x-2">
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <span>Historial de uso</span>
      </li>
      <li class="flex items-center gap-x-2">
        <div class="w-8 h-8 bg-pink-400 rounded-full"></div>
        <span>Reservado</span>
      </li>
    </ul>
  </div>
  <div v-else class="flex justify-center items-center mt-10">
    <Icon
      class="animate-spin text-royal-blue"
      name="icomoon-free:spinner2"
      size="50"
    />
  </div>
</template>
