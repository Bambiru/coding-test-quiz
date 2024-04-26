function solution(rsp) {
    var answer = '';
    
    for(let key of rsp) {
        answer += key === '2' ? '0' : key === '0' ? '5' : '2';
    }
    
    return answer;
}