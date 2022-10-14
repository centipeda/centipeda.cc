<template>
<div>
    <p class="txt">hello</p> 

    <div ref="holder" class="holder"></div>

</div>
</template>

<script>

import { jellyfish } from '@/scripts/aquarium.js';

function animate(container) {
    const xRange = 1500;
    const yRange = 500;
    for(var i = 0; i < 30; i++){
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
}

.holder {
    position: relative;
    top: 200px;
    left: 50%;
}
</style>
