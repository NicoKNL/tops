import sys

lines = sys.argv[1].split("\n")
lines = sorted(lines, reverse=True)
for line in lines:
    print(line)
