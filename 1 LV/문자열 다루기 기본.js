function solution(s) {
    parseInt(s)
    if (s.length != 4 && s.length != 6){ // 4,6이 아니면 false
        return false 
    }
    if (isNaN(s)==true){ //isNaN은 Not a number 의 약자로
        return false     //숫자가 아니면 true 반환, 따라서 반대인 false 리턴
    }    
    if (s.indexOf('e') != -1){ //10e1 처럼 지수로 표현되는건 숫자로 인식되기 때문에 수 있기때문에 e가 있다면 false 리턴
        return false    
    }
    if (isNaN(s)==false){ //그 이외의 문제없다면 true 반환
        return true
}}