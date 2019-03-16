const canvas = <HTMLCanvasElement>document.createElement('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
const cw: number = 1000;
const ch: number = 1000;
const moveRate = 10;
canvas.height = ch;
canvas.width = cw;

draw.rate = 30;
play.rate = 30;

const dvd = new DVD(0, 0, 0, 0);

var state = 0;
var moveLeft = 0;

var dvdX = 0;
var dvdY = 0;
var mouseX = 0;
var mouseY = 0;

const keys: number[] = [];

const isInKeys = (...token: number[]) => {
    for (let i of token) {
        if (keys.indexOf(i) === -1) return false;
    }
    return true;
}

document.addEventListener('keydown', e => {
    if (!isInKeys(e.keyCode)) {
        keys.push(e.keyCode);
        OnkeysChange()
    }
});
document.addEventListener('keyup', e => {
    if (isInKeys(e.keyCode)) {
        keys.splice(keys.indexOf(e.keyCode), 1);
        OnkeysChange();
    }
})
document.addEventListener('mousemove', e => {
    mouseX = cw * e.clientX / parseFloat(<string>getComputedStyle(canvas).width);
    mouseY = ch * e.clientY / parseFloat(<string>getComputedStyle(canvas).height);
})
document.addEventListener('click', () => {
    if (state === 0) {
        state++;
        return;
    }
    if (state === 1) {
        dvd.fy = (dvd.y + dvd.height / 2) - mouseY > 0 ? -moveRate : moveRate;
        dvd.fx = (dvd.x + dvd.width / 2) - mouseX > 0 ? -moveRate : moveRate;
        state++;
        moveLeft = LCM(ch - dvd.height, cw - dvd.width) / moveRate;
        console.log(moveLeft);
        setInterval(() => {
            console.log('----------------------')
        }, 1000)
        return;
    }
})

function OnkeysChange() {

}

function draw() {
    ctx.clearRect(0, 0, cw, ch);
    dvd.draw(ctx);
    if (state === 1) {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(dvd.x + dvd.width / 2, dvd.y + dvd.height / 2);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
        ctx.closePath();
    }
}

function play() {
    const m = 5;
    if (state === 2) {
        dvd.move();
        moveLeft--;
        console.log(moveLeft)
    }
    if (state === 0) {
        if (isInKeys(37)) {
            dvd.x -= m;
        }
        if (isInKeys(38)) {
            dvd.y -= m;
        }
        if (isInKeys(39)) {
            dvd.x += m;
        }
        if (isInKeys(40)) {
            dvd.y += m;
        }
        if (dvd.x < 0) dvd.x = 0;
        if (dvd.x + dvd.width > 1000) dvd.x = 1000 - dvd.width;
        if (dvd.y < 0) dvd.y = 0;
        if (dvd.y + dvd.height > 1000) dvd.y = 1000 - dvd.height;
    }
}

setInterval(draw, 1000 / draw.rate || 30);
setInterval(play, 1000 / play.rate || 10);

document.body.appendChild(canvas)


const _$$c: HTMLCanvasElement = canvas;
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