<template>
    <section>
        <header class="w-full h-32 flex justify-center items-center">
            <h1 class="font-ptserif text-4xl">Hanna Collection</h1>
        </header>
        <nav class="md:mx-32">
            <div
                class="flex justify-center items-center space-x-4 mx-4 py-2 border-t-2 border-b-2 font-ptserif text-[#94A3B8]">
                <div>
                    <NuxtLink to="/">
                        HOME
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/products/all/">
                        ALL
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/products/women/">
                        WOMEN
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/products/men/">
                        MEN
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink>
                        CHART
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </section>
</template>

<style scoped>
a.router-link-active,
a.router-link-exact-active {
    @apply  text-orange-500;
}
</style>