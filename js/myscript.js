/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

$(document).ready(function () {

    $nav = $('.nav-list');

    $('.menu-icon').click(function () {

        $nav.slideToggle();

    });

    $(window).resize(function () {
        
        if ( $(window).width() >= 640 ) {
            
            $nav.show();
            
        } else {
            
            $nav.hide();
            
        }
    });
});
