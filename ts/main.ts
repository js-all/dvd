const canvas = <HTMLCanvasElement>document.createElement('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
const cw :number = 1000;
const ch :number = 1000;
canvas.height = ch;
canvas.width = cw;

draw.rate = 30;
play.rate = 60;

function setup() {
    document.body.appendChild(canvas)
    setInterval(draw, 1000 / draw.rate || 30);
    setInterval(play, 1000 / play.rate || 60);

}

function draw() {
    ctx.clearRect(0, 0, cw, ch);
    
}

function play() {
    
}




const _$$c :HTMLCanvasElement = canvas;
const _$$cw = _$$c.width;
const _$$ch = _$$c.height;
function _$$adaptSize() {
    let rhl = _$$cw / _$$ch;
    let rlh = _$$ch / _$$cw;
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