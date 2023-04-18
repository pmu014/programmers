function solution(dots) {

    if((dots[1][0]-dots[0][0]) / (dots[1][1]-dots[0][1]) ==
        (dots[3][0]-dots[2][0]) / (dots[3][1]-dots[2][1])){
            result = 1;
    }else if((dots[2][0]-dots[0][0]) / (dots[2][1]-dots[0][1]) ==
            (dots[3][0]-dots[1][0]) / (dots[3][1]-dots[1][1])){
            result = 1;
    }else if((dots[3][0]-dots[0][0]) / (dots[3][1]-dots[0][1]) ==
            (dots[2][0]-dots[1][0]) / (dots[2][1]-dots[1][1])){
             result = 1;
    }else{
        result = 0;
    }
    return result;
    }


