
export function n(min, max) {
    return Math.floor(min+Math.random()*(max-min));
}

export function f(min, max) {
    return Math.floor(min+Math.random()*(max-min));
}

export function point(xrange, yrange) {
    const x = -xrange/2 + Math.random()*xrange;
    const y = -yrange/2 + Math.random()*yrange;
    return [x,y];
}

export function pointFrom(xrange, yrange, x, y)  {
    const [xoff, yoff] = point(xrange, yrange);
    return [x+xoff, y+yoff];
}

export function hsl(s, l) {
    return `hsl(${Math.floor(Math.random()*360)}, ${s}%, ${l}%)`;
}

export function rgb() {
    const r = Math.random()*255;
    const g = Math.random()*255;
    const b = Math.random()*255;
    return `rgba(${r}, ${g}, ${b}, 1)`;
}

export function angle(min, max) {
    min = min === undefined ? 0 : min;
    max = max === undefined ? 360 : max;
    return f(min, max);
}

export function flip() {
    return Math.random() < 0.5 ? -1 : 1;
}
