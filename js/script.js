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
		daily: $("#daily option:selected").val()

	})
	.then(function (docRef) {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch(function (error) {
		console.error("Error adding document: ", error);
	});

	 }, 1000); 
	 
}

function addUserProfile() { 
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
}

