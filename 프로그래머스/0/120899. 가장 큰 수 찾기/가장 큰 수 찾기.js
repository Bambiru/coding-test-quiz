function solution(array) {
    const sorted = [...array].sort((a,b)=>b-a);
    const b = array.indexOf(sorted[0]);
    
    return [sorted[0], b];
}