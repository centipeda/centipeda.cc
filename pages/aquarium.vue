<template>
<div>
    <p class="txt">hello</p> 

    <div ref="holder" class="holder"></div>

</div>
</template>

<script>

import { jellyfish, eel, pufferfish} from '@/assets/aquarium.js';
import * as rand from '@/assets/randomness.js';

const pufferColors = [
            '#ffffff',
            '#ffff00',
            '#ff00ff',
            '#00ffff',
            '#0000ff',
            '#00ff00',
            '#ff0000',
            '#000000',
];

function spawnJellyfish(container) {
    const size = rand.f(25, 75);
    const radius = size*0.6;
    jellyfish(container, {
        size: size,
        angle: rand.angle(),
        radius: radius,
        pos: rand.point(1500, 500),
        color: rand.rgb()
    });
}

function spawnEel(container) {
    eel(container, {
        pos: rand.point(1500, 500),
        amplitude: 25,
        frequency: 18,
        speed: 10,
        distance: 2000,
        angle: rand.angle(),
        stretchFactor: 0.008,
        partDistance: 3,
        length: rand.n(7, 30),
        size: 25,
        darkColor: rand.hsl(20, 5),
        lightColor: rand.hsl(80, 80),
        pulses: rand.n(2, 7),
        pulseTime: rand.f(600, 1000),
        pulseDelay: 10
    });
}

function spawnPufferfish(container) {
    pufferfish(container, {
        pos: rand.point(1500, 500),
        size: rand.f(10, 30),
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

function animate(container) {
    const jellies = 5;
    const eels = 5;
    const puffers = 5;

    for(var i = 0; i < jellies; i++){
        spawnJellyfish(container);
    }
    for(var e = 0; e < eels; e++) {
        spawnEel(container);
    }

    for(var p = 0; p < puffers; p++) {
        spawnPufferfish(container);
    }
}

export default {
    head: {
        title: 'aquarium demo',
    },
    layout: 'empty',
    mounted() {
        if(process.browser) {
            animate(this.$refs.holder);
        }
    },
}
</script>

<style>

html,body {
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    background: black;
}

.holder {
    position: relative;
    top: 200px;
    left: 25%;
}
</style>
