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

function animate(container) {
    const jellies = 5;
    for(var i = 0; i < jellies; i++){
        spawnJellyfish(container);
    }

    eel(container, {});
}

export default {
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
    left: 0%;
}
</style>
