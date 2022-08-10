$(document).ready(function(){

    $("#btnAdd").click(function(){
   
        $("#mainDiv").append("<div ><input placeholder='Enter Class'><input placeholder='Enter board'><input placeholder='Enter marks'><input placeholder='Enter division'><button id='btn11'>+</button ><button id='btn12'>-</button></div>");
    })

    
    
    $("#btnSub").click(function(){
        $("#innerDiv").remove();
    })
    

   $("#mainDiv").on("click","#btn11",function(){
       $(this).parent().append("<div><input placeholder='Enter Class'><input placeholder='Enter board'><input placeholder='Enter marks'><input placeholder='Enter division'><button id='btn11'>+</button ><button id='btn12'>-</button></div>");
   })



   $("#mainDiv").on("click","#btn12",function(){  
     $(this).parent().remove();
    })
   

})