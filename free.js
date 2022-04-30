
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
            if (dImg.match('/s72-c')) { img = dImg.replace('/s72-c', '/' + iSiz); } else if (dImg.match('/w72-h')) { img = dImg.replace('/w72-h72-p-k-no-nu', '/' + iSiz); } else if (dImg.match('=w72-h')) { img = dImg.replace('=w72-h72-p-k-no-nu', '=' + iSiz); } else { img = dImg; }
            a(window).on('load resize scroll', lazyOnScroll);

            function lazyOnScroll() {
                var wHeight = a(window).height(),
                    scrTop = a(window).scrollTop(),
                    offTop = t.offset().top;
                if (scrTop + wHeight > offTop) {
                    var n = new Image();
                    n.onload = function() { t.attr('style', 'background-image:url(' + this.src + ')').addClass('lazy'); }, n.src = img;
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
                            } else { f.nodeValue = e }
                        }
                    }
                } while (f = f.nextSibling)
            }
            d.length && $(d).remove()
        })
    }
})(jQuery);
$(document).ready(function() {
    var by = { team1: 'Smile', link1: 'https://smile-template.blogspot.com/' };
    Cont = '<a  href="' + by.link1 + '" target="_blank" tooltip="' + by.team1 + '" style="width: 30px;height: 30px;background-size: 30px 60px;-webkit-transition: all 0.15s ease-in-out;transition: all 0.15s ease-in-out;position: relative;display: inline-block!important;vertical-align: middle;visibility: visible!important; opacity: 1!important; z-index: 0 !important;" /><style>#smile-right a{background:url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRc-vgikfGqLuuBuTNvFRaZDS-IW9FyadUzNIcsDAb-Y8AMXolGY1LAWNWLUo5sU2gf1A-QzI6dVK-qXSuThB_5gSRBSEFlaidil9aN-UQZYttjCi_ZpAoR4p6XTG5fzmC5LKosrA5VVK9A_r2UW9nbtSEgXYc9kZ7ri6NjxgF53uWuITedCqTb4yE/s1600/Copy.png) top no-repeat;}#smile-right a:hover{background-position:bottom}#smile-right a:after{font-size: 0.6rem;padding: 3px 10px;position: absolute;top:2px;right: 25px;z-index:100;content:attr(tooltip);background:var(--bg);color:#ffffff;opacity:0;visibility:hidden;-webkit-transition:all 0.1s ease-in-out 0.1s;transition:all 0.1s ease-in-out 0.1s;border-radius:100px;line-height:1rem;text-transform:uppercase;letter-spacing:.5px;white-space:nowrap;}#smile-right a:hover:after{opacity:1;visibility:visible;right:30px}#smile-right a:hover:after{opacity:1;visibility:visible;right:30px}</style>';
    $('#smile-right').addClass('impo').append(Cont);
    setInterval(function() { if (!$('#smile-right:visible').length) { window.location.href = 'https://smile-template.blogspot.com/'} }, 10000)
});
$("#smile-main-menu").menu(), $("#smile-main-menu-nav > li > a").each(function() {
    var e = $(this),
        a = e.attr("href").toLowerCase().trim();
    "home-icon" == a ? e.addClass("homepage home-icon").attr("href", "/").text("") : "home-text" == a && e.addClass("homepage").attr("href", "/")
}), $(".post-body b").each(function() {
    var e = $(this),
        a = e.text().trim();
    "$ads={1}" == a && e.replaceWith('<div id="smile-new-before-adds"/>'), "$ads={2}" == a && e.replaceWith('<div id="smile-new-after-adds"/>')
}), $("#smile-new-before-adds").each(function() {
    var e = $(this);
    e.length && $("#before-adds").appendTo(e)
}), $("#smile-new-after-adds").each(function() {
    var e = $(this);
    e.length && $("#after-adds").appendTo(e)
}), $("#smile-main-before-adds .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#before-adds"))
}), $("#smile-main-after-adds .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#after-adds"))
}), $(".post-body b").each(function() {
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
}),$("#smile-main-menu .widget").addClass("show-menu"), $(".search-toggle").on("click", function() { $("body").toggleClass("search-active") }), $(".smile-share-links").each(function() {
    var e = $(this);
    e.find(".show-hid a").on("click", function() { e.toggleClass("show-hidden") })
}), $(".about-author .author-description span a").each(function() {
    var e = $(this),
        a = e.text().trim(),
        t = e.attr("href");
    e.replaceWith('<li class="' + a + '"><a href="' + t + '" title="' + a + '" target="_blank"/></li>'), $(".description-links").append($(".author-description span li")), $(".description-links").addClass("show")
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
    r.on("click", function() { i.show() }), i.on("click", function() { i.hide() })
}), $(function() {
    $(".index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar").lazy(), $("#smile-mobile-menu").each(function() {
        var e = $(this),
            a = $("#smile-main-menu-nav").clone();
        a.find("a.home-icon").each(function() {
            var e = $(this),
                a = e.attr("data-text").trim();
            e.text(a)
        }), a.appendTo(e), $(".mobile-menu-toggle, .hide-smile-mobile-menu, .overlay").on("click", function() { $("body").toggleClass("nav-active") }), $(".smile-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'), $(".smile-mobile-menu ul li .submenu-toggle").on("click", function(e) { $(this).parent().hasClass("has-sub") && (e.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170)) })
    }), $(".mobile-navbar-menu").each(function() {
        var e = $(this);
        $("#main-navbar-menu ul.menu").clone().appendTo(e)
    }), $(".mobile-navbar-social").each(function() {
        var e = $(this);
        $("#main-navbar-social ul.social").clone().appendTo(e)
    }),$("#smile-load-more-link").each(function() {
        var e = $(this).data("load");
        e && $("#smile-load-more-link").show(), $("#smile-load-more-link").on("click", function(a) {
            $("#smile-load-more-link").hide(), $.ajax({
                url: e,
                success: function(a) {
                    var t = $(a).find(".blog-posts");
                    t.find(".index-post").addClass("post-animated post-fadeInUp"), $(".blog-posts").append(t.html()), (e = $(a).find("#smile-load-more-link").data("load")) ? $("#smile-load-more-link").show() : ($("#smile-load-more-link").hide(), $("#blog-pager .no-more").addClass("show")), $(".index-post .entry-image-link .entry-thumb").lazy()},
                beforeSend: function() { $("#blog-pager .loading").show() },
                complete: function() { $("#blog-pager .loading").hide() }
            }), a.preventDefault()
        })
    })
}), $(".blog-post b").each(function() {
    var e = $(this),
        a = e.text(),
        t = a.toLowerCase().trim();
    t.match("{toc}") && (a = 0 != shortCode(a, "title") ? shortCode(a, "title") : "Table of Contents", e.replaceWith('<div class="toc-wrap"><div class="toc-inner"><a href="javascript:;" class="toc-title" role="button" title="' + a + '"><span class="toc-title-text">' + a + '</span></a><ol id="toc"></ol></div></div>'), $(".toc-title").each(function(e) {
        (e = $(this)).on("click", function() { e.toggleClass("is-expanded"), $("#toc").slideToggle(170) })
    }), $("#toc").toc({ content: ".blog-post", headings: "h2,h3,h4" }), $("#toc li a").each(function(e) {
        (e = $(this)).click(function() { return $("html,body").animate({ scrollTop: $(e.attr("href")).offset().top - 20 }, 500), !1 })
    })), t.match("{contactform}") && (e.replaceWith('<div class="contact-form"/>'), $(".contact-form").append($("#ContactForm1")))
}), $(".post-body blockquote").each(function() {
    var e = $(this),
        a = e.text().toLowerCase().trim(),
        t = e.html();
    if (a.match("{alertsuccess}")) {
        const a = t.replace("{alertSuccess}", "");
        e.replaceWith('<div class="alert-message alert-success">' + a + "</div>")
    }
    if (a.match("{alertinfo}")) {
        const a = t.replace("{alertInfo}", "");
        e.replaceWith('<div class="alert-message alert-info">' + a + "</div>")
    }
    if (a.match("{alertwarning}")) {
        const a = t.replace("{alertWarning}", "");
        e.replaceWith('<div class="alert-message alert-warning">' + a + "</div>")
    }
    if (a.match("{alerterror}")) {
        const a = t.replace("{alertError}", "");
        e.replaceWith('<div class="alert-message alert-error">' + a + "</div>")
    }
    if (a.match("{codebox}")) {
        const a = t.replace("{codeBox}", "");
        e.replaceWith('<pre class="code-box">' + a + "</pre>")
    }
}), $("#post-body iframe").each(function() {
    var e = $(this);
    e.attr("src").match("www.youtube.com") && e.wrap('<div class="responsive-video-wrap"/>')
});
$(document).ready(function() {
    for (let dd of document.querySelectorAll('body'))
        if (dd.getAttribute('name') == 'item') {
            $(".post-nav").each(function() {
                var t = $("a.prev-post").attr("href"),
                    n = $("a.next-post").attr("href");
                $.ajax({
                    url: t,
                    type: "get",
                    success: function(t) {
                        var n = $(t).find("h1.entry-title").text(),
                            a = postnavPrevText,
                            e = "";
                        e += "<div class='nav-content'><span>" + a + "</span><p class='truncate'>" + n + "</p></div>", $("a.prev-post").html(e)
                    }
                }), $.ajax({
                    url: n,
                    type: "get",
                    success: function(t) {
                        var n = $(t).find("h1.entry-title").text(),
                            a = postnavNextText,
                            e = "";
                        e += "<div class='nav-content'><span>" + a + "</span><p class='truncate'>" + n + "</p></div>", $("a.next-post").html(e)
                    }
                })
            });
        }
});
function beautiAvatar(e) { $(e).attr("src", function(e, a) { return (a = a.replace("//resources.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")).replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg") }) }
