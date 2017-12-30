from random import randint
words = []

with open('sowpods.txt', 'r') as f:
    for items in f:
        line = f.readline().strip()
        words.append(line)

length = len(words) - 1
num = randint(0,length)
word = words[num]
word_len = len(word)

print('You have ')
print(word_len * ' _ ')

input()