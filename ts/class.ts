class DVD {
    static DVDs : DVD[] = [];
    x : number;
    y : number;
    fx : number;
    fy : number;
    width : number = 194;
    height : number = 100;
    win = 0;
    constructor(x : number = 0, y : number = 0, fx : number = 0, fy : number = 0) {
        this.x = x;
        this.y = y;
        this.fx = fx;
        this.fy = fy;
        DVD.DVDs.push(this)
    }
    move() {
        let w = 0;
        if(this.x + this.fx + this.width >= 1000 || this.x + this.fx <= 0) {
            this.fx *= -1;
            w++;
        }
        if (this.y + this.fy + this.height >= 1000 || this.y + this.fy <= 0) {
            this.fy *= -1;
            w++;
        }
        if(w === 2) this.win++;
        this.x += this.fx;
        this.y += this.fy;
    }
    draw(ctx :CanvasRenderingContext2D) {
        const image = new Image();
        image.src = 'https://1.bp.blogspot.com/-fSVZa40RkPs/VuGIjlYMxGI/AAAAAAAATNg/zXqS9Pzqnyc/s1600/bouncing_dvd_logo.jpg';
        ctx.fillStyle = 'black'
        ctx.fillRect(this.x , this.y, this.width, this.height);
        ctx.fillStyle = 'white';
        ctx.font = 'Arial'
        ctx.fillText('DVD', this.x, this.y);
    }
    setFXfromRAD() {
        
    }
}