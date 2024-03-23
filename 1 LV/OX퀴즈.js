function solution(quiz) {
    let answer = [];
    for (let i of quiz){
        let arr = i.split('=')
        if(eval(arr[0]) == (arr[1])){
            answer.push("O")
        }else{
            answer.push("X")
        }
    }
    return answer
}

quiz = ["3 - 4 = -3", "5 + 6 = 11"]
console.log(solution(quiz))