from lxml import html
import requests
import smtplib


web = requests.get('https://www.sklizeno.cz/o-nas/brno-holandska/')
tree = html.fromstring(web.content)
hello = "WHAT"
food = tree.xpath('//div[@class="dny"]//div//div[@class="jidla"]//div[@class="item"]//ul//li//span/text()')
price = tree.xpath('//div[@class="dny"]//div//div[@class="jidla"]//div[@class="item"]//ul//li//small/text()')

msg = "E-mail sent, using python script"

fromaddr = "samo.dlouhy69@gmail.com"
toaddr = "simonzultak@gmail.com"

server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login("samo.dlouhy69@gmail.com", "simonko,1")
server.sendmail(fromaddr, toaddr, msg)
server.quit()

