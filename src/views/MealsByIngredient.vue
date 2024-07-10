<template>
    <div class="p-8 pb-0">
        <input 
            type="text"
            v-model="ingredient" 
            class="rounded border-2 border-gray-200 w-full h-10 text-center focus:border-orange-300  focus:border-3 focus:outline-none focus:ring-0 focus:placeholder-orange-300" 
            placeholder="Search for Meals by Ingredient"
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
    <div v-else-if="didntSearch" class="text-8xl pt-10 text-center text-orange-300 ">
        NO SEARCHES MADE YET !

    </div>
    <div v-else class="text-8xl pt-10 text-center text-orange-300">
        NO MEALS FOUND !
    </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
const route = useRoute();

const ingredient = ref('');
const meals = computed(() => store.state.mealsByIngredient)
let didntSearch = true;


function searchMeals() {
    didntSearch = false;
    store.dispatch('searchMealsByIngredient', ingredient.value)
}

onMounted(() =>{
    ingredient.value = route.params.ingredient
    if(ingredient.value){
        searchMeals();
    }
});

</script>