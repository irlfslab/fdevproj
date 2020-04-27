var is_valid = true;
function validate(vin, vtype) {
  if (vtype == "name"){
     var re = /^[a-zA-Z]{2,20}$/     
    }
  else if (vtype == "email") {
     var re = /[a-zA-Z0-9._-]@[a-zA-Z0-9-]+\.\w+(\.\w+)?/       
    }
    else {
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/      
    }
   return is_valid=re.test(vin)
}

$(document).ready(function() {
//reset signup form
$('#signbtn').click(function(event) {
    $("#signup")[0].reset();
});

//Validate signup form
$('#signup_fname').on('input', function() {
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


 $('#signup_password').on('input', function() {
     var password = ""
     var repassword = ""
    if ($(this).val().length >= 8) {
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('div').addClass("msg"); 
        $('#signup_repassword').siblings('div').addClass("msg");
        var repassword = $("#signup_repassword").val();
        if (repassword != "") {
            var password = $("#signup_password").val();
            if (password == repassword ) {
                $('#signup_repassword').removeClass("invalid").addClass("valid");
                $('#signup_repassword').siblings('div').addClass("msg");
            } else {
                $('#signup_repassword').removeClass("valid").addClass("invalid");
                $('#signup_repassword').siblings('div').removeClass("msg");
            }
        }
    }
	else{
        $(this).removeClass("valid").addClass("invalid");
    }
 });


 $('#signup_repassword').on('input', function() {
    var password = $("#signup_password").val();
    var repassword = $("#signup_repassword").val();
    if (password == repassword ) {
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('div').addClass("msg");
    } else {
        $(this).removeClass("valid").addClass("invalid");
        $(this).siblings('div').removeClass("msg");
    }
 });

// Form submit
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