def solution(k, m, score):
    n = len(score)
    box = n//m
    score.sort()
    answer = 0
    for _ in range(box):
        for _ in range(m):
            list = []
            list.append(score.pop(-1))
        answer += int(min(list)*m)
    
    return answer

k = 3
m = 4
score = [1, 2, 3, 1, 2, 3, 1]

solution(m,score)