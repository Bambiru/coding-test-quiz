function solution(myString, pat) {
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    
    return myString.indexOf(pat)>=0 ? 1 : 0;
}