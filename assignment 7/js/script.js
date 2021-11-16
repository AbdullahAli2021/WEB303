$(function () {
    var modal = new Modal();
    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function (e) {
        var $content = $(this).clone().find('img').detach().css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
        
        modal.open({
            content: $content,
            width: 800,
            height: 450
        })
    });;
});
