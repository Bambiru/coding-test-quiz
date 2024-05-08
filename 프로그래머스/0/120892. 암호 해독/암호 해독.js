function solution(cipher, code) {
    let result='';
    // 길이를 돌면서, code번째에 해당하는 값을 가져온다.
        
        for(let i=code - 1 ; i < cipher.length ; i += code) {
            result += cipher[i]        
        }
    
    
    return result;
}