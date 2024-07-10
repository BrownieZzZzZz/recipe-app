<template>
    <a 
        :href="href" 
        target="_blank"
        class="px-3 py-2 rounded border-2 border-orange-400 bg-orange-400 hover:bg-orange-500 hover:border-orange-500 text-white transition-colors">
        <slot></slot>
    </a>

</template>


<script setup>

const props = defineProps({
    href: String
})

</script>