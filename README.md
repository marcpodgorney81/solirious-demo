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

## Running tests 

The test suite can be run using one of these methods  

### Command line 

You can use the following command to run the tests `npm run ui:tests` 

### Testing sidebar 

Alternativley you can run tests using the activity sidebar- details here https://playwright.dev/docs/getting-started-vscode#opening-the-testing-sidebar 

## Tests in deployment 

The tests are also configured to run as part of the deployment process - see `workflows/playright.yml` 

They are set to run with the following triggers 

- On opening pull request 
- On pushes to a branch (PR) 

