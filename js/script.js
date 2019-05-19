var imageContainerMargin = 70; // Margin + padding

var convertedGeojson = {};
console.log('init');

// This watches for the scrollable container
var scrollPosition = 0;
$('div#contents').scroll(function () {
	scrollPosition = $(this).scrollTop();
});

var db = firebase.firestore();





var delay = (function () {
	var timer = 0;
	return function (callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
})();



function onSaveBtnClick() {
	


	
 	delay(function () {
	 db.collection("reminder").add({
		message:$('#message').val(),
		time: $('#time').val(),
		date: $('#date').val(),
		daily: $("#daily option:selected").val(),
		userUid : firebase.auth().currentUser.uid

	})
	.then(function (docRef) {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch(function (error) {
		console.error("Error adding document: ", error);
	});

	 }, 1000); 
	 
}

function onSaveProfileBtnClick () { 
	if(!$('#userProfilId').val()){
		 db.collection("userProfil").add({ 
			userUid: $('#userUid').val(),
			surname: $('#surname').val(),
			name: $('#name').val(),
			city: $('#city').val(),
			age: $('#age').val(),
			address: $('#address').val()

		})
		.then(function (docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function (error) {
			console.error("Error adding document: ", error);
		});	 
	}else{
		var profileRef = db.collection("userProfil").doc($('#userProfilId').val());

		// Set the "capital" field of the city 'DC'
		return profileRef.update({
			surname: $('#surname').val(),
			name: $('#name').val(),
			city: $('#city').val(),
			age: $('#age').val(),
			address: $('#address').val()
		})
		.then(function() {
			console.log("Document successfully updated!");
		})
		.catch(function(error) {
			// The document probably doesn't exist.
			console.error("Error updating document: ", error);
		});
		
		
	}
}

