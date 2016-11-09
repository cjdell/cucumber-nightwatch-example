module.exports = function () {
  this.Given(/^I open Google's search page$/, function () {
    this
      .useCss()
      .url('http://google.com')
      .waitForElementVisible('body', 2000)
  })

  this.Then(/^the title is "([^"]*)"$/, function (title) {
    this
      .assert.title(title)
  })

  this.Then(/^the Google search form exists$/, function () {
    this
      .useCss()
      .assert.visible('input[name="q"]')
  })

  this.When(/^I search for (.*)$/, function (expression) {
    this
      .useCss()
      .setValue('input[name=q]', expression)
      .submitForm('input[name=q]')
      .waitForElementVisible('.rc', 2000)   // Wait for results to appear
  })

  this.Then(/^the search result should contain (.*)$/, function (result) {
    this
      .useCss()
      .assert.containsText('body', result)
  })
}