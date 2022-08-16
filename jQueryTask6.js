var arr=[{first:"<input placeholder='Enter Class'><input placeholder='Enter board'><input placeholder='Enter marks'><input placeholder='Enter division'><button id='btn11'>+</button ><button id='btn12'>-</button>"},{sceond:""}];

$(document).ready(function(){

  $("#display").append("<tr><td><input placeholder='Enter Class'><input placeholder='Enter board'><input placeholder='Enter marks'><input placeholder='Enter division'><button class='btn11'>+</button ><button class='btn12'>-</button>" +"</td></tr>");
   
  //adding row
  $("#display").on("click",".btn11",function(){
    $("#display").append("<tr><td><input placeholder='Enter Class'><input placeholder='Enter board'><input placeholder='Enter marks'><input placeholder='Enter division'><button class='btn11'>+</button ><button class='btn12'>-</button>" 
                +"</td></tr>");
  })
 //deleting row
  $("#display").on("click",".btn12",function(){  
    $(this).parent().parent().remove();
       
  })
  
})