<template>
    <header>
        <div class="shadow-md p-4 justify-between flex bg-transparent  ">
            <video autoplay muted loop playsinline
                class="rounded-full cursor-pointer shadow-md w-10 h-10 hover:scale-105 ">
                <source src="/zesty.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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