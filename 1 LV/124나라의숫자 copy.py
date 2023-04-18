def solution(n, r):
    answer =''
    q, r = divmod(n, 3)
    if q > 2:
        solution(q, r)
        if r == 0:
                answer += str(2)
        else:
            answer += str(4)
    else:
        if q == 0:
            if r == 0:
                answer += str(2)
            else:
                answer += str(4)
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
n, r = 14, 0
print(solution(n, r))

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