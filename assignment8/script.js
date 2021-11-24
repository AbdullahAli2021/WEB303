$(function() {
    $.getJSON("characters.json").done(function (data) {
        $.each(data.characters, function (index, value) {
            console.log(value.name);
            $('table#characters').append(
                `<tr>
                <td class= "name">${value.name}</td>
                <td>${value.power}</td>
                <td>${value.country}</td>
                <td>${value.age}</td>
                </tr>`);
        });


    
    });

    ('.name').addClass('active');

    $("#search").keyup(function () {
        var data = this.value.toUpperCase().split(" ");    
        $("#characters").find('.name').each(function (index, elem) {
        var $elem = $(elem);
            for (var d = 0; d < data.length; ++d) {
                    //alert($elem.val());
                // Highlight
                if ($elem.val().toUpperCase().indexOf(data[d].toUpperCase()) != -1) {
                    $elem.addClass('active');
    
                } else {
                    $elem.removeClass('active');   
                }
            }
        })     
    }) 

}
)