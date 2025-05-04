<template>
  <div class="home">

    <!-- Hero Section -->
    <section class="relative h-[500px] bg-cover bg-center text-white"
      style="background-image: url('your-tractor-image.jpg')">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold">MULTI-<span class="text-red-500">BIZ</span></h1>
          <p class="mt-4 max-w-2xl text-sm md:text-base mx-auto">Royal Diadem Multibiz international agricultural
            services... redefining farming in Nigeria and Africa at large.</p>
        </div>
      </div>
    </section>

    <!-- What We Do -->
    <section class="py-12 bg-gray-100 text-center">
      <h2 class="text-2xl font-bold mb-6">What We Do</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div class="bg-white shadow p-4">Royal Apparels for Kids</div>
        <div class="bg-white shadow p-4">Land Clearing and Development</div>
        <div class="bg-white shadow p-4">Tractor Sales</div>
        <div class="bg-white shadow p-4">Tractor Hiring Services</div>
        <div class="bg-white shadow p-4">Equipment Sales and Hiring</div>
        <div class="bg-white shadow p-4">Agribusiness Opportunities</div>
      </div>
    </section>

    <!-- Services Description -->
    <section class="py-12 bg-gray-900 text-white px-6">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-xl font-bold mb-4">Land Clearing and Development</h3>
        <p class="text-sm">We use the most modern machines...</p>
      </div>
    </section>

    <section class="py-12 bg-white px-6">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-xl font-bold mb-4">Tractor Hiring</h3>
        <p class="text-sm">We provide access to affordable tractors...</p>
      </div>
    </section>

    <section class="py-12 bg-gray-900 text-white px-6">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-xl font-bold mb-4">Tractor Sales</h3>
        <p class="text-sm">We partner with top-rated manufacturers...</p>
      </div>
    </section>

    <section class="py-12 bg-gray-800 text-white px-6">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-xl font-bold mb-4">Construction Equipment Sales and Hiring</h3>
        <ul class="list-disc list-inside text-sm space-y-1">
          <li>Excavator</li>
          <li>Grader</li>
          <li>Lowbed Trailer</li>
          <li>Forklifts</li>
        </ul>
      </div>
    </section>

    <section class="py-12 bg-white px-6">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-xl font-bold mb-4">Agribusiness Investment Opportunities</h3>
        <p class="text-sm">We are engaging in various farming operations...</p>
      </div>
    </section>

    <!-- About Us -->
    <section class="py-12 bg-gray-100 text-center">
      <h2 class="text-2xl font-bold mb-6">About Us</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <div class="p-4 border">Credible Integrity</div>
        <div class="p-4 border">Effective Team Work</div>
        <div class="p-4 border">Expert Advice</div>
        <div class="p-4 border">Quality Assurance</div>
      </div>
    </section>

    <!-- Contact Us -->
    <section class="py-12 bg-gray-900 text-white text-center">
      <h2 class="text-2xl font-bold mb-6">Contact Us</h2>
      <div class="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
        <div>
          <h4 class="font-semibold">Address</h4>
          <p>Fadeyi Agon Business Avenue, Lokogoma</p>
        </div>
        <div>
          <h4 class="font-semibold">Phone</h4>
          <p>08104238538</p>
        </div>
        <div>
          <h4 class="font-semibold">Email</h4>
          <p>nigeriandiademgroup@gmail.com</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>