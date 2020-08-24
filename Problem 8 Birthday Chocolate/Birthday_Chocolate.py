def birthday(s, d, m):
    sum = 0
    count =0
    for i in range(len(s)):
        for i in range(m+i):
            sum+=s[i]
        if(sum == d):
            count = count + 1
    return count