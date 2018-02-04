import requests
from lxml import html
import smtplib
import urllib.request as urllib2
from bs4 import BeautifulSoup


basketball_url = 'https://www.livesport.cz/basketbal/'
basketball_page = urllib2.urlopen(basketball_url)
basketbal_soup = BeautifulSoup(basketball_page, 'lxml')

basketbal_all = basketbal_soup.find_all('table', class_ = 'basketball')
print(basketbal_all)