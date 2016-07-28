$(function() {
	function Upimg(upfile, upimg, fileopct, imgid) {
		$(upfile).change(function() {
			var $file = $(this);
			var fileObj = $file[0];
			var windowURL = window.URL || window.webkitURL;
			var dataURL;
			var $img = $(upimg);

			if(fileObj && fileObj.files && fileObj.files[0]) {
				dataURL = windowURL.createObjectURL(fileObj.files[0]);
				$img.attr('src', dataURL);
				$(fileopct).css('opacity', '0');
				$(upimg).css('opacity', '1');
			} else {
				dataURL = $file.val();
				var imgObj = document.getElementById(imgid);
			}
		});
	}
	Upimg('#certpaper', '#preimg', '.certpaper', 'preview');
	Upimg('#front', '#frontimg', '.front_upflie', 'preview');
	Upimg('#verso', '#versoimg', '.verso_upflie', 'preview');
	var senioritymask = $('.seniority_mask');
	var identitymask = $('.identity_mask');
	$('.masksen_show').on('touchstart', function() {
		senioritymask.show();
	});
	senioritymask.on('touchstart', function() {
		senioritymask.hide();
	});
	$('.maskiden_show').on('touchstart', function() {
		identitymask.show();
	});
	identitymask.on('touchstart', function() {
		identitymask.hide();
	});
	$('.next').eq(0).on('touchstart', function() {
		$('.wrap').hide();
		$('.wrap').eq(1).show();
	});
	$('.next').eq(1).on('touchstart', function() {
		$('.wrap').hide();
		$('.wrap').eq(2).show();
	});
	
});