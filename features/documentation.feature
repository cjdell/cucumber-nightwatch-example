Feature: Example feature

  Scenario: Reading documentation 1
    Given I am on the Cucumber.js GitHub repository
    When I click on the link "NodeJs Example"
    Then I should see "nodejs_example.md"

  Scenario: Reading documentation 2
    Given I am on the Cucumber.js GitHub repository
    When I click on the link "code of conduct"
    Then I should see "We are welcoming"