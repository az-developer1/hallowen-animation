window.onload = function() {
    var greetingTxt = document.getElementsByClassName('greetings')[0];
    
    setTimeout(function() {
        greetingTxt.style.opacity = '1';
    }, 6000);
};