module.exports = function () {
  this.Given(/^I am on the Cucumber.js GitHub repository$/, function () {
    this
      .url('https://github.com/cucumber/cucumber-js/tree/master')
  });

  this.When(/^I click on the link "([^"]*)"$/, function (text) {
    this
      .useXpath()
      .click("//a[contains(text(), '" + text + "')]")
  });

  this.Then(/^I should see "([^"]*)"$/, function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    this.useXpath().expect.element(xpath).to.be.present;
  });
};