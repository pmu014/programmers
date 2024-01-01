function solution(numbers) {
    let sum = 0;
    numbers.forEach(num => {
      sum += num;
    })
    let answer = sum/(numbers.length)
    return answer;
}