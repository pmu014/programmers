function solution(board) {
    const n = board.length
    for (let i=0; i<n; i++){ //행
        for (let j=0; j<n; j++){ //열
            if (board[i][j]==1){ //각 원소가 1인지 탐색
                if(i !== 0 && j !== 0 && board[i-1][j-1]==0){
                    board[i-1].splice([j-1],1,'2')
                }if(i !== 0 && board[i-1][j]==0){
                    board[i-1].splice([j],1,'2')
                }if(i !== 0 && j !== n-1 && board[i-1][j+1]==0){
                    board[i-1].splice([j+1],1,'2')

                }if(j !== 0 && board[i][j-1]==0){
                    board[i].splice([j-1],1,'2')
                }if(i !== n-1 &&board[i][j+1]==0){
                    board[i].splice([j+1],1,'2')

                }if(i !== n-1 && j !== 0 && board[i+1][j-1]==0){
                    board[i+1].splice([j-1],1,'2')
                }if(i !== n-1 && board[i+1][j]==0){
                    board[i+1].splice([j],1,'2')
                }if(i !== n-1 && j !== n-1 && board[i+1][j+1]==0){
                    board[i+1].splice([j+1],1,'2')
                }
            }
        }
    }
    let count = 0
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            if(board[i][j]==0){
                count++
            }
        }
    }        
    return count;
}

board=[[1, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]
solution(board)
