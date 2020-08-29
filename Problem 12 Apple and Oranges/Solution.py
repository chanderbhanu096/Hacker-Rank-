def countApplesAndOranges(s, t, a, b, apples, oranges):
    count_Apples = 0
    count_Oranges = 0
    for i in range(len(apples)):
        fallingpoint = a+apples[i]
        if(fallingpoint in range(s,t+1)):
            count_Apples+=1
    for j in range(len(oranges)):
        fallingpoint = b+oranges[i]
        if(fallingpoint in range(s,t+1)):
            count_Oranges+=1
    
    print(count_Apples)
    print(count_Oranges)