<script setup>
import axios from "axios";
import ToastNotification from "./ToastNotification.vue";
import { ref } from "vue";
import router from "@/router";
const job = {
  type: "Internship",
  name: "",
  description: "",
  Salary: "Under $50K",
  location: "",
  company: {
    name: "",
    description: "",
    phone: "",
    email: "",
  },
};

///////////////////////////////////////////////////////////////////////////// hide toast
const showToast = ref(false);
//////////////////////////////////////////////////////////////////////////////////submit the form
const handleSubmit = async () => {
  console.log(job);
  try {
    //async
    const response = await axios.post(`http://localhost:3030/jobs`, job);
    showToast.value = true;
    console.log("the data has been added successfully", response);

    router.push("/");
  } catch (err) {
    console.log("there is an erro happen" + err);
  }
};

////////////////////////////////////////////////////////////////////////////////// Define reactive array of toast items
const items = ref([{ message: "The job has been added!" }]);

/////////////////////////////////////////////////////////////////////////////// Remove the toast notification by index
function remove(index) {
  items.value.splice(index, 1);
}
</script>
<template>
  <!-- Toast notifications -->
  <ToastNotification
    v-if="showToast == true"
    v-for="(item, index) in items"
    :key="index"
    :message="item.message"
    @remove="remove(index)"
  />

  <!--other-->
  <div class="container m-auto max-w-2xl py-24">
    <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
      <form v-on:submit.prevent="handleSubmit">
        <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>

        <div class="mb-4">
          <label for="type" class="block text-gray-700 font-bold mb-2"
            >Job Type</label
          >
          <select
            id="type"
            name="type"
            class="border rounded w-full py-2 px-3"
            required
            v-model="job.type"
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
            v-model="job.name"
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
            v-model="job.description"
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
            v-model="job.Salary"
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
            v-model="job.location"
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
            v-model="job.company.name"
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
            v-model="job.company.description"
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
            v-model="job.company.email"
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
            v-model="job.company.phone"
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
            Add Job
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped></style>
