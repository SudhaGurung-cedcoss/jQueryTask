$(document).ready(function(){

   setInterval(function(){
    $(".test").children("p:first-child, p:last-child").css("color","red")
   },5000);
    




});