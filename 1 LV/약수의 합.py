def solution(n):
    NL = []
    for i in range(1, int(n**(1/2)+1)):
        a, b = divmod(n, i)
        if b == 0:
            NL.append(a)
            NL.append(i)
    NL = set(NL)
    return sum(NL)