<template>
<h1 class="mt-10 title mono-font text-3xl font-medium">
    <a class="hover:underline" href="/">centipeda.cc</a> 
    / 
    <a class="hover:underline" :href="url">{{title}}</a>
</h1>
</template>

<script>
export default {
    props: ['url', 'title']
}
</script>

<style scoped>
a,a:hover {
    color: var(--content-txt-color);
}
</style>
