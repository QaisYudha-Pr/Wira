<template>
  <div>
    <HeaderComponent />

    <section class="bg-gradient-to-b from-[#121417] to-[#23272F] text-white py-16 px-4 md:px-8 w-full">
      <!-- ABOUT -->
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
        <!-- FOTO -->
        <div class="flex justify-center preload:auto">
          <img
            src="/dino.jpg"
            alt="505"
            class="rounded-2xl shadow-lg max-w-xs md:max-w-sm object-cover hover:scale-105 transition ease-in-out duration-300"
          />
        </div>

        <!-- TEXT -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-indigo-400">
            About Me
          </h2>
          <p class="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Hi! I'm Qais, an amateur web developer from Indonesia. I enjoy building beautiful and functional websites that solve real problems. Passionate about learning and delivering quality code.
          </p>
          <ul class="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Responsive Design</li>
            <li>Modern Web Technologies</li>
            <li>Continuous Learning</li>
          </ul>
          <button
            class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            <nuxt-link to="/project">View My Project</nuxt-link>
          </button>
        </div>
      </div>

      <!-- SKILLS STATS -->
      <div class="mt-20 max-w-3xl mx-auto">
        <h3 class="text-3xl md:text-4xl font-bold text-center text-indigo-400 mb-12">
          My Skills
        </h3>

        <div class="space-y-8">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="space-y-3"
          >
            <!-- ICON + NAME + % -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img :src="skill.icon" alt="" class="w-8 h-8" />
                <span class="text-lg md:text-xl font-semibold">{{ skill.name }}</span>
              </div>
              <span class="text-indigo-400 font-mono">{{ skill.level }}%</span>
            </div>

            <!-- PROGRESS BAR -->
            <div class="relative w-full h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner">
              <div
                class="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const skills = [
  {
    name: 'HTML',
    level: 85,
    icon: '/html5.svg',
  },
  {
    name: 'CSS',
    level: 45,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    name: 'JavaScript',
    level: 10,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'PHP',
    level: 25,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
]
</script>

<style scoped>
/* Optional glow effect for bars - tweak as you want */
.progress-glow {
  box-shadow: 0 0 10px #6366f1, 0 0 20px #8b5cf6, 0 0 30px #ec4899;
}
</style>
