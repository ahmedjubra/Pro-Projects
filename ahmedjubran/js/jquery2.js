 /*! global $.jQuery , alert,console */

   $(document).ready(function(){
		"use stirct ";
  $(window).on("scroll",function(){
  var sc =$(window).scrollTop();

  if(sc > 188) 
  {
  $("#tool1").fadeIn();
  }
  else
     {
	  $("#tool1").fadeOut();
     }
	 })
   });
     $(document).ready(function()
    {  
	$("#img0").click(function()
	{
 	$(".row").fadeIn();
	})
 });
 $(document).ready(function()
    {  
	$("#img00").click(function()
	{
 	$(".row").fadeIn();
	})
 });
  $(document).ready(function()
    {  
	$(".imgx").click(function()
	{
 	$(".row").fadeOut();
	})
 }); 


    $(document).ready(function()
    {  
	$("#creat1").click(function()
	{
 	$(".creat").fadeIn();
	})
 });

    
    $(document).ready(function()
    {  
	$("#creat11").click(function()
	{
 	$(".creat").fadeIn();
	})
 });
  $(document).ready(function()
    {  
	$(".imgx").click(function()
	{
 	$(".creat").fadeOut();
	})
 }); 
    $(document).ready(function()
    {  
	$("#creat2").click(function()
	{
 	$(".post1").fadeIn();
	})
 }); 
    $(document).ready(function()
    {  
	$("#creat22").click(function()
	{
 	$(".post1").fadeIn();
	})
 });
  $(document).ready(function()
    {  
	$(".imgx").click(function()
	{
 	$(".post1").fadeOut();
	})
 });
 
 
 