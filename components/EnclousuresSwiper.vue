<template>
  <swiper
    class="w-full h-[600px]"
    :modules="[SwiperPagination, SwiperAutoplay]"
    :pagination="{
      type: 'bullets',
    }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :slides-per-view="1"
  >
    <swiper-slide v-for="i in 8" :key="i">
      <nuxt-img
        class="w-full h-full object-cover object-top"
        :src="`/img/enclousures/enclousure-${i}.jpg`"
        format="webp"
        quality="80"
        lazy="true"
      />
    </swiper-slide>
  </swiper>
</template>

<style>
.swiper-pagination-bullet {
  background-color: white;
}
</style>
