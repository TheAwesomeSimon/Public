import urllib.request as urllib2
from bs4 import BeautifulSoup
from datetime import date
import calendar

meal_web = 'https://www.sklizeno.cz/o-nas/brno-holandska/'
meal_page = urllib2.urlopen(meal_web)
meal_soup = BeautifulSoup(meal_page, 'lxml')

def week_day():
    date_today = date.today()
    day = calendar.day_name[date_today.weekday()]
    if day == 'Monday':
        return 1
    elif day == 'Tuesday':
        return 2
    elif day == 'Wednesday':
        return 3
    elif day == 'Thursday':
        return 4
    elif day == 'Friday':
        return 5
    else:
        return 6

def get_meals(x):
    meal_list = []
    meal_all = meal_soup.find_all('div', class_= 'jidla')[0] #always 0
    meal_divs = meal_all.find_all('div')[x]
    meal_fin = meal_divs.find_all('span')
    for item in meal_fin:
        print(item.text.strip())

def get_length():
    meal_all = meal_soup.find_all('div', class_= 'jidla')[0]
    meal_divs = meal_all.find_all('div', class_ = 'item')
    count = 0
    for item in meal_divs:
        count = count + 1
    return (count/2)

        
def get_menu():
    meal_error = ''
    if get_length() == 1:
        if week_day() == 5:
            get_meals(5)
            get_meals(6)
        else:
            return(meal_error)
    elif get_length() == 2:
        if week_day() == 4:
            get_meals(4)
            get_meals(5)
        elif week_day() == 6:
            get_meals(7)
            get_meals(8)
        else:
            return(meal_error)
    elif get_length() == 3:
        if week_day() == 3:
            get_meals(3)
            get_meals(4)
        elif week_day() == 4:
            get_meals(5)
            get_meals(6)
        elif week_day() == 5:
            get_meals(8)
            get_meals(9)
        else:
            return(meal_error)
    elif get_length() == 4:
        if week_day() == 1:
            get_meals(2)
            get_meals(3)
        elif week_day() == 2:
            get_meals(5)
            get_meals(6)
        elif week_day() == 3:
            get_meals(8)
            get_meals(9)
        elif week_day() == 4:
            get_meals(11)
            get_meals(12)
        else:
            return(meal_error)
    elif get_length() == 5:
        if week_day() == 1:
            get_meals(1)
            get_meals(2)
        elif week_day() == 2:
            get_meals(4)
            get_meals(5)
        elif week_day() == 3:
            get_meals(7)
            get_meals(8)
        elif week_day() == 4:
            get_meals(10)
            get_meals(11)
        elif week_day() == 5:
            get_meals(13)
            get_meals(14)
        else:
            return(meal_error)
    else:
        return(meal_error)

get_menu()
