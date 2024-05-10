package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class AddMeetPage {

	private WebDriver driver;

	public AddMeetPage() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}

	public void navigateToScheduleMeet() {
		driver.get("http://localhost:4200/scheduleMeet");
	}
	
	public void navigateToAllScheduledMeet() {
		driver.get("http://localhost:4200/allScheduledMeetings");
	}

	public void enterMeetDetails() {
		driver.findElement(By.name("meetTopic")).sendKeys("Selenium KT");
		WebElement invitees = driver.findElement(By.name("numOfPeople"));
		invitees.clear(); 
		invitees.sendKeys("5");
//		driver.findElement(By.name("meetStartTime")).sendKeys("2024-05-31T20:00");
		WebElement dateTimeField = driver.findElement(By.name("meetStartTime"));
		dateTimeField.clear();
		dateTimeField.sendKeys("31102024");
		dateTimeField.sendKeys(Keys.ARROW_RIGHT);
		dateTimeField.sendKeys("0800PM");

		
		driver.findElement(By.name("schedule")).click();
	}
	
	public void locateMeet(String topicName) {
        java.util.List<WebElement> rows = driver.findElements(By.cssSelector("table[name='meetTable'] tbody tr"));
        for (WebElement row : rows) {
            if (row.getText().contains(topicName)) {
                WebElement deleteButton = row.findElement(By.name("delete-btn"));
                deleteButton.click();
                break;
            }
        }
	}
	
	public String isMeetDeleted() {
		return driver.findElement(By.name("meetMsg")).getText();
	}

	public void closeBrowser() {
		driver.quit();
	}
}