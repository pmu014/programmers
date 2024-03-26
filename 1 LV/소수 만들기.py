def solution(nums):
    result = 0
    n = len(nums)
    for i in range(0, n-2):
        for j in range(i+1, n-1):
            for k in range(j+1, n):
                num = nums[i] +nums[j] + nums[k]
                check = True
                for l in range(2, int(num**0.5)+1):
                    if num%l == 0:
                        check = False
                if check == True:
                    result += 1
    return result
