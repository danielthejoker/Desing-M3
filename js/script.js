(function(){var e,t,n,a,r,i,o,s,l,d,u;r=function(){return window.getComputedStyle(document.body,":before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"")},$(".icon.icon-list2").on("click",function(){("smartphone vertical"===r()||"smartphone horizontal"===r())&&($(".top-nav").hasClass("relative")?($(".top-nav span").remove(),$(".top-nav").removeClass("relative"),$(".top-nav").removeClass("desktop-nav")):($(".top-nav").addClass("relative"),$(".top-nav").addClass("desktop-nav")))}),d={"mod-row":["card","tile"],"mod-lists .list-item":["pull-left","pull-right"]},t=function(e){var t,n,a;null==e&&(e={}),a=[];for(n in e)t=e[n],a.push($("."+n).each(function(){var e,n,a,r,i,o;for(n=$(this),a=!1,o=[],r=0,i=t.length;i>r;r++)e=t[r],n.find("."+e).each(function(){var e,t;return t=$(this),t.css("height","auto"),e=t.outerHeight(),e>a?a=e:void 0}),o.push(a?function(){var r,i,o;for(o=[],r=0,i=t.length;i>r;r++)e=t[r],o.push(n.find("."+e).css("height",a));return o}():void 0);return o}));return a},a=["resize","circle"],l=function(e,t){var n,a,r,i;for(null==e&&(e=["resize"]),null==t&&(t="height"),i=[],a=0,r=e.length;r>a;a++)n=e[a],i.push($("."+n).each(function(){var e,n,a;return e=$(this),"height"===t?(a=e.innerWidth(),n="width"):(a=e.outerHeight(),n="height"),e.css(t,a)}));return i},n=function(){return $(window).resize(function(){return clearTimeout(window.counter),window.counter=setTimeout(function(){return l(a),t(d),window.platform=r()},500)})},e=function(){return $(".minimized li a").on("click",function(){var e,t,n;return t=$(this),"#"===t.attr("href")?(e=t.parent().children("ul"),n=t.find(".toggle"),e.hasClass("opened")?(e.removeClass("opened"),n.removeClass(n.attr("data-altclass")),n.addClass(n.attr("data-class")),e.slideUp("fast")):(e.addClass("opened"),n.removeClass(n.attr("data-class")),n.addClass(n.attr("data-altclass")),e.slideDown("fast")),!1):void 0})},u=function(e,t,n){var a;return a=100*t,e.children(".stripe").animate({marginLeft:"-"+a+"%"}),n.find("a").removeClass("active"),n.find("a:eq("+t+")").addClass("active"),t+1===e.find(".slide").length?0:t+1},o=function(){var e,t;t=$(".slider"),e=8e3,t.each(function(){var t,n;return n=$(this),t=n.find(".slider-nav"),n.find(".stripe.crow .slide").length>1&&n.data("interval",setInterval(function(){var e;return"undefined"==typeof n.data("nextslide")?(e=1,n.data("nextslide",e)):(console.log("now here"),e=n.data("nextslide")),n.data("nextslide",u(n,e,t))},e)),t.find("a").on("click",function(){var e;return clearInterval(n.data("interval")),e=t.find("a").index(this),console.log(e),u(n,e,t),!1})})},s=function(){var e;return e=new Waves,e.displayEffect()},(i=function(){return setTimeout(function(){return l(a),t(d)},100),n(),e(),o(),s()})()}).call(this);