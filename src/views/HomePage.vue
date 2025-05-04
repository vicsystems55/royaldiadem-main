<template>
  <div class="font-sans text-gray-800">

    <!-- Hero -->
    <section class="relative bg-gray-50 h-[400px] bg-cover bg-center" style="background-image: url('/src/assets/office-image.jpg')">
      <div class="absolute inset-0 bg-white bg-opacity-70 flex flex-col justify-center items-center text-center px-4">
        <h1 class="text-3xl font-semibold mb-2">Welcome To Royal Diadem Group</h1>
        <button class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Contact Us</button>
      </div>
    </section>

    <!-- Subsidiaries -->
    <section class="bg-white py-10">
      <h2 class="text-center text-xl font-semibold mb-6">The following are subsidiaries of Royal Diadem Group</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        <SubsidiaryCard title="Royal Diadem Multibiz" description="Agricultural tractors & services." />
        <SubsidiaryCard title="Aluminium & Glass" description="Windows, shower doors, etc." />
        <SubsidiaryCard title="AutoTracker" description="Vehicle tracking services." />
        <SubsidiaryCard title="Relationship Clinic" description="Building stronger relationships." />
      </div>
    </section>

<!-- About Section -->
<section class="bg-gray-50 py-10">
  <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
    <div class="basis-1/2">
      <h3 class="text-xl font-semibold mb-4">Royal Diadem Group</h3>
      <p class="text-sm mb-4">Our clients are the most important people in our firm...</p>
      <p class="text-sm mb-4">The company has a structure that accommodates several departments...</p>
      <button class="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm">Read More</button>
    </div>
    <div class="basis-1/2 h-64 md:h-80">
      <img
        src="/src/assets/happy-clients.jpg"
        alt="Happy Clients"
        class="w-full h-full object-cover rounded shadow-md"
      />
    </div>
  </div>
</section>


    <!-- Stats -->
    <section class="bg-white py-10 text-center">
      <div class="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto gap-8">
        <StatItem count="0" label="Years in Business" />
        <StatItem count="4" label="Projects" />
        <StatItem count="2" label="Clients" />
        <StatItem count="0" label="Staff Members" />
      </div>
    </section>

    <section class="bg-gray-50 py-12 text-center">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Social Media -->
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Follow Us For The Latest Updates
      </h2>
      <div class="flex justify-center gap-4 mb-10">
        <a href="#" class="bg-blue-600 text-white p-3 rounded shadow hover:bg-blue-700">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a href="#" class="bg-red-500 text-white p-3 rounded shadow hover:bg-red-600">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="#" class="bg-green-500 text-white p-3 rounded shadow hover:bg-green-600">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>

      <!-- Address -->
      <p class="font-semibold text-blue-900 text-lg">
        Plot 91, Aiben Boulevard, Behind Mantrac (CAT) Company Sabon Lugbe, FCT, Abuja
      </p>

      <div class="my-6 border-t border-gray-300 w-10 mx-auto"></div>

      <!-- Contact Info -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
        <!-- Phone -->
        <div class="flex flex-col items-center">
          <font-awesome-icon :icon="['fas', 'phone-alt']" class="text-2xl text-blue-700 mb-2" />
          <p class="text-sm font-medium">08034544804<br />08058303013</p>
        </div>

        <!-- Email -->
        <div class="flex flex-col items-center">
          <font-awesome-icon :icon="['fas', 'envelope']" class="text-2xl text-blue-700 mb-2" />
          <p class="text-sm font-medium">
            support@royaldiademgroup.com<br />
            royaldiademgroup01@gmail.com
          </p>
        </div>
      </div>

      <div class="w-full h-64 rounded shadow-md overflow-hidden">
    <iframe
      class="w-full h-full"
      :src="`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Abuja,Nigeria`"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
    </div>
  </section>


  </div>
</template>

<script setup>
import SubsidiaryCard from '../../src/components/SubsidiaryCard.vue'
import StatItem from '../../src/components/StatItem.vue'

defineProps({
  apiKey: {
    type: String,
    required: true
  }
});
</script>



