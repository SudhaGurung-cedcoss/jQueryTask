
var arrFlower=["Rose","lily","Lotus","Jasmin","Sunflower","Daisy","Tulip","Lavender","Magnolia"];
var store;
$(document).ready(function(){
    
  
    $("#flower").keyup(function(){
       
    
     store=arrFlower.map(index)

     function index(num)
     {
        return (num[0]);
     }

      for(i=0;i<store.length;i++){
       
        if($("#flower").val()==store[i]){
           $("#suggestion").html("suggestion  :"+ arrFlower[i]);
           }
          
        }

    })
   
})