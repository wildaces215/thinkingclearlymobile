from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Firefox()
driver.get('https://www.google.com')
searchBar = driver.find_element_by_name("q")
searchBar.send_keys('wikiepdia')
clickButton = driver.find_element_by_name("btnK")
clickButton.submit()


RESULTS_LOCATOR = "//div/h3/a"

WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.XPATH, RESULTS_LOCATOR)))

page1_results = driver.find_elements(By.XPATH, RESULTS_LOCATOR)

page1_results[0].click()



