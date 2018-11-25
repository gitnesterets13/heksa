$(function() {
    $('.Burger').click(function () {
        $(this).toggleClass('active');
        $('.HeaderMenu').toggleClass('active');
        $('.HeaderCenter').toggleClass('active');
        $('.Overlay').toggleClass('active');
    });

    $('.Overlay').click(function () {
        $(this).removeClass('active');
        $('.HeaderMenu').removeClass('active');
        $('.HeaderCenter').removeClass('active');
        $('.Burger').removeClass('active');
    });

    $('.HeaderMenu li a').click(function () {
        $(this).prev().toggleClass('active');
        $(this).parent("li").toggleClass("active");
    }); 

});

