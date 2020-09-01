# Complete the introTutorial function below.
def introTutorial(V, arr):
    z = 0
    for i in range(len(arr)):
        if arr[i]==V:
            z = i
    return z