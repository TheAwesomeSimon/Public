from lxml import html
import requests
import smtplib

#weather from pocasi.cz --- reads current temperature and the forecast for the day
weather_web = requests.get('https://pocasi.seznam.cz/brno')
weather_tree = html.fromstring(weather_web.content)
weather_deg_list = weather_tree.xpath('//div[@id="predpoved-dnes"]//div//div//div//span//span[@class="value"]/text()')
weather_forecast_list = weather_tree.xpath('//div[@id="predpoved-dnes"]//div//div//p/text()')
weather_deg = int(weather_deg_list[0])
weather_forecast = str(weather_forecast_list[0])

#daily menu from MyFood
myfood_web = requests.get('https://www.sklizeno.cz/o-nas/brno-holandska/')
myfood_tree = html.fromstring(myfood_web.content)
myfood_meals = myfood_tree.xpath('//div[@class="jidla"]//div[not(contains(@style, "0px;"))]//div[@class="item"]//ul//li//span/text()')
myfood_price = myfood_tree.xpath('//div[@class="dny"]//div//div[@class="jidla"]//div[@style[contains("display: block")]]//div[@class="item"]//ul//li//small/text()')

print(myfood_meals)
#print(myfood_price)



input("")



# web = requests.get('https://www.sklizeno.cz/o-nas/brno-holandska/')
# tree = html.fromstring(web.content)
# hello = "WHAT"
# food = tree.xpath('//div[@class="dny"]//div//div[@class="jidla"]//div[@class="item"]//ul//li//span/text()')
# price = tree.xpath('//div[@class="dny"]//div//div[@class="jidla"]//div[@class="item"]//ul//li//small/text()')

# msg = "E-mail sent, using python script"

# fromaddr = "samo.dlouhy69@gmail.com"
# toaddr = "simonzultak@gmail.com"

# server = smtplib.SMTP('smtp.gmail.com', 587)
# server.starttls()
# server.login("samo.dlouhy69@gmail.com", "simonko,1")
# server.sendmail(fromaddr, toaddr, msg)
# server.quit()

