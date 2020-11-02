## Dependencies

Required dependencies:

```
    axios
    bootstrap
    dotenv
    node-sass
    react
    react-bootstrap
    react-dom
    react-router-dom
    @bit/nexxtway.react-rainbow.date-picker
```

Prior to dependencies installation, set @bit as scoped registry by running - <br/>
    `npm config set ‘@bit:registry’ https://node.bit.dev`

run `npm install` to install required packages.

## Starting app

To run the app in the development mode, change the **API** variable to **DEV_URL** in *utils.js* file in root folder<br/>
*copilot_server backend server must be running to enable api calls*
*To use your own backend server, change DEV_URL to desired backend server url*
run `npm start` in the root folder to start local server.

