def solution(answers):
    l1 = [1,2,3,4,5]*2000
    l2 = [2,1,2,3,2,4,2,5]*1250
    l3 = [3,3,1,1,2,2,4,4,5,5]*1000
    n = len(answers)
    scores = [0, 0, 0]
    for i in range(n):
        if answers[i] == l1[i]:
            scores[0] += 1
        if answers[i] == l2[i]:
            scores[1] += 1
        if answers[i] == l3[i]:
            scores[2] += 1
    max_score = max(scores)         
    answer = [i + 1 for i, score in enumerate(scores) if score == max_score]
    
    return answer        
