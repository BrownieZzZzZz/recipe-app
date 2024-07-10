<template>
    <div
        class="bg-white shadow rounded-xl hover:shadow-lg hover:scale-110 transition-all transition duration-500 "
    >
        <router-link
            :to="{name: 'mealDetails', params: {id: meal.idMeal}}"
        >
            <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl h-48 w-full object-cover"
            />
        </router-link>
        <div class="p-3">
            <h3 class=" font-bold"> {{ meal.strMeal }}</h3>
            <p v-if= "meal.strInstructions" class="mb-4">{{ meal.strInstructions.slice(0,200) + "..."}}</p>
            <div v-if="meal.strYoutube" class="flex item-center justify-between">
                <YoutubeButton
                    :href="meal.strYoutube"
                >
                    Youtube
                </YoutubeButton>
            </div>
        </div>
    </div>
</template>

<script setup>

import YoutubeButton from './YoutubeButton.vue';


const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})

 

</script>

