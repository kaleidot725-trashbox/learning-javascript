class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimeter() {
        return this.width*2 + this.height*2;
    }
}

const r = new Rectangle(5, 10);
console.log(`外周の長さ: ${r.perimeter}`);