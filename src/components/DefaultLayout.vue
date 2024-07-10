<template>
    <Navbar/>
    <main>
        <div class="max-w-[1000px] mx-auto">
            <router-view/>
        </div>
    </main>
</template>

<script setup>
import Navbar from './Navbar.vue'


</script>