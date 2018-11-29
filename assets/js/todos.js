$("ul").on("click","li",function(){
	 
	/*if ($(this).css("color")==="rgb(0, 128, 0)")
	{ 
          $(this).css("color","black");
          $(this).css("textDecoration","none");   
	}else{
		$(this).css({
                  color:"green",
                  textDecoration:"line-through"
		});
		*/
		$(this).toggleClass("completed");
	});
	
	$("ul").on("click","span",function(event){
        $(this).parent().fadeOut(500,function(){
        	$(this).remove();
        });

        event.stopPropagation();
	});

	$("input[type=text]").on("keypress",function(event){
         if(event.which === 13){
         	var text=$(this).val();
         	$(this).val("");
         	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + text +"</li>");
         }

	});


    $(".fa-pencil-alt").click(function(){
    	$("input[type=text]").fadeToggle(1000);
    });