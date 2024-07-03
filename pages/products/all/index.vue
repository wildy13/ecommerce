<script setup>
import { ref, onMounted } from 'vue';
import { useProductsStore } from '../../../stores/products'

const store = useProductsStore();

const {
    pending,
    error,
    execute,
} = useLazyAsyncData(() => store.getAll(), {
    immediate: false,
});


onMounted(async () => {
    await execute();
});

const formatCurrency = (value) => {
     return value.toLocaleString('id-ID');
 };
</script>

<template>
    <div class="w-full h-full">
        <section>
            <div class="py-5 grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div v-for="item in store.items" :key="item._id" class="font-ptserif space-y-2">
                    <img :src="item.img" alt="product-1" class="w-52 h-52">
                    <div class="text-center text-lg">{{ item.name }}</div>
                    <div class="text-center text-lg text-orange-500">Rp {{ formatCurrency(item.price) }}</div>
                    <div class="flex justify-center items-center">
                        <UButton label="View Item" variant="solid" color="gray" :to="`/product/${item._id}/`" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>