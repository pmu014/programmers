function solution(num_list, n) {
    let answer = [];
    const num = num_list.length / n
    for (let i = 0; i < num; i++){
        li = num_list.slice(i*n, i*n+n)
        answer.push(li)
    }
    return answer;
}