$(document).ready(function(){

    let w = parseFloat($("#carre").css("width").slice(0,-2));
    let h = parseFloat($("#carre").css("height").slice(0,-2));
    alert(w);


    $("#petit").click(function () {

         if (parseFloat($("#carre").css("height").slice(0,-2)) > 10 && parseFloat($("#carre").css("width").slice(0,-2)) > 10) {
             $("#carre").css("width", (parseFloat($("#carre").css("width").slice(0,-2))/2)).css("height", (parseFloat($("#carre").css("height").slice(0,-2))/2));
         }
         else {
             $("#carre").css("width", w).css("height", h);
         }

     });

     $("#grand").click(function () {
         $("#carre").css("width", parseFloat($("#carre").css("width").slice(0,-2))+10).css("height", parseFloat($("#carre").css("height").slice(0,-2))+10);
     });

});