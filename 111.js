var getFont=document.createElement("link");getFont.rel="stylesheet",getFont.type="text/css",getFont.href="https://fonts.googleapis.com/css2?family="+fontGoogle+":wght@400;500;700&display=swap",document.querySelector("body").appendChild(getFont);
document.documentElement.style.setProperty('--body-font', fontGoogle);
document.querySelector("body").classList.add("block");
function MM(){for(let MM of document.querySelectorAll('div'))if(MM.getAttribute('id')=='post-body')return MM}if(MM()){
function radialTimer() {
	var e = this;
	this.seconds = 0, this.count = 0, this.degrees = 0, this.timerHTML = "<div class='clom radialtimer'><div class='n'></div><div class='slice'><div class='q'></div><div class='pie r'></div><div class='pie l'></div></div></div><div class='clom radialbtn'><a class='areload' data-href='false' id='btn_reload'>" + redirect_T_Configure + "</a></div>", this.interval = null, this.timerContainer = null, this.number = null, this.slice = null, this.pie = null, this.pieRight = null, this.pieLeft = null, this.quarter = null, this.reload = null, this.history = "/p/" + page_redirect + ".html", this.ranQuerydata = function() {
		var t = e.getQueryVariable("url");
		e.reload.attr("data-href", t)
	}, this.ranQuerybtn = function() {
		"false" == e.reload.attr("data-href") ? (e.reload.attr("href", "javascript:void(0)"), e.reload.html(redirect_T_err), e.reload.addClass("disabled")) : (e.reload.attr("href", e.reload.attr("data-href")), e.reload.html(redirect_T_ready), e.reload.addClass("active")), nobuttonn && "false" !== e.reload.attr("data-href") && window.location.replace(e.reload.attr("data-href"))
	}, this.getQueryVariable = function(e) {
		for (var t = window.location.search.substring(1).split("&"), i = 0; i < t.length; i++) {
			var r = t[i].split("=");
			if (r[0] == e) return r[1]
		}
		return !1
	}, this.init = function(t, i) {
		e.timerContainer = $("#" + t), e.timerContainer.html(e.timerHTML), e.number = e.timerContainer.find(".n"), e.slice = e.timerContainer.find(".slice"), e.pie = e.timerContainer.find(".pie"), e.pieRight = e.timerContainer.find(".pie.r"), e.pieLeft = e.timerContainer.find(".pie.l"), e.quarter = e.timerContainer.find(".q"), e.reload = e.timerContainer.find(".areload"), e.start(i), e.ranQuerydata(), e.timerContainer.length && history.pushState(null, "", e.history)
	}, this.start = function(t) {
		e.seconds = t, e.interval = window.setInterval(function() {
			e.number.html(e.seconds - 1 - e.count), e.count++, e.count > e.seconds - 1 && clearInterval(e.interval), e.degrees += 360 / e.seconds, e.count >= e.seconds / 2 ? (e.slice.addClass("nc"), e.slice.hasClass("mth") || e.pieRight.css({
				transform: "rotate(180deg)"
			}), e.pieLeft.css({
				transform: "rotate(" + e.degrees + "deg)"
			}), e.slice.addClass("mth"), e.count >= .75 * e.seconds - 1 && e.quarter.remove(), e.seconds - 1 == e.count && e.ranQuerybtn()) : e.pie.css({
				transform: "rotate(" + e.degrees + "deg)"
			})
		}, 1e3)
	}
}
var page_redirect = void 0 !== Settingsredirect.pageName ? Settingsredirect.pageName : "redirect",
	redirect_T_Configure = void 0 !== Settingsredirect.waitingMessage ? Settingsredirect.waitingMessage : "‏جاري تهيئة الرابط",
	redirect_T_ready = void 0 !== Settingsredirect.linkReady ? Settingsredirect.linkReady : "الرابط جاهز",
	redirect_T_err = void 0 !== Settingsredirect.linkError ? Settingsredirect.linkError : "رابط معطل",
	redirect_timer = void 0 !== Settingsredirect.waitingTimer ? Settingsredirect.waitingTimer : "10",
	redirect_match = void 0 !== Settingsredirect.autoRedirectSites ? Settingsredirect.autoRedirectSites : "#",
	nobuttonn = void 0 !== Settingsredirect.nobuttonn && Settingsredirect.nobuttonn;
$(document).ready(function() {
	(new radialTimer).init("Redirect", redirect_timer)
}), $(".post-body a").each(function() {
	var e = window.location.origin,
		t = window.location.hostname,
		i = new RegExp("(" + redirect_match + "|" + t + "|blogger.com|bp.blogspot.com|whatsapp:)");
	0 <= this.href.match(i) && 0 <= this.name.match("more") && ($(this).attr("href", e + "/p/" + page_redirect + ".html?&url=" + $(this).attr("href")), $(this).attr("target", "_blank"))
});
function getSize() {
    size = $( "#post-body" ).css( "font-size" );
    size = parseInt(size, 10);
    $( "#font-size" ).text(  size  );
}getSize();
  $( "#up-font" ).on( "click", function() {
      if ((size + 2) <= 50) {
      $( "#post-body" ).css( "font-size", "+=2" );
      $( "#font-size" ).text(  size += 2 );
    }
  });
  $( "#down-font" ).on( "click", function() {
    if ((size - 2) >= 12) {
      $( "#post-body" ).css( "font-size", "-=2" );
      $( "#font-size" ).text(  size -= 2  );
    }
  });

  window.addEventListener("scroll", function() {
    $(".post-nav").each(function() {
           var e = $("a.prev-post").attr("href"),
               t = $("a.next-post").attr("href");
           $.ajax({
               url: e,
               type: "get",
               success: function(e) {
                   var t = $(e).find("h1.entry-title").text(),
                       i = postnavPrevText,
                       r = "";
                       r += "<div class='nav-content'><span>" + i + "</span><p class='truncate'>" + t + "</p></div>", $("a.prev-post").html(r)
               }
           }), $.ajax({
               url: t,
               type: "get",
               success: function(e) {
                   var t = $(e).find("h1.entry-title").text(),
                       i = postnavNextText,
                       r = "";
                   r += "<div class='nav-content'><span>" + i + "</span><p class='truncate'>" + t + "</p></div>", $("a.next-post").html(r)
               }
           })
       })
   });

}
function M(){for(let M of document.querySelectorAll('div'))if(M.getAttribute('id')=='featured-wrapper')return M}if(M()){
document.querySelector("#featured-wrapper").classList.add("show");
$(document).ready(function() {
	var e = window.location.protocol + "//" + window.location.hostname,
		t = 10;
	$.ajax({
		url: "" + e + "/feeds/posts/default?alt=json-in-script&amp;max-results=" + t,
		type: "get",
		dataType: "jsonp",
		success: function(e) {
			function t() {
				$("#recentbreaking li:first").slideUp(function() {
					$(this).appendTo($("#recentbreaking ul")).slideDown()
				})
			}
			var n, r, a = "",
				i = e.feed.entry;
			if (void 0 !== i) {
				a = "<ul>";
				for (var l = 0; l < i.length; l++) {
					for (var s = 0; s < i[l].link.length; s++)
						if ("alternate" == i[l].link[s].rel) {
							n = i[l].link[s].href;
							break
						} r = i[l].title.$t, a += '<li><a href="' + n + '" target="_blank">' + r + "</a></li>"
				}
				a += "</ul>", $("#recentbreaking").html(a), setInterval(function() {
					t()
				}, 5e3)
			} else $("#recentbreaking").html("<span>"+error+"</span>")
		},
		error: function() {
			$("#recentbreaking").html("<strong>"+error+"</strong>")
		}
	})
});
var TransBreakNews = document.getElementById("TransBreakNews");
TransBreakNews.innerHTML = BreakNews;
}






let mainColors = localStorage.getItem("colors");
if (mainColors !== null) {
	document.documentElement.style.setProperty('--bg', localStorage.getItem("colors"));
    document.documentElement.style.setProperty('--color', localStorage.getItem("color"));
	document.querySelectorAll(".colors-list li").forEach(element => {
		element.classList.remove("active");
		if (element.dataset.color === mainColors) {
			element.classList.add("active");
		}
	});
}
document.querySelector(".settings-box .fa-fw").onclick = function() {
	this.classList.remove("fa-spin");
	document.querySelector(".settings-box").classList.remove("open")
};
document.querySelector(".toggle-setting").onclick = function() {
	document.querySelector(".settings-box .fa-fw").classList.add("fa-spin");
	document.querySelector(".settings-box").classList.add("open")
};
document.querySelector(".toggle-settings").onclick = function() {
	document.querySelector(".settings-box .fa-fw").classList.add("fa-spin");
	document.querySelector(".settings-box").classList.add("open")
};
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
	li.addEventListener("click", (e) => {
		document.documentElement.style.setProperty('--bg', e.target.dataset.color);
		localStorage.setItem("colors", e.target.dataset.color);
        document.documentElement.style.setProperty('--color', e.target.dataset.colors);
		localStorage.setItem("color", e.target.dataset.colors);
		e.target.parentElement.querySelectorAll(".active").forEach(element => {
			element.classList.remove("active");
		});
		e.target.classList.add("active");
	});
});

function rtn() {
    $('html').html('<div style="font: 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;position: fixed;overflow-x: hidden;background:#f8f8f8;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 1;text-align: center;"><div style="position: relative;padding: 2em;width: 80%;max-width: 600px;min-width: 200px;margin: 5em auto;background: white;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);"><div><div style="color: #fff; position: absolute; margin: 0 auto; left: 0; right: 0; top: -25px; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; -webkit-border-radius: 50%; z-index: 9; background: #0033a9; padding: 0; text-align: center; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); font-size: 2em; font-family: arial; text-decoration: none;"><span>©</span></div><h4 style="text-align: center; font-size: 26px; margin: 30px 0 15px;line-height: normal;">عفواً..!!</h4></div><div style="position: relative;padding: 5px;text-align: right;font-size: 14px;"><p>لا يمكنك إستخدام هذا القالب .. هذا التوقف يحدث تلقائياً بسبب مايلي ..</p><p><span style="font-size: 17px; font-weight: bold; color: #0033a9;">1</span>-العبث بحقوق ملكية التصميم!..كإخفاء توقيع المصمم</p><p><span style="font-size: 17px; font-weight: bold; color: #0033a9;">2</span>-لا تملك رخصة؟ .. للحصول على تفعيل القالب يرجى<a style="color: #0033a9;font-size: 14px; font-weight: 400;" href="https://smile-template.blogspot.com/"> طلب رخصة </a></p><p><span style="font-size: 17px; font-weight: bold; color: #0033a9;">3</span>-تملك رخصة ومع ذلك لا تستطيع إستخدام هذا القالب .. يرجى التواصل بـ  <a style="color: #0033a9;font-size: 14px; font-weight: 400;" href="https://smile-template.blogspot.com/"> فريق الدعم </a></p></div><div style="text-align: center; overflow: hidden;"><a style="color: #fff;background:#0033a9;text-decoration: none;display: block;max-width: 180px;padding: 10px 12px;margin: 5px auto;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 0;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);" href="https://smile-template.blogspot.com/">الصفحة الرسمية</a></div></div></div>');
    setTimeout(function () {
        window.location.assign('https://smile-template.blogspot.com/')
    }, 15000)
}
$(function(){
function act_license(){
let blogg_id = false,
    Link = window.location.href.toLowerCase(),
    $licence_key = $('#license-key').text();
$.ajax({
   dataType: "json",
   url: "/feeds/posts/default?alt=json-in-script&start-index=1&max-results=1",
   async: false,
   method: "GET",
   dataType: "jsonp",
   success: function (data){blogg_id =/blog-(.*)/gm.exec(data.feed.id.$t)[1];}
    });
if (Link.indexOf("www.blogger") == -1 && Link.indexOf("draft.blogger") == -1 && Link.indexOf("template-editor") == -1 && Link.indexOf("post-preview") == -1 && Link.indexOf("b/layout-preview") == -1 && Link.indexOf("b/blog-preview") == -1 && Link.indexOf("b/preview") == -1 && Link.indexOf("b/html-preview") == -1 && Link.indexOf("b/app-preview") == -1 && Link.indexOf("translate.google") == -1 && Link.indexOf("webcache.googleusercontent") == -1) {
$.ajax({dataType: "json",
        url: "https://www.blogger.com/feeds/3229452297229825460/pages/default/7663737568230617928?alt=json-in-script&orderby=published",
        method: "GET",
        dataType: "jsonp",
        success: function (res) {
        var $can_key = false,
            can_use = false;
       if (blogg_id == false){rtn()}else{
$("<div>"+res.entry.content.$t+"</div>").find("js_script").each(function () {
        var data = $(this).text(),
              data_agent = JSON.parse(data);
for ( var o = 0; o< data_agent.length;o++){
for (var s =0; s< data_agent[o].Blog_id.split(',').length ; s++){
     var blog_idd = data_agent[o].Blog_id.split(','),
          blog_id = data_agent[o].Blog_id,
         creadet = data_agent[o].create,
         key_code = data_agent[o].key;
if (blogg_id == blog_id || blogg_id == blog_idd[s] && $licence_key == key_code ){can_use = true;} 
if (blogg_id == blog_id  && creadet == true){$can_key = true;}else if(blogg_id == blog_idd[s] && creadet == true){$can_key = true;}   }
} 
}); 
}
if ($can_key){ 
var Cont = '<a href="https://smile-template.blogspot.com/" target="_blank" tooltip="Smile" style="width: 30px;height: 30px;background-size: 30px 60px;-webkit-transition: all 0.15s ease-in-out;transition: all 0.15s ease-in-out;position: relative;display: inline-block!important;vertical-align: middle;visibility: visible!important; opacity: 1!important; z-index: 0 !important;"><style>#smile-right a{background:url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRc-vgikfGqLuuBuTNvFRaZDS-IW9FyadUzNIcsDAb-Y8AMXolGY1LAWNWLUo5sU2gf1A-QzI6dVK-qXSuThB_5gSRBSEFlaidil9aN-UQZYttjCi_ZpAoR4p6XTG5fzmC5LKosrA5VVK9A_r2UW9nbtSEgXYc9kZ7ri6NjxgF53uWuITedCqTb4yE/s1600/Copy.png) top no-repeat;}#smile-right a:hover{background-position:bottom}#smile-right a:after{font-size: 0.6rem;padding: 3px 10px;position: absolute;top:2px;right: 25px;z-index:100;content:attr(tooltip);background:var(--bg);color:#ffffff;opacity:0;visibility:hidden;-webkit-transition:all 0.1s ease-in-out 0.1s;transition:all 0.1s ease-in-out 0.1s;border-radius:100px;line-height:1rem;text-transform:uppercase;letter-spacing:.5px;white-space:nowrap;}#smile-right a:hover:after{opacity:1;visibility:visible;right:30px}#smile-right a:hover:after{opacity:1;visibility:visible;right:30px}</style></a>';

if ($('#smile-right').length !== 0) {
$('#smile-right').addClass('impo').append(Cont);
setInterval(function () {
$('.impo').each(function () {
 if ($(this).css('opacity') < 1 || $(this).css('visibility') == 'hidden' || $(this).is(':hidden')) {rtn()}
 })
 },10)}
else {rtn()};
}          
if (!can_use){rtn();}    
},error: function(e) {rtn();} 
});
}
}
act_license()
});

(function($) {
    $.fn.theiaStickySidebar = function(options) {
        var defaults = {
            'containerSelector': '',
            'additionalMarginTop': 0,
            'additionalMarginBottom': 0,
            'updateSidebarHeight': true,
            'minWidth': 0,
            'disableOnResponsiveLayouts': true,
            'sidebarBehavior': 'modern',
            'defaultPosition': 'relative',
            'namespace': 'TSS'
        };
        options = $.extend(defaults, options);
        options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
        options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;
        tryInitOrHookIntoEvents(options, this);

        function tryInitOrHookIntoEvents(options, $that) {
            var success = tryInit(options, $that);
            if (!success) {
                console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');
                $(document).on('scroll.' + options.namespace, function(options, $that) {
                    return function(evt) {
                        var success = tryInit(options, $that);
                        if (success) {
                            $(this).unbind(evt)
                        }
                    }
                }(options, $that));
                $(window).on('resize.' + options.namespace, function(options, $that) {
                    return function(evt) {
                        var success = tryInit(options, $that);
                        if (success) {
                            $(this).unbind(evt)
                        }
                    }
                }(options, $that))
            }
        }

        function tryInit(options, $that) {
            if (options.initialized === true) {
                return true
            }
            if ($('body').width() < options.minWidth) {
                return false
            }
            init(options, $that);
            return true
        }

        function init(options, $that) {
            options.initialized = true;
            var existingStylesheet = $('#theia-sticky-sidebar-stylesheet-' + options.namespace);
            if (existingStylesheet.length === 0) {
                $('head').append($('<style id="theia-sticky-sidebar-stylesheet-' + options.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'))
            }
            $that.each(function() {
                var o = {};
                o.sidebar = $(this);
                o.options = options || {};
                o.container = $(o.options.containerSelector);
                if (o.container.length == 0) {
                    o.container = o.sidebar.parent()
                }
                o.sidebar.parents().css('-webkit-transform', 'none');
                o.sidebar.css({
                    'position': o.options.defaultPosition,
                    'overflow': 'visible',
                    '-webkit-box-sizing': 'border-box',
                    '-moz-box-sizing': 'border-box',
                    'box-sizing': 'border-box'
                });
                o.stickySidebar = o.sidebar.find('.theiaStickySidebar');
                if (o.stickySidebar.length == 0) {
                    var javaScriptMIMETypes = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    o.sidebar.find('script').filter(function(index, script) {
                        return script.type.length === 0 || script.type.match(javaScriptMIMETypes)
                    }).remove();
                    o.stickySidebar = $('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());
                    o.sidebar.append(o.stickySidebar)
                }
                o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));
                o.paddingTop = parseInt(o.sidebar.css('padding-top'));
                o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));
                var collapsedTopHeight = o.stickySidebar.offset().top;
                var collapsedBottomHeight = o.stickySidebar.outerHeight();
                o.stickySidebar.css('padding-top', 1);
                o.stickySidebar.css('padding-bottom', 1);
                collapsedTopHeight -= o.stickySidebar.offset().top;
                collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;
                if (collapsedTopHeight == 0) {
                    o.stickySidebar.css('padding-top', 0);
                    o.stickySidebarPaddingTop = 0
                } else {
                    o.stickySidebarPaddingTop = 1
                }
                if (collapsedBottomHeight == 0) {
                    o.stickySidebar.css('padding-bottom', 0);
                    o.stickySidebarPaddingBottom = 0
                } else {
                    o.stickySidebarPaddingBottom = 1
                }
                o.previousScrollTop = null;
                o.fixedScrollTop = 0;
                resetSidebar();
                o.onScroll = function(o) {
                    if (!o.stickySidebar.is(":visible")) {
                        return
                    }
                    if ($('body').width() < o.options.minWidth) {
                        resetSidebar();
                        return
                    }
                    if (o.options.disableOnResponsiveLayouts) {
                        var sidebarWidth = o.sidebar.outerWidth(o.sidebar.css('float') == 'none');
                        if (sidebarWidth + 50 > o.container.width()) {
                            resetSidebar();
                            return
                        }
                    }
                    var scrollTop = $(document).scrollTop();
                    var position = 'static';
                    if (scrollTop >= o.sidebar.offset().top + (o.paddingTop - o.options.additionalMarginTop)) {
                        var offsetTop = o.paddingTop + options.additionalMarginTop;
                        var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;
                        var containerTop = o.sidebar.offset().top;
                        var containerBottom = o.sidebar.offset().top + getClearedHeight(o.container);
                        var windowOffsetTop = 0 + options.additionalMarginTop;
                        var windowOffsetBottom;
                        var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();
                        if (sidebarSmallerThanWindow) {
                            windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight()
                        } else {
                            windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom
                        }
                        var staticLimitTop = containerTop - scrollTop + o.paddingTop;
                        var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;
                        var top = o.stickySidebar.offset().top - scrollTop;
                        var scrollTopDiff = o.previousScrollTop - scrollTop;
                        if (o.stickySidebar.css('position') == 'fixed') {
                            if (o.options.sidebarBehavior == 'modern') {
                                top += scrollTopDiff
                            }
                        }
                        if (o.options.sidebarBehavior == 'stick-to-top') {
                            top = options.additionalMarginTop
                        }
                        if (o.options.sidebarBehavior == 'stick-to-bottom') {
                            top = windowOffsetBottom - o.stickySidebar.outerHeight()
                        }
                        if (scrollTopDiff > 0) {
                            top = Math.min(top, windowOffsetTop)
                        } else {
                            top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight())
                        }
                        top = Math.max(top, staticLimitTop);
                        top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());
                        var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();
                        if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
                            position = 'fixed'
                        } else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {
                            position = 'fixed'
                        } else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {
                            position = 'static'
                        } else {
                            position = 'absolute'
                        }
                    }
                    if (position == 'fixed') {
                        var scrollLeft = $(document).scrollLeft();
                        o.stickySidebar.css({
                            'position': 'fixed',
                            'width': getWidthForObject(o.stickySidebar) + 'px',
                            'transform': 'translateY(' + top + 'px)',
                            'left': (o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left')) - scrollLeft) + 'px',
                            'top': '0px'
                        })
                    } else if (position == 'absolute') {
                        var css = {};
                        if (o.stickySidebar.css('position') != 'absolute') {
                            css.position = 'absolute';
                            css.transform = 'translateY(' + (scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom) + 'px)';
                            css.top = '0px'
                        }
                        css.width = getWidthForObject(o.stickySidebar) + 'px';
                        css.left = '';
                        o.stickySidebar.css(css)
                    } else if (position == 'static') {
                        resetSidebar()
                    }
                    if (position != 'static') {
                        if (o.options.updateSidebarHeight == true) {
                            o.sidebar.css({
                                'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom
                            })
                        }
                    }
                    o.previousScrollTop = scrollTop
                };
                o.onScroll(o);
                $(document).on('scroll.' + o.options.namespace, function(o) {
                    return function() {
                        o.onScroll(o)
                    }
                }(o));
                $(window).on('resize.' + o.options.namespace, function(o) {
                    return function() {
                        o.stickySidebar.css({
                            'position': 'static'
                        });
                        o.onScroll(o)
                    }
                }(o));
                if (typeof ResizeSensor !== 'undefined') {
                    new ResizeSensor(o.stickySidebar[0], function(o) {
                        return function() {
                            o.onScroll(o)
                        }
                    }(o))
                }

                function resetSidebar() {
                    o.fixedScrollTop = 0;
                    o.sidebar.css({
                        'min-height': '1px'
                    });
                    o.stickySidebar.css({
                        'position': 'static',
                        'width': '',
                        'transform': 'none'
                    })
                }

                function getClearedHeight(e) {
                    var height = e.height();
                    e.children().each(function() {
                        height = Math.max(height, $(this).height())
                    });
                    return height
                }
            })
        }

        function getWidthForObject(object) {
            var width;
            try {
                width = object[0].getBoundingClientRect().width
            } catch (err) {}
            if (typeof width === "undefined") {
                width = object.width()
            }
            return width
        }
        return this
    }
})(jQuery);
! function(a) {
    a.fn.menu = function() {
        return this.each(function() {
            var $t = a(this),
                b = $t.find('.LinkList ul > li').children('a'),
                c = b.length;
            for (var i = 0; i < c; i++) {
                var d = b.eq(i),
                    h = d.text();
                if (h.charAt(0) !== '_') {
                    var e = b.eq(i + 1),
                        j = e.text();
                    if (j.charAt(0) === '_') {
                        var m = d.parent();
                        m.append('<ul class="sub-menu m-sub"/>');
                    }
                }
                if (h.charAt(0) === '_') {
                    d.text(h.replace('_', ''));
                    d.parent().appendTo(m.children('.sub-menu'));
                }
            }
            for (var i = 0; i < c; i++) {
                var f = b.eq(i),
                    k = f.text();
                if (k.charAt(0) !== '_') {
                    var g = b.eq(i + 1),
                        l = g.text();
                    if (l.charAt(0) === '_') {
                        var n = f.parent();
                        n.append('<ul class="sub-menu2 m-sub"/>');
                    }
                }
                if (k.charAt(0) === '_') {
                    f.text(k.replace('_', ''));
                    f.parent().appendTo(n.children('.sub-menu2'));
                }
            }
            $t.find('.LinkList ul li ul').parent('li').addClass('has-sub');
        });
    }
}(jQuery); 

! function(a) {
    a.fn.lazy = function() {
        return this.each(function() {
            var t = a(this),
                dImg = t.attr('data-image'),
                iWid = Math.round(t.width()),
                iHei = Math.round(t.height()),
                iSiz = 'w' + iWid + '-h' + iHei + '-p-k-no-nu',
                img = '';
            if (dImg.match('/s72-c')) {
                img = dImg.replace('/s72-c', '/' + iSiz);
            } else if (dImg.match('/w72-h')) {
                img = dImg.replace('/w72-h72-p-k-no-nu', '/' + iSiz);
            } else if (dImg.match('=w72-h')) {
                img = dImg.replace('=w72-h72-p-k-no-nu', '=' + iSiz);
            } else {
                img = dImg;
            }
            a(window).on('load resize scroll', lazyOnScroll);

            function lazyOnScroll() {
                var wHeight = a(window).height(),
                    scrTop = a(window).scrollTop(),
                    offTop = t.offset().top;
                if (scrTop + wHeight > offTop) {
                    var n = new Image();
                    n.onload = function() {
                        t.attr('style', 'background-image:url(' + this.src + ')').addClass('lazy');
                    }, n.src = img;
                }
            }
            lazyOnScroll();
        });
    }
}(jQuery); 
    (function($) {
    $.fn.replaceText = function(b, a, c) {
        return this.each(function() {
            var f = this.firstChild,
                g, e, d = [];
            if (f) {
                do {
                    if (f.nodeType === 3) {
                        g = f.nodeValue;
                        e = g.replace(b, a);
                        if (e !== g) {
                            if (!c && /</.test(e)) {
                                $(f).before(e);
                                d.push(f)
                            } else {
                                f.nodeValue = e
                            }
                        }
                    }
                } while (f = f.nextSibling)
            }
            d.length && $(d).remove()
        })
    }
})(jQuery); 
! function(t) {
    "use strict";
    var n = function(n) {
            return this.each(function() {
                var e, i, a = t(this),
                    o = a.data(),
                    c = [a],
                    r = this.tagName,
                    d = 0;
                e = t.extend({
                    content: "body",
                    headings: "h1,h2,h3"
                }, {
                    content: o.toc || void 0,
                    headings: o.tocHeadings || void 0
                }, n), i = e.headings.split(","), t(e.content).find(e.headings).attr("id", function(n, e) {
                    return e || function(t) {
                        0 === t.length && (t = "?");
                        for (var n = t.replace(/\s+/g, "_"), e = "", i = 1; null !== document.getElementById(n + e);) e = "_" + i++;
                        return n + e
                    }(t(this).text())
                }).each(function() {
                    var n = t(this),
                        e = t.map(i, function(t, e) {
                            return n.is(t) ? e : void 0
                        })[0];
                    if (e > d) {
                        var a = c[0].children("li:last")[0];
                        a && c.unshift(t("<" + r + "/>").appendTo(a))
                    } else c.splice(0, Math.min(d - e, Math.max(c.length - 1, 0)));
                    t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href", "#" + n.attr("id"))), d = e
                })
            })
        },
        e = t.fn.toc;
    t.fn.toc = n, t.fn.toc.noConflict = function() {
        return t.fn.toc = e, this
    }, t(function() {
        n.call(t("[toc]"))
    })
}(window.jQuery);

function msgError() {
    return '<span class="error-msg">'+error+'</span>'
}

function beforeLoader() {
    return '<div class="loader"/>'
}

function getFeedUrl(e, a, t) {
    var s = "";
    switch (t) {
        case "recent":
            s = "/feeds/posts/default?alt=json&max-results=" + a;
            break;
        case "comments":
            s = "list1" == e ? "/feeds/comments/default?alt=json&max-results=" + a : "/feeds/posts/default/-/" + t + "?alt=json&max-results=" + a;
            break;
        default:
            s = "/feeds/posts/default/-/" + t + "?alt=json&max-results=" + a
    }
    return s
}

function getPostLink(e, a) {
    for (var t = 0; t < e[a].link.length; t++)
        if ("alternate" == e[a].link[t].rel) {
            var s = e[a].link[t].href;
            break
        } return s
}

function getPostTitle(e, a) {
    return e[a].title.$t
}

function getFirstImage(e, a) {
    var t = $("<div>").html(e).find("img:first").attr("src"),
        s = t.lastIndexOf("/") || 0,
        r = t.lastIndexOf("/", s - 1) || 0,
        i = t.substring(0, r),
        o = t.substring(r, s),
        n = t.substring(s);
    return (o.match(/\/s[0-9]+/g) || o.match(/\/w[0-9]+/g) || "/d" == o) && (o = "/w72-h72-p-k-no-nu"), i + o + n
}

function getPostImage(e, a, t) {
    if (e[a].media$thumbnail) var r = e[a].media$thumbnail.url;
    else r = ""+noThumbnail+"";
}

function getPostAuthor(e, a) {
    var t = e[a].author[0].name.$t;
    if ("true" == messages.postAuthor) var s = '<span class="entry-author"><span class="author">' + t + "</span></span>";
    else s = "";
    return s
}

function getPostDate(e, a) {
    var t = e[a].published.$t,
        s = t.substring(0, 4),
        r = t.substring(5, 7),
        i = t.substring(8, 10),
        o = monthFormat[parseInt(r, 10) - 1] + " " + i + ", " + s;
    if ("true" == messages.postDate) var n = '<span class="entry-time"><time class="published" datetime="' + t + '">' + o + "</time></span>";
    else n = "";
    return n
}

function getPostMeta(e, a) {
    if ("true" == messages.postAuthor && "true" == messages.postDate) var t = '<div class="entry-meta">' + e + a + "</div>";
    else t = "true" == messages.postAuthor ? '<div class="entry-meta">' + e + "</div>" : "true" == messages.postDate ? '<div class="entry-meta">' + a + "</div>" : "";
    if ("true" == messages.postDate) var s = '<div class="entry-meta">' + a + "</div>";
    else s = "";
    return [t, s]
}

function gofeatureds(e, a, t) {
    var s;
    switch (e) {
        case "featured1":
        case "featured2":
        case "featured3":
            switch (a) {
                case 0:
                    s = t[0];
                    break;
                default:
                    s = t[1]
            }
            break;
        default:
            s = t[0]
    }
    return s
}

function getPostTag(e, a) {
    if (null != e[a].category) var t = '<span class="entry-category">' + e[a].category[0].term + "</span>";
    else t = "";
    return t
}

function getPostSummary(e, a, t) {
    if (e[a].content.$t) var s = e[a].content.$t,
        r = '<span class="entry-excerpt excerpt">' + $("<div>").html(s).text().trim().substr(0, t) + "…</span>";
    else r = "";
    return r
}

function getPostComments(e, a, t) {
    if (_0x54b335 = e[a].author[0].name.$t, _0x4a40ac = e[a].author[0].gd$image.src.replace("/s220", "/w55-h55-p-k-no-nu"), _0x43e2d4 = e[a].title.$t, _0x4a40ac.match("//img1.blogblog.com/img/blank.gif") || _0x4a40ac.match("//img1.blogblog.com/img/b16-rounded.gif")) var s = "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg";
    else s = _0x4a40ac;
    return '<article class="list1-item item-' + a + '"><a class="entry-image-link cmm-avatar" href="' + t + '"><span class="entry-thumb" data-image="' + s + '"/></a><h2 class="entry-title"><a href="' + t + '">' + _0x54b335 + '</a></h2><p class="cmm-snippet excerpt">' + _0x43e2d4 + "</p></article>"
}

function mainfeatured(e, a, t) {
    if (0 != t)
        if ("featured" == a) var s = ".id-" + e + "-" + a + " .entry-category{background-color:" + t + ";color:#fff}.id-" + e + "-" + a + " .loader:after{border-color:" + t + ";border-right-color:rgba(155,155,155,0.2)}";
        else s = ".id-" + e + "-" + a + " .title-wrap{border-bottom-color:" + t + "}.id-" + e + "-" + a + " .title-wrap > h3,.id-" + e + "-" + a + " .entry-category{background-color:" + t + ";color:#fff}.id-" + e + "-" + a + " .title-wrap > h3{color:#fff}.id-" + e + "-" + a + " .title-wrap > a.more:hover,.id-" + e + "-" + a + " .entry-header:not(.entry-info) .entry-title a:hover{color:" + t + "}.id-" + e + "-" + a + " .title-wrap > h3:after{border-left-color:" + t + "}.rtl .id-" + e + "-" + a + " .title-wrap > h3:after{border-right-color:" + t + "}.id-" + e + "-" + a + " .loader:after{border-color:" + t + ";border-right-color:rgba(155,155,155,0.2)}";
    else s = "";
    return s
}

function getAjax(e) {
    switch (a) {
        case "msimple":
        case "featured1":
        case "featured2":
        case "featured3":
        case "featured4":
        case "featured5":
        case "block1":
        case "block2":
        case "col-left":
        case "col-right":
        case "grid1":
        case "grid2":
        case "videos":
        case "side1":
        case "list1":
        case "list2":
        case "related":
            0 == s && (s = "geterror404");
            var i = getFeedUrl(a, t, s);
            $.ajax({
                url: i,
                type: "GET",
                dataType: "json",
                cache: !0,
                beforeSend: function(t) {
                    var s = e.parent().attr("id"),
                        i = mainfeatured(s, a, r);
                    switch (a) {
                        case "featured1":
                        case "featured2":
                        case "featured3":
                        case "featured4":
                        case "featured5":
                            $("#page-skin-2").prepend(i), e.html(beforeLoader()).parent().addClass("type-" + a + " id-" + s + "-" + a + " show");
                            break;
                        case "block1":
                        case "block2":
                        case "grid1":
                        case "grid2":
                        case "videos":
                            $("#page-skin-2").prepend(i), e.html(beforeLoader()).parent().addClass("type-" + a + " id-" + s + "-" + a + " show");
                            break;
                        case "col-left":
                        case "col-right":
                            $("#page-skin-2").prepend(i), e.html(beforeLoader()).parent().addClass("type-" + a + " column-widget id-" + s + "-" + a + " show");
                            break;
                        case "side1":
                        case "list1":
                        case "list2":
                            e.html(beforeLoader());
                            break;
                        case "related":
                            e.html(beforeLoader()).parent().addClass("show")
                    }
                },
                success: function(r) {
                    var i = "";
                    switch (a) {
                        case "msimple":
                            i = '<ul class="mega-items">';
                            break;
                        case "featured1":
                        case "featured2":
                        case "featured3":
                        case "featured4":
                        case "featured5":
                            i = '<div class="featured-items ' + a + '">';
                            break;
                        case "block1":
                            i = '<div class="block1-items">';
                            break;
                        case "block2":
                            i = '<div class="block2-items">';
                            break;
                        case "col-left":
                        case "col-right":
                            i = '<div class="column-items">';
                            break;
                        case "grid1":
                            i = '<div class="grid1-items total-' + t + '">';
                            break;
                        case "grid2":
                            i = '<div class="grid2-items">';
                            break;
                        case "videos":
                            i = '<div class="videos-items total-' + t + '">';
                            break;
                        case "side1":
                            i = '<div class="side1-items">';
                            break;
                        case "list1":
                            i = '<div class="list1-items">';
                            break;
                        case "list2":
                            i = '<div class="list2-items">';
                            break;
                        case "related":
                            i = '<div class="related-posts total-' + t + '">'
                    }
                    var o = r.feed.entry;
                    if (null != o)
                        for (var n = 0, l = o; n < l.length; n++) {
                            var c = getPostLink(l, n),
                                d = getPostTitle(l, n, c),
                                m = getPostImage(l, n, c),
                                f = getPostMeta(getPostAuthor(l, n), getPostDate(l, n)),
                                h = gofeatureds(a, n, f),
                                u = getPostTag(l, n),
                                g = (l.length, "");
                            switch (a) {
                                case "msimple":
                                    g += '<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[1] + "</div></article>";
                                    break;
                                    case "featured5":
                                        switch (n) {
                                            default:
                                                g += '<article class="featured-item item-' + n + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a>' + u + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + h + "</div></div></article>"
                                            }break;
                                case "featured1":
                                case "featured2":
                                case "featured3":
                                case "featured4":
                                    switch (n) {
                                        case 0:
                                            g += '<article class="featured-item item-' + n + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a>' + u + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + h + '</div></div></article><div class="featured-scroll">';
                                            break;
                                        default:
                                            g += '<article class="featured-item item-' + n + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a>' + u + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + h + "</div></div></article>"
                                    }
                                    break;
                                case "block1":
                                    switch (n) {
                                        case 0:
                                            g += '<article class="block-item item-' + n + '"><div class="block-inner">' + u + '<a class="entry-image-link before-mask" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[0] + "</div></div></article>";
                                            break;
                                        default:
                                            g += '<article class="block-item item-' + n + '"><a class="entry-image-link" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[1] + "</div></article>"
                                    }
                                    break;
                                case "block2":
                                    switch (n) {
                                        case 0:
                                            g += '<article class="block-item item-' + n + '"><div class="block-inner">' + u + '<a class="entry-image-link before-mask" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[0] + getPostSummary(l, n, 150) + "</div></div></article>";
                                            break;
                                        default:
                                            g += '<article class="block-item item-' + n + '"><div class="entry-image"><a class="entry-image-link" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[1] + "</div></article>"
                                    }
                                    break;
                                case "col-left":
                                case "col-right":
                                    switch (n) {
                                        case 0:
                                            g += '<article class="column-item item-' + n + '"><div class="column-inner">' + u + '<a class="entry-image-link before-mask" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[0] + "</div></div></article>";
                                            break;
                                        default:
                                            g += '<article class="column-item item-' + n + '"><a class="entry-image-link" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[1] + "</div></article>"
                                    }
                                    break;
                                case "grid1":
                                    g += '<article class="grid-item item-' + n + '"><div class="entry-image"><a class="entry-image-link" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[1] + "</div></article>";
                                    break;
                                case "grid2":
                                    g += '<article class="grid-item item-' + n + '"><div class="entry-image">' + u + '<a class="entry-image-link" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[0] + getPostSummary(l, n, 150) + "</div></article>";
                                    break;
                                case "videos":
                                    g += '<article class="videos-item item-' + n + '"><div class="videos-inner">' + u + '<a class="entry-image-link before-mask" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[0] + "</div></div></article>";
                                    break;
                                case "side1":
                                    switch (n) {
                                        case 0:
                                            g += '<article class="side1-item item-' + n + '"><div class="side1-inner">' + u + '<a class="entry-image-link before-mask" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[0] + "</div></div></article>";
                                            break;
                                        default:
                                            g += '<article class="side1-item item-' + n + '"><a class="entry-image-link" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[1] + "</div></article>"
                                    }
                                    break;
                                case "list1":
                                    switch (s) {
                                        case "comments":
                                            g += getPostComments(l, n, c);
                                            break;
                                        default:
                                            g += '<article class="list1-item item-' + n + '"><a class="entry-image-link" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[1] + "</div></article>"
                                    }
                                    break;
                                case "list2":
                                    g += '<article class="list2-item item-' + n + '"><div class="entry-header">' + f[1] + '<h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2></div></article>";
                                    break;
                                case "related":
                                    g += '<article class="related-item post item-' + n + '"><div class="entry-image"><a class="entry-image-link" href="' + c + '"><span class="entry-thumb" data-image="' + m + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + c + '">' + d + "</a></h2>" + f[1] + "</div></article>"
                            }
                            i += g
                        } else switch (a) {
                            case "msimple":
                                i = '<ul class="mega-items">' + msgError() + "</ul>";
                                break;
                            default:
                                i = msgError()
                        }
                    switch (a) {
                        case "msimple":
                            i += "</ul>", e.append(i).addClass("msimple"), e.find("a:first").attr("href", function(e, a) {
                                switch (s) {
                                    case "recent":
                                        a = a.replace(a, "/search");
                                        break;
                                    default:
                                        a = a.replace(a, "/search/label/" + s)
                                }
                                return a
                            });
                            break;
                        case "featured1":
                        case "featured2":
                        case "featured3":
                        case "featured4":
                        case "featured5":
                            i += "</div></div>", e.html(i);
                            break;
                        default:
                            i += "</div>", e.html(i)
                    }
                    e.find("span.entry-thumb").lazy()
                },
                error: function() {
                    switch (a) {
                        case "msimple":
                            e.append("<ul>" + msgError() + "</ul>");
                            break;
                        default:
                            e.html(msgError())
                    }
                }
            })
    }
}

function ajaxMega(e, a, t, s, r) {
    if (r.match("getmega")) {
        if ("msimple" == a) return getAjax(e, a, t, s);
        e.append('<ul class="mega-items">' + msgError() + "</ul>")
    }
}

function ajaxFeatured(e, a, t, s, r, i) {
    if (r.match("getfeatured")) {
        if ("featured1" == a || "featured2" == a || "featured3" == a || "featured4" == a || "featured5" == a) return getAjax(e, a, t, s, i);
        e.html(beforeLoader()).parent().addClass("show"), setTimeout(function() {
            e.html(msgError())
        }, 500)
    }
}

function ajaxBlock(e, a, t, s, r, i) {
    if (r.match("getblock")) {
        if ("block1" == a || "block2" == a || "col-left" == a || "col-right" == a || "grid1" == a || "grid2" == a || "videos" == a) {
           
        e.html(msgError()).parent().addClass("show")
    }
}

function sidelist(e, a, t, s, r) {
    if (r.match("getwidget")) {
        if ("side1" == a || "list1" == a || "list2" == a) return getAjax(e, a, t, s);
        e.html(msgError())
    }
}

function ajaxRelated(e, a, t, s, r) {
    if (r.match("getrelated")) return getAjax(e, a, t, s)
}

function shortCode(e, a, t) {
    for (var s = e.split("$"), r = /[^{\}]+(?=})/g, i = 0; i < s.length; i++) {
        var o = s[i].split("=");
        if (o[0].trim() == a) return null != (t = o[1]).match(r) && String(t.match(r)).trim()
    }
    return !1
}

function beautiAvatar(e) {
    $(e).attr("src", function(e, a) {
        return (a = a.replace("//resources.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")).replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")
    })
}

function shortCode(e, a, t) {
    for (var s = e.split("$"), r = /[^{\}]+(?=})/g, i = 0; i < s.length; i++) {
        var o = s[i].split("=");
        if (o[0].trim() == a) return null != (t = o[1]).match(r) && String(t.match(r)).trim()
    }
    return !1
}
$("#smile-main-menu").menu(), $("#smile-main-menu-nav > li > a").each(function() {
    var e = $(this),
        a = e.attr("href").toLowerCase().trim();
    "home-icon" == a ? e.addClass("homepage home-icon").attr("href", "/").text("") : "home-text" == a && e.addClass("homepage").attr("href", "/")
}), $("#smile-main-menu .widget").addClass("show-menu"), $(".search-toggle").on("click", function() {
    $("body").toggleClass("search-active")
}), $(".blog-posts-title a.more,.related-title a.more").each(function() {
    var e = $(this),
        a = viewAllText;
    "" != a && e.text(a)
}),$(".post-body strike").each(function() {
    var e = $(this),
        a = e.text().trim();
    "$ads={1}" == a && e.replaceWith('<div id="smile-new-before-ad"/>'), "$ads={2}" == a && e.replaceWith('<div id="smile-new-after-adds"/>')
}), $("#smile-before-ad").each(function() {
    var e = $(this);
    e.length && $("#before-ad").appendTo(e)
}), $("#smile-after-ad").each(function() {
    var e = $(this);
    e.length && $("#after-ad").appendTo(e)
}), $("#smile-main-before-ad .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#before-ad"))
}), $("#smile-main-after-ad .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#after-ad"))
}), $(".post-body strike").each(function() {
    var e = $(this),
        a = e.text().trim();
    e.html(), a.match("left-sidebar") && e.replaceWith("<style>.is-single #main-wrapper{float:right}.is-single #sidebar-wrapper{float:left}</style>"), a.match("right-sidebar") && e.replaceWith("<style>.is-single #main-wrapper{float:left}.is-single #sidebar-wrapper{float:right}</style>"), a.match("full-width") && e.replaceWith("<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>")
}), $(".smile-share-links .window").on("click", function() {
    var e = $(this),
        a = e.data("url"),
        t = e.data("width"),
        s = e.data("height"),
        r = window.screen.width,
        i = window.screen.height,
        o = Math.round(r / 2 - t / 2),
        n = Math.round(i / 2 - s / 2);
    window.open(a, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + t + ",height=" + s + ",left=" + o + ",top=" + n).focus()
}), $(".smile-share-links").each(function() {
    var e = $(this);
    e.find(".show-hid a").on("click", function() {
        e.toggleClass("show-hidden")
    })
}), $(".about-author .author-description span a").each(function() {
    var e = $(this),
        a = e.text().trim(),
        t = e.attr("href");
    e.replaceWith('<li class="' + a + '"><a href="' + t + '" title="' + a + '" target="_blank"/></li>'), $(".description-links").append($(".author-description span li")), $(".description-links").addClass("show")
}), $("#smile-main-menu li").each(function(e, a) {
    var t = $(this),
        s = t,
        r = t.find("a").attr("href").trim(),
        i = r.toLowerCase();
    e = shortCode(r, "type"), a = shortCode(r, "label"), i.match("getmega") && s.addClass("has-sub mega-menu"), ajaxMega(s, e, 5, a, i)
}), $("#featured .HTML .widget-content").each(function(e, a, t, s) {
    var r = $(this),
        i = r.text().trim(),
        o = i.toLowerCase();
    switch (e = shortCode(i, "type"), t = shortCode(i, "label"), s = shortCode(i, "color"), e) {
        case "featured2":
            a = 4;
            break;
        case "featured3":
            a = 5;
            break;
        case "featured5":
            a = 6;
            break;
        default:
            a = 3
    }
    ajaxFeatured(r, e, a, t, o, s)
}), $(".smile-content-blocks .HTML .widget-content").each(function(e, a, t, s) {
    var r = $(this),
        i = r.text().trim(),
        o = i.toLowerCase();
    ajaxBlock(r, shortCode(i, "type"), shortCode(i, "results"), shortCode(i, "label"), o, shortCode(i, "color"))
}), $(".smile-widget-ready .HTML .widget-content").each(function(e, a, t) {
    var s = $(this),
        r = s.text().trim(),
        i = r.toLowerCase();
    sidelist(s, shortCode(r, "type"), shortCode(r, "results"), shortCode(r, "label"), i)
}), $(".smile-related-content").each(function() {
    var e = $(this),
        a = e.find(".related-tag").attr("data-label");
    ajaxRelated(e, "related", relatedPostsNum, a, "getrelated")
}), $(".smile-blog-post-comments").each(function() {
    var e = $(this),
        a = commentsSystem,
        t = '<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5"></div>',
        s = "comments-system-" + a;
    switch (a) {
        case "blogger":
            e.addClass(s).show(), $(".entry-meta .entry-comments-link").addClass("show"), beautiAvatar(".avatar-image-container img");
            break;
        case "disqus":
            e.addClass(s).show();
            break;
        case "facebook":
            e.addClass(s).find("#comments").html(t), e.show();
            break;
        case "hide":
            e.hide();
            break;
        default:
            e.addClass("comments-system-blogger").show(), $(".entry-meta .entry-comments-link").addClass("show"), beautiAvatar(".avatar-image-container img")
    }
    var r = e.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply"),
        i = e.find(".comments .toplevel-thread > #top-continue");
    r.on("click", function() {
        i.show()
    }), i.on("click", function() {
        i.hide()
    })
}), $(function() {
    $(".index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar").lazy(), $("#smile-mobile-menu").each(function() {
        var e = $(this),
            a = $("#smile-main-menu-nav").clone();
        a.attr("id", "main-mobile-nav"), a.find(".mega-items").remove(), a.find("a.home-icon").each(function() {
            var e = $(this),
                a = e.attr("data-text").trim();
            e.text(a)
        }),a.find(".mega-menu:not(.mega-tabs) > a").each(function(e, a) {
            var t = $(this),
                s = t.attr("href").trim();
            s.toLowerCase().match("getmega") && (a = "recent" == (e = shortCode(s, "label")) ? "/search" : "/search/label/" + e, t.attr("href", a))
        }), a.find(".mega-tabs ul li > a").each(function() {
            var e = $(this),
                a = e.text().trim();
            e.attr("href", "/search/label/" + a)
        }), a.appendTo(e), $(".mobile-menu-toggle, .hide-smile-mobile-menu, .overlay").on("click", function() {
            $("body").toggleClass("nav-active")
        }), $(".smile-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'), $(".smile-mobile-menu .mega-menu").find(".submenu-toggle").remove(),$(".smile-mobile-menu ul li .submenu-toggle").on("click", function(e) {
            $(this).parent().hasClass("has-sub") && (e.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170))
        })
    }), $(".mobile-navbar-menu").each(function() {
        var e = $(this);
        $("#main-navbar-menu ul.menu").clone().appendTo(e)
    }), $(".mobile-navbar-social").each(function() {
        var e = $(this);
        $("#main-navbar-social ul.social").clone().appendTo($(this))
    }), $(".main-menu-wrap .main-menu,.nav-outer").each(function() {
        var e = $(this);
        if (1 == fixedMenu && e.length > 0) {
            var a = $(document).scrollTop(),
                t = e.offset().top,
                s = e.height(),
                r = t + s + 50;
            $(window).scroll(function() {
                var i = $(document).scrollTop();
                i < $("#footer-wrapper").offset().top - s && (i > r ? e.addClass("is-fixed") : i < t && e.removeClass("is-fixed"), i > a ? e.removeClass("show") : e.addClass("show"), a = $(document).scrollTop())
            })
        }
    }), $("#main-logo").each(function() {
        var e = $(this);
        if (1 == fixedMenu && e.length > 0) {
            var a = $(document).scrollTop(),
                t = e.offset().top,
                s = e.height(),
                r = t + s;
            $(window).scroll(function() {
                var t = $(document).scrollTop();
                t < $("#footer-wrapper").offset().top - s && (t > r ? e.addClass("is-fixed") : t <= 0 && e.removeClass("is-fixed"), t > a ? e.removeClass("show") : e.addClass("show"), a = $(document).scrollTop())
            })
        }
    }), $("#main-wrapper,#sidebar-wrapper").each(function(e) {
        if (1 == fixedSidebar) {
            e = 1 == fixedMenu ? 75 : 25;
            var a = {};
            a.additionalMarginTop = e, a.additionalMarginBottom = 25, $(this).theiaStickySidebar(a)
        }
    }),$(".back-top").each(function() {
        var e = $(this);
        $(window).on("scroll", function() {
            $(this).scrollTop() >= 100 ? e.fadeIn(250) : e.fadeOut(250), e.offset().top >= $("#footer-wrapper").offset().top - 32 ? e.addClass("on-footer") : e.removeClass("on-footer")
        }), e.on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 500)
        })
    })
}), $(".item-post-inner b").each(function() {
    var e = $(this),
        a = e.text(),
        t = a.toLowerCase().trim();
    t.match("{toc}") && (a = 0 != shortCode(a, "title") ? shortCode(a, "title") : ""+tooc+"", e.replaceWith('<div class="toc-wrap"><div class="toc-inner"><a href="javascript:;" class="toc-title" role="button" title="' + a + '"><span class="toc-title-text">' + a + '</span></a><ol id="toc"></ol></div></div>'), $(".toc-title").each(function(e) {
        (e = $(this)).on("click", function() {
            e.toggleClass("is-expanded"), $("#toc").slideToggle(170)
        })
    }), $("#toc").toc({
        content: "#post-body",
        headings: "h2,h3,h4"
    }), $("#toc li a").each(function(e) {
        (e = $(this)).click(function() {
            return $("html,body").animate({
                scrollTop: $(e.attr("href")).offset().top - 20
            }, 500), !1
        })
    })), t.match("{contactform}") && (e.replaceWith('<div class="contact-form"/>'), $(".contact-form").append($("#ContactForm1")))
}),  $("#post-body iframe").each(function() {
    var e = $(this);
    e.attr("src").match("www.youtube.com") && e.wrap('<div class="responsive-video-wrap"/>')
});





$(document).ready(function() {
	if (localStorage.getItem("mode") == "dark") {
		$("html").addClass("dark");$(".darkmode-toggle .yes").addClass("active");$(".darkmode-toggle .no").removeClass("active");
	} else if (localStorage.getItem("mode") == "light") {$(".darkmode-toggle .no").addClass("active");$(".darkmode-toggle .yes").removeClass("active");
		$("html").removeClass("dark");
	}
});
$(".darkmode-toggle .yes").on("click", function() {
$("html").addClass("dark");
localStorage.setItem("mode", "dark");$(".darkmode-toggle .yes").addClass("active");$(".darkmode-toggle .no").removeClass("active");
});   
       
$(".darkmode-toggle .no").on("click", function() {
                $("html").removeClass("dark");$(".darkmode-toggle .no").addClass("active");$(".darkmode-toggle .yes").removeClass("active");
                localStorage.setItem("mode", "light");
});



$(document).ready(function() {
	if (localStorage.getItem("rd") == "reading") {
		$("html").addClass("readingmode");$(".read-option .yes").addClass("active");$(".read-option .no").removeClass("active");
	} else if (localStorage.getItem("rd") == "no-reading") {$(".read-option .no").addClass("active");$(".read-option .yes").removeClass("active");
		$("html").removeClass("reading");
	}
});
$(".read-option .yes").on("click", function() {
$("html").addClass("readingmode");
localStorage.setItem("rd", "reading");$(".read-option .yes").addClass("active");$(".read-option .no").removeClass("active");
});   
       
$(".read-option .no").on("click", function() {
                $("html").removeClass("readingmode");$(".read-option .no").addClass("active");$(".read-option .yes").removeClass("active");
                localStorage.setItem("rd", "no-reading");
});



$(document).ready(function() {
	if (localStorage.getItem("box") == "yes") {
		$("html").addClass("noboxed");$(".box-option .yes").addClass("active");$(".box-option .no").removeClass("active");
	} else if (localStorage.getItem("box") == "no") {$(".box-option .no").addClass("active");$(".box-option .yes").removeClass("active");
		$("html").removeClass("noboxed");
	}
});
$(".box-option .yes").on("click", function() {
$("html").addClass("noboxed");
localStorage.setItem("box", "yes");$(".box-option .yes").addClass("active");$(".box-option .no").removeClass("active");
});   
       
$(".box-option .no").on("click", function() {
                $("html").removeClass("noboxed");$(".box-option .no").addClass("active");$(".box-option .yes").removeClass("active");
                localStorage.setItem("box", "no");
});

$(".reset-options").on("click", function() {
    localStorage.clear();
    });  

    a = b.getElementsByTagName('script')[0]['innerHTML'];



    $(".post-body"),0<$(".post-body .ArchivePage").length&&$.get("/feeds/posts/summary?alt=json-in-script&max-results=0",function(e){var t=e.feed.category;$.each(t,function(e,t){var n='<div class="caregory-div"><h2 class="Category-ArchivePage"><a href="/search/label/'+t.term+'">'+t.term+'</a></h2></div><ul class="clear">';$.get("/feeds/posts/default/-/"+t.term+"?alt=json-in-script",function(e){for(var t=0;t<e.feed.entry.length;t+=1){var r=e.feed.entry[t].link.map(function(e){return e.rel}).indexOf("alternate"),a=e.feed.entry[t].link[r].href,s=e.feed.entry[t].title.$t;-1!==a.indexOf(".blogspot.")&&(a=a.replace("http://","https://")),n+="<li><a class='ArchivePage-posts' title='"+s+"' href='"+a+"'>"+s+"</a></li>"}$(".ArchivePage").append("</ul>"+n)},"jsonp")})},"jsonp");
