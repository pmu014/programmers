function solution(numbers, hand) {
    let statusL = [1,4]
    let statusR = [3,4]
    let answer = ""
    for (let i of numbers){
        if (i == 1){
            answer += "L"
            statusL = [1,1]
        }
        else if (i == 4){
            answer += "L"
            statusL = [1,2]
        }
        else if (i == 7){
            answer += "L"
            statusL = [1,3]
        }
        else if (i == 3){
            answer += "R"
            statusR = [3,1]
        }
        else if (i == 6){
            answer += "R"
            statusR = [3,2]
        }
        else if (i == 9){
            answer += "R"
            statusR = [3,3]
        }
        else if (i == 2){
            if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-1))<(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-1))){
                answer += "L"
                statusL = [2,1]
            }
            else if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-1))>(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-1))){
                answer += "R"
                statusR = [2,1]
            }
            else if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-1))==(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-1))){
                if (hand == "left"){
                    answer += "L"
                    statusL = [2,1]
                }
                else if (hand == "right"){
                    answer += "R"
                    statusR = [2,1]
                }              
            }
        }
        else if (i == 5){
            if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-2))<(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-2))){
                answer += "L"
                statusL = [2,2]
            }
            else if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-2))>(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-2))){
                answer += "R"
                statusR = [2,2]
            }
            else if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-2))==(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-2))){
                if (hand == "left"){
                    answer += "L"
                    statusL = [2,2]
                }
                else if (hand == "right"){
                    answer += "R"
                    statusR = [2,2]
                }             
            }
        }
        else if (i == 8){
            if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-3))<(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-3))){
                answer += "L"
                statusL = [2,3]
            }
            else if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-3))>(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-3))){
                answer += "R"
                statusR = [2,3]
            }
            else if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-3))==(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-3))){
                if (hand == "left"){
                    answer += "L"
                    statusL = [2,3]
                }
                else if (hand == "right"){
                    answer += "R"
                    statusR = [2,3]
                }
            }
        }
        else if (i == 0){
            if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-4))<(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-4))){
                answer += "L"
                statusL = [2,4]
            }
            else if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-4))>(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-4))){
                answer += "R"
                statusR = [2,4]
            }
            else if ((Math.abs(statusL[0]-2)+Math.abs(statusL[1]-4))==(Math.abs(statusR[0]-2)+Math.abs(statusR[1]-4))){
                if (hand == "left"){
                    answer += "L"
                    statusL = [2,4]
                }
                else if (hand == "right"){
                    answer += "R"
                    statusR = [2,4]
                } 
            }
        }
    }
    return answer;
}

numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
hand = "right"
