var provider = new firebase.auth.FacebookAuthProvider();

function createAccount(email,password){	
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});	
}

function signInWithEmailAndPassword(){	
	firebase.auth().signInWithEmailAndPassword($('#emailLogin').val(),$('#passwordLogin').val()).catch(function(error) {
		   
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  alert(errorMessage);
		   
		});
		
		  var user = firebase.auth().currentUser;
		if (user) {
		  alert(user.uid);
		} else {
		  // No user is signed in.
		}
}
function logout(){
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	// An error happened.
	});
}





document.getElementById("facebookSignInBtn").addEventListener("click", function(){
	 firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  alert(user);
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
});

