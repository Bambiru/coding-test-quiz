function solution(num_list) {
    let arr = [];
    let odd = 0;
    let even = 0;
    
    for(let num of num_list) {

     (num % 2 === 0) ? even += 1 : odd += 1        
    }   
    arr[0] = even;
    arr[1] = odd;
    
    [even, odd] = arr
    
    return arr;
}