<script setup>
import { useRoute } from 'nuxt/app';
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const route = useRoute();

const items = ref([]);
const quantity = ref(1);
const cart = ref([]);

const getItems = async () => {
    try {
        const response = await axios.get('/products.json');
        items.value = response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
};

onMounted(() => {
    getItems();
});

const formatCurrency = (value) => {
    return value.toLocaleString('id-ID');
};

const data = computed(() => {
    const itemId = parseInt(route.params.id);
    return items.value.find(item => item._id === itemId);
});

const increaseQuantity = () => {
    quantity.value++;
};

const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const addToCart = () => {
    const itemId = parseInt(route.params.id);
    const product = items.value.find(prod => prod._id === itemId)
    if (product) {
        cart.value.push({
            productId: product._id,
            productName: product.name,
            productPrice: product.price,
            quantity: quantity
        })
    }
}

</script>
<template>
    <div class="w-full font-ptserif">
        <div v-if="data">
            <div class="flex flex-col justify-center items-center space-y-1 sm:flex-row md:justify-around w-full">
                <div class="w-full lg:w-1/2 flex items-center justify-center">
                    <img :src="data.img" :alt="data.name" class="w-72 h-72 mix">
                </div>
                <div class="w-full md:w-[80%] md:mx-32 pr-4">
                    <div class="text-center sm:text-left text-lg md:text-4xl">{{ data.name }}</div>
                    <div class="text-center sm:text-left text-lg text-orange-500">Rp {{ formatCurrency(data.price) }}
                    </div>
                    <div class="text-justify font-montserrat px-4 sm:px-0 py-2">
                        {{ data.description }}
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center space-y-4">
                <div class="bg-gray-200 flex items-center justify-center space-x-4  rounded-md">
                    <UButton icon="i-heroicons-minus" variant="ghost" @click="decreaseQuantity()" />
                    <div>{{ quantity }}</div>
                    <UButton icon="i-heroicons-plus" variant="ghost" @click="increaseQuantity()" />
                </div>

                <UButton label="Add to cart" @click="addToCart()" />
            </div>
        </div>
        <div v-else>
            <div class="flex flex-col justify-center items-center h-screen space-y-4">
                <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                <div class="text-lg animate-pulse">Loading ...</div>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.animate-pulse {
    animation: pulse 2s infinite;
}
</style>