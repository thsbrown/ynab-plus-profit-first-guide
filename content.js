let div = document.createElement('div');
document.body.appendChild(div);
twemoji.parse(document.body);
let img = div.querySelector('img');

// note the div is preserved
img.parentNode === div; // true

img.src;        // https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/72x72/2764.png
img.alt;        // \u2764\uFE0F
img.className;  // emoji
img.draggable;  // false