const person = {
	name: 'max',
	age: 29,
	greet() {
		console.log(`Hello, my name is ${this.name}`);
	}
};

const printName = ({ name, age }) => {
	// destructuring objects | takes the person object in from call and uses just the name and age attributes
	console.log(name + ' ' + age);
};

printName(person);

const { name, age } = person; // destructuring can be done outside of functions. These are now "name" and "age"
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies; // destructuring an array
console.log(hobby1, hobby2);

// const hobbies2 = hobbies.map(hobby => hobby); // Creates a duplicate as map runs the function for each element in hobbies
// //console.log(hobbies);
// //console.log(hobbies2);

// const hobbies3 = hobbies.slice(); // Copies hobbies array onto hobbies3 array
// //console.log(hobbies3);

// const hobbies4 = [...hobbies]; // Pulls out each element in hobbies and saves it in hobbies4, copying the array (works on objects)
// //console.log(hobbies4);

// const person2 = { ...person }; // spread operator | copies element
// person.name = 'jim';
// console.log(person2);
// console.log(person);

// const toArray = (arg1, arg2, arg3) => {
// 	retrun[(arg1, arg2, arg3)]; // this isn't effective, strict number of args
// };

// const toArray2 = (...args) => {
// 	return args; // rest operator | sets args as an array of all params
// };
