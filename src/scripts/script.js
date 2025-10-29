// Mobile Device \\

$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });
});

// Navbar Hover \\

var navItems = document.querySelectorAll('.navbar-item');

navItems.forEach(function(navItem) {
    navItem.addEventListener('mouseenter', function() {
        navItem.classList.add('active');
    });

    navItem.addEventListener('mouseleave', function() {
        navItem.classList.remove('active');
    });
});
