function solution(lines) {
    lines.sort()
    result=[]
    let A = []
    if (lines[0][1] > lines[1][0]){
        let max = Math.max(lines[0][0], lines[1][0])
        let min = Math.min(lines[0][1], lines[1][1])
        result.push([max, min])
    }
    if (lines[0][1] > lines[2][0]){
        max = Math.max(lines[0][0], lines[2][0])
        min = Math.min(lines[0][1], lines[2][1])
        result.push([max, min])
    }
    if (lines[1][1] > lines[2][0]){
        let max = Math.max(lines[1][0], lines[2][0])
        let min = Math.min(lines[1][1], lines[2][1])
        result.push([max, min])
    }
    if (result[2]){
        console.log(11)
        console.log(result)
        if (result[0][1] > result[1][0]){
           let min = Math.min(result[0][0], result[1][0])
           let max = Math.max(result[0][1], result[1][1])
           A.push([min, max])
           A.push([result[2][0], result[2][1]])
           A.sort()
           console.log(A)
           if (A[0][1] > A[1][0]){
            console.log(A[0][0])
            console.log(A[1][0])
            console.log(A[1][1])
            console.log(A[0][1])
             let mmin = Math.min(A[0][0], A[1][0])
             let mmax = Math.max(A[0][1], A[1][1]) 
             return (mmax - mmin)
           }else{
                return ((A[0][1]-A[0][0]) + (A[1][1]-A[1][0]))
           }
        }else if(result[1][1] > result[2][0]){
           let min = Math.min(result[1][0], result[2][0])
           let max = Math.max(result[1][1], result[2][1])
           A.push([min, max])
           A.push([result[0][0], result[0][1]])
           A.sort()
           console.log(A)
           if (A[0][1] > A[1][0]){
            console.log(A[0][0])
            console.log(A[1][0])
            console.log(A[1][1])
            console.log(A[0][1])
             let mmin = Math.min(A[0][0], A[1][0])
             let mmax = Math.max(A[0][1], A[1][1]) 
             return (mmax - mmin)
           }else{
                return ((A[0][1]-A[0][0]) + (A[1][1]-A[1][0]))
           }
        }else{
            return (result[2][1]-result[2][0]) + (result[1][1]-result[1][0]) + (result[0][1]-result[0][0])
        }
    }
    if (result[1]){
        console.log(result)
        if (result[0][1] > result[1][0]){
           let max = Math.max(result[0][0], result[1][0])
           let min = Math.min(result[0][1], result[1][1])
           return (min - max)
        }
        else{
            return (result[0][1] - result[0][0]) + (result[1][1] - result[1][0])
        }
    }else if(result[0]){
        console.log(result)
        return (result[0][1] - result[0][0])
    }else{
        return 0
    }
}

lines = [[0, 5], [3, 9], [1, 10]]
console.log(solution(lines));

// 3,5 1,5 1,9

