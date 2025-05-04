<template>
    <div>
      <div class="text-3xl font-bold">{{ count }}</div>
      <div class="text-sm text-gray-400 mt-1">{{ label }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps(['count', 'label'])
  </script>
  