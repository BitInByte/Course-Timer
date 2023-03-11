<template>
  <div class="buttons">
    <button
      class="ui primary basic button"
      v-for="(minute, index) in minutesState.minutes"
      :key="index"
      @click="minutesState.removeMinute(index)"
    >
      {{ minute }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMinutesStore } from '../stores/minutes'
const minutesState = useMinutesStore()
</script>

<style scoped>
.buttons {
  width: 100%;
  display: flex;
  gap: 0.2rem;
}
</style>
