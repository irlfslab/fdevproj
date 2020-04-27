var is_valid = true;
function validate(vin, vtype) {
  if (vtype == "name"){
     var re = /^[a-zA-Z]{2,20}$/     //validate name pattern with 2 - 20 characters
    }
  else if (vtype == "email") {
     var re = /[a-zA-Z0-9._-]@[a-zA-Z0-9-]+\.\w+(\.\w+)?/       //validate email pattern
    }
    else {
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/      //validate phone 
    }
   return is_valid=re.test(vin)
}

$(document).ready(function() {
//clear signup form
$('#signbtn').click(function(event) {
    $("#signup")[0].reset();
});

//Validate signup form
//validate firstname 
$('#signup_fname').on('input', function() {
    var val=$(this).val();
    validate(val, "name")
	if(is_valid){
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('div').addClass("msg");      //clear any message
    }
	else{
        $(this).removeClass("valid").addClass("invalid");
    }
});

//validate lastname
$('#signup_lname').on('input', function() {
    var val=$(this).val();
    validate(val, "name")
	if(is_valid){
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('div').addClass("msg");
    }
	else{
        $(this).removeClass("valid").addClass("invalid");
    }
});

//validate phone
$('#signup_phone').on('input', function() {
    var val=$(this).val();
    validate(val, "phone")
	if(is_valid){
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('span').addClass("msg");
    }
	else{
        $(this).removeClass("valid").addClass("invalid");
    }       
});

//validate email
$('#signup_email').on('input', function() {
    var val=$(this).val();
    validate(val, "email")
	if(is_valid){
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('span').addClass("msg");
    }
	else{
        $(this).removeClass("valid").addClass("invalid");
    }
 });

 //validate password
 $('#signup_password').on('input', function() {
    if ($(this).val().length >= 8) {
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('div').addClass("msg");  
    }
	else{
        $(this).removeClass("valid").addClass("invalid");
    }
 });

 //validate repeat password
 $('#signup_repassword').on('input', function() {
    var password = $("#signup_password").val();
    var repassword = $("#signup_repassword").val();
    // Check for equality with the password inputs
    if (password == repassword ) {
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('div').addClass("msg");
    } else {
        $(this).removeClass("valid").addClass("invalid");
    }
 });

$("#signup").on('submit', function(){
	var form_data=$("#signup").serializeArray();
	var error_free=true;
	for (var input in form_data){
		var element=$("#signup_"+form_data[input]['name']);
		var valid=element.hasClass("valid");
        var error_element=$("span", element.parent());
        console.log(error_element);
		if (!valid){
            error_element.removeClass("msg").addClass("error_show"); 
            error_free=false;}
		else{
            error_element.removeClass("error_show").addClass("msg");
        }
	}
	if (!error_free){
		event.preventDefault(); 
    }
});
})