/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

type IdolType = {
    name: string;
    year?: number;
}

// const yuJin: {
//     name: string;
//     year: number;
// } = {
//     name: '안유진',
//     year: 2002,
// }

const yuJin: IdolType = {
    name: '안유진',
    // year: 2002,
}

/**
 * Interface
 * 
 * 타입과 겹치는 부분이 있음.
 * 인터페이스는 =이 필요없음.
 */
interface IdolInterface {
    name: string;
    year: number;
}

const yuJin2 : IdolInterface = {
    name: '안유진',
    year: 2002,
}

// 인터페이스 안의 타입으로 선언한 타입을 사용할 경우
interface IdolIT{
    name: NewStringType;
    year: NewNumberType;
}

const yuJin3: IdolIT = {
    name: '안유진',
    year: 2002,
};

// optional -> 있어도 되고 없어도 되는 프로퍼티 : ?사용
interface IdolOptional{
    name: string;
    year?: number;
}

const yuJin4: IdolOptional = {
    name: '안유진',
    // year: 2002,
}