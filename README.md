# solirious-demo 
This repo contains UI tests for the Government holiday calculator site https://www.gov.uk/calculate-your-holiday-entitlement 

They cover core features and functionality such as 
- presence of key components 
- function of holiday calculator 

It is built using the playwright framework - https://playwright.dev/ 

## Install and setup  

In order to install and setup the test suite you should follow these steps 

1. clone repo `git clone git@github.com:marcpodgorney81/solirious-demo.git` 
2. Install dependencies `npm install` 
3. Install playright extension for VS Code - https://playwright.dev/docs/getting-started-vscode - this will give you access to the testing toolbar as described in how to run tests 

## Test setup 

Tests can be found in the `tests` folder, and are arranged by logical grouping - 

| Test                   | Function                                        |
| ---------------------- | ----------------------------------------------- |
| `homepage`             | Tests that webpage has loaded correcly          |
| `cookies`              | Tests for cookie banner                         |
| `calculator-behaviour` | Tests for general behaviours of calculator tool |
| `calculator-errors`    | Tests for error handling of calculator tool     |
| `calculator-e2e`       | e2e tests for calculator tool                   |

### Test locators 
As much as possible tests make use of the `getByRole` locator - as this is a preferred choice to identify components as per their accessibility role - particularly interactive elements such as button, link 

Where possible the `getByTestId` locator is used to identify components by a unique id - as this is also a relatively stable method  

## Test configuration 

Configuration for the tests can be found in the `playwright.config.ts` file in root of the project - the settings here control verious aspects of the test runs, e.g. 

- where files are outputted to 
- if screenshots/video capture is enabled 
- which browsers to run tests in 

## Running tests 

The test suite can be run using one of these methods  

### Command line 

You can use the following command to run the tests `npm run ui:tests` 

### Testing sidebar 

Alternativley you can run tests using the activity sidebar- details here https://playwright.dev/docs/getting-started-vscode#opening-the-testing-sidebar 

## Test output 

When running a set of tests it will generate an html report - `index.html`, which can be found in the `playwright-report` folder 

This allows you to see details of which tests where run, and also filter by status etc. 

### Screenshots 

In the event that tests fail it will generate a screenshot showing the browser status at that point - this is included in the playwright html report 

Also screenshots are outputted to the `test-results` folder 

## Tests in deployment 

The tests are also configured to run as part of the deployment process - see `workflows/playright.yml` 

They are set to run with the following triggers 

- On opening pull request 
- On each push to a branch (PR) 

You can find the deployments in this tab https://github.com/marcpodgorney81/solirious-demo/actions 

## Further considerations 

With more time available there are certain enhancements and additions that would be good to include 

- using a package such as https://www.npmjs.com/package/config to manage test data per environment (e.g. URLs) - currently these are maintined in `consts.ts`  
- expanding on the error handling and e2e scenarios 
- expanding on some of the assertion checks (e.g. for the e2e scenarios) 
- tidy up some of the naming conventions 
- implement unit testing and linting
- review test run strategy (e.g. browser usage, workers, parallelisation) 

Also (and more a discussion to be had with developers) it would be much more intuative if the key elements (e.g. calculation summary text) were assigned an `id` (or more ideally a `test-id`) - as would enable tests to use a more stable and reliable type of locator - currently in some cases are having to use text locator, which is not as ideal given that it may be subject to updates  

