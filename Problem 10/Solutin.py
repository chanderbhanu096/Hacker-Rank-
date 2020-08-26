# Complete the alternatingCharacters function below.
def alternatingCharacters(s):
    count = 0
    a = list(s)
    Char_Single_String = a[0]
    for i in range(0,len(a)-1) :
        if Char_Single_String == a[i+1] :
            count = count + 1
        else : 
            c_value = a[i+1]
    return count