# Question B - CargoCraft Fleet
"""
Return (min_crafts, max_crafts) that sum to n propulsion units.
If n is odd or < 4, return -1.
Result:
    Minimum = ceil(n / 6)  -> (n + 5) // 6
    Maximum = floor(n / 4) -> n // 4
"""
def craft_range(n):
    if n % 2 == 1 or n < 4:
        return -1
    min_crafts = (n + 5) // 6
    max_crafts = n // 4
    return min_crafts, max_crafts

if __name__ == "__main__":
    #Input a number of test cases
    t = int(input().strip())
    #Process each test case
    for i in range(t):
        n = int(input().strip())
        result = craft_range(n)
        if result == -1:
            print("-1")
        else:
            print(f"{result[0]} {result[1]}")