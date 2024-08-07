function add(num1: number, num2 : number){
    return num1 + num2;
}

console.log(add(1, 2));

// 빌드타임에 에러 발생
console.log(add(1, '2')); 
