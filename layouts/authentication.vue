<template>
  <main>
    <nuxt-img
      class="absolute top-0 left-0 w-full h-full object-cover"
      src="/img/school-auth.jpg"
    />
    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm">
      <slot />
    </div>
  </main>
</template>
