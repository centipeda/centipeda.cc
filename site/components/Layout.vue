<template>
    <div class="flex justify-center">
        <div class="content md:w-2/3 lg:w-5/12 min-h-screen px-10 my-10">
            <h1 class="mt-10 title mono-font text-3xl font-medium">
                <a href="/">centipeda.cc</a> / <a href="/">about</a>
            </h1>
            <div class="navbar mb-8 mt-5">
                <div class="flex flex-row">
                    <a class="basis-0 grow text-center nav-item" href="/"> about </a>
                    <a class="basis-0 grow text-center nav-item" href="/projects"> projects </a>
                    <a class="basis-0 grow text-center nav-item" href="https://github.com/centipeda">github</a>
                    <a class="basis-0 grow text-center nav-item" href="/resume"> resume </a>
                </div>
                <div class="flex flex-row">
                    <a class="basis-0 grow text-center nav-item" href="/">creatures</a>
                    <a class="basis-0 grow text-center nav-item" href="/">other</a>
                    <a class="basis-0 grow text-center nav-item" href="/">other</a>
                    <a class="basis-0 grow text-center nav-item" href="/">other</a>
                </div>
            </div>
            <div class="px-5">
                <p>
                    Hi, I'm Joshua Cepeda. I'm a software engineer in New York
                    City. I like working with video games, embedded systems, and
                    Web projects like this site. I also enjoy sea creatures, the
                    piano, and long-form YouTube video essays.
                </p>
                <br>
                <p>If you'd like to get in touch, you can e-mail me at joshua.ka.cepeda@gmail.com.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500&family=Source+Sans+Pro:wght@300;400&display=swap');

body {
    font-family: "Source Sans Pro";
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(48,48,130,1) 25%, #053b99 68%, rgba(150,212,253,1) 68%, rgba(150,212,253,1) 100%);
}

html,body {
    height: 100%;
}

.serif-font {
    font-family: 'Source Serif Pro';
}

.mono-font {
    font-family: 'Source Code Pro';
}

.content {
    background-color: hsl(210deg, 68%, 80%);
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
