$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.about-name').click(function(event) {
        $('.about-name, .about').toggleClass('active');
    });

    $('.client-name').click(function(event) {
        $('.client-name, .client').toggleClass('active');
    });

    $('.payment-name').click(function(event) {
        $('.payment-name, .payment').toggleClass('active');
    });
});