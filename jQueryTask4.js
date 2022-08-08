$(document).ready(function(){



  $("#firstName").focus();
   $("#btn").click(function(){ 
   
    $firstName=$("#firstName").val();
    $lastName=$("#lastName").val();
    $("#firstName").css("background-color","");
    $("#lastName").css("background-color","");
    if($firstName =="" ||$lastName ==""){
        alert("cannot be empty");
      }
      else{
      return;
      }
     
        if($lastName==""){
          $("#lastName").focus(); 
          $("#lastName").css("background-color","red");
         }
         else{
          return;
         }
    
    
     
     if($firstName==""){
      $("#firstName").focus(); 
      $("#firstName").css("background-color","red");
     }
     else{
      return;
     }

   });
   
   

});




