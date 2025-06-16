<template>
  <div>

    <!-- Hero Section -->
    <section class="relative h-96 bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('https://source.unsplash.com/featured/?relationship,counseling');">
      <div class="bg-black bg-opacity-60 p-6 rounded text-center">
        <h1 class="text-4xl font-bold">Royal Diadem Relationship Clinic</h1>
      </div>
    </section>

    <!-- What We Do Section -->
    <section class="py-16 px-6 md:px-20 bg-gray-50 text-center">
      <h2 class="text-2xl font-semibold text-gray-800 mb-10">What We Do</h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(item, index) in services" :key="index" class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img :src="item.image" :alt="item.title" class="w-full h-50 object-cover rounded-md mb-4" />
          <h3 class="text-lg font-medium text-gray-800">{{ item.title }}</h3>
        </div>
      </div>
    </section>

    <!-- Help Desk Section -->
    <section class="bg-white px-6 md:px-20 pb-20">
      <div class="bg-gray-100 p-6 rounded-lg shadow-md text-gray-800">
        <h3 class="text-xl font-bold mb-4">Help Desk</h3>
        <p><strong>Email:</strong> royaldiademgroup01@gmail.com</p>
        <p><strong>WhatsApp:</strong> +234 805 5231 278</p>
        <p><strong>Call:</strong> +234 805 5231 278</p>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ClinicPage',
  data() {
    return {
      services: [
        { title: 'Emotional bonds', image: '/src/assets/emotional.png' },
        { title: 'Reconnection with a partner', image: '/src/assets/reconnection.png' },
        { title: 'Rebuild broken trust', image: '/src/assets/trust.png' },
        { title: 'Communication', image: '/src/assets/communication.png' },
        { title: 'Sexual challenges', image: '/src/assets/sexual.png' },
        { title: 'Breakup coping', image: '/src/assets/breakup.png' },
        { title: 'Past traumas', image: '/src/assets/trauma.png' },
        { title: 'Depression or anxiety', image: '/src/assets/depression.png' },
        { title: 'Forgiveness', image: '/src/assets/forgiveness.png' },
        { title: 'Healthy problem-solving', image: '/src/assets/solving.png' },
        { title: 'Anger management', image: '/src/assets/anger.png' },
        { title: 'Domestic violence', image: '/src/assets/voilence.png' },
      ]
    }
  }
}
</script>
