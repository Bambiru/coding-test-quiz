function solution(n) {
    const str = String(n);
    const mapfn = (arg) => Number(arg);
    let newArr = Array.from(str, mapfn);
    
    return newArr.reduce((acc,curr)=>acc+curr,0)
    
    
    
}