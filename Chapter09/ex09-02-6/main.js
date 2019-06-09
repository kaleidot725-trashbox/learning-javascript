const Car = (function() {
    const carProps = new WeakMap();
    class Car {
        constructor(make, model){
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, { userGear : this._userGears[0] });
        }

        get userGear() { return carProps.get(this).userGear; }
        set userGear(value) {
            if (this._userGears.indexOf(value) < 0) 
                throw new Error(`ギア指定が正しくない: ${value}`);
            carProps.get(this)._userGear = value;
        }
    
        shift(gear) { this.userGear = gear; }
    }

    return Car;
})();

// 動的ディスパッチはそのオブジェクトのプロパティにアクセスし、
// 存在がないことを確認した場合に、そのオブジェクトのプロトタイプを見て同じプロパティがないかチェックする仕組み。
// なのでshiftには何も定義されていないので、動的ディスパッチによりCar.prototype.shiftが見つけられ呼び出される。
const car1 = new Car();
const car2 = new Car();
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
car1.shift('D');

// shiftを新たに定義すると、定義したものが呼び出されるようになる。
car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
car1.shift('D');
car1.shift('d');
console.log(car1.userGear);