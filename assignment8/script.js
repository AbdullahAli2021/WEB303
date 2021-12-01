$(function() {
    $.getJSON("characters.json").done(function (data) {
        $.each(data.characters, function (index, value) {
            console.log(value.name);
            $('.bb').append(
                `<tr>
                <td class= "name">${value.name}</td>
                <td>${value.power}</td>
                <td>${value.country}</td>
                <td>${value.DateofBirth}</td>
                </tr>`);
        });

        $("#search").keyup(function () {
            var data = this.value.toLowerCase();    
            $('.name').each(function () {
            var $name = $(this);
            var tname = $name.text();
                    if (tname.toLowerCase().indexOf(data) != -1) {
                        $name.addClass('active');
        
                    } else {
                        $name.removeClass('active');   
                    }
                
            })     
        }) 

        $(".first").click(function () {
            var count = 0;
            $('.name').each(function () {
                var $name = $(this);
                var tname = $name.text();
                
                if ("a"<=tname.charAt(0).toLowerCase() && tname.charAt(0).toLowerCase()<="m") {
                    //console.log(tname.charAt(0).toLowerCase());
                    $name.parent().show();
                    count++;
                } else {
                    //console.log(tname.charAt(0).toLowerCase());
                    $name.parent().hide();
                }


            });
            $(".first").append(` (${count})`)
        });

        $(".second").click(function () {
            var count = 0;
            $('.name').each(function () {
                var $name = $(this);
                var tname = $name.text();
                
                if ("n"<=tname.charAt(0).toLowerCase() && tname.charAt(0).toLowerCase()<="z") {
                    //console.log(tname.charAt(0).toLowerCase());
                    $name.parent().show();
                    count++;
                } else {
                    //console.log(tname.charAt(0).toLowerCase());
                    $name.parent().hide();
                }


            });
            $(".second").append(` (${count})`)
        });

    
    
    });

    


})