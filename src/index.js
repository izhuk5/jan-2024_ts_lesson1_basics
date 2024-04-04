var greeting = 'Hello from typescript';
console.log(greeting);
var asd = function (names, ddd, hhh) {
    console.log(names, ddd, hhh);
    return;
};
asd(['Ihor', 'Alina'], 3.3, true);
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
