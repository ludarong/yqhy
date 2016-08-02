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
	var reg = /([1-6]\d{5}(19|20)\d\d(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])\d{3}[0-9xX])|([1-6]\d{5}\d\d(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])\d{3})/;
	$('.next').eq(0).on('touchstart', function() {
		if($('.idenid').val() == '' || $('.username').val() == ''){
			alert('姓名或身份证不能为空！');
		}else if(!reg.test($('.idenid').val())){			
			alert('身份证号码有误！');
		}else if($('#frontimg').attr('src') == '' || $('#versoimg').attr('src') == ''){
			alert('请上传身份证正反面照片！');
		}else{
			$('.wrap').hide();
			$('.wrap').eq(1).show();
		}
		
	});
	$('.next').eq(1).on('touchstart', function() {
		if($('.zyid').val() == '' || $('.username').val() == ''){
			alert('姓名或身份证不能为空！');
		}else{
			$('.wrap').hide();
			$('.wrap').eq(2).show();
		}		
	});
	$('.next').eq(2).on('touchstart', function() {
		if($('.username').val() == ''){
			alert('姓名不能为空！');
		}
	});
});