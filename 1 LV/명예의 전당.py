def solution(k, score):
    answer = []
    hof = []
    for i in range(len(score)):
        if i < k:
            hof.append(score[i])
            answer.append(min(hof))
        else:
            hof.append(score[i])
            hof.sort(reverse=True)
            hof = hof[0:k]
            answer.append(min(hof))
            

    return answer
