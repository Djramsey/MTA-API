// JavaScript File

$(document).ready(function() {




    $('#Button').click(function() {
            var Arrivals = $("input:text").val();


            var FirstUrlString = "https: //ajar-target.gomix.me/arrivals?stop_id="

            $.getJSON("https://ajar-target.gomix.me/stops",

                function(response) {
                    var stops = Object.keys(response);
               
                    for (var stop = 0; stop < stops.length; stop++) {
                        console.log(stops[stop].charAt(0));
                    }
                       
                   

                   
                


                // $('#gif').append();




            );

    });



});
