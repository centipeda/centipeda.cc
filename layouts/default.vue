<template>
    <div class="bg">
        <div class="content-outer flex justify-center">
            <div class="content sm:w-10/12 md:w-2/3 lg:w-7/12 xl:w-5/12 min-h-screen px-2 md:px-10 my-10">
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
        <div class="aquarium-upper"></div>
        <div class="aquarium-container" ref="container"></div>

        <p class="footer mb-2 text-xs">;)</p>
    </div>
</template>

<script>
import { jellyfish, eel, pufferfish} from '@/assets/aquarium.js';
import * as rand from '@/assets/randomness.js';

const xSpawnRange = 500;
const ySpawnRange = 500;

function elementIsVisible (el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

function spawnPoint(container) {
    return rand.pointFrom(xSpawnRange, ySpawnRange, container.offsetWidth/2, container.offsetHeight/2);
}

function spawnJellyfish(container) {
    const size = rand.f(20, 30);
    const radius = size*0.6;
    return jellyfish(container, {
        size: size,
        angle: rand.angle(),
        radius: radius,
        pos: spawnPoint(container),
        color: rand.rgb()
    });
}

function spawnEel(container) {
    return eel(container, {
        pos: spawnPoint(container),
        amplitude: 25,
        frequency: 18,
        speed: 10,
        distance: 2000,
        angle: rand.angle(),
        stretchFactor: 0.008,
        partDistance: 2,
        length: rand.n(7, 30),
        size: 15,
        darkColor: rand.hsl(20, 5),
        lightColor: rand.hsl(80, 80),
        pulses: rand.n(2, 7),
        pulseTime: rand.f(600, 1000),
        pulseDelay: 10
    });
}

function spawnPufferfish(container) {
    return pufferfish(container, {
        pos: spawnPoint(container),
        size: rand.f(7, 15),
        units: rand.n(3, 7),
        rotation: rand.f(180, 480),
        expansion: rand.f(5, 10),
        duration: rand.f(10000, 40000),
        revolutionTime: rand.f(5000, 30000),
        revolution: 360*rand.flip(),
        stagger: 500,
        colors: [
            'rgba(0, 0, 0, 0)',
            rand.rgb(),
            rand.rgb(),
            rand.rgb(),
            'rgba(0, 0, 0, 0)',
        ]
    });
}

function monitor(container) {
    const maxCreatures = 20;
    const interval = 5000;
    const spawnChance = .50;
    let creatures = [];

    setInterval(function() {
        if(creatures.length > maxCreatures) {
            creatures[0].remove();
            creatures.shift();
        }

        // spawn new
        if(Math.random() < spawnChance) {
            let t = Math.random()*3;
            let e;
            if(t < 1) {
                e = spawnJellyfish(container);
            } else if(t > 1 && t < 2) {
                e = spawnEel(container);
            } else if(t > 2 && t < 3) {
                e = spawnPufferfish(container);
            }
            creatures.push(e);
        }
    }, interval);
}

export default {
    mounted() {
        if(process.browser) {
            monitor(this.$refs.container);
        }
    },
}

</script>

<style>

    :root {
        --bg-main-color: rgba(2, 0, 36, 1);
        /* upper water colors */
        --sky-color: rgba(150, 212, 253, 1);
        --surface-color: black;
        --shallow-color: #053b99;
        --deep-color: rgba(48, 48, 130, 1);
        --sky-portion: 75%;
        --deep-portion: 30%;
        --border-portion: calc(var(--sky-portion) - 0.25%);
    }

    html,body { 
        font-family: "Source Sans Pro";
        overflow: auto;
    }

    .bg {
        background: var(--bg-main-color);
        overflow: hidden;
    }

    .aquarium-upper {
        z-index: 101;
        height: 50vh;
        background: linear-gradient(0deg, 
            var(--bg-main-color) 0%, 
            var(--deep-color) var(--deep-portion),
            var(--shallow-color) var(--border-portion), 
            var(--surface-color) var(--border-portion), 
            var(--surface-color) var(--sky-portion), 
            var(--sky-color) var(--sky-portion), 
            var(--sky-color) 100%);
    }

    .aquarium-container {
        height: 100vh;
        z-index: 50;
        display: flex;
        position: relative;
        overflow: hidden;
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
        z-index: 100;
    }

    .content-outer {
        width: 100%;
        position: absolute;
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

    .footer {
        text-align: center;
        bottom: 0;
        color: lightblue;
    }

</style>
