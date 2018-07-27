// $(document).ready(function (){
//     $("#menuToggle").click(function (){
//         $('html, body').animate({
//             scrollTop: $("#menu").offset().top
//         }, 1000);
//     });
// });


$(document).ready(function() {
    $('#menuToggle > input').change(function() {
        if(this.checked) {
            $('html, body').animate({
            scrollTop: $("#menu").offset().top
        }, 500); 
    };
    if(!this.checked) {
            $('html, body').animate({
            scrollTop: $("#logo").offset().top
        }, 500); 
    };
});
});
