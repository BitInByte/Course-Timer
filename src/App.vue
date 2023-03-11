<script setup lang="ts">
import AppController from './components/AppController.vue'
import AppButtons from './components/AppButtons.vue'
import { useMinutesStore } from './stores/minutes'
const minutesState = useMinutesStore()
</script>

<template>
  <main>
    <h1>Clock Timer</h1>
    <app-controller />
    <p class="clock">{{ minutesState.totalTime.hours }}:{{ minutesState.totalTime.minutes }}</p>
    <app-buttons />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
main {
  min-width: 100%;
  margin: 0 auto;
}

.clock {
  text-align: center;
  font-size: 40px;
}
</style>
