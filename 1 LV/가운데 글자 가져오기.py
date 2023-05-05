def solution(s):
    cnt = len(s)
    ans = cnt%2
    if ans:
        return s[len(s)//2]
    else:
        return s[(len(s)//2) - 1] + s[len(s)//2]