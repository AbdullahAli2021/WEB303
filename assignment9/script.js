$(function() {
    $.getJSON("characters.json").done(function (data) {
        $.each(data.characters, function (index, value) {
            console.log(value.name);
            $('#charabody').append(
                `<tr>
                <td class= "name">${value.name}</td>
                <td>${value.power}</td>
                <td>${value.country}</td>
                <td>${value.DateofBirth}</td>
                </tr>`);
        });

        var compare = { // Declare object
            name: function(a, b) { // Add name() method
            a = a.replace(/^the /i, ''); // Remove The
            b = b.replace(/^the /i, ''); // Remove The
            if (a < b) { // If a less than b
            return -1; // Return -1
            } else { // Otherwise
            // If a greater than b return 1 otherwise return 0
            return a > b ? 1 : 0;
            }
            },
    
            duration: function(a, b) { // duration() method
                a = a.split(':'); // Split time at colon
                b = b.split(':'); // Split time at colon
                // Convert the time to seconds
                a = Number(a[0]) * 60 + Number(a[1]);
                // Convert the time to seconds
                b = Number(b[0]) * 60 + Number(b[1]);
                return a - b; // Return a minus b
                },
    
                date: function(a, b) { // Add a method called date
                    a = new Date(a); // New object to hold date
                    b = new Date(b); // New object to hold date
                    return a - b; // Return a minus b
                    }                
                }
                $('.sortable').each(function() {
                    var $table = $(this); // This table
                    var $tbody = $table.find('tbody'); // Table body
                    var $controls = $table.find('th'); // Table headers
                    var rows = $tbody.find('tr').toArray(); // Array of rows
                    $controls.on('click', function() { // Event handler
                    var $header = $(this); // Get header
                    var order = $header.data('sort'); // Get data type
                    var column;
                    if ($header.is('.ascending')){
                        $('.cdescending').show();
                        $('.cascending').hide();
                    }
                    if ($header.is('.descending')){
                        $('.cascending').show();
                        $('.cdescending').hide();
                    }
                    if ($header.is('.ascending') || $header.is('.descending')) {
                        // Toggle to other class
                        $header.toggleClass('ascending descending');
                        // Reverse the array
                        $tbody.append(rows.reverse());
                        } else { $header.addClass('ascending');
                        
                        // Add class to header
                        // Remove asc or desc from all other headers
                        $header.siblings().removeClass('ascending descending');
                        // If compare object has method of that name
                        if (compare.hasOwnProperty(order)) {
                        column = $controls.index(this); // Column’s index no
                        rows.sort(function(a, b) { // Call sort() on rows
                        a = $(a).find('td').eq(column).text();// Text of column row a
                        b = $(b).find('td').eq(column).text();// Text of column row b
                        return compare[order](a, b); // Call compare method
                        });
                        $tbody.append(rows);
                        }}
                    });
                });
                
     });

     

})