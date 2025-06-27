<template>
    <div class="bg-black z-[-1]">

  <div class="relative w-full h-screen overflow-hidden">
    <!-- VIDEO BACKGROUND -->
    <video
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/thunder.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- KONTEN DI ATAS VIDEO -->
    <div class="relative z-10">
      <HeaderComponent />
      <div class="p-10 text-white">
        <h1 class="text-4xl font-bold ">NuxtJs</h1>
        <p class="text-lg text-gray-400 md:w-[600px] w-[300px] mt-2 overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sunt itaque! Laudantium dolor magni eaque vero quae earum necessitatibus nisi, vitae blanditiis facere, eos obcaecati consequuntur ex, excepturi itaque nihil!</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>