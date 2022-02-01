const firebaseConfig = {
    apiKey: "AIzaSyD_mD7L-0v0KMizr31_dsKC9QJ5avIYNM8",
    authDomain: "c93kwitter-26724.firebaseapp.com",
    databaseURL: "https://c93kwitter-26724-default-rtdb.firebaseio.com",
    projectId: "c93kwitter-26724",
    storageBucket: "c93kwitter-26724.appspot.com",
    messagingSenderId: "861025533602",
    appId: "1:861025533602:web:67737bf9858e4e773be1fb"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    //End code
    });});}
getData();