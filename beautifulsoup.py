import urllib.request as urllib2
from bs4 import BeautifulSoup

web = 'https://www.sklizeno.cz/o-nas/brno-holandska/'
page = urllib2.urlopen(web)
soup = BeautifulSoup(page, 'lxml')

name_box = soup.find_all('div', class_= 'jidla')[0]
test = name_box.find_all('div')[4]
test1 = test.find_all('span')
name = test1[0].text.strip()


print(name_box)
print('OOOOO' * 20)
print(test)
print('OOOOO' * 20)
print(test1)
print('OOOOO' * 20)
print(name)
