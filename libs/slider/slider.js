jQuery( document ).ready(function( $ ) {
		$(document).ready(function()
		{
			$(".slider").each(function ()
			{
				var obj = $(this);
				$(obj).append("<div class='nav'></div>");

				$(obj).find("li").each(function ()
				{
					$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
					$(this).addClass("slider"+$(this).index());
				});

				$(obj).find("span").first().addClass("on");
			});
		});

	function sliderJS (obj, sl) // slider function
	{
		var ul = $(sl).find("ul");
		var bl = $(sl).find("li.slider"+obj);
		var step = $(bl).width();
		$(ul).animate({marginLeft: "-"+step*obj}, 500);
	}

	$(document).on("click", ".slider .nav span", function() // slider click navigate
	{
		var sl = $(this).closest(".slider");
		$(sl).find("span").removeClass("on");
		$(this).addClass("on");
		var obj = $(this).attr("rel");
		sliderJS(obj, sl);
		return false;
	});
	window.setInterval(function(){var n = $(".slider .nav span.on").next();if(n.length==0)n=$(".slider .nav span").first();n.click();},5000); // Убрать строку для остановки слайдера
});	