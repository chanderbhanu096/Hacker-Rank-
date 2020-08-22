# Complete the birthdayCakeCandles function below.
def birthdayCakeCandles(ar):

    # sorted the list in order so that highest number can be easily found
    ar.sort()
    count = 0

    # highest number after sorting will be at the last position
    highest = ar[len(ar)-1]
    for i in range(len(ar)):

        #if highest is found in the array then increase the count
        if(highest==ar[i]):
            count+=1
    return count