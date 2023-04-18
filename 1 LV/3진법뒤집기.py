def solution(n):
    answer1 = ""

    while n > 0 :
        n, r = divmod(n, 3)
        answer1 += str(r)
    
    return int(answer1, 3)

n = 45
print(solution(n))