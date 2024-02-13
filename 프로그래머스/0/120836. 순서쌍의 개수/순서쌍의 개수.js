function solution(n) {
    let answer = [];
    // 1부터 n까지 돌면서  1*n은 n, 2*n/2는 n 4*n/4
    //  Number.isInteger() 
    for(let i=1; i<=n ; i+=1) {
        let number = n/i;
        if(Number.isInteger(number)) {
        answer.push(number);
        }   
    }
    return answer.length;
}