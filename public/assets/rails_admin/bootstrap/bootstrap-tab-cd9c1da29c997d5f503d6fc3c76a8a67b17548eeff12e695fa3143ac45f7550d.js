+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new n(this)),"string"==typeof e&&o[e]()})}var n=function(e){this.element=t(e)};n.VERSION="3.2.0",n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=n.find(".active:last a")[0],r=t.Event("show.bs.tab",{relatedTarget:o});if(e.trigger(r),!r.isDefaultPrevented()){var s=t(i);this.activate(e.closest("li"),n),this.activate(s,s.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:o})})}}},n.prototype.activate=function(e,n,i){function o(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var r=n.find("> .active"),s=i&&t.support.transition&&r.hasClass("fade");s?r.one("bsTransitionEnd",o).emulateTransitionEnd(150):o(),r.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(n){n.preventDefault(),e.call(t(this),"show")})}(jQuery);