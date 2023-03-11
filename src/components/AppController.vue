<template>
  <div class="ui input controller">
    <input
      type="text"
      placeholder="Search..."
      :value="minutesState.inputValue"
      @input="(event) => minutesState.addMinutes(event.target.value)"
    />
    <label>Please, add minutes separated with spaces. For example: "13 4 9 10"</label>
  </div>
</template>

<script setup lang="ts">
import { useMinutesStore } from '../stores/minutes'
const minutesState = useMinutesStore()
</script>

<style scoped>
.controller {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
}

.controller input {
  width: 50%;
  margin: 0 auto;
}

.controller label {
  color: #fff;
}
</style>
