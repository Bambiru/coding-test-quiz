function solution(dot) {
    var answer = 0;
    let [x,y] = dot;
    
    if(x > 0 && y > 0) answer = 1;
    if(x < 0 && y > 0) answer = 2;
    if(x < 0 && y < 0) answer = 3;
    if(x > 0 && y < 0) answer = 4;
    
    return answer;
}