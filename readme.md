# Expense Tracker

React Native project for tracking purchases and expenses. 

![Image of App Dashboard](https://s3.amazonaws.com/eewill/images/expenseTrackerSS1.jpg)

## How it works

Expenses and purchases are entered in the app, and are sent to a remote server on submit.

![Image of Add Expense page](https://s3.amazonaws.com/eewill/images/expenseTrackerSS2.jpg)

## Running

Project can be run using `react-native run-android`, if an emulator or device is currently running or attached.

# Upcoming

Project is still in its early stages, basic expense tracking functionality is currently working. 

- Charts page
- Reports page
- Make the API public
- Local storage that syncs with the remote server
- Improve style and UI

## Tests

A couple snapshot tests are currently set up in the `tests` directory. They rely on Jest and Enyzme and can be run using `npm test`. Need a whole lot more tests, and going to use TDD for future components. 