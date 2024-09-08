<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
defineProps({
  jobTitle: {
    type: String,
    default: "For employeers",
  },
  bgColor: {
    type: String,
    default: "bg-gray-100",
  },
  textOnTheButton: {
    type: String,
    default: "Add Job",
  },
  btnColor: {
    type: String,
    default: "bg-black",
  },
});
</script>
<template>
  <div :class="`${bgColor} p-6 rounded-lg shadow-md `">
    <h2 class="text-2xl font-bold">{{ jobTitle }}</h2>
    <p class="mt-2 mb-4">Browse our Vue jobs and start your career today</p>
    <RouterLink
      to="/alljobs"
      :class="`inline-block ${btnColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`"
    >
      {{ textOnTheButton }}
    </RouterLink>
  </div>
</template>
<style scoped></style>
