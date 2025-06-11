<template>
<div
  class="bg-white bg-cover bg-center shadow-md rounded-lg p-4 hover:shadow-lg transition h-[200px] relative overflow-hidden"
  :style="`background-image: url(${imageSrc})`"
>
  <!-- Overlay for readability (optional) -->
  <div class="absolute inset-0 bg-white/60 "></div>

  <!-- Content on top of image -->
  <div class="relative z-10">
    <h3 class="text-lg font-bold mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-700">{{ description }}</p>
    <a 
    :href="url" 
    class="text-blue-600 text-sm mt-2 inline-block">Learn More →</a>
  </div>
</div>
  </template>
  
  <script setup>
  defineProps(['title', 'description', 'imageSrc', 'url'])
  </script>