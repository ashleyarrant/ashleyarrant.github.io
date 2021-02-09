$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function (){
    
    var nv = $("#navcontent, footer nav");
    
    $.getJSON("/scripts/nav.json", function(data){
        for(var a = 0; a < data.links.length; a++) {
            nv.append('<a href="'+data.links[a].path+'" class="nav-item nav-link">'+data.links[a].name+'</a>');
        }
    });
    
    var port = $("#portfolioItems"), portLim = 0;
    
    $.getJSON("/scripts/portfolio.json", function(data){
        if (port.attr("data-limit") != undefined) {
            //populate items on the home page
            portLim = port.attr("data-limit");
            for (let a = 0; a < portLim; a++) {
                port.append('<div class="col-lg-4 my-4"><div class="card h-100"><img src="'+data.items[a].imageLink+'" /><div class="card-body"><h4 class="card-title">'+data.items[a].projName+'</h4><p>'+data.items[a].shortDesc+'</p><a href="'+data.items[a].link+'" class="btn btn-secondary stretched-link">View Project</a></div></div></div>');
            }
        } else {
            portLim = data.items.length;
            for (let a = 0; a < portLim; a++) {
                port.append('<div class="row border-top my-5 py-5 px-3 flex-wrap align-items-center"><div class="col-lg-5"> <img src="'+data.items[a].imageLink+'" class="mb-4 mb-lg-0" alt="'+data.items[a].projName+' preveiw"/></div><div class="col-lg"><h3>'+data.items[a].projName+'</h3><p>'+data.items[a].longDesc+'</p> <a href="'+data.items[a].link+'" class="btn btn-primary">View Project</a> <small class="text-muted ml-4">Built: 2018 &bull; Version: 1.0</small></div></div>');
            }
        }
    });
});