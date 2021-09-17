/*
	WEB 303
	Starting file for Assignment 1 
	{Abdullah Ali 0782917}
*/

$(document).ready(function() {
    $('#salary , #percent').on('change',function() {
        let lsalary = $('#salary').val();
        parseInt(lsalary);
        let lpercent = $('#percent').val();
        parseInt(lpercent);
        let spend = (lsalary * lpercent / 100).toFixed(2);
        $('#spend').text(spend + '$');
        
    });
    
});

//The difference between keyup and change is that  keyup change the amunt durectly after typing but change have to click on other place to bring the change.