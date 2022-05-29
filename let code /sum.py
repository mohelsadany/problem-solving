#create function to sum array of numbers return the minimum value and maximum value
def min_max(arr):
    min = arr[0]
    max = arr[0]
    for i in arr:
        if i < min:
            min = i
        if i > max:
            max = i
    return min, max 

def sum_array(arr):
    sum = 0
    for i in arr:
        sum += i
    return sum