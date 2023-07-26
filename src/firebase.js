var firebase = require('firebase/app');
require('firebase/database');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBOEZfg6t_Xkzp1r0nA4UtD6iVTFWZlqKo",
  authDomain: "notes-fb8df.firebaseapp.com",
  projectId: "notes-fb8df",
  storageBucket: "notes-fb8df.appspot.com",
  messagingSenderId: "492619595819",
  appId: "1:492619595819:web:9a5ca0bd00981f6eeeea6e",
  measurementId: "G-REZPSD3HP6"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
module.exports = firebase;
