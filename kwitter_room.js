const firebaseConfig = {
      apiKey: "AIzaSyBksG1yuNCOlPvI55wcp_SqrFK64Y3hOm4",
      authDomain: "adv-c-93-to-c-97-kwitter.firebaseapp.com",
      databaseURL: "https://adv-c-93-to-c-97-kwitter-default-rtdb.firebaseio.com",
      projectId: "adv-c-93-to-c-97-kwitter",
      storageBucket: "adv-c-93-to-c-97-kwitter.appspot.com",
      messagingSenderId: "982817851494",
      appId: "1:982817851494:web:c044ef6b5ba3c282c385a7",
      measurementId: "G-0LB9RWM1F4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
