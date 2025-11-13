# Question B – CargoCraft Fleet
## Description

This program determines the possible minimum and maximum number of cargo crafts that can form a total of n propulsion units.

### Each craft type:

Type A = 4 propulsion units
Type B = 6 propulsion units
If n is odd or less than 4, the combination is impossible (-1).
Formulas used: minimum = ceil(n / 6) → (n + 5) // 6, maximum = floor(n / 4) → n // 4.

## How to Run
### Open a terminal in this folder.
### Run the command: python3 main.py
### Enter input in the following format:

<pre>
t
n
n
...
t = number of test cases
n = total propulsion units

## Example Input

4
4
7
24
998244353998244352

## Example Output

1 1
-1
4 6
166374058999707392 249561088499561088
</pre>

## Notes
<pre>
Requires Python 3.6 or higher.
Time complexity O(1) per test case.
Runs directly in terminal or using an Code editor / IDE for example VScode; no external libraries needed.
</pre>