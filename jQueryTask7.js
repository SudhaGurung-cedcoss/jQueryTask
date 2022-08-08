
var arrFlower=["Rose","Lily","Lavender","Lotus","Jasmin","Sunflower","Daisy","Tulip","Magnolia"];

$(document).ready(function(){
   
    $("#flower").keyup(function(){
      $matchedItem="";
  
       for(i=0;i<arrFlower.length;i++){

         $flower_input=$("#flower").val();
         $match=arrFlower[i].substring(0,$flower_input.length);
        
         if($flower_input==$match){
           $matchedItem+=" "+arrFlower[i];
           $("#suggestion").html("Suggestion :"+$matchedItem);
           }
     
  
      }
   
    })
   
})