// const greeting:string = 'Hello from typescript';
// console.log(greeting);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const asd = (names:number[], ddd:number, hhh:boolean):number => {
// 	console.log(names, ddd, hhh);
// 	return;
// }
// asd(['Masha', 'Dasha', 'Karina'], 2, true);
// interface IUser<T> {
// 	name:string,
// 	age:number,
// 	status:boolean,
// 	data:T
// 	// house?:number
// }
// const user:IUser<string[]> = {name:'Max', age:15, status:false, data: ['asd', 'huy)']};
//
// const user2:IUser<number[]> = {age:15, name:'Karina', status:true,data: [1, 5]};
//
// const user3:Partial<IUser<boolean>> = {status:true, data:false};
// const getName = (data:IUser):string => {
// 	return data.name;
// };
// class User {
//
// 	constructor(private _name:string, public age:number, protected status:boolean) {
// 	}
//
// 	// getName():string {
// 	// 	return this.name
// 	// }
// 	//
// 	// setName(name:string):void{
// 	// 	this.name = name
// 	// }
//
// 	get name():string {
// 		return this._name;
// 	}
//
// 	set name(value:string) {
// 		if (value !== 'AAAA') {
// 			this._name = value;
// 		}
// 	}
//
// }
//
// const user = new User('Max', 15, true);
// user.name = 'AAAA';
// console.log(user.name);
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return (this.a + this.b) * 2;
    };
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    return Rectangle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.area = function () {
        return this.b * this.b / 2 * this.c;
    };
    return Triangle;
}(Shape));
var shapes = [
    new Triangle(1, 2, 3),
    new Rectangle(44, 55),
    new Triangle(2, 3, 4)
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.perimeter());
    console.log(shape.area());
}
