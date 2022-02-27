$(document).ready(function(){
    // Side nav
    var sideNavElems = document.querySelectorAll('.sidenav');
    var sideNavArray = M.Sidenav.init(sideNavElems);
    
    // Paralax
    var paralaxElems = document.querySelectorAll('.parallax');
    var paralaxElemsArray = M.Parallax.init(paralaxElems);
    
    // Used to log if the user has already hovered over the DDR SVG
    var svgHasHovered = false;
    $('#ddr').hover(function(){
        if (svgHasHovered != true) {
            resetSVG();
        }
        svgHasHovered = true;
    });
    document.getElementById('about').onscroll = function(){
        resetSVG();
    };

    // Heading typing animation 
    var typed = new Typed('#typed_name', {
        strings: ["AS", "Arjun Singh"],
        typeSpeed: 50
    });

    

    function sendEmail() {
        window.open('mailto:example@hotmail.co.uk?subject=CV/Business Enquiry');
    };

    $('#email').click(function(){
        sendEmail();
    });

    
    
});