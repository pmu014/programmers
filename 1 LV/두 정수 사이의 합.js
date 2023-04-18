function solution(a, b) {
    if (a > b){
        [a, b] = [b, a]
    }
    let sum = 0
    for (a; a<b+1; a++){
        sum += a;
    }
    return sum;
}