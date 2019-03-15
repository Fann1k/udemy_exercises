$(document).ready(function () {
    let buttonsForModal = $('a:contains("расписания туров"), .main_btna, .main_btn');
    buttonsForModal.on('click', function () {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
        document.body.style.overflow = 'hidden';
    });
    $('.close').on('click', function () {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
        document.body.style.overflow = '';
    });
});