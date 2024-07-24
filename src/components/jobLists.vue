<script setup>
import { defineProps } from "vue";
import arrayOFjson from "@/assets/jobs copy.json";
import JobList from "@/components/jobList.vue";
defineProps({ limit: { type: Number, default: 100000000 } });
</script>
<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Job Browser {{ limit }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobList
          v-for="job in arrayOFjson.slice(0, limit)"
          :Key="job.key"
          :job="job"
        />
      </div>
    </div>
  </section>
</template>
<style></style>
