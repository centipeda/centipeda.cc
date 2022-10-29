<template>
<h1 class="mt-10 title mono-font text-3xl font-medium">
    <a class="hover:underline" href="/">centipeda.cc</a> 
    / 
    <a class="hover:underline" :href="url">{{title}}</a>
    $<span class="blink">_</span>
</h1>
</template>

<script>
export default {
    props: ['url', 'title']
}
</script>

<style scoped>
a {
    text-decoration-line: none;
}

a,a:hover {
    color: var(--content-txt-color);
}

.blink {
    animation: blink-animation 1.5s steps(2, start) infinite;
}

@keyframes blink-animation {
    to {
        visibility: hidden;
    }
}

</style>
