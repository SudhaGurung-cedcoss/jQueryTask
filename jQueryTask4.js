$(document).ready(function(){



    $firstName=document.getElementById('firstName').value;
    $lastName=document.getElementById('lastName').value;

   $("#btn").click(function(){
   
     
    if(($firstName || $lastName )==""){
        alert("cannot be empty");
     $("#firstName,#lastName").focus(function(){
       $("#firstName,#lastName").css("background-color","red");
     })
    
    }
    

    

   });

});




