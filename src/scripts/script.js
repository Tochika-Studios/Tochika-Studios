// Mobile Device \\

$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });
});

document.querySelector('.btn').addEventListener('click', () => {
  document.querySelector('#aboutus').scrollIntoView({ behavior: 'smooth' });
});
