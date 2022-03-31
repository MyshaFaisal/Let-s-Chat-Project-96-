
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingRoomName"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names);
row = "<div class ='room_name' id ="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function LogOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


