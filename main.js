// JavaScript File

$(document).ready(function() {
    
    
 
  
    $('#Button').click(function(){
        var SearchGiph =  $("input:text").val();
        
        
         var FirstUrlString = "https://ajar-target.gomix.me/arrivals?stop_id="
        
        $.getJSON("https://ajar-target.gomix.me/arrivals?stop_id=" + SearchGiph, 
         
            function(response){ 
            console.log(response);
             $('#gif').append(Object.keys(response)); 
             
         

           
        });
        
    });



 });