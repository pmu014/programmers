function solution(strlist) {

    var answer = [];
    var len = strlist.length;

    for(i=0;i<len;i++){
        var convert = strlist[i].length;
        answer.push(convert)
    }


    return answer;
}
