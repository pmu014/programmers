def solution(price, money, count):
    sum = 0
    for i in range(count+1):
        sum += price*i
        print(sum)   
    if sum - money > 0 :
        return sum - money
    else:
        return 0