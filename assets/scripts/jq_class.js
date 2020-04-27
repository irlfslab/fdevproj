var is_valid = true;
function validate(vin, vtype) {
  if (vtype == "name"){
     var re = /^[a-zA-Z]{2,20}$/     
    }
  else {
     var re = /[a-zA-Z0-9._-]@[a-zA-Z0-9-]+\.\w+(\.\w+)?/     
    }
   return is_valid=re.test(vin)
}

$(document).ready(function() {
    //reset free session form
$('#freebtn').click(function(event) {
    $("#session")[0].reset();
});

//validate form
$('#session_fname').on('input', function() {
    var val=$(this).val();
    validate(val, 'name')
    if(is_valid){
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('div').addClass("msg"); 
    }
	else{
        $(this).removeClass("valid").addClass("invalid");
    }
});

$('#session_lname').on('input', function() {
    var val=$(this).val();
    validate(val, 'name')
	if(is_valid){
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('div').addClass("msg");
    }
	else{
        $(this).removeClass("valid").addClass("invalid");
    }
});

$('#session_email').on('input', function() {
   var input=$(this).val();
   validate(input, 'email')
	if(is_valid){
        $(this).removeClass("invalid").addClass("valid");
        $(this).siblings('span').addClass("msg");
    }
	else{
        $(this).removeClass("valid").addClass("invalid");
    }
 });

$("#session").on('submit', function(){
	var form_data=$("#session").serializeArray();
	var error_free=true;
	for (var input in form_data){
        if (input <=2 ) {                   
            var element=$("#session_"+form_data[input]['name']);
            var valid=element.hasClass("valid");
            var error_element=$("span", element.parent());
            if (!valid){
                error_element.removeClass("msg").addClass("error_show"); 
                error_free=false;}
            else{
                error_element.removeClass("error_show").addClass("msg");
            }
        }
	}
	if (!error_free){
		event.preventDefault(); 
	}
});

//reset book class form
$('#bookbtn').click(function(event) {
    $("#book")[0].reset();
});

//validate form
$('#book_email').on('input', function() {
    var input=$(this).val();
    validate(input, 'email')
     if(is_valid){
         $(this).removeClass("invalid").addClass("valid");
         $(this).siblings('span').addClass("msg");
     }
     else{
         $(this).removeClass("valid").addClass("invalid");
     }
  });
 
 $("#book").on('submit', function(){
     var form_data=$("#book").serializeArray();
     var error_free=true;
     for (var input in form_data){
         if (input == 0 ) {   
             var element=$("#book_"+form_data[input]['name']);
             var valid=element.hasClass("valid");
             var error_element=$("span", element.parent());
             if (!valid){
                 error_element.removeClass("msg").addClass("error_show"); 
                 error_free=false;}
             else{
                 error_element.removeClass("error_show").addClass("msg");
             }
         }
     }
     if (!error_free){
         event.preventDefault(); 
     }
 });
})