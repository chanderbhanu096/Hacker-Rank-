def gradingStudents(grades):
    for i in range(len(grades)):
        if(grades[i]<38):
            grades[i]=grades[i]
        
        else:
            remainder = grades[i]%5
            if(remainder>2):
                grades[i]=grades[i]+(5-remainder)
            else:
                grades[i]=grades[i]
                
    print(grades)