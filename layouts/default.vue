<template>
    <div class="bg">
        <div class="content-outer flex justify-center">
            <div class="content sm:w-10/12 md:w-2/3 lg:w-7/12 xl:w-5/12 min-h-screen px-2 md:px-10 my-10">
                <Nuxt />
            </div>
            <div class="aquarium-upper"></div>
            <div class="aquarium-container" ref="container"></div>
            <div class="footer text-xs">;)</div>
        </div>
    </div>
</template>

<script>
import { jellyfish, eel, pufferfish} from '@/assets/aquarium.js';
import * as rand from '@/assets/randomness.js';

const xSpawnRange = 500;
const ySpawnRange = 500;

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
    const initialSpawns = 5;
    const maxCreatures = 20;
    const interval = 6000;
    const spawnChance = .50;
    let creatures = [];

    for(let i = 0; i < initialSpawns; i++) {
        spawnCheck();
    }

    function spawnCheck() {
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
    }

    setInterval(spawnCheck, interval);
}

export default {
    mounted() {
        if(process.browser) {
            monitor(this.$refs.container);
        }
    },
    data() {
        return {
            page: 'default'
        }
    }
}

</script>

<style>

    :root {
        --content-bg-color: hsl(209, 29%, 75%);
        --content-link-color: hsl(209, 79%, 40%);
        --content-txt-color: black;

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

    a {
        color: var(--content-link-color);
    }

    a:hover {
        text-decoration-line: underline;
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
        position: absolute;
        width: 100%;
        z-index: 99;
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
        width: 100%;
        min-height: 100vh;
        height: 120%;
        z-index: 50;
        display: flex;
        position: absolute;
        overflow: hidden;
        background: var(--bg-main-color);
    }

    .serif-font {
        font-family: 'Source Serif Pro';
    }

    .mono-font {
        font-family: 'Source Code Pro';
    }

    .content {
        background-color: var(--content-bg-color);
        color: var(--content-txt-color);
        /* background-color: hsl(210deg, 68%, 80%); */
        border: 3px solid black;
        z-index: 200;
    }

    .content-outer {
        width: 100%;
        position: absolute;
    }

    .navbar {
        border: 1px solid black; 
    }

    .nav-item {
        transition: .05s;
    }

    .nav-item:hover {
        color: var(--content-bg-color);
        background-color: var(--content-txt-color);
    }

    .footer {
        position: absolute;
        width: 10px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        bottom: 0;
        height: 0;
        color: var(--content-bg-color);
        z-index: 200;
    }

</style>
