import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', () => {
    const items = ref([]);

    async function getAll() {
        try {
            const res = await axios.get('http://localhost:3000/products.json');
            console.log(res);
            items.value = res.data;
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    return {
        items, getAll
      };
})