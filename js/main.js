function updateProfile() {
  // Sign out of Firebase.
  console.log ('updateProfile');
   firebase.firestore().collection('userProfil').add({
    name:  document.getElementById("profile-edit-firstname").value,
    surname: document.getElementById("profile-edit-lastname").value,
   age: document.getElementById("profile-edit-age").value,
   city:document.getElementById("profile-edit-city").value,
   address: document.getElementById("profile-edit-address").value,
  }).catch(function(error) {
  	  console.log ('error');
	  document.getElementById("#fail-upd-profile").show();
      console.error('Error writing new message to Firebase Database', error);

  }); 

  

        // Move to a new location or you can do something else
setTimeout("location.href = 'menu_logged.html';",1000);


}
function closeProfile() {
  // Sign out of Firebase.
  console.log ('closeProfile');
 setTimeout("location.href = 'menu_logged.html';",1000);

  }

function saveReminder(){
console.log ('saverReminder');
   firebase.firestore().collection('reminder').add({
   message:  document.getElementById("reminderMsgTextarea").value,
   date: document.getElementById("reminder-date-input").value,
   time: document.getElementById("reminder-time-input").value,
   daily:$("#reminder-daily").prop('checked'),
   active: $("#reminder-active").prop('checked'),
  }).catch(function(error) {
  	  console.log ('error');
	  document.getElementById("#fail-upd-profile").show();
      console.error('Error writing new message to Firebase Database', error);

  }); 

  

        // Move to a new location or you can do something else
setTimeout("location.href = 'menu_logged.html';",1000);

}

function closeReminder(){
  console.log ('closeReminder');
 setTimeout("location.href = 'menu_reminders.html';",1000);

  }

