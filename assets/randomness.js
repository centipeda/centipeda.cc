
export function randn(min, max) {
    return Math.floor(min+Math.random()*(max-min));
}

export function randf(min, max) {
    return Math.floor(min+Math.random()*(max-min));
}

export function randPoint(xrange, yrange) {
    const x = -xrange/2 + Math.random()*xrange;
    const y = -yrange/2 + Math.random()*yrange;
    return [x,y];
}

export function randhsl(s, l) {
    return `hsl(${Math.floor(Math.random()*360)}, ${s}%, ${l}%)`;
}

export function randrgb() {
    const r = Math.random()*255;
    const g = Math.random()*255;
    const b = Math.random()*255;
    return `rgba(${r}, ${g}, ${b}, 1)`;
}

export function randAngle() {
    return randf(0, 360);
}

export function randFlip() {
    return Math.random() < 0.5 ? -1 : 1;
}
