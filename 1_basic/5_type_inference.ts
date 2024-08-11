/**
 * Type Inference
 * 
 * 타입 추론
 * 타입을 입력하지 않더라도, 타입스크립트에서 자체적으로 변수나 함수 파라미터값등의 타입을 유추하는 것
 */
let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = 'false';

/**
 * const로 초기화시, 초기화 값 자체로 타입이 정의됨
 * => const리터럴 타입.
 * 
 * constStringType => 스트링 타입중 'const string'을 값으로 갖는 타입.
 * 더 구체화된 타입으로 유추됨.
 */
const constStringType = 'const string';
const constBooleanType = true;

let yuJin = {
    name: '안유진',
    age: 2003
}

const yuJin2 = {
    name: '안유진',
    age: 2003
};

yuJin2.name = '코드팩토리';
console.log(yuJin2);

const yuJin3 = {
    name: '안유진' as const,
    age: 2003 as const,
}

// yuJin3.name = '코드팩토리';
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, '4', '5', '6'];

// numbers.push('6');
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100];

// tuple
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
//const first2 = twoNumbers[3];