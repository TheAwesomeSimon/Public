from random import randint
words = []

# load word database
with open('sowpods.txt', 'r') as f:
    for items in f:
        line = f.readline().strip()
        words.append(line)

word = words[randint(0, (len(words) - 1))]
word_len = len(word)

# hangman parts ready to be printed sorted in dictionary
hang_dict = {
    'hang1': '  ____ ' + "\n" + ' |     ' + "\n" + ' |     ' + "\n" + ' |     ' + "\n" + ' |      ' + "\n" + '_|_',
    'hang2': '  ____ ' + "\n" + ' |    O ' + "\n" + ' |     ' + "\n" + ' |     ' + "\n" + ' |      ' + "\n" + '_|_',
    'hang3': '  ____ ' + "\n" + ' |    O ' + "\n" + ' |    |' + "\n" + ' |     ' + "\n" + ' |      ' + "\n" + '_|_',
    'hang4': '  ____ ' + "\n" + ' |    O ' + "\n" + ' |   \|' + "\n" + ' |     ' + "\n" + ' |      ' + "\n" + '_|_',
    'hang5': '  ____ ' + "\n" + ' |    O ' + "\n" + ' |   \|/' + "\n" + ' |     ' + "\n" + ' |      ' + "\n" + '_|_',
    'hang6': '  ____ ' + "\n" + ' |    O ' + "\n" + ' |   \|/' + "\n" + ' |   / ' + "\n" + ' |  /   ' + "\n" + '_|_',
    'hang7': '  ____ ' + "\n" + ' |    O ' + "\n" + ' |   \|/' + "\n" + ' |   / \\' + "\n" + ' |  /   \\' + "\n" + '_|_' + "\n" + 'G A M E   O V E R'
}

# function will find all occurences of char in string
def find(string, char):
    return [i for i, letter in enumerate(string) if letter == char]

count = 1
word_hidden = str(word_len * '_ ')
print(hang_dict['hang1'])
print(word_hidden)

count = 1
while count < 8:
    if '_ ' not in word_hidden:
        print('CONGRATULATIONS! YOU WIN!')
        break
    else:
        letter = input().upper()
        if letter in word:
            index = find(word, letter)
            for i in index:
                if i == 0:
                    word_hidden = letter + ' ' + word_hidden[2:]
                else:
                    word_hidden = word_hidden[:(i * 2 - 1)] + ' ' + letter + word_hidden[(i * 2 + 1):]
            print(word_hidden)
        else:
            count = count + 1
            print(hang_dict['hang' + str(count)])

stop = input()
