import sys

lines = sys.argv[1].split("\n")
for i, line in enumerate(lines, start=1):
    print(f"{i}. {line}")
