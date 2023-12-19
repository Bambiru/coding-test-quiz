function solution(price) {
    let discount = 0;

    if( 500000 <= price ) {return discount = Math.floor(price * 0.80)}
    if( 300000 <= price ) {return discount = Math.floor(price * 0.90)}    
    if( 100000 <= price ) {return discount = Math.floor(price * 0.95)}
    
    
    return price;
}