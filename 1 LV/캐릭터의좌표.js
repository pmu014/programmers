function solution(keyinput, board) {
    let row = 0;
    let col = 0;
    for (let i of keyinput){
        if(i === 'left'){
            row = row - 1 
        }else if(i === "right"){
            row = row + 1
        }else if(i === 'up'){
            col = col +1
        }else{
            col = col -1
        }
        const b0 = (board[0]-1)/2
        const b1 = (board[1]-1)/2
        if (b0 < Math.abs(row)){
            if(row < 0){
                row = -b0
            }else{row = b0}
        }
        if (b1 < Math.abs(col)){
            if(col < 0){
                col = -b1
            }else{col = b1}
        }
    }
    var answer = [row, col];
    return answer;
}