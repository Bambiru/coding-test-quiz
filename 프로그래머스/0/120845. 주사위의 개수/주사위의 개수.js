const solution = (box, n) => {
    let result = 1;
    for(let i of box) {
        result *= Math.floor(i/n);
    }
    return result;    
}
