// Scalar types
let age: number;
let PersName: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a:number) => number;

age = 50;
PersName = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a };


// Any type
let anything: any;
anything = -20;
anything = 'Text';
anything = {};


// Unknown type
let some:unknown;
some = 'Text';

let str: string;
if(typeof some === 'string'){
    str = some;
}


// Tuple type
let person: [string, number];
person = ['Max', 21];


// Enum type
enum Status {LOADING, READY};

const user = {
    status: Status.LOADING
}
if(user.status === Status.LOADING){
    console.log('Wait please, user loading...');
}
if(user.status === Status.READY){
    console.log('Welcome!!!');
}


// Union type
let union: string | number;
union = 'sss';
union = 4;


// Literal type
let literal: 'enable' | 'disable';
literal = 'enable';
literal = 'disable';

// Function types
function showMessage(message):void {
    console.log(message);
}
  
function calc(num1:number, num2:number):number {
    return num1 + num2;
}
  
function customError():never {
    throw new Error('Error');
}


// Custom type
type Page = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}
const page1:Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
}
const page2:Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}