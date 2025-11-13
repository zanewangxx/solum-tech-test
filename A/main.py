# Question A - Mystic Waves
"""
Returns the total energy after n waves. (x, -x, x...)
Result:
    If n is even, waves total = 0
    If n is odd, one extra +x remains  total = x
"""
def total_energy(x, n):
    return 0 if n % 2 == 0 else x

if __name__ == "__main__":
    # Input a number of test cases
    t = int(input().strip())
    # Process each test case
    for _ in range(t):
        x, n = map(int, input().split())
        print(total_energy(x, n))