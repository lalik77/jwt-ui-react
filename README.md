# 1 -  Start - Installing Create React App package 

The first thing we have to install is Node.js and with npm install
we have to install the third party library.

![](img/start/install-third-party-library-npm-1.png)

![](img/start/install-third-party-library-npm-2.png)
 
   Using Visual Code Editor
   
  1.1 -  Install next extension `Simple React Snippet`

![](img/start/simple-react-snippet.png)

  1.2 -  Install Prettier Code Formattor

  ![](img/start/prettier.png)

# 2 -  Create the App

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

# 3 -  Install Bootstrap and React Bootstrap

Install bootstrap and react-bootstrap
Remove header.css previously created file and remove `import "./header.css";` in `header.js`
![](img/header/npm-install-bootstrap.png) 
![](img/header/npm-install-react-bootstrap.png)

Edit `header.js` file

![](img/header/header-js-2.png)

# 4 -  Routing - Configure the paths

Step 1 - Install `react-router-dom` if you haven't already:

![](img/routing-header/terminal-install-react-router-dom.png)

Step 2 - In header.js
Use `Link` component for navigation:
Replace the `href` attribute with the `to` prop provided by `Link`:
![](img/routing-header/header-js.png)

Step 3 - In app.js

![](img/routing-header/app-js.png)

We have this 
![](img/routing-header/result.png)


# 5 -  Before continue - refactoring the code

 Inside  `src` folder let's create a new folder `components` and put all ours component (`admin`, `forbidden` ..) inside.

![](img/refactoring/components-folder.png)

Let's rename our components files as `..Component` and change `.js` extension to `.jsx`

![](img/refactoring/refactoring.png)


# 6 -  Create form login

We have to install `axios`.
We will use `useState `for managing form state.

![](img/form-login/installing-axios.png)

Create file `loginComponent.jsx`

![](img/form-login/login-component-jsx-1.png)

We have this 

![](img/form-login/result-1.png)

# 7 -  Communication with the backend

We have to launch the [spring-boot app in backend](https://github.com/lalik77/jwt-backend-example)  ,

and to change `loginComponent.jsx` file to call the backend API.

We use `useState `for managing form state and `axios` for making HTTP requests. 
Note that you need to install axios separately by running npm install axios in your React project.

![](img/form-login/login-component-jsx-2.png)

![](img/form-login/result-2.png)

We have the server returned us a jwt token that we have to store somewhere. 


# 8 - Like using localStorage in Angular , in React -> React context and hooks

Implement the functionality to store data from the backend API (like jwtToken and roles) in localStorage and then 
redirect the user based on their role in our React app.

Let's create like in `Angular` a similar service in `React` for managing user authentication. 
Create inside `src` a new folder `context`.
Create a new file called `authContext.jsx` in `src/context` folder with the following content:

![](img/auth-context/structure-aut-context.png)

![](img/auth-context/auth-context.png)


And wrap our `app` component with the `AuthProvider` in `app.js`

![](img/auth-context/app-js.png)

Now, in our `loginComponent.jsx` we will use `useAuth` hook to access the authentication context ans call the `login`
function when the 
login is successful.

![](img/auth-context/login-component.png)

# 9 - Write logic for Login and Logout

In React , we can implement conditional rendering similar to Angular `ngIf` using JavaScript logical operators 
within JSX.
We can achieve this by conditionally rendering different elements based on the state of authentication.
We have to modify our `headerComponent.jsx`

![](img/login-logout-logic/header-component-1.png)


In the context where we manage the authentication state we will add `isLoggedIn` state and a function `setIsLoggedIn`
to update the authentication state

![](img/login-logout-logic/auth-context.png)

`const [isLoggedIn, setIsLoggedIn] = useState(false);`


1 - `const`: This keyword is used to declare a constant variable. In this case, it's declaring a constant named isLoggedIn.

2 - [isLoggedIn, setIsLoggedIn]: This is array destructuring syntax. It's used to extract values from an array. In this case, it's extracting two values from the array returned by `useState(false)`. The first value is assigned to `isLoggedIn`, and the second value is assigned to `setIsLoggedIn`.

3 - useState(false): This is a React Hook called useState. It allows functional components to manage state. The argument false passed to useState is the initial state value for the isLoggedIn variable. It initializes isLoggedIn to false.

So, overall, this line of code is declaring a constant variable isLoggedIn and a function `setIsLoggedIn`, which are used to manage the state of whether a user is logged in `(true)` or not logged in `(false)`. Initially, `isLoggedIn` is set to `false`. Later, when you call `setIsLoggedIn(true)`, it will update `isLoggedIn` to `true`, indicating that the user is logged in. Similarly, `setIsLoggedIn(false)` will update `isLoggedIn` to `false`, indicating that the user is logged out.

 
 Let's change the home, admin and user page with bootstrap.

 ![](img/login-logout-logic/home-component-bootstrap.png)

 ![](img/login-logout-logic/home-component-rendered.png)

[![login-logout](img/login-logout-logic/youtube-thumb.png)](https://youtu.be/SQShJEMMiIc "login-logout")


# 10 - Show Admin or User Dashboard respectively to who is logged in

To achieve rendering different components based on the user's role, we'll need to modify our React application's logic. 
Here's how we can do it:


Update `authContext.jsx` and `headerComponent.jsx`

`authContext.jsx`

![](img/login-logout-logic/auth-context-2.png)

`headerComponent.jsx`

![](img/login-logout-logic/header-component-2.png)

[![login-logout-2](img/login-logout-logic/youtube-thumb-2.png)](https://youtu.be/7qrI-jyATbk "login-logout-2")


# 11 - Authentication and Authorization with React Router

We will create protected routes

Let's create a new folders `utils`, `forbidden` , create a new file `protectedRoute.jsx` , `forbiddenComponent.jsx` 
and let's rename `app.js` to `app.jsx`.

![](img/protected-routes/create-protected-route-1.png)

`protectedRoute.jsx`

![](img/protected-routes/protected-route-1.png)

`forbiddenComponent.jsx`

![](img/protected-routes/forbidden.png)

Let's use our protected route element in `app.jsx`

Let's add some logging in our `headerComponent.jsx`

![](img/protected-routes/header-component.png)

Let's also refactor `authContext.jsx`

```JSX
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [roles, setRoles] = useState(
    JSON.parse(localStorage.getItem("roles")) || {}
  );
  const [jwtToken, setJwtToken] = useState(
    localStorage.getItem("jwtToken") || ""
  );
  const isLoggedIn = !!jwtToken;
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "");   

  console.log("AuthContext#jwtToken: " + jwtToken);
  console.log("AuthContext#userRole: " + userRole);
  console.log("------------------------------------AuthContext#Block#Finish:------------------------------------");

  const login = (response) => {    
    setJwtToken(response.jwtToken);
    setUserRole(response.user.role[0].roleName); // Set user's role upon login    
    localStorage.setItem("jwtToken", response.jwtToken);
    localStorage.setItem("userRole", response.user.role[0].roleName);
  };

  const logout = () => {   
    setJwtToken("");    
    setUserRole("");    
    localStorage.clear();
  };

  // Load userRole from localStorage on initial render
  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole");    
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }   
  }, []);

  return (
    <AuthContext.Provider
      value={{ roles, userRole, user, jwtToken, isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

```

To test the application, let's make some changes in our Spring Boot app to create a concrete user during initilization.

![](img/protected-routes/spring-boot-user-init.png)

You can find the code at commit  authentication-authorization-with-react-router

[![protected-routes](img/protected-routes/youtube-thumb.png)](https://youtu.be/R5xZi_XaG8E "protected-routes")

# 12 - Calling end points in the backend especially created for user and admin

We have to hit those endpoints (See backend application)

![](img/hit-backend-endpoints/hit-end-points.png)

Open `adminComponent.jsx` and add some code.

![](img/hit-backend-endpoints/admin-component.png)

Let's test as admin

![](img/hit-backend-endpoints/test-as-admin.png)

Write the same thing for user.

Open `userComponent.jsx` and add some code.

![](img/hit-backend-endpoints/user-component.png)

Let's test as user

![](img/hit-backend-endpoints/test-as-user.png)