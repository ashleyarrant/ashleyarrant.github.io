$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function (){
    
    AOS.init({
        duration: 1200,
        disable: 'mobile',
    });
    
});

function formgen() {
    //gather input
    var name = $("#sendername").val();
    var subject = $("#emailsubject").val();
    var msg = $("#emailbody").val();
    
    //encode them   
    name = htmlsafe(name);
    subject = htmlsafe(subject);
    msg = htmlsafe(msg);
    
    window.open("mailto:ashleyarrant96@gmail.com?Subject="+subject+"&Body="+msg+"%0A%0ARegards%2C%0A"+name);

    
}

function htmlsafe(x) {
    x = x.replace(/ /g,"%20");
    x = x.replace(/,/g,"%2C");
    x = x.replace(/</g,"%3C");
    x = x.replace(/>/g,"%3E");
    x = x.replace(/!/g,"%21"); 
    x = x.replace(/\?/g,"%3F");
    x = x.replace(/\n/g,"%0A");
    
    return x;
}