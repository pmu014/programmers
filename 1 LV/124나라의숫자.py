def solution(n):
    answer =''
    q, r = divmod(n, 3)
    if q > 2:
        solution(q)
    if q == 0:
        if r == 0:
            answer += str(4)
        else:
            answer += str(0)
    elif q == 1:
        if r == 0:
            answer += str(0)
        else:
            answer += str(1)
    elif q == 2:
        if r == 0:
            answer += str(1)
        else:
            answer += str(2)           

    if r == 0:
        answer += str(4)
    elif r == 1:
        answer += str(1)
    elif r == 2:
        answer += str(2)

    return answer
n = 5
print(solution(n))

    # 11 42
    # 12 44
    # 13 111
    # 14 112
    # 15 114
    # 16 121
    # 17 122
    # 18 124
    # 19 141
    # 20 142
    # 21 144
    # 22 211