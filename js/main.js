"use strict";
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var cw = 1000;
var ch = 1000;
canvas.height = ch;
canvas.width = cw;
draw.rate = 30;
play.rate = 60;
function setup() {
    document.body.appendChild(canvas);
    setInterval(draw, 1000 / draw.rate || 30);
    setInterval(play, 1000 / play.rate || 60);
}
function draw() {
    ctx.clearRect(0, 0, cw, ch);
}
function play() {
}
var _$$c = canvas;
var _$$cw = _$$c.width;
var _$$ch = _$$c.height;
function _$$adaptSize() {
    var rhl = _$$cw / _$$ch;
    var rlh = _$$ch / _$$cw;
    if (window.innerWidth > window.innerHeight * rhl) {
        _$$c.style.width = 'inherit';
        _$$c.style.height = '100%';
    }
    if (window.innerHeight > window.innerWidth * rlh) {
        _$$c.style.height = 'inherit';
        _$$c.style.width = '100%';
    }
}
_$$adaptSize();
window.addEventListener('resize', _$$adaptSize);
