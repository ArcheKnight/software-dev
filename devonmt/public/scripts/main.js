initHeader();

function initHeader() {
    const marginHeight = $('#topNavMenu').height();
    $('#header').css("margin-top", marginHeight + 'px');
    
    $(window).scroll(function() {
        let height = $(window).scrollTop();
        console.log(height);
        console.log(marginHeight);
        if(height > 1) {
            $('#topNavMenu').css("background-color", "transparent"); // Add class to fix and then remove, don't change style
        } else {
            $('#topNavMenu').css("background-color", "initial");
        }
    })
}