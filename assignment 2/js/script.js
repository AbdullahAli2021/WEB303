// WEB303 Assignment 2
// Abdullah Ali    

$(function () {
        $("#vprospect").click(function(){
        $("#solution").load("prospect.html").hide().fadeIn(5000);
    });
    $("#vretain").click(function(){
        $("#solution").load("retain.html").hide().fadeIn(5000);
    });
    $("#vconvert").click(function(){
        $("#solution").load("convert.html").hide().fadeIn(5000);
    });
});


