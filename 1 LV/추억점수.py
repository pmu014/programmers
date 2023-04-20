def solution(name, yearning, photo):
    dic = {}
    result = []
    for i, namet in enumerate (name): 
        print (i, namet)
        dic[namet] = yearning[i]
    for i in photo:
        sum = 0
        for j in i:
            if j in dic:
                sum += dic[j]
        result.append(sum)    
    return result