$(document).ready(function(data){
 $("#getJsonSrc").click(function() {
   //get JSON file
 var jqxhr = $.getJSON( "https://skyastro.github.io/fdevproj/assets/files/class.json", function(data) {
    var class_data = '';
    var head_count = 0;
    $('#tdata td').remove();
    $.each(data,function(key, value){
        if ($("#classname").val() != "All") {
            var chk_name = $("#classname").val();            
            if (value.name == chk_name) {
                head_count += 1;
                if (head_count == 1) {
                    $('.table-responsive').show();
                }                
                class_data += '<tr>';
                class_data += '<td>' + value.name +'</td>';
                class_data += '<td>' + value.day +'</td>';
                class_data += '<td>' + value.time +'</td>';
                class_data += '<td>' + value.place +'</td>';
                class_data += '</tr>';
              }
            }
        else {
          head_count += 1;
          if (head_count == 1) {
            $('.table-responsive').show();
          }                
          class_data += '<tr>';
          class_data += '<td>' + value.name +'</td>';
          class_data += '<td>' + value.day +'</td>';
          class_data += '<td>' + value.time +'</td>';
          class_data += '<td>' + value.place +'</td>';
          class_data += '</tr>';
          }
    })
    $('#tdata').append(class_data);
  })
  .fail(function() {
    console.log( "error" );
  })
})
});
