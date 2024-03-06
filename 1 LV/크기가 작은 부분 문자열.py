def solution(t, p):
    repeat = len(t)-len(p)+1
    count = 0
    for i in range (repeat):
        if (int(t[i:i+len(p)]) <= int(p)):
            count += 1
    return count
