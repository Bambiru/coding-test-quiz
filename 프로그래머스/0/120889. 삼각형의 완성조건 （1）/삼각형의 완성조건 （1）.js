function solution(sides) {
    let [a,b,c] = sides.sort((a,b)=>b-a);
    if(a < b+c) return 1;
    else return 2;
}