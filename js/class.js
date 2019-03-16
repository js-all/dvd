"use strict";
class DVD {
    constructor(x = 0, y = 0, fx = 0, fy = 0) {
        this.width = 194;
        this.height = 100;
        this.win = 0;
        this.x = x;
        this.y = y;
        this.fx = fx;
        this.fy = fy;
        DVD.DVDs.push(this);
    }
    move() {
        let w = 0;
        if (this.x + this.fx + this.width >= 1000 || this.x + this.fx <= 0) {
            this.fx *= -1;
            w++;
        }
        if (this.y + this.fy + this.height >= 1000 || this.y + this.fy <= 0) {
            this.fy *= -1;
            w++;
        }
        if (w === 2)
            this.win++;
        this.x += this.fx;
        this.y += this.fy;
    }
    draw(ctx) {
        const image = new Image();
        image.src = 'https://1.bp.blogspot.com/-fSVZa40RkPs/VuGIjlYMxGI/AAAAAAAATNg/zXqS9Pzqnyc/s1600/bouncing_dvd_logo.jpg';
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'white';
        ctx.font = 'Arial';
        ctx.fillText('DVD', this.x, this.y);
    }
    setFXfromRAD() {
    }
}
DVD.DVDs = [];
