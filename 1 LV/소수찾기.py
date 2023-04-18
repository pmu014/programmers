import math
def solution(n):
    cnt = 0

    for i in range(2, n+1):
        if (i == 2) or (i ==3):
            cnt += 1
        else:    
            for j in range(2, int(math.sqrt(i)+1)):
                if i%j == 0:
                    break
            else:cnt += 1    

    return cnt

