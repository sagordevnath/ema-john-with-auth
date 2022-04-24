/**
 1. create a new firebase project in console.google.com 
 2. npm install firebase
 3. create firebase.init.js and import getAuth and export auth.
 4. Firebase settings > Authentication > enable Email and password auth
 5. Create Login, signup component, setup route
 6. attach field handler and form submit handler
 7. npm install --save react-firebase-hooks
 8. useCreateUserWithEmailAndPassword from react firebase hooks
 9. if user is created redirect to the expected page
 10. useSignInWithEmailAndPassword for sign in
 11. Create RequireAuth component ==> check user exists also tract user authentication
 12. In route warp Protected component by using require Auth component

*/


/***
 * Firebase hosting steps
 * 1. npm install -g firebase-tools (one time for computer)
 * 2. firebase login (one time for computer)
 * 3. firebase init (one time each project)
 * 4. npm run build (every time you want to deploy)
 * 5. firebase deploy (every time you want to deploy)
 * 
 */