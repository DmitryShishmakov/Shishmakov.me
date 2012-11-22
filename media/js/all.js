/*
	Content
*/
var content = {

	trying: 0,

	load : function(link)
	{
		if($('#content-bg').css('display') == 'none')
			$('#content-bg').fadeIn('normal');

		if($('#content').attr('data-show'))
			$('#content').fadeOut('normal', function()
			{
				content.show(link);
			})
		else
			content.show(link);

		return false;
	},

	show : function(link)
	{
		link = $(link);

		$('#content-header').text('/ ' + link.attr('title'));
		$('#content-data').html('');
		try{
			$.ajax({
				url: '/ajax' + link.attr('href'),
				success: function(data)
				{
					$('#content-data').html(data);
					content.trying = 0;
				},
				error: function(XMLHttpRequest, textStatus, errorThrown)
				{
					if(content.trying < 2)
						content.show(link);
					else
						$('#content-data').html(textStatus + ': ' + errorThrown);
					content.trying++;
				}
			});
		}catch(ex){}

		$('#content').fadeIn('slow', function()
		{
			$('#content').attr('data-show', 1);
		});
	},

	close : function()
	{
		$('#content').fadeOut();
		$('#content-bg').fadeOut('normal', function()
		{
			$('#content').removeAttr('data-show', 1);
		});
		return false;
	}

}


/*
	Init
*/
$(document).ready(function()
{
	return;
})