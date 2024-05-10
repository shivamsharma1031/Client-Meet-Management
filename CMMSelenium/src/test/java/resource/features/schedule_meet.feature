Feature: Scheduling a meet
  Scenario: Scheduling a new meet
    Given the user is on the schedule meet page
    When the user enters the meet details and click on the schedule button
    Then the user should land up in all scheduled meets page
    
  Scenario: Scheduling a meet and cancel it
    Given the user is on the schedule meet page
    When the user enters the meet details and click on the schedule button
    Then the user should land up in all scheduled meets page
    And the user should delete the meeting with topic "Selenium KT"