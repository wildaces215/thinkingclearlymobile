from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time



driver = webdriver.Firefox()
#navigating pages
driver.get('http://www.practiceselenium.com/welcome.html')
time.sleep(2)
ul_link= driver.find_element_by_link_text('Menu')
ul_link.click()
time.sleep(2)
checkOutLink = driver.find_elements_by_css_selector('span.button-content')
checkOutLink[0].click()
time.sleep(1)

#web form 
emailForm = driver.find_element_by_id('email')
emailForm.send_keys('example@example.com')

nameForm = driver.find_element_by_id('name')
nameForm.send_keys("John Doe")

address= driver.find_element_by_id('address')
address.send_keys('123 address street, ohio , 12345')
 
dropdown= Select(driver.find_element_by_id('card_type'))
dropdown.select_by_visible_text('Visa')

card = driver.find_element_by_id('card_number')
card.send_keys('123456789')

cardName = driver.find_element_by_id('cardholder_name')
cardName.send_keys("John Doe")

vertificationCode = driver.find_element_by_id('verification_code')
vertificationCode.send_keys('123')

time.sleep(1)

submitForm = driver.find_element_by_class_name('btn-primary')
submitForm.click()

time.sleep(1)
driver.close()