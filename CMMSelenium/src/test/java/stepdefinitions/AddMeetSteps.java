package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.AddClientPage;
import pages.AddMeetPage;

public class AddMeetSteps {
	private AddMeetPage addMeet = new AddMeetPage();

	@Given("the user is on the schedule meet page")
	public void navigateToScheduleMeet() {
		addMeet.navigateToScheduleMeet();
	}

	@When("the user enters the meet details and click on the schedule button")
	public void enterMeetDetails() {
		addMeet.enterMeetDetails();
	}

	@Then("the user should land up in all scheduled meets page")
	public void navigateToAllScheduledMeet() {
		addMeet.navigateToAllScheduledMeet();
	}

	@And("the user should delete the meeting with topic {string}")
	public void I_delete_the_meeting_with_topic(String topicName) {
		addMeet.locateMeet(topicName);
	}
	
	@And("the meet deleted successfully message should be the output on the page")
	public void isMeetDeleted() {
		addMeet.isMeetDeleted();
	}

}
