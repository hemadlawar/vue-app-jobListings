<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { ref, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import router from "@/router";
const routee = useRoute();
console.log(routee.params.id);

const jobId = routee.params.id; /// used to fetch id of specific job

var jobs_From_Json = ref({
  jobs: [],
  isLoading: true,
});
//////////////////////////////////////////////////////////////////////////////////////////fetch data
onMounted(async () => {
  try {
    //async
    const response = await axios.get(`http://localhost:3030/jobs/${jobId}`);
    jobs_From_Json.value.jobs = response.data;
    console.log("THE DATA FROM server IS ", jobs_From_Json.value.jobs);
  } catch (err) {
    console.log("there is an erro happen" + err);
  } finally {
    jobs_From_Json.value.isLoading = false;
  }
});
/////////////////////////////////////////////////////delete a specific job

const deleteAjob = async () => {
  try {
    const response = await axios.delete(`http://localhost:3030/jobs/${jobId}`);
    console.log(response);
    router.push("/allJobs");
  } catch (err) {
    console.log(err);
  }
};
</script>
<template>
  <section class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">{{ jobs_From_Json.jobs.type }}</div>
            <h1 class="text-3xl font-bold mb-4">
              {{ jobs_From_Json.jobs.title }}
            </h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i
                class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
              ></i>
              <p class="text-orange-700">{{ jobs_From_Json.jobs.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Job Description
            </h3>

            <p class="mb-4">
              {{ jobs_From_Json.jobs.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">{{ jobs_From_Json.jobs.salary }}</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside v-if="jobs_From_Json.isLoading == false">
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">{{ jobs_From_Json.jobs.company.name }}</h2>

            <p class="my-2">
              {{ jobs_From_Json.jobs.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ jobs_From_Json.jobs.company.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ jobs_From_Json.jobs.company.contactPhone }}
            </p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/job/edit/${jobId}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</RouterLink
            >
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              v-on:click="deleteAjob"
            >
              Delete Job
            </button>
          </div>
        </aside>
        <aside v-else>PulseLoader</aside>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
