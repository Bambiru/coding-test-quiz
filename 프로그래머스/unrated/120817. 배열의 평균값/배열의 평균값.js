function solution(numbers) {
    let length = numbers.length;
    let answer = numbers.reduce((acc,cur) => acc + cur , 0 )
    return answer/length;
}