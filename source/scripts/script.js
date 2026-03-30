// Mobile Device \\

$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });
});

function btn_AboutUs() {
  window.location.href = 'aboutus.html';
}