function solution(phone_number) {
    let num = phone_number.substr(-4);
    let cnt = phone_number.length - 4;
    var answer = "*".repeat(cnt) + num; // 파이썬이랑 다르게 문자열 반복은 리피트로 한다
    return answer;
}


//아래는 다른사람의 풀이 정규식
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));