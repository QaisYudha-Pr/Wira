<template>
    <header>
        <div class="shadow-md p-4 justify-between flex bg-transparent  ">
            <img class ="w-10 h-10 hover:scale-150 transition duration-400 ease-in-out " src="/dinos.png" alt="ini kucing">
            <h1 class="invisible font-lg text-center">INI PUNYA QAIS</h1>
            <ul class="flex gap-4">
                <li><nuxt-link to="/">
                        <h2
                        class=" text-gray-300 hover:text-white hover:scale-105 text-lg transition:text duration-300">
                        Home
                        </h2>
                    </nuxt-link>
                </li>
                <li><nuxt-link to="/about">
                        <h2
                        class=" text-gray-300 hover:text-white hover:scale-105 text-lg transition:text duration-300">
                        About
                        </h2>
                    </nuxt-link>
                </li>
                <li><nuxt-link to="/content">
                        <h2
                        class=" text-gray-300 hover:text-white hover:scale-105 text-lg transition:text duration-300">
                        Project
                        </h2>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
h2 {
    font-family: Alike;
}
h1 {
    font-family: Alike;
}
</style>