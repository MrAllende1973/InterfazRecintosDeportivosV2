<template>
  <swiper
    class="w-[80%]"
    :modules="[SwiperEffectCoverflow]"
    :effect="'coverflow'"
    :coverflow-effect="{
      slideShadows: false,
      stretch: 200,
      rotate: 0,
      scale: 1,
    }"
    :space-between="0"
    :centered-slides="true"
    :slides-per-view="1.5"
    :initial-slide="1"
  >
    <swiper-slide v-for="i in 3" :key="i">
      <nuxt-img
        :src="`/img/notices/notice-${i}.jpg`"
        class="w-[500px] h-[500px] mx-auto"
        format="webp"
        quality="80"
      />
    </swiper-slide>
  </swiper>
</template>
