from lxml import html
import requests
import smtplib
from datetime import date
import calendar
import urllib.request as urllib2
from bs4 import BeautifulSoup

#determines what day of the week it is, returns numbers instead of actual days, where Monday = 1 and Friday = 5
#weeked(Saturday, Sunday) = 6
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

#weather from pocasi.cz --- reads current temperature and the forecast for the day
weather_web = requests.get('https://pocasi.seznam.cz/brno')
weather_tree = html.fromstring(weather_web.content)
weather_deg_list = weather_tree.xpath('//div[@id="predpoved-dnes"]//div//div//div//span//span[@class="value"]/text()')
weather_forecast_list = weather_tree.xpath('//div[@id="predpoved-dnes"]//div//div//p/text()')
weather_deg = int(weather_deg_list[0])
weather_forecast = str(weather_forecast_list[0])

#daily menu from MyFood website
meal_web = 'https://www.sklizeno.cz/o-nas/brno-holandska/'
meal_page = urllib2.urlopen(meal_web)
#BeautifulSoup transform to lxml format
meal_soup = BeautifulSoup(meal_page, 'lxml')

#gets number of days, for which the daily menu is available
def get_length():
    meal_all = meal_soup.find_all('div', class_= 'jidla')[0]
    meal_divs = meal_all.find_all('div', class_ = 'item')
    count = 0
    for item in meal_divs:
        count = count + 1
    return (count/2)

#finds the particular set of meals, only soup or only daily menu, depending on X, that is specific for each value of get_length(). 
#returns the set of meals in a list
def get_meals(x):
    meal_list = []
    meal_all = meal_soup.find_all('div', class_= 'jidla')[0] #always 0
    meal_divs = meal_all.find_all('div')[x]
    meal_fin = meal_divs.find_all('span')
    for item in meal_fin:
        meal_list.append(item.text.strip())
    return meal_list

#now the real pain in the ass, based on get_length() and week_day() this will determine what X to call get_meals() with
#returns daily menu in a list, where on position [0] is a list of soups and on [1] is a list of meals
def get_menu():
    meal_error = 'Error'
    daily_menu = []
    if get_length() == 1:
        if week_day() == 5:
            daily_menu.append(get_meals(5))
            daily_menu.append(get_meals(6))
            return daily_menu
        else:
            return(meal_error)
    elif get_length() == 2:
        if week_day() == 4:
            daily_menu.append(get_meals(4))
            daily_menu.append(get_meals(5))
            return daily_menu
        elif week_day() == 6:
            daily_menu.append(get_meals(7))
            daily_menu.append(get_meals(8))
            return daily_menu
        else:
            return(meal_error)
    elif get_length() == 3:
        if week_day() == 3:
            daily_menu.append(get_meals(3))
            daily_menu.append(get_meals(4))
            return daily_menu
        elif week_day() == 4:
            daily_menu.append(get_meals(5))
            daily_menu.append(get_meals(6))
            return daily_menu
        elif week_day() == 5:
            daily_menu.append(get_meals(8))
            daily_menu.append(get_meals(9))
            return daily_menu
        else:
            return(meal_error)
    elif get_length() == 4:
        if week_day() == 1:
            daily_menu.append(get_meals(2))
            daily_menu.append(get_meals(3))
            return daily_menu
        elif week_day() == 2:
            daily_menu.append(get_meals(5))
            daily_menu.append(get_meals(6))
            return daily_menu
        elif week_day() == 3:
            daily_menu.append(get_meals(8))
            daily_menu.append(get_meals(9))
            return daily_menu
        elif week_day() == 4:
            daily_menu.append(get_meals(11))
            daily_menu.append(get_meals(12))
            return daily_menu
        else:
            return(meal_error)
    elif get_length() == 5:
        if week_day() == 1:
            daily_menu.append(get_meals(1))
            daily_menu.append(get_meals(2))
            return daily_menu
        elif week_day() == 2:
            daily_menu.append(get_meals(4))
            daily_menu.append(get_meals(5))
            return daily_menu
        elif week_day() == 3:
            daily_menu.append(get_meals(7))
            daily_menu.append(get_meals(8))
            return daily_menu
        elif week_day() == 4:
            daily_menu.append(get_meals(10))
            daily_menu.append(get_meals(11))
            return daily_menu
        elif week_day() == 5:
            daily_menu.append(get_meals(13))
            daily_menu.append(get_meals(14))
            return daily_menu
        else:
            return(meal_error)
    else:
        return(meal_error)



print(weather_deg, weather_forecast)
print(get_menu())

#SENDING MAIL
######################################################################
# msg = "E-mail sent, using python script"

# fromaddr = "samo.dlouhy69@gmail.com"
# toaddr = "simonzultak@gmail.com"

# server = smtplib.SMTP('smtp.gmail.com', 587)
# server.starttls()
# server.login("samo.dlouhy69@gmail.com", "simonko,1")
# server.sendmail(fromaddr, toaddr, msg)
# server.quit()

