// Side navigation functions
function openNav() {
    document.getElementById("mySidenav").classList.add('active');
    document.getElementById("overlay").classList.add('active');
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove('active');
    document.getElementById("overlay").classList.remove('active');
}

// Event listeners for side navigation
document.querySelector('.menu-btn').addEventListener('click', openNav);
document.getElementById('overlay').addEventListener('click', closeNav);

// jQuery document ready function
$(document).ready(function() {
    // Smooth scroll for anchor links
    $('a')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if (!$target.is(":focus")) {
                            $target.attr('tabindex','-1');
                            $target.focus();
                        }
                    });
                }
            }
        });

    // Waypoint animations
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass("animated animate__fadeIn");
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass("animated animate__fadeInUp");
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass("animated animate__fadeIn");
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass("animated animate__pulse");
    }, {
        offset: '50%'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var accButtons = document.querySelectorAll('.accordion-button');

    accButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the next sibling element which is the content
            var content = this.nextElementSibling;

            // Toggle the display of the content
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                // Hide all content sections
                document.querySelectorAll('.accordion-content').forEach(function(content) {
                    content.style.display = "none";
                });
                // Show the clicked content section
                content.style.display = "block";
            }

            // Add a console log statement to verify the JavaScript code is being executed
            console.log('Accordion button clicked!');
        });
    });
});
// Function to add/remove the 'scrolled' class based on scroll position
function checkScroll() {
    const topBar = document.querySelector('.top-bar');
    console.log('Scroll Position:', window.scrollY); // Debugging line
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        topBar.classList.add('scrolled');
    } else {
        topBar.classList.remove('scrolled');
    }
}

// Attach the function to the window scroll event
window.addEventListener('scroll', checkScroll);

// Initial check in case the page is loaded with a scroll
checkScroll();
