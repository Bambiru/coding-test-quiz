function solution(array) {
    const maxNum = Math.max(...array);
    const b = array.indexOf(maxNum);
    
    return [maxNum, b];
}