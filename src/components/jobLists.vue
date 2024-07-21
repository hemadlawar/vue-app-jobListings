<script setup>
import arrayOFjson from "@/assets/jobs copy.json";
import JobList from "@/components/jobList.vue";
</script>
<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Job Browser
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobList
          v-for="job in arrayOFjson.slice(0, 3)"
          :Key="job.key"
          :job="job"
        />
      </div>
    </div>
  </section>
</template>
<style></style>
