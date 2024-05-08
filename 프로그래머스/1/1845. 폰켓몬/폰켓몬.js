function solution(nums) {
    let mon = [];
    
    for(let i of nums) {
        
        if( !mon.includes(i) ) mon.push(i); 
    }
    
    return mon.slice(0,nums.length / 2).length ;
}
    
    
// N 마리 중 N/2 가져가도됨
// 종류에 따라 번호붙여 구분
// 같은폰켓몬 = 같은 번호
// 최대한 다양한 종류의 폰켓몬



