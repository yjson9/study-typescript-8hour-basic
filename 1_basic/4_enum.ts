/**
 * Enum
 */

/**
 * API 요청을한다.
 * 상태는 4가지 상태
 * 
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩상태
 * INITIAL - 초기 상태
 */
function runWork(){
    let state = 'INITIAL';

    try{
        //작업시작전
        state = 'LOADING';
        
        // 작업을 한다.
        
        // 작업끝나고
        state = 'DONE';
    }catch(e){
        state = 'ERROR';
    }finally{
        return state;
    }
}

console.log('runWork_DONE' , runWork() === 'DONE');
console.log('runWork_DONNE' , runWork() === 'DONNE');

const doneState = 'DONE';
const loadingState = 'LOADGNG';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2(){
    let state = initialState;

    try{
        state = loadingState;
        // 작업을 한다.

        state = doneState;
    }catch(e){
        state = errorState;
    }finally{
        return state;
    }
}

console.log('runWork2' , runWork2() === doneState);

/**
 * 이넘사용
 * 이넘 명은 대문자로 시작하는것이 보편적
 */
// enum State {
//     DONE,
//     LOADING,
//     INITIAL,
//     ERROR,
// }
// 위처럼 이넘선언시 값을 따로 할당하지 않으면 0부터 1씩 올라가는 값이 자동 할당.

enum State {
    DONE = 'DONE',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}

function runWork3(){
    let state = State.INITIAL;

    try{
        state = State.LOADING;
        // 작업을 한다.

        state = State.DONE;
    }catch(e){
        state = State.ERROR;
    }finally{
        return state;
    }
}

console.log('runWork3' , runWork3() === State.DONE);
console.log('runWork3' , runWork3());