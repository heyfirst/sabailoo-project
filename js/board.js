$(document).ready(function(){

	$('.button-ed').on('click',function(){
		var key = $(this).data('key');
		if(key == "text"){
			$('.editor textarea').show();
			$('.editor .canvas-board').hide();
			$(this).addClass('active');
			$('.edit-canvas').removeClass('active');

			// console.log('text');
		}
		if(key == "canvas"){
			$(this).closest('form').find('textarea').hide();
			$(this).closest('form').find('.canvas-board').show();
			$(this).addClass('active');
			$('.edit-text').removeClass('active');
			// console.log('canvas');
			
		}
	});

	$('.btn-submit-form').on('click',function(){
			// console.log('5555');
			var comment = $('.editor textarea').val();
			var tpl = "<article>" +
          "<div class=\"content\">" +
            "<p>"+comment+"</p>" +
            "<div class=\"botton\">"+
              "<i class=\"glyphicon glyphicon-share-alt\"></i>"+
              "<i class=\"glyphicon glyphicon-th-list\"></i>"+
            "</div>"+
          "</div>"+
        "</article>";
      $('.editor textarea').val('');
			$('.comment').prepend(tpl);
	});


});