module.exports = function () {
  this.Given(/^I am on the Cucumber.js GitHub repository$/, function () {
    this
      .useCss()
      .url('https://github.com/cucumber/cucumber-js/tree/master')
      .waitForElementVisible('body', 2000)
  });

  this.When(/^I click on the link "([^"]*)"$/, function (text) {
    this
      .useXpath()
      .click("//a[contains(text(), '" + text + "')]")
      .useCss()
      .waitForElementVisible('body', 2000)
  });

  this.Then(/^I should see "([^"]*)"$/, function (text) {
    this
      .useXpath()
      .expect.element("//*[contains(text(),'" + text + "')]").to.be.present
  });
};