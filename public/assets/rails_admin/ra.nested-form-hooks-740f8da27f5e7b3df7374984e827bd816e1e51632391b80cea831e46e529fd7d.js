(function(){var t;t=jQuery,t(document).ready(function(){return window.nestedFormEvents.insertFields=function(e,n,i){var o;return o=t(i).closest(".controls").siblings(".tab-content"),o.append(e),o.children().last()}}),t(document).on("nested:fieldAdded","form",function(e){var n,i,o,r,s,a,l;if(i=e.field.addClass("tab-pane").attr("id","unique-id-"+(new Date).getTime()),r=t('<li><a data-toggle="tab" href="#'+i.attr("id")+'">'+i.children(".object-infos").data("object-label")+"</a></li>"),a=i.closest(".control-group"),n=a.children(".controls"),s=void 0!==n.data("nestedone"),o=n.children(".nav"),e=a.children(".tab-content"),l=n.find(".toggler"),o.append(r),t(window.document).trigger("rails_admin.dom_ready",[i,a]),r.children("a").tab("show"),s||o.select(":hidden").show("slow"),e.select(":hidden").show("slow"),l.addClass("active").removeClass("disabled").children("i").addClass("icon-chevron-down").removeClass("icon-chevron-right"),s)return n.find(".add_nested_fields").removeClass("add_nested_fields").html(i.children(".object-infos").data("object-label"))}),t(document).on("nested:fieldRemoved","form",function(e){var n,i,o,r,s,a,l,u;return r=e.field,s=r.closest(".control-group").children(".controls").children(".nav"),o=s.children("li").has('a[href="#'+r.attr("id")+'"]'),l=r.closest(".control-group"),i=l.children(".controls"),a=void 0!==i.data("nestedone"),u=i.find(".toggler"),(o.next().length?o.next():o.prev()).children("a:first").tab("show"),o.remove(),0===s.children().length&&(s.select(":visible").hide("slow"),u.removeClass("active").addClass("disabled").children("i").removeClass("icon-chevron-down").addClass("icon-chevron-right")),a&&(n=u.next(),n.addClass("add_nested_fields").html(n.data("add-label"))),r.find("[required]").each(function(){return t(this).removeAttr("required")})})}).call(this);