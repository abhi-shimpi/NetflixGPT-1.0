# Netflix GPT

- Create React app
- configured Tailwind css
- Routing of App
- Made a header 
- Made form for sign in
- Added validations for email and password
- Added field for sign up with condition of state variable
- Seted up firbase within project 
- Deployed it
- Written code for create user (sign up)
- Written code for sign in user
- Created appStore
- Created userDetails slice 
- Dispatched userdetails on auth change
- Navigated to browse page on sign in and on login page on sign out
- Creared movies Slice 
- Made custom hook to fetch nowplaying movies
- Made MainContainer 
- Made VideoTile and added title there
- Made VideoContainer and played video of first movie coming in response
- Made SecondaryContainer
- Made MoviesList 
- Made Movie Card 
- Made hooks for Popular,TopRated , and Upcoming movies and called them.
- Install open ai
- open ai configuration 
- Making customised query
- fetching data by passing query through open ai fetch function

# TO Do
- Checkout navigate in Body (that bug)
- Align video title and movies list
- Checkout .env working

# Learnings
- Host application on production
- Share it on social media ,showcase your skills , attract people
- Learning DOCUMENTATION IS SUPERPOWER OF DEVELOPER
-   return () => {
      unsubscribe();
      console.log("body unmount")
    }
    Good Hyigene
- There should not be hardcoded url or path , keep it in constant file
- Early return
- constants.langkey.search -> will give a error
- <select  value={langKey} > -> selected language
- REACT_APP -> To make it work with React or to identify these keys for React
    - These env variables are seted on server where you have hosted your app
- Memoization 

# Question to search
- What is difference between 100% and 100vh
- What is inset

 # Notes
 - You can get input data eigther by using state variables or by using useRefs by keeping refrence to input
 - ref={email} -> For reference
 - /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/ -> regex for email test() function is used to test it on email
 - 3 Steps to deploy 
    - npm install -g firebase-tools
    - firebase login
    - firebase init 
    - firebase deploy

# Features
- Login
    - SignIn-SignUp
    - Redirect to Browse page
- Browse (AFTER autehntication)
    - Header
    - Main movie
        - Trailer running in bg
        - Title and Discription on Trailer
        - Movie Suggetions
            - Movie List * N
- Netflix GPT 
    - Search bar
    - Movie suggetions


# Akshay Sir readme
Create React App
Configured TailwindCSS
Header
Routing of App
Login Form
Sign up Form
Form Validation
useRef Hook
Firebase Setup
Deploying our app to production
Create SignUp User Account
Implement Sign In user Api
Created Redux Store with userSlice
Implemented Sign out
Update Profile
BugFix: Sign up user displayName and profile picture update
BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa