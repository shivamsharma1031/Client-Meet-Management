package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class AddClientPage {

	private WebDriver driver;

	public AddClientPage() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}

	public void navigateTo() {
		driver.get("http://localhost:4200/registerClient");
	}

	public void enterClientDetails() {
		driver.findElement(By.name("cname")).sendKeys("Rohit Sharma");
		driver.findElement(By.name("mail")).sendKeys("rohitsharma@gmail.com");
		driver.findElement(By.name("address")).sendKeys("2/3, AG colony");
		driver.findElement(By.name("pwd")).sendKeys("123456789@a");
		driver.findElement(By.name("pwd2")).sendKeys("123456789@a");
		driver.findElement(By.name("register")).click();
	}

	public String isClientAdded() {
		return driver.findElement(By.name("msg")).getText();
	}

	public void closeBrowser() {
		driver.quit();
	}
}
