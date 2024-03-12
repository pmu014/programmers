def solution(sizes):
    xmax = 1
    ymax = 1
    for i in sizes:
        i.sort()
        if i[0] > xmax:
             xmax = i[0]
        if i[1] > ymax:
             ymax = i[1]
    answer = xmax*ymax
    return answer
