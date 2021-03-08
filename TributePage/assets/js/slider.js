$(document).ready(function() {
    var currIdx = 1;

    function sliding(){
        var slider = $('.images').width()
        if(currIdx != 5) {
            $('.images').animate({left: "-=" + slider + "px"}, 700);
            currIdx++;
        }
        else {
            $('.images').animate({left: 0}, 700);
            currIdx = 1;
        }
    }

    setInterval(sliding, 3500);
});