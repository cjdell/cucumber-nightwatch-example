var chromedriver = require('chromedriver')

require('nightwatch-cucumber')()

module.exports = {
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,

  selenium: {
    start_process: false
  },

  test_settings: {
    "default": {
      "selenium_port": 9515,
      "selenium_host": "localhost",
      "default_path_prefix": "",

      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: false,
        path: 'screenshots/default'
      },

      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": ["--no-sandbox"]
        },
        "acceptSslCerts": true
      }
    }
  }
}
