function solution(numbers) {
    let ret = numbers.reduce((a, b) => a + b, 0);
    return 45-ret;
}


// if(!numbers.includes(i)) answer += i;

//하나씩 찾을땐 이게 좋을듯.