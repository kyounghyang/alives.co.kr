/**
 * @name		Jquery Multi Popup
 * @version		1.0
 * @desc		���������� �̿��� ��Ƽ�˾�. 
 * @author		esujin morenvy.com
 * @date		2015-06-01
 * @example		$('.selecter').multipopup();
**/

;(function($){

    $.fn.multipopup = function( options ) {

		var opts = $.extend( {}, $.fn.multipopup.defaults, options );
		var selectorID = this.selector;
	 
		var oBannerb = $(selectorID + " " + opts.bannerbig);	
		var oBanners = $(selectorID + " " + opts.bannersmall);
		var oDrone = $(selectorID + " " + opts.drone );
		
		var iCount = oBanners.length -1;
		var iCurNo = 0;
		var iPreNo = iCount;
		var iInterval = opts.changeterm; 
		var iDroneCurNo = 0;

		if( getCookie( opts.nottoday ) == "closed") return false; /* ��Ű�� �������� �ƹ��͵� ��������.  */

		$(this).parent().css({ 'display': 'inline' });

		show();
		var oInterval = setInterval(show, iInterval);
			
		oBanners.mouseover(function() {
 			$(selectorID + " " + opts.drone ).clearQueue();
			clearInterval(oInterval);
			iCurNo = $(this).index();
			iDroneCurNo = $(this).index();
			show();
 		}).mouseout(function() {
 			$(selectorID + " " + opts.drone ).clearQueue();
			clearInterval(oInterval);
			oInterval = setInterval(show, iInterval);
 		});	

		oDrone.click(function() {
			$(oBanners[iDroneCurNo]).find("a").trigger("click");
			var sUrl = $(oBanners[iDroneCurNo]).find("a").attr('href');
			if ( $(oBanners[iDroneCurNo]).find("a").attr("target") == "blank") { 
				window.open( sUrl );
			} else {
				window.location = sUrl;
			}

 		});		

		function show()	{	
			if (opts.effect == "no") {
				show_noeffect();
			} else if (opts.effect == "fade") {
				show_fade();
			} else {
				show_slide();
			}
		}	
	 
		function show_noeffect() {		
			if (iPreNo > -1)	{
				$(oBannerb[iPreNo]).css('zIndex', 10).hide();
			}
			
			$(oBannerb[iCurNo]).css('zIndex', 11).show(0, function() {
				$(oBannerb[iPreNo]).css('zIndex', 9);
				$(selectorID + " " + opts.drone ).css($(oBanners[iCurNo] ).position());
			});

			iPreNo = iCurNo;
			iCurNo = (iCurNo == iCount) ? 0 : iCurNo+1;
		}

		function show_fade() {
			if (iPreNo > -1)	{
				$(oBannerb[iPreNo]).css('zIndex', 10).hide();
			}
			
			$(selectorID + " " + opts.drone ).animate($(oBanners[iCurNo]).position());

			$(oBannerb[iCurNo]).css('zIndex', 11).fadeIn(opts.speed, function() {
				$(oBannerb[iPreNo]).css('zIndex', 9);
				iPreNo = iCurNo;
				iCurNo = (iCurNo == iCount) ? 0 : iCurNo+1;

			});

		}

		function show_slide() {  

			if (iPreNo != iCurNo) { 
				if(opts.effect == 'slideleft') { 

					$(oBannerb[iCurNo]).css({'zIndex': 999, 'position':'absolute', 'left':-oBannerb.width(), 'top':0, 'display':'block'}).animate({left:0}, function() { //�¿�   
					iPreNo = iCurNo;
					iCurNo = (iCurNo == iCount) ? 0 : iCurNo+1;
					});
				} else {
					$(oBannerb[iCurNo]).css({'zIndex': 999, 'position':'absolute', 'left':0, 'top':-oBannerb.height(), 'display':'block'}).animate({top:0}, function() { //����   
					iPreNo = iCurNo;
					iCurNo = (iCurNo == iCount) ? 0 : iCurNo+1;
					});

				}

				for(i=0;i<=iCount;i++){ $(oBannerb[i]).css('zIndex', $(oBannerb[i]).css("zIndex")-1);	}
				$(selectorID + " " + opts.drone ).animate($(oBanners[iCurNo]).position());

			}  

		}

		$(selectorID + " " +opts.closebtn).click(function(e) {
			$(selectorID).hide(0);

			/* üũ�ڽ��� üũ�Ǿ�������, ��Ű���� */
			if ( $("input:checkbox[name='"+opts.nottoday+"']").is(":checked") ) setCookie( opts.nottoday , 'closed', 1);
		});


		function setCookie(cName, cValue, cDay){
			var expire = new Date();
			expire.setDate(expire.getDate() + cDay);
			cookies = cName + '=' + escape(cValue) + '; path=/ '; // �ѱ� ������ �������� escape(cValue)�� �մϴ�.
			if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
			document.cookie = cookies;
		 }

		function getCookie(cName) {
			cName = cName + '=';
			var cookieData = document.cookie;
			var start = cookieData.indexOf(cName);
			var cValue = '';
			if(start != -1){
				start += cName.length;
				var end = cookieData.indexOf(';', start);
				if(end == -1)end = cookieData.length;
				cValue = cookieData.substring(start, end);
			}
			return unescape(cValue);
		 }

	}

    $.fn.multipopup.defaults  = {
		'effect' : 'fade',   	// ū�̹��� ����ȿ��. ȿ������, ���̵��ξƿ�, �����̵�
		'speed' : 'slow',      	// ū�̹��� ����ȿ�� ������ 
		'changeterm' : 3000,	// ū�̹��� ���� �ð����� 
		'bannerbig' : '.bannerbig li',      	// ū�̹��� ������
		'bannersmall' : '.bannersmall li',		// �����̹��� ������
		'nottoday' : 'mpopupnottoday',		// �ݱ� üũ�ڽ� ����
		'closebtn' : '.closex',		// �ݱ��ư 
		'drone' : '.drone' 		// �����̹��� ���

    };

})(jQuery); 