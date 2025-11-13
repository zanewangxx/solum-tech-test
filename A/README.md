# Question A – Mystic Waves
## Description

This program calculates the total magical energy after n waves, where each wave alternates between +x and −x, starting with +x.
If n is even, all waves cancel out → total = 0.
If n is odd, one extra +x remains → total = x.

## How to Run
### Open a terminal in this folder.
### Run the command: python3 main.py
### Enter input in the following format:
<pre>
t
x n
x n
...
t = number of test cases
x = energy value
n = number of waves

## Example Input

4
1 4
2 5
3 6
4 7

## Example Output

0
2
0
4
</pre>
## Notes
<pre>
Requires Python 3.6 or higher.
Runs directly in terminal or using an Code editor / IDE for example VScode; no external libraries needed.
</pre>