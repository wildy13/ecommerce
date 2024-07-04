<script setup>
import { ref } from 'vue';

const isOpen = ref(true);
</script>

<template>
    <div>

        <UModal v-model="isOpen" prevent-close class="w-full h-screen bg-red-400"
            :ui="{ container: 'w-full h-full flex justify-center items-center' }">
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Notification
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="isOpen = false" />
                    </div>
                </template>
                <div class="p-4">
                    <p class="text-gray-800 dark:text-gray-200">
                        Announcement: This website is a static site intended solely for display purposes.
                        Should you have any requests or inquiries, please contact the developer listed below:
                    </p>
                    <div class="mt-4">
                        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Developer Contact Information:
                        </h4>
                        <p class="text-gray-700 dark:text-gray-300">Name: Wildy</p>
                        <p class="text-gray-700 dark:text-gray-300">Email: <a href="mailto:simanjuntakwildy@gmail.com"
                                class="text-blue-500 hover:underline">simanjuntakwildy@gmail.com</a></p>
                        <p class="text-gray-700 dark:text-gray-300">Instagram: @jo.14m</p>
                    </div>
                </div>
                <Placeholder class="h-32" />
            </UCard>
        </UModal>

        <section class="w-full lg:h-screen sm:px-20 md:px-2 lg:px-32">
            <div class="py-2 font-montserrat px-4 flex flex-col justify-center"
                style="display: grid; grid-template-columns: 5px 25px 1fr; grid-template-rows: 6vmin 5.5vmin 10vmin 20px 1fr;">
                <div class="flex justify-end row-start-1 col-start-3 row-end-6 col-end-4">
                    <img src="https://ecommerce-netlify.netlify.app/shoe1.jpg" alt="event-item" class="w-2/3 md:w-1/2">
                </div>
                <div
                    class="font-montserrat text-[#efefef] row-start-3 col-start-1 row-end-5 col-end-5 text-[23vmin] md:text-[15vmin] xl:text-[30vmin] uppercase">
                    New</div>
                <div
                    class="row-start-2 xl:row-start-1 col-start-2 row-end-3 col-end-4 text-[#d96528] text-4xl sm:text-5xl md:text-4xl xl:text-8xl">
                    Men Shoes
                </div>
                <div class="row-start-3 col-start-3 row-end-3 col-end-4  text-4xl sm:text-6xl md:text-5xl xl:text-9xl">
                    Collection</div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-12 gap-4 font-montserrat">
                <div class="border-2 h-60 flex flex-col justify-center items-center">
                    <img src="https://ecommerce-netlify.netlify.app/icon-package.svg" alt="" class="w-32">
                    <div class="uppercase font-bold text-lg">Free Sheeping Local</div>
                    <div class="text-slate-400">Delivery in a day</div>
                </div>
                <div class="border-2 w-full h-60  flex flex-col justify-center items-center">
                    <img src="https://ecommerce-netlify.netlify.app/icon-cal.svg" alt="" class="w-32">
                    <div class="uppercase font-bold text-lg">24/7 Customer service</div>
                    <div class="text-slate-400">Call us any time</div>
                </div>
                <div class="border-2 w-full h-60  flex flex-col justify-center items-center">
                    <img src="https://ecommerce-netlify.netlify.app/icon-service.svg" alt="" class="w-32">
                    <div class="uppercase font-bold text-lg">Easy online return</div>
                    <div class="text-slate-400">Send within 30 days</div>
                </div>
            </div>
        </section>
    </div>
</template>