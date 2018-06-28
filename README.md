# Chat client

Socket.io based chat application. The application supports desktop and mobile devices.

* [Features](#features)
* [Get started](#get-started)
* [Development](#development)
* [Tests](#testing)

## Features

* Chat messages with date time and sender name
* Emoji smiles support
* Links support (images, youtube and links to other websites)
* Controlled scroll. Updates if the chat view is active and a message received
* Unread messages counter
* Message sending by button click, by Enter key and hot keys if enabled
* Dark and Light themes
* Internationalization
* Optimised rendering (renders chat view only once)

## Get started

**You’ll need to have Node >= 6 on your machine**

1. Clone the repository

```sh
git clone https://github.com/ZakharDolozhevskiy/chat-application.git && cd chat-application
```

2. Install dependencies
```sh
npm install
```

3. Run the app in development mode
```sh
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Development

Development dependencies and scripts description

### Scripts

* `start` - run application in development mode with live reloading and dev warnings in console
* `test` - run tests (pattern: *.test.js)
* `build` - create production ready build
* `coverage` - show code coverage in CLI
* `coverage:open` - show code coverage in a browser

### Main dependencies

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [MaterialUI](https://material-ui.com/)
* [Styled components](https://www.styled-components.com)
* [Socket.io](https://socket.io/) (v0.9.16)
* [React create app](https://github.com/facebook/create-react-app)
* [React app rewired](https://github.com/timarney/react-app-rewired)

### Structure

```
chat-application
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    ├── components  // All reusable or stateless components
    ├── middlewares // Middlewares process all side effects
    ├── modules     // Tools
    ├── pages       // Main views with bussines logic
    ├── reducers
    ├── themes
    ├── translator  // Translation provider with classes
    ├── app.js
    ├── config.js
    ├── index.js
    ├── setupTests.js
    └── store.js
```

## Testing

Code covered by unit tests, each folder has *test* folder with related test suites.
Snapshots used for leafs components. 

Code coverage close to 100%

### Testing tools

* [Enzyme](http://airbnb.io/enzyme/)
* [Jest](http://jestjs.io/)
