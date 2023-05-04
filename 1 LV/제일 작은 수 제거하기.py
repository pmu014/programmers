def solution(arr):
    dels = min(arr)
    arr.remove(dels)
    if arr:
        return arr
    else:
        return [-1]