def solution(my_string, m, c):
    return ''.join(char for i, char in enumerate(my_string) if i % m + 1 == c)
