function solution(array, height) {
    var answer = 0;
    
    array.forEach(item=>{if(item > height) answer += 1})
    
    return answer;
}