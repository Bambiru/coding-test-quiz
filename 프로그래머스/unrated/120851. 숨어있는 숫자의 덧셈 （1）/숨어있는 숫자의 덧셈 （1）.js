const solution = (my_string) => {
    let result = 0;
    [...my_string].map((item)=>{
       if(Number(item))  result += Number(item);
    })
    return result;    
}