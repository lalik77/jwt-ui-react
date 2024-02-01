### 1 -  Start - Installing Create React App package 

The first thing we have to install is Node.js and with npm install
we have to install the third party library.

![](img/start/install-third-party-library-npm-1.png)

![](img/start/install-third-party-library-npm-2.png)
 
   Using Visual Code Editor
  1.1 -  Install next extension `Simple React Snippet`

![](img/start/simple-react-snippet.png)

  1.2 -  Install Prettier Code Formattor

  ![](img/start/prettier.png)

### 2 -  Create the App

![](img/start/command-creating-app.png)

In terminal run with npm start

![](img/start/npm-start.png)

We will delete all files inside the source folder.
Let's create a new folder `header` and inside `header.js` and `header.css`

![](img/header/header-js-1.png)
![](img/header/header-css.png)

Now let's use Header component in new created App component.
Create app.js file in ./src/...
![](img/header/app-js.png)

In index.js let's render the ui 
![](img/header/index-js.png)

### 3 -  Install Bootstrap and React Bootstrap

Install bootstrap and react-bootstrap
Remove header.css previously created file and remove `import "./header.css";` in `header.js`
![](img/header/npm-install-bootstrap.png) 
![](img/header/npm-install-react-bootstrap.png)

Edit `header.js` file

![](img/header/header-js-2.png)

### 4 -  Routing - Configure the paths

step 1 - Install `react-router-dom` if you haven't already:

![](img/routing-header/terminal-install-react-router-dom.png)

step 2 - Check if you have a `BrowserRouter` wrapping your application. This is usually done in your main `index.js`

![](img/routing-header/index-js.png)

step 3 - Use `Link` component for navigation:
Replace the `href` attribute with the `to` prop provided by `Link`:
![](img/routing-header/header-js.png)