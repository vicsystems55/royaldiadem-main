<template>
  <div class="">
  <!-- Header Section -->
  <div class="bg-gradient-to-r from-gray-800 to-gray-700 py-20 text-center text-white relative">
    <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
    <div class="flex justify-center space-x-4">
      <a href="#"><i class="fab fa-facebook text-blue-500"></i></a>
      <a href="#"><i class="fab fa-twitter text-blue-400"></i></a>
      <a href="#"><i class="fab fa-instagram text-pink-500"></i></a>
      <a href="#"><i class="fab fa-whatsapp text-green-500"></i></a>
    </div>
  </div>

  <!-- Office Info Cards -->
  <div class="max-w-4xl mx-auto -mt-16 z-10 relative grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
    <!-- Head Office -->
    <div class="bg-white p-6 shadow-lg rounded">
      <h2 class="text-lg font-bold mb-2">Head Office</h2>
      <p class="text-sm text-gray-700">Suit F13, Sabondale Shopping Complex, Plot 526 Obafemi Awolowo Way, Jabi-FCT, Abuja</p>
      <a href="#" class="mt-2 inline-block text-red-500 text-sm">Email Us <i class="fas fa-arrow-right ml-1"></i></a>
    </div>

    <!-- Branch Office -->
    <div class="bg-red-600 text-white p-6 shadow-lg rounded">
      <h2 class="text-lg font-bold mb-2">Branch Office</h2>
      <p class="text-sm">Mechanic Garage, opposite Dunamis Jutech Kuje-FCT, Abuja</p>
      <a href="#" class="mt-2 inline-block text-white text-sm">Email Us <i class="fas fa-arrow-right ml-1"></i></a>
    </div>
  </div>

  <!-- Map -->
  <div class="max-w-3xl mx-auto my-10 px-4">
    <iframe
      class="w-full h-80 rounded shadow"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>

  <!-- Other Sites Section -->
  <div class="bg-white py-10">
    <h2 class="text-center text-2xl font-bold mb-6">Other Sites</h2>
    <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      <div class="bg-yellow-800 text-white p-6 rounded shadow">
        <h3 class="font-semibold">Royal Diadem Multibiz International</h3>
        <a href="#" class="text-sm underline mt-2 inline-block">Learn More</a>
      </div>
      <div class="bg-red-500 text-white p-6 rounded shadow">
        <h3 class="font-semibold">Royal Diadem Aluminium and Glass enterprises</h3>
        <a href="#" class="text-sm underline mt-2 inline-block">Learn More</a>
      </div>
      <div class="bg-blue-900 text-white p-6 rounded shadow">
        <h3 class="font-semibold">Royal Diadem Autotracker</h3>
        <a href="#" class="text-sm underline mt-2 inline-block">Learn More</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>
