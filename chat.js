// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDbPz1fm8cwhCwpzW8lDaTvEcOdN0P5eQQ",
    authDomain: "c100-42ed7.firebaseapp.com",
    databaseURL: "https://c100-42ed7-default-rtdb.firebaseio.com",
    projectId: "c100-42ed7",
    storageBucket: "c100-42ed7.appspot.com",
    messagingSenderId: "314832539853",
    appId: "1:314832539853:web:e47edd4f2d4cb50f069984",
    measurementId: "G-WG0WTWP5DK"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";    
}



