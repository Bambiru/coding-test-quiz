function solution(hp) {
    let answer = 0;
    let restHp = 0;
    // 장군 5
    // 병정 3
    // 일 1
    
    // hp이 5보다 크면 5로 나눠서 answer에 담고, restHp에 나머지 담기
    if(hp=>5) {
        answer += Math.floor(hp/5);
        restHp = hp%5;
        
        if(restHp=>3){
            answer += Math.floor(restHp/3);
            restHp = restHp%3;
        }
        
        if(restHp=>1){
            answer += Math.floor(restHp/1);
            restHp = restHp%1;
        }
    }
    console.log(answer)
    
    
    
    return answer;
}