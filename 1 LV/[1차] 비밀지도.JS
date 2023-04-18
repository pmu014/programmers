function solution(n, arr1, arr2) {
    let answer = [];
    for (let i=0; i<n; i++){ //각 행별 실행
        let arr = "" // 빈문자열 생성
        let arr1_to = arr1[i].toString(2).padStart(n,"0"); //1번배열 2진수로 변경, 빈자리 0으로 메꿔주기
        let arr2_to = arr2[i].toString(2).padStart(n,"0"); //2번배열 2진수로 변경, 빈자리 0으로 메꿔주기
        for (let j=0; j<n; j++){ //각 열별 실행
            if ((arr1_to[j])=='1' ||(arr2_to[j])=='1'){ // 1,2번배열중 하나라도 1이있으면
                arr += "#" // 아까 생성한 arr 빈문자열에 #추가
            }else{
                arr += " " // 아니면 arr에 공백추가
            }
        } 
        answer.push(arr); // arr문자열을 answer배열에 추가
    } 
    return answer;
};

n = 5
arr1 = [9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]

solution(n, arr1, arr2)