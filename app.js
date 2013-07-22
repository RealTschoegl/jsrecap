$(document).ready(function() {
  $(':submit').click(function() {
  	$('div#error_message').empty();
  	$('div#success_message').empty();
  	var charFind = document.getElementById("email").value
  	event.preventDefault();
  	if (document.getElementById("email").value == "") {
    	$('div#error_message').append("- Enter your email address.<br>");
	   } 
	  if (document.getElementById("password").value == "") {
    	$('div#error_message').append("- Enter your password.<br>");
	   } 
	  if (document.getElementById("email").value.length < 8) {
    	$('div#error_message').append("- Your email should be at least 8 characters.<br>");
	   } 
	  if (document.getElementById("password").value.length < 8) {
    	$('div#error_message').append("- Your password should be at least 8 characters.<br>");
	   } 
	  if (charFind.indexOf("@") == -1) {
    	$('div#error_message').append("- Your email should contain an '@' symbol.<br>");
	   }  
	  if (charFind.indexOf(".") == -1) {
    	$('div#error_message').append("- Your email should contain an '.' symbol.<br>");
	   }  
    return true
    if (return = true) {
      $('div#success_message').append("Your email has been sent!");
    } 
  });
  
});

// $(document).ready(function() {
//   $(':submit').click(function() {
//   	$('div#error_message').empty();
//   	event.preventDefault();
//   	if (document.getElementById("email").value == "") {
//     	$('div#error_message').append("- Enter your email address.<br>");
// 	};
// 	if (document.getElementById("password").value == "") {
//     	$('div#error_message').append("- Enter your password.<br>");
// 	};
// 	if (document.getElementById("email").value.length < 8) {
//     	$('div#error_message').append("- Your email should be at least 8 characters.<br>");
// 	};
// 	if (document.getElementById("password").value.length < 8) {
//     	$('div#error_message').append("- Your password should be at least 8 characters.<br>");
// 	};
// 	var charFind = document.getElementById("email").value
// 	if (charFind.indexOf("@") == -1) {
//     	$('div#error_message').append("- Your email should contain an '@' symbol.<br>");
// 	};
// 	if (charFind.indexOf(".") == -1) {
//     	$('div#error_message').append("- Your email should contain an '.' symbol.<br>");
// 	};

//   });
// });

// $(document).ready(function() {
//   $(':submit').click(function() {
//   	if (document.getElementById("email").value == "") {
//     	$('div#error_message').append("Enter your email address.");
// 	};
// 	if (document.getElementById("password").value == "") {
//     	$('div#error_message').append("Enter your password.");
// 	};
// 	if (document.getElementById("email").value.length < 8) {
//     	$('div#error_message').append("Your email should be at least 8 characters.");
// 	};
// 	if (document.getElementById("password").value.length < 8) {
//     	$('div#error_message').append("Your password should be at least 8 characters.");
// 	};
// 	var charFind = document.getElementById("email").value
// 	if (charFind.indexOf("@") == -1) {
//     	$('div#error_message').append("Your email should contain an '@' symbol.");
// 	};
//   });

// });

