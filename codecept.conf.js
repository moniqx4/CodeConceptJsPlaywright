require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeConceptJsPlaywright',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    plugins: {
      'allure': {}
    },    
    testomat: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: 'owb878996gew',
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'loginAs', // use `loginAs` instead of login
      users: {
        employee: {
          login: (I) => {
             I.amOnPage('/login');
             I.fillField('companyAlias', '');
             I.fillField('username', 'user@site.com');
             I.fillField('password', '123456');
             I.click('Login');
          },
          check: (I) => {
             I.amOnPage('/');
             I.see('User', '.navbar');
          },
        },
        admin: {
          login: (I) => {
             I.amOnPage('/login');
             I.fillField('email', 'admin@site.com');
             I.fillField('password', '123456');
             I.click('Login');
          },
          check: (I) => {
             I.amOnPage('/');
             I.see('Admin', '.navbar');
          },
        },
      }
    },
    customLocator: {
      enabled: true,
      attribute: 'data-automation-id'
    }   
  },  
  helpers: {
      Playwright: {
        url: 'http://localhost',
        show: true,
        browser: 'chromium',
        waitForNavigation: 'networkidle0',
        waitForAction: 150
      },
      REST: {
        endpoint: "http://localhost/api/v1/",
        defaultHeaders: {
          'Auth': '11111',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        GraphQL: {
          endpoint: "http://localhost/graphql/",
          defaultHeaders: {
            'Auth': '11111',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        },
    }
  }
    // ..  
}