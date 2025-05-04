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

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="(item, index) in services" :key="index" class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img :src="item.image" :alt="item.title" class="w-full h-32 object-cover rounded-md mb-4" />
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
        { title: 'Emotional bonds', image: 'https://source.unsplash.com/featured/?emotion' },
        { title: 'Reconnection with a partner', image: 'https://source.unsplash.com/featured/?couple' },
        { title: 'Rebuild broken trust', image: 'https://source.unsplash.com/featured/?trust' },
        { title: 'Communication', image: 'https://source.unsplash.com/featured/?communication' },
        { title: 'Sexual challenges', image: 'https://source.unsplash.com/featured/?intimacy' },
        { title: 'Breakup coping', image: 'https://source.unsplash.com/featured/?breakup' },
        { title: 'Past traumas', image: 'https://source.unsplash.com/featured/?trauma' },
        { title: 'Depression or anxiety', image: 'https://source.unsplash.com/featured/?depression' },
        { title: 'Forgiveness', image: 'https://source.unsplash.com/featured/?forgiveness' },
        { title: 'Healthy problem-solving', image: 'https://source.unsplash.com/featured/?solution' },
        { title: 'Anger management', image: 'https://source.unsplash.com/featured/?anger' },
        { title: 'Domestic violence', image: 'https://source.unsplash.com/featured/?violence' },
      ]
    }
  }
}
</script>
