<template>
<div>
    <p class="txt">hello</p> 

    <div ref="holder" class="holder"></div>

</div>
</template>

<script>

import { jellyfish, eel } from '@/assets/aquarium.js';

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
    const xRange = 1500;
    const yRange = 500;
    const size = 25+Math.random()*50;
    const radius = size*0.6;
    const posX = -xRange/2 + Math.random()*xRange;
    const posY = -yRange/2 + Math.random()*yRange;
    jellyfish(container, {
        size: size,
        angle: 360*Math.random(),
        radius: radius,
        pos: [posX, posY],
        color: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    });
}

function spawnEel(container) {
    const xRange = 1500;
    const yRange = 500;
    const angle = 360*Math.random();
    const parts = 7+Math.floor(Math.random()*20);
    const posX = -xRange/2 + Math.random()*xRange;
    const posY = -yRange/2 + Math.random()*yRange;
    const dark = `hsl(${Math.floor(Math.random()*360)}, 20%, 5%)`;
    const light = `hsl(${Math.floor(Math.random()*360)}, 80%, 80%)`;
    const pulseTime = 600 + Math.random()*400;
    const pulses = Math.floor(2 + Math.random()*5);
    console.log(dark, light);
    eel(container, {
        pos: [posX, posY],
        amplitude: 25,
        frequency: 18,
        speed: 10,
        distance: 2000,
        angle: angle,
        stretchFactor: 0.008,
        partDistance: 3,
        length: parts,
        size: 25,
        darkColor: dark,
        lightColor: light,
        pulses: pulses,
        pulseTime: pulseTime,
        pulseDelay: 10
    });
}

function animate(container) {
    const jellies = 15;
    const eels = 4;
    for(var i = 0; i < jellies; i++){
        spawnJellyfish(container);
    }
    for(var e = 0; e < eels; e++) {
        spawnEel(container);
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
