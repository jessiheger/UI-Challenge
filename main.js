// Scroll to view full menu; scroll back to top
$(document).ready(function() {
    $('#menuToggle > input').change(function() {
        if(this.checked) {
            $('html, body').animate({
            scrollTop: $("#menu").offset().top
        }, 500); 
    };
    if(!this.checked) {
            $('html, body').animate({scrollTop: '0px'}, 500);
 
    };
});
});


