$("body").addClass("js");var $menu=$("#menu"),$menulink=$(".menu-link"),$menuTrigger=$(".has-submenu > a");$menulink.click(function(a){a.preventDefault(),$menulink.toggleClass("active"),$menu.toggleClass("active")}),$menuTrigger.click(function(a){a.preventDefault();var b=$(this);b.toggleClass("active").next("ul").toggleClass("active")}),function(a,b,c){var d,e=a.getElementsByTagName(b)[0],f=/^http:/.test(a.location)?"http":"https";a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src=f+"://platform.twitter.com/widgets.js",e.parentNode.insertBefore(d,e))}(document,"script","twitter-wjs");