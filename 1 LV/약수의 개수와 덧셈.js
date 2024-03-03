function solution(left, right) {
    let answer = 0
    for(left; left<=right; left++){
        let num = 0
        for(j=1; j<=left; j++){
            if(left%j == 0){
                num += 1
            }
        }
        if (num%2 == 0){
            answer += left;
        }
        else{
            answer -= left;
        }
    }
    return answer;
}