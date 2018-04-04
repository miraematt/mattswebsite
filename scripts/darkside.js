var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    
    if(firstName !== "Darth") {
      $("#first-name-error").text("That is not the first name you were looking for. Try something beginning with 'D'");
    } else {
      $("#first-name-error").text("");
    };

   
    
  var lastName = $('#last').val();
    
    if(lastName === "") {
      $("#last-name-error").text("Please enter a sinister sounding last name.");
    } else {
      $("#last-name-error").text("");
    };


    
  var email = $('#email').val();
    
    if(email === "") {
      $("#email-error").text("Please enter your email address.");
    } else if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
      $("#email-error").text("This email is not valid.");
    } else {
      $("#email-error").text("");
    };

  
    
  var password = $('#password').val();
    
    if(password === "") {
      $("#password-error").text("Please enter a password.");
    } else if(password.length < 8) {
      $("#password-error").text("Short passwords are easy for jedis to decipher. Only a master can unlock one with at least 8 characters.");
    } else {
      $("#password-error").text("");
    };

    return false;
  });
};

$("button").on("click", function(){
    $("button").removeClass("btn btn-default");
    $(this).addClass("active");
});

$(document).ready(main);