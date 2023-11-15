<template>
  <footer class="bg-dark-blue text-white py-10">
    <div class="grid grid-cols-3 mx-auto">
      <nuxt-img class="w-[300px] mx-auto" src="/img/logo-acreditacion.png" />
      <div
        class="flex flex-col gap-y-5 items-center justify-center text-center"
      >
        <div class="flex gap-x-10">
          <NuxtLink
            target="_blank"
            href="https://www.facebook.com/utarapaca"
            class="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark-blue hover:bg-orange-yellow hover:text-white transition-colors"
          >
            <Icon name="ri:facebook-fill" size="24" />
          </NuxtLink>
          <NuxtLink
            target="_blank"
            href="https://twitter.com/utarapaca"
            class="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark-blue hover:bg-orange-yellow hover:text-white transition-colors"
          >
            <Icon name="ri:twitter-x-fill" size="24" />
          </NuxtLink>
          <NuxtLink
            target="_blank"
            href="https://www.instagram.com/utarapaca/"
            class="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark-blue hover:bg-orange-yellow hover:text-white transition-colors"
          >
            <Icon name="ri:instagram-fill" size="24" />
          </NuxtLink>
          <NuxtLink
            target="_blank"
            href="https://www.youtube.com/utaplay"
            class="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark-blue hover:bg-orange-yellow hover:text-white transition-colors"
          >
            <Icon name="ri:youtube-fill" size="24" />
          </NuxtLink>
        </div>
        <span class="text-orange-yellow font-bold"
          >Universidad de Tarapacá - Universidad del Estado de Chile</span
        >
      </div>
      <button
        class="inline-block w-20 h-20 rounded-full self-center place-self-end mr-20 bg-orange-yellow"
      >
        <Icon class="rotate-180" name="ep:arrow-down-bold" size="30" />
      </button>
    </div>
  </footer>
</template>
