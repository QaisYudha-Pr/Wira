<template>
  <div class="relative p-4 bg-gradient-to-r from-gray-800 to-gray-900 shadow text-white">
    <!-- NAVBAR ROW -->
    <div class="flex items-center justify-between">
      <!-- LOGO -->
      <a href="https://github.com/QaisYudha-Pr" class="flex items-center gap-2">
        <img
          class="w-10 h-10 rounded-full transition hover:scale-110"
          src="/gith-w.png"
          alt="GitHub Logo"
        />
        <span class="text-sm md:text-base font-mono opacity-80 ml-1">{{ currentTime }}</span>
      </a>

      <!-- JAM -->
      <div class="text-sm md:text-base font-mono opacity-80 hidden md:block">
        
      </div>

      <!-- TOGGLE BUTTON -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-white focus:outline-none"
      >
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <!-- DESKTOP MENU -->
      <ul class="hidden md:flex gap-4 items-center">
        <li>
          <NuxtLink
            to="/"
            class="hover:text-indigo-400 text-md transition hover:scale-110"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="hover:text-indigo-400 text-md transition hover:scale-110"
          >
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="hover:text-indigo-400 text-md transition hover:scale-110"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- DROPDOWN MOBILE -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="md:hidden mt-2 flex flex-col gap-2 bg-gray-800 rounded-lg p-4 shadow-lg"
      >
        <li>
          <NuxtLink
            to="/"
            class="block hover:bg-gray-700 px-3 py-2 rounded transition"
            @click="isOpen = false"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="block hover:bg-gray-700 px-3 py-2 rounded transition"
            @click="isOpen = false"
          >
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="block hover:bg-gray-700 px-3 py-2 rounded transition"
            @click="isOpen = false"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTime = ref('')
const isOpen = ref(false)

function updateTime() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  currentTime.value = `${hours}:${minutes}:${seconds}`
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<style scoped>

li{
    font-family: 'Inter';
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
