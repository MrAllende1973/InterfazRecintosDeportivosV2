<template>
  <nav class="fixed z-20 left-0 top-0 bg-royal-blue h-screen shadow-effect-1">
    <ul class="grid grid-rows-4 place-content-between h-full text-white">
      <li>
        <nuxt-link
          class="flex items-center px-2 h-full"
          exact-active-class="text-royal-blue bg-white"
          to="/"
        >
          <Icon name="ic:round-home" size="30" />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="flex justify-center items-center px-2 h-full"
          exact-active-class="text-royal-blue bg-white"
          to="/reservations"
        >
          <Icon name="mdi:calendar-week" size="30" />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="flex items-center px-2 h-full"
          exact-active-class="text-royal-blue bg-white"
          to="/history"
        >
          <Icon name="icon-park-outline:list" size="30" />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="flex items-center px-2 h-full"
          exact-active-class="text-royal-blue bg-white"
          to="/management"
        >
          <Icon name="akar-icons:clipboard" size="30" />
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>