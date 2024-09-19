// Function to open the side navigation
function openNav() {
    document.getElementById("mySidenav").classList.add('active');
    document.getElementById("overlay").classList.add('active');
}

// Function to close the side navigation
function closeNav() {
    document.getElementById("mySidenav").classList.remove('active');
    document.getElementById("overlay").classList.remove('active');
}

// Event listeners for side navigation, ensuring they run after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for opening the side navigation
    document.querySelector('.menu-btn').addEventListener('click', openNav);
    
    // Event listener for closing the side navigation via overlay click
    const overlay = document.getElementById('overlay');
    
    if (overlay) {
        overlay.addEventListener('click', closeNav);
    } else {
        console.error('Overlay element not found!');
    }

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
        offset: '30%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass("animated animate__fadeInUp");
    }, {
        offset: '30%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass("animated animate__fadeIn");
    }, {
        offset: '30%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass("animated animate__pulse");
    }, {
        offset: '30%'
    });

    // Accordion button functionality
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
})

// $(document).ready(function() {
//     // Smooth scroll for all anchor links
//     $('a[href*="#"]').on('click', function(event) {
//         // Check if the link is to a section within the same page
//         if (this.hash) {
//             event.preventDefault(); // Prevent default anchor click behavior

//             // Get the target element
//             var target = $(this.hash);
//             if (target.length) {
//                 // Calculate the offset position of the target
//                 var targetOffset = target.offset().top;

//                 // If you have a fixed header, adjust the offset
//                 var headerHeight = $('nav').outerHeight(); // Change 'nav' to your header element if needed

//                 // Animate the scroll, subtracting the header height
//                 $('html, body').animate({
//                     scrollTop: targetOffset - headerHeight // Adjust to align the target correctly
//                 }, 1000);
//             }
//         }
//     });

    // If you have specific buttons to scroll to sections
//     $('.js--scroll-to-car-models').click(function() {
//         $('html, body').animate({
//             scrollTop: $('.js--car-models').offset().top - $('nav').outerHeight()
//         }, 1000);
//     });

//     $('.js--scroll-to-contact-us').click(function() {
//         $('html, body').animate({
//             scrollTop: $('.js--contact-us').offset().top - $('nav').outerHeight()
//         }, 1000);
//     });

//     $('.js--scroll-to-js--container').click(function() {
//         $('html, body').animate({
//             scrollTop: $('.js--container').offset().top - $('nav').outerHeight()
//         }, 1000);
//     });
// });


    
    

// Add JavaScript error handling
try {
    // Code to be executed
} catch (error) {
    console.error('Error occurred:', error);
}