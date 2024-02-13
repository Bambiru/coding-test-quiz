function solution(array) {
    // 일단 sort로 순서대로 정렬시켜주기

    const sorted = array.sort((a,b)=>a-b);
    // length / 2 -> 3/2 = 1.5 => up
    const ceil = Math.floor(sorted.length / 2);
    
    
    return sorted[ceil];
}