
  var image=['i.webp','image.webp','pic.webp','pexels-photo-863963.webp','pexels-photo-1212693.jpeg','pexels-photo-1252811.webp'];
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
        i=-1;
    }
    i++;
    $("img").attr("src",image[i]);
   })

});

