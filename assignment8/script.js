$(function() {
    $.getJSON("characters.json").done(function (data) {
        $.each(data.characters, function (index, value) {
            console.log(value.name);
            $('table#characters').append(
                `<tr>
                <td>${value.name}</td>
                <td>${value.power}</td>
                <td>${value.country}</td>
                <td>${value.age}</td>
                </tr>`);
        });

        
    
    });

}
)