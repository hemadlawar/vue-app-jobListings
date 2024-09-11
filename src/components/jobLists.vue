<script setup>
import { ref, onMounted } from "vue";
import { defineProps } from "vue";

import JobList from "@/components/jobList.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
defineProps({
  limit: { type: Number, default: 100000000 },
  showButton: {
    type: Boolean,
    default: false,
  },
});

var jobs_From_Json = ref({
  jobs: [],
  isLoading: true,
});
onMounted(async () => {
  try {
    //async
    const response = await axios.get(`http://localhost:3030/jobs`);
    jobs_From_Json.value.jobs = response.data;
    console.log(jobs_From_Json.value.jobs);
  } catch (err) {
    console.log("there is an erro happen" + err);
  } finally {
    jobs_From_Json.value.isLoading = false;
  }
});
</script>
<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Job Browser
      </h2>
      <div
        v-if="jobs_From_Json.isLoading == false"
        class="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <JobList
          v-for="job in jobs_From_Json.jobs.slice(0, limit)"
          :Key="job.key"
          :job="job"
        />
      </div>
      <div v-else class="text-center">
        <PulseLoader />
      </div>
    </div>
  </section>

  <section v-if="showButton == 'true'" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/allJobs"
      class="block bg-green-500 text-white text-center py-4 px-6 rounded-xl hover:bg-green-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
<style></style>
