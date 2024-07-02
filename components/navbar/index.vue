<template>
    <section>
        <header class="w-full h-32 flex justify-center items-center">
            <h1 class="font-ptserif text-4xl">Hanna Collection</h1>
        </header>
        <nav class="md:mx-32">
            <div class="flex justify-center items-center space-x-4 mx-4 py-2 border-t-2 border-b-2 font-ptserif text-[#94A3B8]">
                <div>
                    <UButton variant="ghost" color="gray"  >
                        HOME
                    </UButton>
                </div>
                <div>
                    <UButton variant="ghost" color="gray" to="/">
                        ALL
                    </UButton>
                </div>
                <div>
                    <UButton variant="ghost" color="gray">
                        WOMEN
                    </UButton>
                </div>
                <div>
                    <UButton variant="ghost" color="gray">
                        MEN
                    </UButton>
                </div>
                <div>
                    <UButton variant="ghost" color="gray">
                        CHART
                    </UButton>
                </div>
            </div>
        </nav>
    </section>
</template>

<style scoped>
a.router-link-active,
a.router-link-exact-active {
  @apply rounded-lg bg-primary-50;
}
a.router-link-active > div,
a.router-link-exact-active > div {
  @apply text-primary-900;
}
</style>