class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = 'random text';
        div.style.cssText = `height: ${this.height}px;
                            width: ${this.width}px;
                            background-color: ${this.bg};
                            font-size: ${this.fontSize}px;
                            text-align: ${this.textAlign};`;
    }

}

let start = new Options(100, 200, 'red', 26, 'center');
let start2 = new Options(100, 200, 'green', 35, 'left');

start.createDiv();
start2.createDiv();