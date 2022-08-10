var arr=[];
$(document).ready(function(){
     $regexName=/^[a-zA-z]+$/;
     $regexNum=/^[0-9]+$/;
     
     $("#product_sku").blur(function(){
        $product_sku=$("#product_sku").val(); 
        if($product_sku.match($regexNum)){
            $("#product_sku").removeClass("NameError");
            $("#skuError").html("");
        }
        else{
            $("#product_sku").addClass("NameError");
            $("#skuError").html("sku cannot be empty");
        }
       
    })

    $("#product_name").blur(function(){
        $product_name=$("#product_name").val(); 
        if($product_name.match($regexName)){
            $("#product_name").removeClass("NameError");
            $("#nameError").html("");
        }
        else{
            $("#product_name").addClass("NameError");
            $("#nameError").html("name cannot be empty");
        }
       
    })

      
    $("#product_price").blur(function(){
        $product_price=$("#product_price").val(); 
        if($product_price.match($regexNum)){
            $("#product_price").removeClass("NameError");
            $("#priceError").html("");
        }
        else{
            $("#product_price").addClass("NameError");
            $("#priceError").html("price cannot be empty");
        }
       
    })

      
    $("#product_quantity").blur(function(){
        $product_quantity=$("#product_quantity").val(); 
        if($product_quantity.match($regexNum)){
            $("#product_quantity").removeClass("NameError");
            $("#quantityError").html("");
        }
        else{
            $("#product_quantity").addClass("NameError");
            $("#quantityError").html("quantity cannot be empty");
        }
       
    })
     //adding values 
     $("#add_product").click(function(){
     if($("#add_product").text()=="Update Product"){
        $product_sku=$("#product_sku").val(); 
        $product_name=$("#product_name").val(); 
        $product_price=$("#product_price").val(); 
        $product_quantity=$("#product_quantity").val(); 
        arr[$tr_index].productSku=$product_sku; 
        arr[$tr_index].productName=$product_name
        arr[$tr_index].productPrice=$product_price; 
        arr[$tr_index].productQuantity=$product_quantity;
        $("#add_product").html("Add Product");
        populate(arr);
    }
    else{
        $product_sku=$("#product_sku").val(); 
        $product_name=$("#product_name").val(); 
        $product_price=$("#product_price").val(); 
        $product_quantity=$("#product_quantity").val(); 
         var value=matchName($product_name,$product_sku);
         if(value){
            arr.push({"productSku":$product_sku,"productName":$product_name,"productPrice":$product_price,"productQuantity":$product_quantity});
         populate(arr);
         }
    }
        
    })
   //showing data in a table
    function populate(arr){
      var text="";
      for(i=0;i<arr.length;i++){
        text+="<tr><td>"+arr[i].productSku+"</td><td>"+arr[i].productName+"</td><td>"+arr[i].productPrice+"</td><td>"+arr[i].productQuantity+"</td><td>"+"<a href='#' id='edit' >Edit</a>"+"  "+"<a href='#'id='delete'>Delete</a>"+"</td></tr>";
        $("#displayItem").html(text);
      } 
      if(arr.length==0)
      $("#displayItem").html("");  
     
     }

    //delete the data 
     $(this).on("click","#delete",function(){
    $tr_index=$(this).parent().parent().index();
    var result=confirm("do you want to delete");
        if(result==true){
        arr.splice($tr_index,1);
        }
        populate(arr);
    })

    //validating data
     function matchName(){
     if($product_name.match($regexName) && $product_sku.match($regexNum) && $product_price.match($regexNum) && $product_quantity.match($regexNum)  ){
         $("#nameError,#skuError,#priceError,#quantityError").html("");
         $(".success").show();
         $(".error").hide();
         $("#product_list table").show();
         $("#product_name,#product_sku,#product_price,#product_quantity").removeClass("NameError");
         return true;
     }
     else{
        $(".error").show();
        $("#product_sku,#product_name,#product_price,#product_quantity").addClass("NameError");
         return false;  
        }   
      
    

    //edit operation perform
     $(this).on("click","#edit",function(){
        $tr_index=$(this).parent().parent().index();
        $("#product_sku").val(arr[$tr_index].productSku);
        $("#product_name").val(arr[$tr_index].productName);
        $("#product_price").val(arr[$tr_index].productPrice);
        $("#product_quantity").val(arr[$tr_index].productQuantity);
        $("#add_product").html("Update Product");
       
      })
     
       
      
    }
})


