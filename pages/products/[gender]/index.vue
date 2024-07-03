<script setup>
import { useRoute } from 'nuxt/app';
import axios from 'axios';
import { ref, onMounted, watch, computed } from 'vue';

const route = useRoute();

const items = ref([]);
const genderItem = ref([]);

const getItems = async () => {
    try {
        const response = await axios.get('/products.json');
        items.value = response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
};

const gender = computed(() => route.params.gender);

const updateGenderItems = () => {
    genderItem.value = items.value.filter(item =>
        item.gender.some(g => g.name === gender.value)
    );
};

onMounted(() => {
    getItems();
});
const formatCurrency = (value) => {
    return value.toLocaleString('id-ID'); 
};
watch([items, gender], updateGenderItems);
</script>

<template>
    <div v-if="genderItem.length">
        <div class="py-5 grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div v-for="item in genderItem" :key="item._id" class="font-ptserif space-y-2">
                    <img :src="item.img" alt="product-1" class="w-52 h-52">
                    <div class="text-center text-lg">{{item.name}}</div>
                    <div class="text-center text-lg text-orange-500">Rp {{ formatCurrency(item.price) }}</div>
                    <div class="flex justify-center items-center">
                        <UButton label="View Item" variant="solid" color="gray" :to="`/product/${item._id}/`" />
                    </div>
                </div>
            </div>
    </div>
    <div v-else>
        <div class="flex flex-col justify-center items-center h-screen space-y-4">
                <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                <div class="text-lg animate-pulse">Loading ...</div>
            </div>
    </div>
</template>
