# Todo App

## About

This App was created with create-react-app.

Data is fetched from an API at init of the application (while the fetching loader is being displayed). If the API encounters an error the application will inform the user to prevent an infinite load.
To keep the data at the frontend I used the Context API, all components are functional components using the newest hooks API.
I used a CSS framework called Bulma.Io to speed up the process of styling.

Accessibility was checked with usage of Voice Over & React Axe alongside eslint a11y.
Lighthouse report shows 4x 100%.
React Axe can be checked on your local environment by running `npm run lint`

Tested on: Ipad Air 3d gen, Samsung A70, Chrome on mac, FF on mac, Chrome on windows

## Build

To build the project you can use:

NPM:
`npm install`
`npm run start`

or yarn
`yarn install`
`yarn start`
