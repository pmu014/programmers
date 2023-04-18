def solution(d, budget):
    d.sort()
    print(d)
    sum = 0
    cnt = 0
    for i in d:
        sum += int(i)
        if sum > budget:
            break
        cnt +=1
        if sum == budget:
            break
    return cnt    
