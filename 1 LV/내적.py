def solution(a, b):
    sum = 0
    for x, y in zip(a, b):
        sum += x*y
    return sum