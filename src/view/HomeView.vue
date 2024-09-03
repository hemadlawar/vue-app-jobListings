<script setup>
import Hero from "@/components/Hero.vue";
import HomeCard from "@/components/HomeCard.vue";
import JobLists from "@/components/jobLists.vue";
</script>
<template>
  <Hero titlee="job app" />

  <HomeCard />
  <jobLists :limit="3" showButton="true" />
</template>
