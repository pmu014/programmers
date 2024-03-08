def solution(s, n):
    answer = ''
    for i in s:
        num = ord(i)
        if num == 32:
            answer += i
        elif num <91:
            if num + n > 90:
                answer += chr(num + n - 26)
            else:
                answer += chr(num+n)
        elif num >96:
            if num + n > 122:
                answer += chr(num+n-26)
            else:
                answer += chr(num+n)
            
    return answer
