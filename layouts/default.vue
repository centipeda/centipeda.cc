<template>
    <div class="flex justify-center">
        <div class="content md:w-2/3 lg:w-5/12 min-h-screen px-10 my-10">
            <h1 class="mt-10 title mono-font text-3xl font-medium">
                <a href="/">centipeda.cc</a> / <a href="/">about</a>
            </h1>
            <div class="navbar mb-8 mt-5">
                <div class="flex flex-row">
                    <a class="basis-0 grow text-center nav-item" href="/"> about </a>
                    <a class="basis-0 grow text-center nav-item" href="/"> projects </a>
                    <a class="basis-0 grow text-center nav-item" href="https://github.com/centipeda">github</a>
                    <a class="basis-0 grow text-center nav-item" href="/"> resume </a>
                </div>
                <div class="flex flex-row">
                    <a class="basis-0 grow text-center nav-item" href="/aquarium">aquarium</a>
                    <a class="basis-0 grow text-center nav-item" href="https://cnti.cc">pastebin</a>
                    <a class="basis-0 grow text-center nav-item" href="https://spells.centipeda.cc">spellbook</a>
                    <a class="basis-0 grow text-center nav-item" href="/">other</a>
                </div>
            </div>
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

    body {
        font-family: "Source Sans Pro";
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, 
            rgba(48,48,130,1) 25%, 
            #053b99 67.5%, 
            white 67.5%, 
            white 68%, 
            rgba(150,212,253,1) 68%, 
            rgba(150,212,253,1) 100%);
    }

    html,body {
        height: 100%;
    }

    html {
        background: rgba(2, 0, 36, 1);
    }

    .serif-font {
        font-family: 'Source Serif Pro';
    }

    .mono-font {
        font-family: 'Source Code Pro';
    }

    .content {
        background-color: lightgray;
        /* background-color: hsl(210deg, 68%, 80%); */
        border: 3px solid black;
    }

    .navbar {
        border: 1px solid black; 
    }

    .nav-item {
        transition: .1s;
    }

    .nav-item:hover {
        color: white;
        background-color: black;
    }
</style>
