<script setup>
import logo from "@/assets/img/logo.png";
import { RouterLink, useRoute } from "vue-router";
const url_path = useRoute();

/// is Active function
const isActiveLink = (routePath) => {
  /// ama pathy urlaka dagarentawa ... pathy url aw pagay ka haman
  return url_path.fullPath == routePath;
};
</script>
<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink to="/" :class="['flex flex-shrink-0 items-center mr-4']">
            <img class="h-10 w-auto" v-bind:src="logo" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Vue Jobs</span
            >
          </RouterLink>
          <!---->

          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  'text-white py-2',
                  isActiveLink('/')
                    ? 'bg-green-900 hover:bg-green-900 hover:text-white rounded-md px-3 py-2'
                    : '',
                ]"
              >
                Home
              </RouterLink>

              <RouterLink
                to="/allJobs"
                :class="[
                  'text-white py-2 rounded-md px-3 hover:bg-green-900',
                  isActiveLink('/allJobs')
                    ? 'bg-green-900 hover:bg-green-900 hover:text-white rounded-md px-3 py-2 '
                    : '',
                ]"
                >Jobs</RouterLink
              >

              <RouterLink
                to="/job/add"
                :class="[
                  'text-white py-2 hover:bg-green-900 rounded-md',
                  isActiveLink('/job/add')
                    ? 'bg-green-900 hover:bg-green-900 hover:text-white rounded-md px-3 py-2 '
                    : '',
                ]"
                >Add Job</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style></style>
