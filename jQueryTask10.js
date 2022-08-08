$(document).ready(function(){
 $("#btnclothes").click(function(){

    $("#ulList").append("<ul><li>clothes<button id='btn1'>+</button></li><ul>");
 })

 $(this).on("click","#btn1",function(){
    $("#ulList").append("<ul><li>clothes<button id='btn1'>+</button></li><ul>");
 })

 $("#T-shirts").click(function(){

    $("#ulList2").append("<ul><li>T-shirts<button id='btn2'>+</button></li><ul>");
 })

 $(this).on("click","#btn2",function(){
    $("#ulList2").append("<ul><li>T-shirts<button id='btn2'>+</button></li><ul>");
 })

 $("#Trousers").click(function(){

    $("#ulList3").append("<ul><li>Trousers<button id='btn3'>+</button></li><ul>");
 })

 $(this).on("click","#btn3",function(){
    $("#ulList3").append("<ul><li>Trousers<button id='btn3'>+</button></li><ul>");
 })



 $("#btnElectronics").click(function(){

    $("#ulEle1").append("<ul><li>Electronics<button id='btn4'>+</button></li><ul>");
 })

 $(this).on("click","#btn4",function(){
    $("#ulEle1").append("<ul><li>Electronics<button id='btn4'>+</button></li><ul>");
 })

 $("#Mobiles").click(function(){

    $("#ulEle12").append("<ul><li>Mobiles<button id='btn5'>+</button></li><ul>");
 })

 $(this).on("click","#btn5",function(){
    $("#ulEle12").append("<ul><li>Mobiles<button id='btn5'>+</button></li><ul>");
 })

 $("#Tabs").click(function(){

    $("#ulEle13").append("<ul><li>Tabs<button id='btn6'>+</button></li><ul>");
 })

 $(this).on("click","#btn6",function(){
    $("#ulEle13").append("<ul><li>Tabs<button id='btn6'>+</button></li><ul>");
 })


});