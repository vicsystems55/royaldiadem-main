<template>
  <div>

    <!-- Hero/Header Section -->
    <section class="relative h-96 bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('https://source.unsplash.com/featured/?training,education');">
      <div class="bg-black bg-opacity-50 p-6 rounded">
        <h1 class="text-4xl font-bold text-center">Royal Diadem Training Institute</h1>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-16 px-6 md:px-20 bg-gray-50">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <!-- Text Content -->
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-gray-800">Welcome to Our Training Program</h2>
          <p class="mb-4 text-gray-700">
            This training will be <strong>free to all the Participants</strong> being the first edition of our training program.
          </p>
          <p class="text-gray-700">For more info, kindly contact us on: <strong>08055231278</strong></p>
        </div>

        <!-- Image -->
        <div>
          <img src="https://source.unsplash.com/featured/?classroom,learning" alt="Training" class="w-full rounded-lg shadow-md" />
        </div>
      </div>

      <!-- CTA Button -->
      <div class="mt-10 flex justify-center">
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition-all">
          Get Started
        </button>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'TrainingPage'
}
</script>
