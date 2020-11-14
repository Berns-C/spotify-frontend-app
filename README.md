## About this project

This is a Spotify built with React app. What this does is it just disply the user's playlists and the playlists tracks. It is nothing original or new perse, it's just display playlists of the user. I just wanted to built something that is fun for me and to have my own version of connecting to Spotify APIs and rendering those data.

Since I followed Spotify Web Api Auth Examples demo, I also made my backend on top of that. Link here https://github.com/Berns-C/spotify-backend-app.

## Built With

For this project to work of course I have used the following guides/techs/tool/code:
  
  ## Spotify API --> https://developer.spotify.com/documentation/web-api/quick-start/
  Spotify has provided a great documentation for any developers who want to try to use those public APIs for themselves. FYI, in order to use API you will need to 
  follow their guide for authorization and get the access token. There is a full explanation on how it works in their documents just follow the link above.

  ## Spotify Web API AUTH Examples --> https://github.com/spotify/web-api-auth-examples
  In here you can follow their demos of different flows for authenticating against the Spotify Web API. When trying to run the code and understanding how it works you will need 
  to refer to the documentation for reference as it can be a bit confusing. This demo will show how you can create a simple callback for Spotify to send the access token. As to 
  properly authenticate you'll need also to authorized your app and set the url for the call back.
  More on that here https://developer.spotify.com/documentation/web-api/quick-start/.
  
  ## NodeJS --> https://nodejs.org/en/ && Express --> https://www.express.com/
  For NodeJS and Express I didn't used any template to quickly create the backend. I was too lazy to find any boilerplate to use so I just code a simple backend that would 
  handle the connection of frontend app to Spotify. Link is here if you want to see my code for the backend https://reactjs.org/docs/getting-started.html.
  
  ## React --> https://reactjs.org/docs/getting-started.html
  For create I used the create-react-app template, you can follow it in the link and since this is created from the react boilerplate. There is more descriptio below about the 
  commands that came with the boilerplate.
  
  ## Custom Toast --> https://github.com/uzochukwueddie/react-toast
  In my code I used this responsive animated toast (I was too lazy to create my own but trust me this is a cool toast).
  I have used it to display errors or devices is detected from Spotify.
  
  ## Material UI - https://material-ui.com/
  I made custom styled components for React. I am not a fan of having separate css files for styling components, I find them confusing.
  Since I am creating a reusable components for React, I just find it more interesting to see the css styles from there so I know what style it uses.
  With Material UI I can create styled components, css style unique from that components only.
  
  ## Axios --> https://www.npmjs.com/package/react-axios
  For request calls.
  
  ## React Redux --> https://react-redux.js.org/
  I know this is a small app and It can be done without using Redux. But I like things to be organize with handling states.
  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
