<template>
    <div class="bg w-100 h-100">
        <div class="content-outer flex justify-center">
            <div class="content sm:w-10/12 md:w-2/3 lg:w-7/12 xl:w-5/12 min-h-screen px-2 md:px-10 my-12 pb-5" ref="blocker">
                <Nuxt />
            </div>
            <div class="aquarium-upper"></div>
            <div class="aquarium-container">
                <div ref="container"></div>
                <div class="footer absolute text-xs left-0 right-0 bottom-0 mx-auto w-fit mb-2">
                    Nothing to see here.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { jellyfish, eel, pufferfish} from '@/assets/aquarium.js';
import * as rand from '@/assets/randomness.js';

const xSpawnRange = 1500;
const ySpawnRange = 500;

// https://stackoverflow.com/a/53942619
function isVisible(domElement) {
  return new Promise(resolve => {
    const o = new IntersectionObserver(([entry]) => {
      resolve(entry.intersectionRatio === 1);
      o.disconnect();
    });
    o.observe(domElement);
  });
}

function spawnPoint(container) {
    return rand.pointFrom(xSpawnRange, ySpawnRange, container.offsetWidth/2, container.offsetHeight/2);
}

function spawnPointVisible(container, blankAreaWidth) {
    const [xoff,yoff] = rand.point(xSpawnRange-blankAreaWidth/2, ySpawnRange);
    const pos = [xoff+blankAreaWidth+container.offsetWidth/2, yoff+container.offsetHeight/2];
    return pos;
}

function spawnJellyfish(container, blocker) {
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

function spawnEel(container, blocker) {
    const pos = spawnPoint(container);
    const angle = rand.angle();
    return eel(container, {
        pos: pos,
        amplitude: 25,
        frequency: 18,
        speed: 10,
        distance: 2000,
        angle: angle,
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

function spawnPufferfish(container, blocker) {
    return pufferfish(container, {
        pos: spawnPointVisible(container, blocker.offsetWidth),
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

function monitor(container, blocker) {
    const spawners = [spawnJellyfish, spawnEel, spawnPufferfish];
    const minCreatures = 5;
    const maxCreatures = 15;
    const interval = 3000;
    const spawnChance = .75;
    let creatures = [];

    for(let i = 0; i < minCreatures; i++) {
        spawnCheck();
    }

    async function spawnCheck() {
        console.log(creatures);
        if(creatures.length > maxCreatures) {
            console.log('truncated');
            let last = creatures[0];
            container.removeChild(last);
            last.remove();
            creatures.shift();
        }

        // spawn new
        if(Math.random() < spawnChance) {
            const choice = Math.floor(Math.random()*spawners.length);
            const entity = spawners[choice](container, blocker);
            creatures.push(entity);
        }
    }

    setInterval(spawnCheck, interval);
}

export default {
    mounted() {
        if(process.browser) {
            monitor(this.$refs.container, this.$refs.blocker);
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
        --content-bg-color: hsl(209, 49%, 75%);
        --content-link-color: hsl(239, 69%, 40%);
        --content-link-hl-color: hsl(239, 79%, 20%);
        --content-txt-color: black;

        --bg-main-color: rgba(2, 0, 36, 1);
        /* upper water colors */
        --sky-color: rgba(150, 212, 253, 1);
        --surface-color: black;
        --shallow-color: #053b99;
        --deep-color: rgba(48, 48, 130, 1);
        --sky-portion: 100%;
        --deep-portion: 50%;
        --border-portion: calc(var(--sky-portion) - 0.25%);
    }

    a {
        color: var(--content-link-color);
        text-decoration-line: underline;
        text-underline-offset: 2px;
    }

    a:hover {
        color: var(--content-link-hl-color);
    }

    html,body { 
        font-family: "Source Sans Pro";
        font-size: 12pt;
        min-height: 100%;
        overflow: auto;
    }

    .serif-font {
        font-family: 'Source Serif Pro';
    }

    .mono-font {
        font-family: 'Source Code Pro';
    }

    .bg {
        background: var(--bg-main-color);
        height: max-content;
        overflow: hidden;
    }

    .aquarium-upper {
        position: absolute;
        width: 100%;
        z-index: 99;
        height: 25vh;
        background: linear-gradient(0deg, 
            var(--bg-main-color) 0%, 
            var(--deep-color) var(--deep-portion),
            var(--shallow-color) var(--sky-portion)
        );
        /*
        background: linear-gradient(0deg, 
            var(--bg-main-color) 0%, 
            var(--deep-color) var(--deep-portion),
            var(--shallow-color) var(--border-portion), 
            var(--surface-color) var(--border-portion), 
            var(--surface-color) var(--sky-portion), 
            var(--sky-color) var(--sky-portion), 
            var(--sky-color) 100%);
        */
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

    .content {
        background-color: var(--content-bg-color);
        color: var(--content-txt-color);
        /* background-color: hsl(210deg, 68%, 80%); */
        border: 3px solid black;
        border-radius: 7px;
        z-index: 200;
    }

    .content-outer {
        width: 100%;
        position: absolute;
    }

    .footer {
        color: var(--content-bg-color);
        z-index: 200;
    }

</style>
