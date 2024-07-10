<template>
    <div class="text-6xl text-orange-400 text-center m-4">
        Random Meals
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 p-8">
        <MealItem
            v-for="meal of meals"
            :key="meal.idMeal"
            :meal="meal"
        />
    </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
import axios from 'axios';
import MealItem from "../components/MealItem.vue";

const meals = ref([])

onMounted(async() => {
    for(let i = 0; i < 12; i++){
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(({data}) => meals.value.push(data.meals[0]));
    }
})









</script>

<style scoped>
</style>