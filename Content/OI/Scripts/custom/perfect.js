/**
 * Created by Jason on 15/9/28.
 * v 1.0.0
 */
$(function () {
    (function (){
        setInterval(function (){
            var now = $('.perfect-bigImg').find('a.active').next();
            if(now.size()==0){
                now = $('.perfect-bigImg').find('a').first();
            }
            showImg(now);
        },3000)
    })();
    $('.perfect-bigImg').children().first().find('img:not(.active)').css('display','none');
    $(document.body).on('click', '.perfect-bigImg div a', function () {
        showImg($(this));
    });
    function showImg(thisObj) {
        var small_a = thisObj;
        var active_a = $('.perfect-bigImg').find('a.active');
        var num = small_a.attr('data-num');
        var select = "img[data-num='" + num + "']";
        var big_img = $(select);
        var active_img = $('.perfect-bigImg').find('img.active');

        var button = $('button.perfect-incourse');
        switch(num){
            case '1': button.css('display','none');break;
            case '2': button.css('display','block').css('top',403).css('right',160);break;
            case '3': button.css('display','block').css('top',404).css('right',730);break;
            case '4': button.css('display','block').css('top',455).css('right',775);break;
            case '5': button.css('display','block').css('top',433).css('right',473);break;
            case '6': button.css('display','block').css('top',426).css('right',442);break;
        }

        active_img.removeClass('active');
        active_img.fadeOut(250);
        big_img.addClass('active');
        big_img.fadeIn(250);

        active_a.removeClass('active');
        small_a.addClass('active');
    }
});