def solution(s):
    answer = 0
    cur = ""
    x1 = 0
    x2 = 0
    for i in s:
        if cur:
            if i == cur:
                x1 += 1
            else:
                x2 += 1
        else:
            cur = i
            x1 += 1
        if x1 == x2:
            answer += 1
            cur = ""
    if cur:
        answer += 1
    return answer
