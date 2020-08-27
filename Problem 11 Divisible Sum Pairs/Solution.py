def divisibleSumPairs(n, k, ar):
    count = 0
    for i in range(0,n):
        for j in range(i+1,n): //(i>j)
            if((ar[i]+ar[j])%k==0):
                count+=1

    return count

# Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.

# divisibleSumPairs has the following parameter(s):

# n: the integer length of array 
# ar: an array of integers
# k: the integer to divide the pair sum by    