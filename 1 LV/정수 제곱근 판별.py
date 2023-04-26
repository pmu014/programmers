def solution(n):
    rootN = n**(1/2)
    if rootN%1 == 0:
        return (rootN+1)**2
    else:
        return -1