function solution(n, numlist) {
    let answer = [];
    for (const i of numlist) {
        if (i % n === 0){
            answer.push(i);
        }
    }
    return answer;
}