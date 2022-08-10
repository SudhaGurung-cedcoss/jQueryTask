$(document).ready(function(){

 $("#btnClothes").click(function(){
   $("#maindiv").append("<ul><li>clothes<button class='btn'>+</button></li></ul>");
 })

 $("#btnTshirts").click(function(){
   $("#subCategory").append("<ul><li>t-shirts<button class='btn'>+</button></li></ul>");
 })

 $("#btnTrousers").click(function(){
   $("#subCategory").append("<ul><li>Trousers<button class='btn'>+</button></li></ul>");
 })

 $("#btnElec").click(function(){
   $("#maindiv").append("<ul><li>Electronics<button class='btn'>+</button></li></ul>");
 })

 $("#btnMobile").click(function(){
   $("#subCategory2").append("<ul><li>Mobiles<button class='btn'>+</button></li></ul>");
 })

 $("#btnTabs").click(function(){
   $("#subCategory2").append("<ul><li>Tabs<button class='btn'>+</button></li></ul>");
 })
})