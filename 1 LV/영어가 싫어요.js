function solution(numbers) {
    let result = ''
    const num_dic = {
        'one': '1',
        'two':'2',
        'three':'3',
        'four':'4',
        'five':'5',
        'six':'6',
        'seven':'7',
        'eight':'8',
        'nine':'9',
        'zero':'0'
    }
    let s = 0
    while (s < numbers.length) {
        for (let i = 3; i<6; i++){
            let find = numbers.substr(s, i);
            if (find in num_dic){
                result += (num_dic[find])
                s = s + i
                break;
            }
        }
    }
    return parseInt(result);
}

let numbers = "onefourzerosixseven"
solution(numbers)