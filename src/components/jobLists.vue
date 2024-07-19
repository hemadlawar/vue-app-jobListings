<script setup>
import arrayOFjson from "@/assets/jobs copy.json";
import JobList from "@/components/jobList.vue";
console.log(arrayOFjson);
</script>
<template>
  <div v-for="job in arrayOFjson">
    <div class="flex">
      <JobList />
    </div>
  </div>
</template>
<style></style>
