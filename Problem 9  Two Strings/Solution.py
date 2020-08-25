def twoStrings(s1, s2):
    x = set(s1)
    y = set(s2)
    #  using set's intersection property 
    # whether x,y have anything common or substring
    if set.intersection(x,y):
        return "YES"
    return "NO"