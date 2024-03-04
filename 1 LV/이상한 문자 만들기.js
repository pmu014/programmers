function solution(s) {
    let str = s.split(' ')
    var answer = '';
    for (i = 0; i<str.length; i++){
        for(j=0; j<str[i].length; j++){
            if(j%2 == 0){
                answer += str[i][j].toUpperCase()
            }else{
                answer += str[i][j].toLowerCase()
            }
        }
        if (i != str.length -1){
            answer += ' '
        }
    }
    return answer;
}

//아래는 리팩토링
function solution(s) {
    const words = s.split(' ');
    let result = [];
    
    for (const word of words) {
        let modifiedWord = '';
        
        for (let i = 0; i < word.length; i++) {
            modifiedWord += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
        }
        
        result.push(modifiedWord);
    }
    
    return result.join(' ');
}
