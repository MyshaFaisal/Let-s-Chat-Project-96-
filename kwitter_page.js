//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAK8pc7-gjdsbSJnzEHWU7OZYYvTjQcePk",
    authDomain: "kwitter-60994.firebaseapp.com",
    databaseURL: "https://kwitter-60994-default-rtdb.firebaseio.com",
    projectId: "kwitter-60994",
    storageBucket: "kwitter-60994.appspot.com",
    messagingSenderId: "800736521746",
    appId: "1:800736521746:web:ffdd83ef37abad23ca72cb"
  };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
