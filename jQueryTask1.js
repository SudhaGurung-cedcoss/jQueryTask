$(document).ready(function(){

    // jQuery methods go here...
    $("#confirmPass").keyup(function(){
       $pass=document.getElementById('pass').value;
       $confirmpass=document.getElementById('confirmPass').value;
        if($pass!=$confirmpass){
            document.getElementById('sp').innerHTML="password did not match";
            document.getElementById('sp').style.color="red";
        }
        else{
            document.getElementById('sp').innerHTML="";  
        }
    })
  
  });