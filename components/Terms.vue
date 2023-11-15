<script setup lang="ts">
const emit = defineEmits<{
  (e: 'openTermsModal', value: boolean): void;
}>();

const openTermsModal = () => emit('openTermsModal', false);
</script>

<template>
  <div
    class="absolute z-50 bg-white p-10 rounded-xl shadow-2xl w-[80%]"
  >
    <h1 class="text-xl font-bold">Términos y Condiciones</h1>
    <button
      class="absolute top-6 right-6 flex items-center justify-center bg-royal-blue hover:bg-royal-blue/95 transition-colors w-14 h-14 rounded-full text-white"
      @click="openTermsModal"
    >
      <Icon name="gg:close" size="24" />
    </button>
    <ul class="flex flex-col gap-y-2 mt-5">
      <li>
        1. El solicitante debe adoptar las medidas de seguridad necesarias para
        que no ponga en riesgo la salud y el bienestar propio y de terceros.
      </li>
      <li>
        2. El recinto solicitado será utilizado únicamente por el usuario
        autorizado.
      </li>
      <li>
        3. El usuario será responsable por la pérdida, daño o hurto de
        cualquiera de los componentes del recinto autorizado; incluidos
        equipamiento o implementos.
      </li>
      <li class="font-bold">
        4. Queda prohibido el expendio y consumo de bebidas alcohólicas en el
        recinto en todo momento. No se permitirá la presencia de personas en
        estado de embriaguez.
      </li>
      <li class="font-bold">
        5. Queda prohibido fumar al interior del Complejo Deportivo Integral.
      </li>
      <li class="font-bold">
        6. Queda prohibido el ingreso de mascotas, animales comunitarios o
        similares.
      </li>
    </ul>
    <p class="mt-10">
      <span class="font-bold">DECLARACIÓN:</span> En este acto las partes
      contratantes declaran conocer y se obligan a dar estricto cumplimiento a
      las normas dispuestas en la Ley N°21.369, que regula el acoso sexual, la
      violencia y la discriminación arbitraria en el ámbito de la Educación
      Superior que dispone el deber de todas las instituciones de educación
      superior a adoptar las medidas que sean conducentes para prevenir,
      investigar, sancionar y erradicar el acoso sexual, la violencia y la
      discriminación de género, entendiéndose incorporadas al presente acto toda
      la normativa interna emitida por la Universidad en cumplimiento de la
      referida ley . Asimismo declaran conocer el Manual para la prevención del
      Lavado de Activos, delitos funcionarios y financiamiento del terrorismo
      aprobado por Decreto Exento Universitario N°00.369/2021 y, las
      disposiciones contenidas en el Código de Ética de la Universidad de
      Tarapacá, aprobado por Decreto Exento Universitario N°00.360/2021,
      obligándose, en ambas casos, a dar estricto cumplimiento a las normas
      contenidas en ellos.
    </p>
  </div>
</template>
