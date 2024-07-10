<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
        <router-link
            :to="{name: 'home'}"
            exactActiveClass="text-orange-400"
            class="inline-flex items-center h-full px-5 transition-colors hover:bg-orange-400 hover:text-white hover:scale-110 hover:text-xl transition-all"
        >
            Home
        </router-link>
        <div class="flex item-center gap-1">
            <router-link
                :to="{name: 'byName'}"
                exactActiveClass="text-orange-400"
                class="px-2 h-full inline-flex items-center transition-colors hover:text-white   hover:bg-orange-400 hover:scale-110 hover:text-xl transition-all"
            >
                Search Meals
            </router-link>
            <router-link
                :to="{name: 'byLetter'}"
                exactActiveClass="text-orange-400"
                class="px-2 h-full inline-flex items-center transition-colors hover:text-white   hover:bg-orange-400 hover:scale-110 hover:text-xl transition-all"
            >
                Meals By Letter
            </router-link>
            <router-link
                :to="{name: 'byIngredient'}"
                exactActiveClass="text-orange-400"
                class="px-2 h-full inline-flex items-center transition-colors hover:text-white  hover:bg-orange-400 hover:scale-110 hover:text-xl transition-all"
            >
                Meals By Ingredient
            </router-link>
        </div>
    </header>
</template>
