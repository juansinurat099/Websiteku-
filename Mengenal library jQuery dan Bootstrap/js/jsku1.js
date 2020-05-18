$(document).ready(function(){
    //Show it by popping up
     $(':button[id="btnShow"]').click(function() {
         $('#logo').show();
     });
     //Hide it popping out
     $(':button[id="btnHide"]').click(function() {
        $('#logo').hide();
    });
    //if it is visible, hide it; otherwise , show it 
    $(':button[id="btnToggle"]').click(function() {
        $('#logo').toggle();
    });
    //Show by fadding in
    $(':button[id="btnFadeIn"]').click(function() {
        $('#logo').fadeIn(1000);//speed 1 sec
    });
    // Hide by fadding out
    $(':button[id="btnFadeOut"]').click(function() {
        $('#logo').fadeOut(2000),
        (function(){//Callback when complete
            alert('done!');
        });
    });
    // If it is visible, fade-out ; otherwise, Fade-in 
    $(':button[id="btnFadeToggle"]').click(function() {
        $('#logo').fadeToggle(3000);//speed 3 sec
    });
    // Hide by sliding-up to top-left corner 
    $(':button[id="btnSlideUp"]').click(function() {
        $('#logo').fadeslideup();//dissapear,
    });
    //Show by sliding-down from top-left corner
    $(':button[id="btnSlideDown"]').click(function() {
        $('#logo').fadeslidedown();
    });
    // If it is visible, slide-up ; otherwise, Slide-down 
    $(':button[id="btnSlideToggle"]').click(function() {
        $('#logo').fadeslidetoggle();
    });
    // Custom annimation, by applying given CSS properties
    var toggleFlag = true; 
    $(':button[id="btnAnimate"]').click(function() {
        if (toggleFlag){
            $('#logo').show().animate({
                'margin-left' : '30px', //apply these css
                'margin-top' :'20px',
                'opacity': 0.2 //semi-trensparent
            },
            2000 //speed 2 sec
            );
        } else {
            $('#logo').show().animate({
                'margin-left' : '0px', //apply these css
                'margin-top' :'0px',
                'opacity': 1.0 //not-trensparent
            },
            3000 //speed 3 sec
            );
        }
      toggleFlag = !toggleFlag;
    });
});