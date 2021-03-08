$(document).ready(function() {
    var currIdx = 1;

    function sliding(){
        var slider = $('.images').width()
        if(currIdx != 10) {
            $('.images').animate({left: "-=" + slider + "px"}, 700);
            currIdx++;
        }
        else {
            $('.images').animate({left: 0}, 700);
            currIdx = 1;
        }
    }

    setInterval(sliding, 2800);
});