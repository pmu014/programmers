def solution(number, limit, power):
    nList = []
    answer = 0
    for num in range(1, number+1):
        count = 0
        for j in range(1, int(num**0.5)+1):
            if num%j == 0:
                if j == num //j:
                    count += 1
                else:
                    count += 2
        if count > limit:
            answer += power
        else:       
            answer += count
    return answer
