import sys

if __name__ == "__main__":
    lines = sys.argv[1].split("\n")
    lines = sorted(lines)
    for line in lines:
        print(line)
