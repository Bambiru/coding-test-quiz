function solution(n) {
    
    let str = n+'';
    let strArr = str.split('');
    let numArr = [];
    
    for(let str of strArr) {
        
        numArr.push(+str);
    }
    
    return numArr.reduce((a,b)=>a+b,0);

}