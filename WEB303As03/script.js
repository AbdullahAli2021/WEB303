// Abdullah Ali Assignment 3

// part 1
$(function () {
var  getJsonReturnValue = $.getJSON("team.json").done(function (data) {
    console.log("The data contained", data);
    $.each(data.teammembers, function (index, value) {
        console.log(value.name);
        $(`#team`).append(`
        <h3>${value.name}</h3>
        <h4>${value.title}</h4>
        <p>${value.bio}</p>
        `).slideDown(3000);
    });
    console.log("getjson return value is", getJsonReturnValue);
}); 

//part2
var  getAjaxValue = $.ajax({
    type:'GET',
    url: "team.json",
    beforeSend: function (){
        $(`#team`).html("Loading")  
    },
    error: function(){
        alert("Error");
    },
    timeout:5000,

}).done(function (data) {
    $(`#team`).empty();
    console.log("The data contained", data);
    $.each(data.teammembers, function (index, value) {
        console.log(value.name);
        $(`#team`).append(`
        <h3>${value.name}</h3>
        <h4>${value.title}</h4>
        <p>${value.bio}</p>
        `).slideDown(3000);
    });
});
});