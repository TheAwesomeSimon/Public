import os

roots_1 = []
roots_2 = []
dirs_1 = []
dirs_2 = []
files_1 = []
files_2 = []

for root, dirs, files in os.walk("C:\\Users\I344396\Documents\Learning\VSCode", topdown = True):
    roots_1.append(root[36:])
    dirs_1.append(dirs)
    files_1.append(files)

for root, dirs, files in os.walk("C:\\Users\I344396\Documents\VSCode", topdown = True):
    roots_2.append(root[27:])
    dirs_2.append(dirs)
    files_2.append(files)

i = 0
check = False
while i < len(roots_1):
    if (roots_1[i] == roots_2[i] and dirs_1[i] == dirs_2[i] and files_1[i] == files_2[i]):
        pass
    else:
        print('ERROR somewhere here:' + "\n" + 'Root: ' + roots_1[i] + ' and ' + roots_2[i] + "\n" + 'Dir: ' + dirs_1[i] + ' and ' + dirs_2[i] + "\n" + 'Files: ' + files_1[i] + ' and ' + files_2[i])
        break
    i = i + 1
    if i == 43:
        print('All good')