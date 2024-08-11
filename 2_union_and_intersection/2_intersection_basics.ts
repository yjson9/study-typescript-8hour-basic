/**
 * Intersection [&]
 * 
 * 어떻게 보면 유니언의 반대.
 * 
 * And의 개념
 */
interface Human{
    name: string;
    age: number;
}

interface Contacts{
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '01012341234',
    address: '서울시'
};

//프리미티브 타입에 인터섹션 사용이 가능할까?
// never타입으로 정의된다. => 사용할수 없는 변수가 됨.
type NumberAndString = number & string;

// let numberAndString: NumberAndString = never;
// never타입이 되면 그 어떤 값도 적용할 수 없다.