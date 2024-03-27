def solution(s):
    slist = []
    slist.append(s[0])
    for i in range(1, len(s)):
        if slist and slist[-1] == s[i]:
            slist.pop()
        else:
            slist.append(s[i])
            
    if slist:
        return 0
    else:
        return 1
