$(document).ready(function(){

    // jQuery methods go here...
    $("#btneven").click(function(){
      $("tr:even").css("background-color","lightgrey");
    })
  

      // jQuery methods go here...
      $("#btnodd").click(function(){
        $("tr:odd").css("background-color","dodgerblue");
      })
  });