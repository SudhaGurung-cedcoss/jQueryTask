$(document).ready(function(){
      
   $("#DuffleSel").val("small");
   $("#td1").html("1000 /-");
    // jQuery methods go here...
    $("#DuffleSel").click(function(){
       $v=$(this).val();
       if($v=="small"){
        $("#td1").html("1000 /-");
       }
       if($v=="medium"){
        $("#td1").html("2000 /-");
       }

       if($v=="Large"){
        $("#td1").html("3000 /-");
       }
    })

    $("#T-shirtsSel").val("lightgrey");
    $("#td2").html("100 /-");
    $("#T-shirtsSel").click(function(){
        $v=$(this).val();
        if($v=="lightgrey"){
         $("#td2").html("100 /-");
        }
        if($v=="blue"){
         $("#td2").html("200 /-");
        }
 
        if($v=="black"){
         $("#td2").html("300 /-");
        }
     })
  
  });