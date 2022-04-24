// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvWcNc8E6XMnU84rLtltFrx13iAYMKTsQ",
  authDomain: "class-8e23e.firebaseapp.com",
  databaseURL: "https://class-8e23e-default-rtdb.firebaseio.com",
  projectId: "class-8e23e",
  storageBucket: "class-8e23e.appspot.com",
  messagingSenderId: "707855019550",
  appId: "1:707855019550:web:fb4cdc39a290678252880f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
