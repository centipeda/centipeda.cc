<template>
<div>
    <p class="txt">hello</p> 

    <div ref="holder" class="holder"></div>

</div>
</template>

<script>

import { jellyfish, eel, pufferfish} from '@/assets/aquarium.js';
import { 
    randn, 
    randf, 
    randPoint, 
    randhsl, 
    randAngle, 
    randrgb,
    randFlip
} from '@/assets/randomness.js';

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

function elementIsVisible (el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

function spawnJellyfish(container) {
    const size = randf(25, 75);
    const radius = size*0.6;
    jellyfish(container, {
        size: size,
        angle: randAngle(),
        radius: radius,
        pos: randPoint(1500, 500),
        color: randrgb()
    });
}

function spawnEel(container) {
    eel(container, {
        pos: randPoint(1500, 500),
        amplitude: 25,
        frequency: 18,
        speed: 10,
        distance: 2000,
        angle: randAngle(),
        stretchFactor: 0.008,
        partDistance: 3,
        length: randn(7, 30),
        size: 25,
        darkColor: randhsl(20, 5),
        lightColor: randhsl(80, 80),
        pulses: randn(2, 7),
        pulseTime: randf(600, 1000),
        pulseDelay: 10
    });
}

function spawnPufferfish(container) {
    pufferfish(container, {
        pos: randPoint(1500, 500),
        size: randf(10, 30),
        units: randn(3, 7),
        rotation: 360,
        expansion: randf(5, 10),
        duration: randf(10000, 40000),
        revolutionTime: randf(5000, 30000),
        revolution: 360*randFlip(),
        stagger: 500,
        colors: [
            'rgba(0, 0, 0, 0)',
            randrgb(),
            randrgb(),
            randrgb(),
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
