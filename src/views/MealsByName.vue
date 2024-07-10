<template>
    <div class="p-8 pb-0">
        <input 
            type="text"
            v-model="keyword" 
            class="rounded border-2 border-gray-200 w-full h-10 text-center focus:border-orange-300  focus:border-3 focus:outline-none focus:ring-0 focus:placeholder-orange-300 foodInput" 
            placeholder="Search for Meals by Name"
            @change="searchMeals"
        />
    </div>
    <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 gap-10 p-8">
        <MealItem
            v-for="meal of meals"
            :key="meal.idMeal"
            :meal="meal"
        />
    </div>
    <div v-else-if="didntSearch" class="text-8xl pt-10 text-center text-orange-300">
        NO SEARCHES MADE YET !

    </div>
    <div v-else class="text-8xl pt-10 text-center text-orange-300">
        NO MEALS FOUND !
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';
const route = useRoute();


let didntSearch = true;
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);
function searchMeals(){
    didntSearch = false;
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value) {
        searchMeals();
    }
})

</script>