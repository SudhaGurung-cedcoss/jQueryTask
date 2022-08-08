
  const image=['i.webp','image.webp','ZiClJf-1920w.jpg','pic.webp'];
  var i=0;
$(document).ready(function(){
   
   $("#prev").click(function(){
    if(i==0){
        i=5;
    }
    i--;
    $("img").attr("src",image[i]);
   })

   $("#next").click(function(){
    if(i==4){
        i=1;
    }
    i++;
    $("img").attr("src",image[i]);
   })

});

