/* 상단메뉴 스크롤 고정 */
jQuery(function () {
	var msie6 = $.browser == 'msie' && $.browser.version < 7;
	if (!msie6) {
	var top = jQuery('#comment_top').offset().top - parseFloat(jQuery('#comment_top').css('margin-top').replace(/auto/, 0));
	jQuery(window).scroll(function (event) {
	// what the y position of the scroll is
	var y = jQuery(this).scrollTop();
	// whether that's below the form
	if (y >= top) {
	// if so, ad the fixed class
	jQuery('#comment_top').addClass('fixed');
	} else {
	// otherwise remove it
	jQuery('#comment_top').removeClass('fixed');
	}
	});
	}
});


/* morenvy.com 미디어쿼리 퀵슬라이드 햄버거메뉴 */
function openNav() {
  document.getElementById("mobile_allcate").style.right = "0px";
}
var mql767 = window.matchMedia("screen and (max-width: 767.98px)");
if (mql767.matches) {
	function closeNav() {
	  document.getElementById("mobile_allcate").style.right = "-100%";
	}
} else {
	function closeNav() {
	  document.getElementById("mobile_allcate").style.right = "-485px";
	}
}


jQuery(document).ready(function() {
	// 퀵슬라이드 메뉴
    jQuery(".nav_tab_content").hide();
    jQuery(".nav_tab_content:first").show();

    jQuery("ul.nav_tabs li").click(function () {
        jQuery("ul.nav_tabs li").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".nav_tab_content").hide()
        var activeTab = jQuery(this).attr("rel");
        jQuery("#" + activeTab).show()
    });


	// 하단탭
    jQuery(".tab_content").hide();
    jQuery(".tab_content:first").show();

    jQuery("ul.tabs li").click(function () {
        jQuery("ul.tabs li").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".tab_content").hide()
        var activeTab = jQuery(this).attr("rel");
        jQuery("#" + activeTab).show()
    });


	/* morenvy.com 퀵메뉴 팝업 */
	function smdelCookieCpa(cookie_name) {
	    var _today = new Date();
	    var value = '';
	    _today.setDate(_today.getDate() - 1);
	    document.cookie = cookie_name + "=" + value + '; path=/;' + "; expires=" + _today.toGMTString();
	}
    jQuery(".icon_quick_plus").bind("click", function() {
        var that = jQuery(this);
        if (that.hasClass("is-open")) {
            that.removeClass("is-open").addClass("is-closed");
            jQuery("#right_quick > ul").slideDown("fast");
			setCookieCpa("smcookie", "smcookie", 1);
        } else {
            that.removeClass("is-closed").addClass("is-open");
            jQuery("#right_quick > ul").slideUp("fast");
			smdelCookieCpa("smcookie");
        }
    });
	if (getCookiefss("smcookie")) {
		jQuery(".icon_quick_plus").removeClass("is-open").addClass("is-closed");
		jQuery("#right_quick > ul").slideDown("fast");
	}

});


/* morenvy.com 퀵메뉴 쿠키 스크립트 */
function setCookieCpa(cookie_name, cookie_value, expire_date) {
    var today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 3600000 * 24 * expire_date);
    cookies = cookie_name + '=' + cookie_value + '; path=/;';
    if (expire_date != 0) cookies += 'expires=' + expire.toGMTString();
    document.cookie = cookies;
}

function delCookieCpa(cookie_name) {
    var _today = new Date();
    var value = '';

    _today.setDate(_today.getDate() - 1);

    document.cookie = cookie_name + "=" + value + "; expires=" + _today.toGMTString();
}

function getCookiefss(name) {
    lims = document.cookie;
    var index = lims.indexOf(name + "=");
    if (index == -1) {
        return null;
    }
    index = lims.indexOf("=", index) + 1; // first character
    var endstr = lims.indexOf(';', index);
    if (endstr == -1) {
        endstr = lims.length; // last character
    }
    return unescape(lims.substring(index, endstr));
}