/* Aquarium animation functions. */

import anime from 'animejs';

function randomize(value, interval) {
    return (value - interval) + (Math.random() * interval);
}

// rotate point about center
function rotateAbout(point, center, angle) {
    const angleRad = angle  * Math.PI / 180; // Convert to radians
    const x = Math.cos(angleRad) * (point[0] - center[0]) - Math.sin(angleRad) * (point[1]-center[1]) + center[0];
    const y = Math.sin(angleRad) * (point[0] - center[0]) + Math.cos(angleRad) * (point[1] - center[1]) + center[1];
    return [x, y];
}

// create and return new SVG element of a given size
export function newSVG(size, extraClass) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", size.toString());
    svg.setAttribute("width", size.toString());
    svg.setAttribute("viewBox", `-10 -10 ${size} ${size}`);
    svg.style.position = 'absolute';
    svg.classList.add(extraClass);
    return svg;
}

// add polygon element with path/color to given SVG, return SVG
export function polygon(svg, points, color) {
    var poly = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    poly.setAttribute('fill', color);
    poly.setAttribute('points', points);
    poly.setAttribute('stroke', 'black');
    poly.setAttribute('stroke-width', '1');
    svg.appendChild(poly);
    return svg;
}

// create and return a square div
export function square(size) {
    var sq = document.createElement('div');
    sq.style.width = `${size}px`;
    sq.style.height = `${size}px`;
    sq.style.border = '1px solid black';
    sq.style.position = 'absolute';
    return sq;
}

// Creates path string for equilateral triangle pointing a certain way.
export function equiTriPath(size, direction) {
    // direction in degs
    const radius = size / Math.sqrt(3); // 'radius' relative to side length
    const p1 = rotateAbout([radius, 0], [radius/2, radius/2], direction);
    const p2 = rotateAbout([radius, 0], [radius/2, radius/2], direction-120);
    const p3 = rotateAbout([radius, 0], [radius/2, radius/2], direction-240);
    return `${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]}`;
}

function turnLeft(angle, svgs) {
    angle = (angle + 120) % 360;
    svgs = [svgs[0], svgs[3], svgs[1], svgs[2]];
    return [angle, svgs];
}

function turnRight(angle, svgs) {
    angle = (angle + 240) % 360;
    svgs = [svgs[0], svgs[2], svgs[3], svgs[1]];
    return [angle, svgs];
}

export function jellyfish(container, options) {

    /* set options */
    const size = options.size;
    var angle = options.angle;
    const radius = options.radius;
    const color = options.color;
    const posOffset = options.pos === undefined ? [0,0] : options.pos;
    const maxIters = options.iters === undefined ? 10 : options.iters;

    const push = 45;
    const glide = 250;
    const pull = 25;

    const pushTime = 800;
    const glideTime = 5000;
    const glideInterval = 1200;
    const pullTime = 1500;
    const pullInterval = 500;

    const turnProbability = 0.25;

    /* create objs */

    // jellyfish holder
    var jelly = document.createElement('div');
    jelly.classList.add('jellyfish');
    jelly.style.position = 'absolute';
    jelly.style.left = `${posOffset[0]}px`;
    jelly.style.top = `${posOffset[1]}px`;
    container.appendChild(jelly);

    // create svgs
    var front = polygon(newSVG(size, 'tri'), equiTriPath(size, angle+45), color);
    var backleft = polygon(newSVG(size, 'tri'), equiTriPath(size, angle+45), color);
    var backright = polygon(newSVG(size, 'tri'), equiTriPath(size, angle+45), color);
    var middle = polygon(newSVG(size, 'tri'), equiTriPath(size, angle+225), color);

    // adjust svgs
    const [fX, fY] = rotateAbout([radius, 0], [0, 0], angle);
    front.style.left = `${fX}px`;
    front.style.top = `${fY}px`;
    const [blX, blY] = rotateAbout([radius, 0], [0, 0], angle+240);
    backleft.style.left = `${blX}px`;
    backleft.style.top = `${blY}px`;
    const [brX, brY] = rotateAbout([radius, 0], [0, 0], angle+120);
    backright.style.left = `${brX}px`;
    backright.style.top = `${brY}px`;
    var svgs = [middle, front, backleft, backright ];
    for(const s of svgs) { 
        jelly.appendChild(s);
    }

    // counters
    var offsetX = 0;
    var offsetY = 0;
    var iters = 0;

    function jellyMove() {

        if(iters >= maxIters) {
            return;
        }
        
        // see if we turn
        if(Math.random() < turnProbability) {
            if(Math.random() < 0.5) {
                [angle, svgs] = turnLeft(angle, svgs);
            } else {
                [angle, svgs] = turnRight(angle, svgs);
            }
        }

        // vectorize movements
        const [pushX, pushY] = rotateAbout([push, 0], [0, 0], angle);
        const [glideX, glideY] = rotateAbout([glide, 0], [0, 0], angle);
        const [pullX, pullY] = rotateAbout([pull, 0], [0, 0], angle);

        // randomize timing
        var newPullTime = randomize(pullTime, pullInterval);
        var newGlideTime = randomize(glideTime, glideInterval);

        // middle, front, backleft, backright
        anime({
            targets: svgs,
            keyframes: [
                { // pull
                    translateX: function(elem, index, total) {
                        var diff = pullX;
                        if(index === 1) {
                            diff *= 0.5;
                        }
                        return offsetX - diff;
                    },
                    translateY: function(elem, index, total) {
                        var diff = pullY;
                        if(index === 1) {
                            diff *= 0.5;
                        }
                        return offsetY - diff;
                    }, 
                    duration: newPullTime,
                    rotate: function(elem, index, total) {
                        if(index === 2) {
                            return 15;
                        } else if(index === 3) {
                            return -15;
                        }
                        return '0deg';
                    },
                    scale: function(elem, index, total) {
                        if(index === 0) {
                            return 0.75;
                        }
                    },
                    easing: 'easeInOutSine',
                },
                { // push
                    translateX: function(elem, index, total) {
                        var diff = pushX;
                        if(index === 1) {
                            diff *= 0.9;
                        }
                        return offsetX + diff;
                    }, 
                    translateY: function(elem, index, total) {
                        var diff = pushY;
                        if(index === 1) {
                            diff *= 0.9;
                        }
                        return offsetY + diff;
                    }, 
                    rotate: function(elem, index, total) {
                        if(index === 2) {
                            return -15;
                        } else if(index === 3) {
                            return 15;
                        }
                        return '0deg';
                    },
                    scale: function(elem, index, total) {
                        if(index === 0) {
                            return 1;
                        }
                    },
                    duration: pushTime,
                    easing: 'easeInSine'
                },
                { // glide
                    translateX: offsetX+pushX+glideX, 
                    translateY: offsetY+pushY+glideY,
                    duration: newGlideTime,
                    easing: 'easeOutCubic'
                }
            ],
            complete: jellyMove,
        });

        offsetX += glideX;
        offsetY += glideY;
        iters++;
    }

    jellyMove();
}

export function eel(container, options) {
    const amplitude = 25;
    const frequency = 18;

    const speed = 10;
    const distance = 2000;
    const duration = distance/(speed/100);

    const boxOffset = 3;
    const boxDelay = 0.01;
    const numparts = 12;
    const size = 25;

    const color = 'hsl(0, 80%, 0%)';

    var eelbox = document.createElement('div');
    eelbox.classList.add('eel');
    eelbox.style.position = 'absolute';
    container.appendChild(eelbox);
    var eelparts = [];
    for(var i = 0; i < numparts; i++) {
        var e = square(size);
        e.style.left = `${i*boxOffset*-1}px`;
        e.style.background = color;
        eelparts.push(e);
        eelbox.append(e);
    }

    // generate sine wave keyframes
    var keyframes = [];
    const frames = 20;
    for(var f = 0; f < frames; f++) {
        const normalized = f / frames;
        const rads = normalized * (2 * Math.PI);
        var frame = {
            value: amplitude*Math.sin(rads),
            easing: 'linear',
        };
        keyframes.push(frame);
    }

    function eelDelay(elem, index, total) {
        return function(t) {
            return Math.max(0, t - index*boxDelay);
        }
    }

    const angle = 45;
    const [transX, transY] = rotateAbout([distance, amplitude*2], [0,0], 45);

    anime({
        targets: eelparts,
        translateX: {
            value: distance, 
            easing: eelDelay
        },
        translateY: {
            value: amplitude*2,
            easing: function(elem, index, total) {
                return function(t) {
                    t = Math.max(0, t - index*boxDelay);
                    t = t * Math.PI / 2;
                    return Math.sin(t * frequency);
                }
            }
        },
        rotate: {
            value: frequency*5,
            easing: function(elem, index, total) {
                return function(t) {
                    t = Math.max(0, t - index*boxDelay);
                    t = t * Math.PI / 2;
                    return ((amplitude*Math.cos(t * frequency))/frequency);
                }
            },
        },
        background: [
            {value: 'hsl(180, 80%, 10%)', duration: 700, delay: anime.stagger(30), easing: 'easeInOutSine'},
            {value: 'hsl(240, 80%, 10%)', duration: 700, delay: anime.stagger(30), easing: 'easeInOutSine'},
            {value: 'hsl(180, 80%, 40%)', duration: 700, delay: anime.stagger(30), easing: 'easeInOutSine'},
            {value: 'hsl(240, 80%, 10%)', duration: 700, delay: anime.stagger(30), easing: 'easeInOutSine'},
            {value: 'hsl(180, 80%, 10%)', duration: 700, delay: anime.stagger(30), easing: 'easeInOutSine'},
            {value: 'hsl(240, 80%, 10%)', duration: 700, delay: anime.stagger(30), easing: 'easeInOutSine'},
            {value: 'hsl(180, 80%, 40%)', duration: 700, delay: anime.stagger(30), easing: 'easeInOutSine'},
            {value: 'hsl(240, 80%, 10%)', duration: 700, delay: anime.stagger(30), easing: 'easeInOutSine'},
        ],
        duration: duration,
    });
}
