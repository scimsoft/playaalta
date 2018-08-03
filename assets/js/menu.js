$('#burger').click(function(){
    $('#menu').toggleClass('open');
    $('#burger i').toggleClass('open');

    $('#menu.open a').click(function(){
       $('#menu').removeClass('open');
        $('#burger i').removeClass('open');
    });
});
