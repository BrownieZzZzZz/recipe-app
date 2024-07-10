<template>
    <div class="flex flex-col items-center">
        <div class="text-6xl text-orange-400 text-center m-4">
            {{ meal.strMeal }}
        </div>
        <div class="max-w-[900px] bg-white drop-shadow-lg rounded-xl  transition-all transition duration-500 text-center">
            <img
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                class="max-w-[100%] rounded-t-xl  w-full object-cover"
            />
            <div class="grid grid-cols-1 sm:grid-cols-3 drop-shadow-lg rounded">
                <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
                <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
                <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
            </div>

            <div class="my-3 shadow-lg rounded">
                {{  meal.strInstructions }}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 drop-shadow-lg rounded">
                <div class="drop-shadow-lg rounded">
                    <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                    <ul>
                        <template v-for="(ingredient, index) of new Array(20)" :key="index">
                            <li
                                v-if="meal[`strIngredient${index +  1}`]"
                            >
                            {{ index + 1 }}. {{ meal[`strIngredient${index +  1}`] }}
                        </li> 
                        </template>
                    </ul>
                </div>
                <div class="drop-shadow-lg rounded">
                    <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                    <ul>
                        <template v-for="(ingredient, index) of new Array(20)" :key="index">
                            <li
                                v-if="meal[`strMeasure${index +  1}`]"
                            >
                            {{ index + 1 }}. {{ meal[`strMeasure${index +  1}`] }}
                        </li> 
                        </template>
                    </ul>
                </div>

                <div class="mb-4">
                    <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
                    <a
                        :href="href" 
                        target="_blank"
                        class="ml-3 px-3 py-2 rounded border-2 border-transparent text-gray-600 hover:bg-gray-600 hover:text-white  transition-colors">
                        View Original Source
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, inject, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import YoutubeButton from '../components/YoutubeButton.vue';

const meal = ref({})
const route = useRoute();
const baseUrl = inject('baseUrl');

onMounted(async () => {
    const result = await axios.get(baseUrl + `/lookup.php?i=${route.params.id}`)
    meal.value = result.data.meals[0] || {};
})

</script>