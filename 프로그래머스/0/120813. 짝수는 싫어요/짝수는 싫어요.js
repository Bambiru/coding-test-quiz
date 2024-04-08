function solution(n) {
    var answer = [];
    
    // n 이하의 홀수
    
    for(let i=1; i<=n ; i++){
        
        if(i%2 === 1) answer.push(i);
        
    }
    
    return answer;
}