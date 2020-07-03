$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
});

function showDiv() {
    document.getElementById('menuDiv').style.display = "block";
    document.getElementById('btn').style.display = "none";
 }