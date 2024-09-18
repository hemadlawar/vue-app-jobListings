<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import router from "@/router";
const routee = useRoute();

const jobId = routee.params.id;

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
//////////////////////////////////////////////////////////////////////////////////////// submit the form
const handleSubmit = async () => {
  console.log(jobs_From_Json.value.jobs);
  try {
    const request = await axios.put(
      `http://localhost:3030/jobs/${jobId}`,
      jobs_From_Json.value.jobs
    );
    console.log(request);
    router.push(`/jobs/${jobId}`);
  } catch (err) {
    console.log(err);
  }
};
</script>
<template>
  <div class="container m-auto max-w-2xl py-24">
    <div
      class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      v-if="jobs_From_Json.isLoading == false"
    >
      <form v-on:submit.prevent="handleSubmit">
        <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>

        <div class="mb-4">
          <label for="type" class="block text-gray-700 font-bold mb-2"
            >Job Type</label
          >
          <select
            v-model="jobs_From_Json.jobs.type"
            id="type"
            name="type"
            class="border rounded w-full py-2 px-3"
            required
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2"
            >Job Listing Name</label
          >
          <input
            v-model="jobs_From_Json.jobs.name"
            type="text"
            id="name"
            name="name"
            class="border rounded w-full py-2 px-3 mb-2"
            placeholder="eg. Beautiful Apartment In Miami"
            required
          />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700 font-bold mb-2"
            >Description</label
          >
          <textarea
            v-model="jobs_From_Json.jobs.description"
            id="description"
            name="description"
            class="border rounded w-full py-2 px-3"
            rows="4"
            placeholder="Add any job duties, expectations, requirements, etc"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="type" class="block text-gray-700 font-bold mb-2"
            >Salary</label
          >
          <select
            v-model="jobs_From_Json.jobs.Salary"
            id="salary"
            name="salary"
            class="border rounded w-full py-2 px-3"
            required
          >
            <option value="Under $50K">under $50K</option>
            <option value="$50K - $60K">$50 - $60K</option>
            <option value="$60K - $70K">$60 - $70K</option>
            <option value="$70K - $80K">$70 - $80K</option>
            <option value="$80K - $90K">$80 - $90K</option>
            <option value="$90K - $100K">$90 - $100K</option>
            <option value="$100K - $125K">$100 - $125K</option>
            <option value="$125K - $150K">$125 - $150K</option>
            <option value="$150K - $175K">$150 - $175K</option>
            <option value="$175K - $200K">$175 - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2"> Location </label>
          <input
            v-model="jobs_From_Json.jobs.location"
            type="text"
            id="location"
            name="location"
            class="border rounded w-full py-2 px-3 mb-2"
            placeholder="Company Location"
            required
          />
        </div>

        <h3 class="text-2xl mb-5">Company Info</h3>

        <div class="mb-4">
          <label for="company" class="block text-gray-700 font-bold mb-2"
            >Company Name</label
          >
          <input
            v-model="jobs_From_Json.jobs.company.name"
            type="text"
            id="company"
            name="company"
            class="border rounded w-full py-2 px-3"
            placeholder="Company Name"
          />
        </div>

        <div class="mb-4">
          <label
            for="company_description"
            class="block text-gray-700 font-bold mb-2"
            >Company Description</label
          >
          <textarea
            v-model="jobs_From_Json.jobs.company.description"
            id="company_description"
            name="company_description"
            class="border rounded w-full py-2 px-3"
            rows="4"
            placeholder="What does your company do?"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="contact_email" class="block text-gray-700 font-bold mb-2"
            >Contact Email</label
          >
          <input
            v-model="jobs_From_Json.jobs.company.email"
            type="email"
            id="contact_email"
            name="contact_email"
            class="border rounded w-full py-2 px-3"
            placeholder="Email address for applicants"
            required
          />
        </div>
        <div class="mb-4">
          <label for="contact_phone" class="block text-gray-700 font-bold mb-2"
            >Contact Phone</label
          >
          <input
            v-model="jobs_From_Json.jobs.company.phone"
            type="tel"
            id="contact_phone"
            name="contact_phone"
            class="border rounded w-full py-2 px-3"
            placeholder="Optional phone for applicants"
          />
        </div>

        <div>
          <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Edit Job
          </button>
        </div>
      </form>
    </div>
    <div v-else><PulseLoader /></div>
  </div>
</template>
<style scoped></style>
