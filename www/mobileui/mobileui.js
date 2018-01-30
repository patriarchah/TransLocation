/*component-base*/var userAgent=navigator.userAgent||navigator.vendor||window.opera,SO={name:"unknown",code:0};/android/i.test(userAgent)&&(SO.name="Android",SO.class="platform-android",SO.code=1);/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream&&(SO.name="iOS",SO.class="platform-ios",SO.code=2);/windows phone/i.test(userAgent)&&(SO.name="Windows Phone",SO.class="platform-wp",SO.code=3);SO.class&&document.getElementsByTagName("body").length&&(document.getElementsByTagName("body")[0].className+=" "+SO.class);

/*component-button*/document.addEventListener("click",function(e){if(1!==SO.code)return!1;var t=e.target;if("button"!==t.tagName.toLowerCase())return!1;var o=t.getBoundingClientRect(),s=t.querySelector(".ripple");s||(s=document.createElement("span"),s.className="ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",t.appendChild(s)),s.classList.remove("show");var a=e.pageY-o.top-s.offsetHeight/2-document.body.scrollTop,l=e.pageX-o.left-s.offsetWidth/2-document.body.scrollLeft;return s.style.top=a+"px",s.style.left=l+"px",s.classList.add("show"),!1},!1);
/*component-input*/!function e(){setTimeout(function(){var t=document.getElementsByTagName("input");for(i in t){var a=t[i].parentNode;a&&(a.className.indexOf("left")>=0||a.className.indexOf("right")>=0)&&a.parentNode.className.indexOf("item")>=0&&(a=a.parentNode),a&&a.className.indexOf("item")>=0&&a.className.indexOf("bind-input-event-click")<0&&(a.className+=" bind-input-event-click",a.addEventListener("click",function(){this.getElementsByTagName("input").length&&(this.getElementsByTagName("input")[0].focus(),"radio"!==this.getElementsByTagName("input")[0].type||this.getElementsByTagName("input")[0].disabled||(this.getElementsByTagName("input")[0].checked=!0))},!1))}var n=document.getElementsByClassName("label-float");for(i in n)n[i].className&&n[i].className.indexOf("bind-input-event-focus")<0&&n[i].getElementsByTagName("input").length&&(n[i].className+=" bind-input-event-focus",n[i].getElementsByTagName("input")[0].addEventListener("focus",function(){this.parentNode.getElementsByTagName("label").length&&this.parentNode.getElementsByTagName("label")[0].className.indexOf("focus")<0&&(this.parentNode.getElementsByTagName("label")[0].className+=" focus")},!1),n[i].getElementsByTagName("input")[0].addEventListener("blur",function(){this.parentNode.getElementsByTagName("label").length&&this.parentNode.getElementsByTagName("label")[0].className&&!this.value.length&&(this.parentNode.getElementsByTagName("label")[0].className=this.parentNode.getElementsByTagName("label")[0].className.replace("focus",""))},!1));e()},500)}();

/*component-alert*/window.alert=function(e,t){var a={};"object"==typeof e?a=e:(a.message=e,a.title=t),a.id||(a.id="ALERT"+(new Date).getTime()),a.buttons&&a.buttons.length||(a.buttons=[{label:"OK",onclick:function(){closeAlert()}}]);var n=document.getElementsByTagName("body")[0];event&&event.target&&event.target.parentNode&&event.target.parentNode.className.indexOf("body")>=0&&(n=event.target.parentNode);var d=document.createElement("div");d.className="backdrop show backdrop-alert",d.id=a.id+"_BACKDROP",n.appendChild(d);var o=document.createElement("div");o.className="alert-mobileui",o.id=a.id,d.parentNode.appendChild(o);var l=document.createElement("div");if(a.class||(a.class="white"),l.className="alert "+a.class,o.appendChild(l),a.title){var c=document.createElement("h1"),r=document.createTextNode(a.title);c.appendChild(r),l.appendChild(c)}if(a.message){var s=document.createElement("p"),r=document.createTextNode(a.message);s.appendChild(r),l.appendChild(s)}var i=document.createElement("div");i.className="buttons",l.appendChild(i);for(var m in a.buttons){var p=document.createElement("button");a.buttons[m].class||(a.buttons[m].class="text-teal"),p.className=a.buttons[m].class;var r=document.createTextNode(a.buttons[m].label);p.appendChild(r),a.buttons[m].onclick||(a.buttons[m].onclick=closeAlert),p.addEventListener("click",a.buttons[m].onclick),i.appendChild(p)}},window.closeAlert=function(){var e=event.target.parentNode.parentNode.parentNode.id,t=document.getElementById(e);t.parentNode.removeChild(t);var a=document.getElementById(e+"_BACKDROP");a.parentNode.removeChild(a)};