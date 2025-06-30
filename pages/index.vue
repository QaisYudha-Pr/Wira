<template>
    <HeaderComponent/>

  <div class="relative w-full h-screen bg-gradient-to-br from-[#121417] to-[#23272F] overflow-hidden flex items-center justify-center px-4">
    <div class="text-center max-w-xl w-full">  <!-- 💡 Changed here -->
      <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-4">
        Hey, I'm <span class="text-indigo-400">Qais</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 mb-8 mx-auto tracking-wide text-center font-light font-mono">
        {{ typedText }}<span class="animate-pulse">|</span>
      </p>
      <nuxt-link to="/project"><button
        class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
      >
        View My Work
      </button>
      </nuxt-link>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const fullText = "Amateur Web Developer from Indonesia,";
const typedText = ref("");
let index = 0;

function typeWriter() {
  if (index < fullText.length) {
    typedText.value += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // kecepatan ngetik
  }
}

onMounted(() => {
  typeWriter();
});
</script>
