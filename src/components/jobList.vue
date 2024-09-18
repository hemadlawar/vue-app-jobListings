<script setup>
import { defineProps, ref, computed } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  job: Object,
});

const isDescriptionTruncated = ref(true);
console.log(props);
// Computed property to truncate the job description
const displayedDescription = computed(() => {
  const description = props.job.description;
  const maxLength = 100; // Set your desired max length here
  if (isDescriptionTruncated.value && description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }
  return description;
});

// Toggle function to show/hide the full description
const toggleDescription = () => {
  isDescriptionTruncated.value = !isDescriptionTruncated.value;
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ props.job.type }}</div>
        <h3 class="text-gray-600 text-xl font-bold">{{ props.job.name }}</h3>
      </div>

      <div class="mb-5">
        {{ displayedDescription }}
        <button
          v-if="props.job.description.length > 100"
          @click="toggleDescription"
          class="text-blue-500 hover:text-blue-700 ml-2"
        >
          {{ isDescriptionTruncated.value ? "Show Less" : "Read More" }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ props.job.Salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ props.job.location }}
        </div>
        <RouterLink
          :to="`/jobs/${props.job.id}`"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style></style>
