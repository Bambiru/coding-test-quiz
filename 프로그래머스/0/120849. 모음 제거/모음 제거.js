function solution(my_string) {
    // 문자열을 돌면서 a, e, i, o, u가 있으면 ''
    let result='';
    const array = Array.from(my_string).map(item => {
        if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            return;
        }
        result += item;
    })
    
    return result;


}