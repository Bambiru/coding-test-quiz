function solution(n) {
    let answer = [];
    // n 이하의 홀수를 찾고, 그걸 배열로 리턴
    for(let i=1; i<=n; i+=2) {
        answer.push(i)
    }
    
    return answer;
}