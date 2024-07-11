<template>
    <div class="flex flex-wrap gap-2 mt-2 justify-center">
        <router-link
            class="lg:text-2xl  hover:text-orange-400"
            exactActiveClass="text-3xl text-orange-400 animate-bounce"
            :to="{name: 'byLetter', params: {letter}}"
            v-for="letter of letters"
            :key="letter"
        >{{ letter }}
        </router-link>
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
    <div v-else class="text-8xl pt-10 text-center text-orange-300 ">
        NO MEALS FOUND !
    </div>
</template>

<script setup>
import { onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter)
let didntSearch = true;

watch(route, () =>{
    didntSearch = false;
    store.dispatch('searchMealsByLetter', route.params.letter)
})


onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})



</script>