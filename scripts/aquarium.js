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

// Creates path string for equilateral triangle pointing a certain way.
export function equiTriPath(size, direction) {
    // direction in degs
    const radius = size / Math.sqrt(3); // 'radius' relative to side length
    const p1 = rotateAbout([radius, 0], [radius/2, radius/2], direction);
    const p2 = rotateAbout([radius, 0], [radius/2, radius/2], direction-120);
    const p3 = rotateAbout([radius, 0], [radius/2, radius/2], direction-240);
    return `${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]}`;
}

export function jellyfish(container, options) {
    const size = options.size;
    const angle = options.angle;
    const radius = options.radius;
    const color = options.color;
    const posOffset = options.pos === undefined ? [0,0] : options.pos;
    const maxIters = options.iters === undefined ? 10 : options.iters;
    const startDelay = options.delay === undefined ? 0 : options.delay;

    const waitDelay = 3000;
    const glideTime = 10000;
    const pullTime = 1000;
    const glideInterval = 10 // 2500;
    const pullInterval = 500;
    const glide = 100;
    const pull = 25;

    const springMass = 25;
    const springStiffness = 45;
    const springDamping = 45;
    const springVelocity = 0;
    const springVariability = 0.75;
    
    var jelly = document.createElement('div');
    jelly.classList.add('jellyfish');
    jelly.style.position = 'absolute';
    jelly.style.left = `${posOffset[0]}px`;
    jelly.style.top = `${posOffset[1]}px`;
    container.appendChild(jelly);

    var front = polygon(newSVG(size, 'tri'), equiTriPath(size, angle+45), color);
    var backleft = polygon(newSVG(size, 'tri'), equiTriPath(size, angle+45), color);
    var backright = polygon(newSVG(size, 'tri'), equiTriPath(size, angle+45), color);
    var middle = polygon(newSVG(size, 'tri'), equiTriPath(size, angle+225), color);

    // middle should be the 'origin'
    const [fX, fY] = rotateAbout([radius, 0], [0, 0], angle);
    front.style.left = `${fX}px`;
    front.style.top = `${fY}px`;
    const [blX, blY] = rotateAbout([radius, 0], [0, 0], angle+240);
    backleft.style.left = `${blX}px`;
    backleft.style.top = `${blY}px`;
    const [brX, brY] = rotateAbout([radius, 0], [0, 0], angle+120);
    backright.style.left = `${brX}px`;
    backright.style.top = `${brY}px`;

    var svgs = [front, middle, backleft, backright ];
    for(const s of svgs) { 
        jelly.appendChild(s);
    }

    const [glideX, glideY] = rotateAbout([glide, 0], [0, 0], angle);
    const [pullX, pullY] = rotateAbout([pull, 0], [0, 0], angle);
    var offsetX = 0;
    var offsetY = 0;

    var iters = 0;
    var currDelay = startDelay

    function jellyMove() {
        if(iters >= maxIters) {
            return;
        }
        if(iters > 0) {
            currDelay = 0;
        }

        offsetX += glideX;
        offsetY += glideY;
        iters++;

        const mass = randomize(springMass, springMass*springVariability);
        const stiffness = randomize(springStiffness, springStiffness*springVariability);
        const damping = randomize(springDamping, springDamping*springVariability);
        const velocity = springVelocity;
    
        anime({
            targets: svgs,
            keyframes: [
                {
                    translateX: offsetX-glideX-pullX, 
                    translateY: offsetY-glideY-pullY, 
                    duration: randomize(pullTime, pullInterval), 
                    easing: 'easeOutSine',
                },
                {
                    translateX: offsetX, 
                    translateY: offsetY, 
                    duration: randomize(glideTime,  glideInterval),
                    easing: `spring(${mass}, ${stiffness}, ${damping}, ${velocity})`
                }
            ],
            complete: jellyMove,
            delay: anime.stagger(50, {start: currDelay + Math.random()*waitDelay}),
        });
    }

    jellyMove();
}
