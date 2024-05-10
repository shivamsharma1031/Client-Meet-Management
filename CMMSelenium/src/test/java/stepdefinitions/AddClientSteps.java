package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.AddClientPage;

public class AddClientSteps {
	private AddClientPage addClient = new AddClientPage();

	@Given("the user is on the register client page")
	public void navigateToClientpage() {
		addClient.navigateTo();
	}

	@When("the user enters the client details and click on the register button")
	public void enterClientDetails() {
		addClient.enterClientDetails();
	}

	@Then("the client added successfully message should be the output on the page")
	public void addedSuccessfully() {
		// successfullmsg test
		addClient.isClientAdded();
		addClient.closeBrowser();
	}

}
