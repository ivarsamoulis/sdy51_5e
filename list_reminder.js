  const list_rem = document.getElementById("reminder-list");


  function renderReminder(doc){


let a = document.createElement('a'); 
a.classList.add("list-group-item");
a.setAttribute('data-id',doc.id);

let header = document.createElement('h3');
header.classList.add("list-group-item-heading");
header.textContent=doc.data().message;

let pDate = document.createElement('p');
pDate.classList.add("list-group-item-text");
pDate.textContent=doc.data().date;

let pHour = document.createElement('p');
pHour.classList.add("list-group-item-text");
pHour.textContent=doc.data().time;

let pDaily = document.createElement('p');
pDaily.classList.add("list-group-item-text");
pDaily.textContent=doc.data().daily;

let pActive = document.createElement('p');
pActive.classList.add("list-group-item-text");
pActive.textContent=doc.data().active;


a.appendChild(header);
a.appendChild(pDate);
a.appendChild(pHour);
a.appendChild(pDaily);
a.appendChild(pActive);




list_rem.appendChild(a);
}

/*let li = document.createElement('li');
let message = document.createElement('span');
let date = document.createElement('span');

li.setAttribute('data-id',doc.id);
message.textContent =doc.data().message
date.textContent =doc.data().date;
li.appendChild(message);
li.appendChild(date);
list_rem.appendChild(li); */
 var id ;
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
     id = user.uid;


 firebase.firestore().collection("reminder").where("userUid", "==", id)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data().message);
            renderReminder(doc);
           console.log(doc.message, " => ", doc.date);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });



  } else {
  alert("No user");
  }
});

   
    function MenuReminders(){

        setTimeout("location.href = 'menu_reminders.html';",1000);

    }