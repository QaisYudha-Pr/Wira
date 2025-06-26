<template>
    <div class="bg-black z-[-2]">
<div class="overflow-hidden bg-no-repeat  bg-center w-full h-screen bg-[url('/baddie.jpg')] z-[-1]">

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
      <source src="/hitam.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- KONTEN DI ATAS VIDEO -->
    <div class="relative z-10">
      <HeaderComponent />
      <div class="p-10 text-white">
        <h1 class="text-4xl font-bold ">TEST</h1>
        <p class="mt-2 font-light">Ini adalah halaman testing untuk deploy</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>
h1 {
    font-family: poppins;
}
p {
    font-family: poppins;
}
</style>