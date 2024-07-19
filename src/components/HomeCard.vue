<script setup>
import Card from "@/components/Card.vue";
</script>
<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card bgColor="bg-green-500" jobTitle="For Developers" />
        <Card />
      </div>
    </div>
  </section>
</template>
