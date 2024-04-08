function solution(n) {

    let result;
    for(let i=1; i<n; i++){
        
        if(n === i*i) {
            result = 1;
            break;
        } else {
            result = 2;
        }
    }
    
    return result;
}
