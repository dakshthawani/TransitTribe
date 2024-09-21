// Function to open the side navigation
function openNav() {
    document.getElementById("mySidenav").classList.add('active');
    document.getElementById("overlay").classList.add('active');
    document.getElementById("mySidenav").style.left = "0"; // Show the sidenav
}

// Function to close the side navigation
function closeNav() {
    document.getElementById("mySidenav").classList.remove('active');
    document.getElementById("overlay").classList.remove('active');
    document.getElementById("mySidenav").style.left = "-400px"; // Hide it again
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
        offset: '0%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass("animated animate__pulse");
    }, {
        offset: '0%'
    });

    // Accordion button functionality
    const accButtons = document.querySelectorAll('.accordion-button');

    accButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the next sibling element which is the content
            const content = this.nextElementSibling;

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
    $(document).ready(function(){
        console.log('Document is ready');
        $('.js--section-features').waypoint(function(direction){
            console.log('Waypoint triggered:', direction); // Debugging statement
            if(direction == 'down'){
                console.log('Adding sticky class');
                $('nav').addClass('sticky');
            } else {
                console.log('Removing sticky class');
                $('nav').removeClass('sticky');
            }
        }, {
            offset: '0px'
        });
    });
})

//     // Smooth scroll for anchor links
// $('a[href*="#"]:not([href="#"])').not('[href="#0"]').click(function(event) {
//     event.preventDefault();

//     // On-page links
//     if (
//         location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
//         location.hostname === this.hostname
//     ) {
//         // Figure out element to scroll to
//         var target = $(this.getAttribute('href'));
//         target = target.length ? target : $('[name=' + this.getAttribute('href').slice(1) + ']');
        
//         // Does a scroll target exist?
//         if (target.length) {
//             var targetOffset = target.offset().top; // Get the offset top of the target element
//             console.log('Target offset:', targetOffset); // Log the target offset value

//             // Animate scroll to target
//             $('html, body').animate({
//                 scrollTop: targetOffset // Scroll to the target offset
//             }, 1000, function() {
//                 console.log('Animation complete!'); // Add a console log statement
                
//                 // Callback after animation
//                 // Must change focus!
//                 var $target = $(target);
//                 $target.focus();
//                 if (!$target.is(":focus")) {
//                     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//                     $target.focus(); // Set focus again
//                 }
//                 // Highlight effect (optional)
//                 $target.addClass('highlight');
//                 setTimeout(function() {
//                     $target.removeClass('highlight');
//                 }, 1000);
//             });
//         }
//     }
// });

// });