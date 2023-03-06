// Scalar types
var age;
var PersName;
var toggle;
var empty;
var notInitialize;
var callback;
age = 50;
PersName = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) { return 100 + a; };
// Any type
var anything;
anything = -20;
anything = 'Text';
anything = {};
// Unknown type
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// Tuple type
var person;
person = ['Max', 21];
// Enum type
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var user = {
    status: Status.LOADING
};
if (user.status === Status.LOADING) {
    console.log('Wait please, user loading...');
}
if (user.status === Status.READY) {
    console.log('Welcome!!!');
}
// Union type
var union;
union = 'sss';
union = 4;
// Literal type
var literal;
literal = 'enable';
literal = 'disable';
// Function types
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01')
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
