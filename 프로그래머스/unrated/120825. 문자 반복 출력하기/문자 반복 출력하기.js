const solution = (my_string, n) => {
    let result = '';
     for(let i=0; i<my_string.length ; i+=1) {
         result += my_string[i].repeat(n);
     }
         
 return result;   
}