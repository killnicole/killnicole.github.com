! function (t) {
    "use strict";
    var i = function () {
        var i = function () {
            t("#testimonials").slidesjs({
                height: 300,
                pagination: {
                    active: !1
                },
                navigation: {
                    active: !1
                }
            })
        }, a = function () {
            var i = {
                page: 1,
                per_page: 9
            };
            t.jribbble.getShotsByPlayerId("killnicole", function (i) {
                var a = [];
                t.each(i.shots, function (t, i) {
                    var n = i.image_400_url || i.image_url;
                    a.push("<li>"), a.push('<a href="' + i.url + '" target="_blank">'), a.push('<img src="' + n + '" '), a.push('alt="' + i.title + '"></a>'), a.push("</li>")
                }), t("#works").html(a.join(""))
            }, i)
        }, s = function() {
        	t(".header__slogan-text").each(function(){
        		t(this).append("<span class='header__slogan-text--shadow header__slogan-text--shadow-green'>" + t(this).attr("title") + "</span>");
        		t(this).append("<span class='header__slogan-text--shadow header__slogan-text--shadow-purple'>" + t(this).attr("title") + "</span>");
        	});

        	var currentMousePos = { x: -1, y: -1 };
			var currentWindowSize = { w: 10, h: 10 };
			var shadow = { x: 1, y: 1};

			t(document).mousemove(function(event) {
			    currentMousePos.x = event.pageX;
			    currentMousePos.y = event.pageY;
			    currentWindowSize.w = window.innerWidth;
			    currentWindowSize.h = window.innerHeight;
			    shadow.y = currentMousePos.y.map(0, currentWindowSize.h, -10, 10);
			    shadow.x = currentMousePos.x.map(0, currentWindowSize.w, -15, 15);
			    t(".header__slogan-text--shadow-purple").each(function() {
			    	if (shadow.x < 0) {
			    		t(this).css("right", shadow.x + "px");
			    	} else if (shadow.x > 0) {
			    		t(this).css("left", - shadow.x + "px");
			    	}
			    	if (shadow.y < 0) {
			    		t(this).css("top", shadow.y *-1 + "px");
			    	} else if (shadow.y > 0) {
						t(this).css("top", shadow.y *-1 + "px");
			    	}
			    });
			    t(".header__slogan-text--shadow-green").each(function() {
			    	if (shadow.x < 0) {
			    		t(this).css("left", shadow.x + "px");
			    	} else if (shadow.x > 0) {
			    		t(this).css("right", - shadow.x + "px");
			    	}
			    	if (shadow.y < 0) {
			    		t(this).css("top", shadow.y + "px");
			    	} else if (shadow.y > 0) {
						t(this).css("top", shadow.y + "px");
			    	}
			    });
			});
        }, n = function () {
            i(), a(), s()
        };
        return {
            start: n
        }
    }();

    i.start()
}(jQuery);

Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
	return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
}