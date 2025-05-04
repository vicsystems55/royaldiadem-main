<template>
    <div class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <h3 class="text-md font-bold mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ description }}</p>
      <a href="#" class="text-blue-600 text-sm mt-2 inline-block">Learn More →</a>
    </div>
  </template>
  
  <script setup>
  defineProps(['title', 'description'])
  </script>