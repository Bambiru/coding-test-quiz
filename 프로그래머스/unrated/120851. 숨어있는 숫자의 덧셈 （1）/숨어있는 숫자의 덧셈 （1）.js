const solution = (my_string) => {
    let arr = my_string.split('');
    let result = 0;
    arr.map((item)=>{
       if(!isNaN(parseInt(item))) {
           result += parseInt(item);
       };
    })
    return result;    
}