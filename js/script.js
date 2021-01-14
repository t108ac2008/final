// $(document).ready(function(){

//     $("#btn_1F").click(function(){
//         $("#map1").attr("src", "img/map1.png");
//     }); 
//     $("#btn_2F").click(function(){
//         $("#map1").attr("src", "img/map2.png");
//     });   

// });


$(document).ready(function(){

    $("#btn_1F").click(function(){
        $("#map1").fadeOut(500);
        $("#map1").attr("src", "img/map1.png");
        $("#map1").fadeIn(500);
    }); 
    $("#btn_2F").click(function(){
        $("#map1").fadeOut(500);
        $("#map1").attr("src", "img/map2.png");
        $("#map1").fadeIn(500);
    });   

});
