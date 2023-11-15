<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStore';
import axios from 'axios';
axios.defaults.baseURL = 'https://recintosdeportivos-production.up.railway.app';

const store = useUsersStore();


onMounted(() => {
  store.refreshUser();
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
