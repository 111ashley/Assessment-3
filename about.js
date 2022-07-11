console.log("hello world");

function submit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	// alert("form submit")
	window.alert("form submit")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', submit);

document.getElementById("img1").addEventListener("mouseover", function(){
	alert("You are meant for greatness!");
  });



// function giveCompliment() 
// {	
// 	document.getElementById("img1").addEventListener('mouseover',function(){
// 		alert(`You are meant for greatness!`)
// 	})


// }

