def solution(x):
    y = 0
    x = int(x)
    for i in str(x):
        y += int(i)
    if x%y == 0:
        return True
    else:
        return False