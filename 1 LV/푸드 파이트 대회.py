def solution(food):
    string=""
    for i in range(1, len(food)):
        string += str(i)*(food[i]//2)
    print(string)
    string2 = string[::-1]
    print(string2)
    answer = string + "0" +string2
    return answer


