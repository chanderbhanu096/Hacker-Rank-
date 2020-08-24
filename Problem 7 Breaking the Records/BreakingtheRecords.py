def breakingRecords(scores):
    intial_score = scores[0]
    low_score = scores[0]
    high_record = 0
    low_record = 0
    i = 0
    for i in range(len(scores)):
        if(scores[i]>intial_score):
            intial_score = scores[i]
            high_record+=1
        elif(scores[i]<low_score):
            low_score = scores[i]
            low_record+=1
    return [high_record, low_record]