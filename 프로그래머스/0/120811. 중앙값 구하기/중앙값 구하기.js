function solution(array) {
    let a = array.sort((a,b)=>a-b);
    let center = Math.floor(a.length/2);
    
    return a[center];
}