<template>
<div class="navbar mb-8 mt-5">
    <div class="flex flex-row">
        <a class="basis-0 grow text-center" href="/"> about </a>
        <a class="basis-0 grow text-center" href="/projects"> projects </a>
        <a class="basis-0 grow text-center" href="https://github.com/centipeda">github</a>
        <a class="basis-0 grow text-center" href="#"> résumé </a>
    </div>
    <div class="flex flex-row">
        <a class="basis-0 grow text-center" href="/aquarium">aquarium</a>
        <a class="basis-0 grow text-center" href="/photos">photos</a>
        <a class="basis-0 grow text-center" href="https://spells.centipeda.cc">spellbook</a>
        <a class="basis-0 grow text-center" href="#">other</a>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    border-color: var(--bg-main-color);
    border-width: 1px;
    border-style: solid;
}

a {
    color: var(--bg-main-color);
    background-color: var(--content-bg-color);
    text-decoration-line: none;
}

a:hover {
    color: var(--content-bg-color);
    background-color: var(--bg-main-color);
}
</style>
