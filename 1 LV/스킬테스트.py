def solution(today, terms, privacies):
    answer =[]
    dic = {}
    ty = int(today.split(".")[0])
    tm = int(today.split(".")[1])
    td = int(today.split(".")[2])
    for i in terms:
        a = i.split(" ")[0] 
        dic[a]=i.split(" ")[1]
    for i in range(1, len(privacies)+1):
        y = int(privacies[i-1].split(".")[0])
        m = int(privacies[i-1].split(".")[1])
        d = int(privacies[i-1].split(".")[2].split(" ")[0])
        term = privacies[i-1].split(" ")[1]
        m += int(dic[term])
        if m > 12:
            a, b = divmod(m, 12)
            if b ==0:
                y += a-1
                m = 12 
            else:
                y += a
                m = b     
        if ty> y:
            answer.append(i)
        elif (ty==y)and(tm > m):
            answer.append(i)
        elif (ty==y)and(tm == m)and(td>=d):
            answer.append(i)    
    
    return answer



