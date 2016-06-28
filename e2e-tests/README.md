# End-3-End Testing (Protractor)

To run the end-2-end (e2e) tests against the application, we use [Protractor][protractor].

## Starting the Web Server
 
First, we need the application to be running via the web-browser
From the project's root directory run:

```
vagrant up 
```

The application should now be avaliable at http://192.168.10.13/ 
 
## Testing with Protractor

As a one-time setup, download webdriver.

```
npm run update-webdriver
```

Start the Protractor test runner, using the e2e configuration:

```
npm run protractor
```

[protractor]: https://github.com/angular/protractor