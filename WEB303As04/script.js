/*
    Assignment 4
    Abdullah Ali
*/

$(document).ready(function(){
    // your code here
     navigator.geolocation.getCurrentPosition(function (position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        $('#youarehere').html("The latitude is: " + lat + "<br>" + `The longitude is: ${long}`);
        // Get the longitude and latitude from localStorage
        let lat2 = localStorage.getItem('latitude');
        let long2 = localStorage.getItem('longitude');
        //If its not the first time
        if ((lat2 && long2) != null){
            let moving = calcDistance(lat,long,lat2,long2);
            $('#youarehere').append("<br><br>  Last position <br> The latitude is: " + lat2 + "<br>" + `The longitude is: ${long2} <br><br> You moved ${moving} meters.`
            );

        }
        //if localStorage is not available
        if (localStorage == null){
            $('#youarehere').append('<br><br>The localStorage is not available!!!')
        }
        //if its the first time
        if ((lat2 && long2) === null) {
            $('#youarehere').append("<br><br>Welcome it seems that it is your first visit!!!");
        }
        // Store the new position in the localStorage
        localStorage.setItem('latitude', lat);
        localStorage.setItem('longitude',long);

        
    }, function(){
        $('#youarehere').html("The geolocation is not available on your browser, please turn on the geolocation!!!")
    });







    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});



