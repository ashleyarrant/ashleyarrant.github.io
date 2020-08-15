$(document).ready(function (){
    //count number of navigation links
    var links = $(".nav-link").length;
    
    //determine which link to make active
    for(var i = 0;i<links;i++) {
        var url = $(".collapse .nav-link").eq(i).attr("href");
        var current = window.location.pathname;
        
        if (url == current) {
            $(".collapse .nav-link").removeClass("active");
            $(".collapse .nav-link").eq(i).addClass("active");
        }
        
    }
    
});