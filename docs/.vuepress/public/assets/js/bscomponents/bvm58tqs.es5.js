/*! Built with http://stenciljs.com */
bscomponents.loadBundle("bvm58tqs",["exports","./chunk-d8c058c1.js","./chunk-04c5df2e.js","./chunk-386b674a.js","./chunk-a937a994.js","./chunk-5fb6bb50.js","./chunk-d04497e8.js","./chunk-5ad0b20f.js","./chunk-6cc71868.js","./chunk-6b186b1d.js"],function(t,e,i,o,n,s,a,l,r,h){var p=window.bscomponents.h,d=function(t){var i=function(t){return t?(t=e.toNumber_1(t))===1/0||t===-1/0?1.7976931348623157e308*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),o=i%1;return i==i?o?i-o:i:0},c=function(){return!1},u=i.createCommonjsModule(function(t,e){var o=e&&!e.nodeType&&e,n=o&&t&&!t.nodeType&&t,s=n&&n.exports===o?i.root.Buffer:void 0,a=(s?s.isBuffer:void 0)||c;t.exports=a}),f={};f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f["[object Arguments]"]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object Boolean]"]=f["[object DataView]"]=f["[object Date]"]=f["[object Error]"]=f["[object Function]"]=f["[object Map]"]=f["[object Number]"]=f["[object Object]"]=f["[object RegExp]"]=f["[object Set]"]=f["[object String]"]=f["[object WeakMap]"]=!1;var v=e.nodeUtil&&e.nodeUtil.isTypedArray,m=v?e.baseUnary(v):function(t){return i.isObjectLike(t)&&i.isLength(t.length)&&!!f[i.baseGetTag(t)]},g=Object.prototype.hasOwnProperty,b=function(t,n){var s=i.isArray(t),a=!s&&o.isArguments(t),l=!s&&!a&&u(t),r=!s&&!a&&!l&&m(t),h=s||a||l||r,p=h?function(t,e){for(var i=-1,o=Array(t);++i<t;)o[i]=e(i);return o}(t.length,String):[],d=p.length;for(var c in t)!n&&!g.call(t,c)||h&&("length"==c||l&&("offset"==c||"parent"==c)||r&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||e.isIndex(c,d))||p.push(c);return p},E=function(t){return null==t?[]:function(t,e){return i.arrayMap(e,function(e){return t[e]})}(t,function(t){return i.isArrayLike(t)?b(t):i.baseKeys(t)}(t))},y=Math.max,T=function(t,e,o,n){t=i.isArrayLike(t)?t:E(t),o=o&&!n?d(o):0;var s=t.length;return o<0&&(o=y(s+o,0)),i.isString(t)?o<=s&&t.indexOf(e,o)>-1:!!s&&i.baseIndexOf(t,e,o)>-1};function w(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new o.MapCache;++e<i;)this.add(t[e])}w.prototype.add=w.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},w.prototype.has=function(t){return this.__data__.has(t)};var C,A,_,N=w,S=function(t,e){return!(null==t||!t.length)&&i.baseIndexOf(t,e,0)>-1},k=function(t,e,i){for(var o=-1,n=null==t?0:t.length;++o<n;)if(i(e,t[o]))return!0;return!1},j=function(t,e){return t.has(e)},P=Math.min,L=Math.max,O=function(){try{var t=i.getNative(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),W=O?function(t,e){return O(t,"toString",{configurable:!0,enumerable:!1,value:(i=e,function(){return i}),writable:!0});var i}:e.identity,M=Date.now,H=(C=W,A=0,_=0,function(){var t=M(),e=16-(t-_);if(_=t,e>0){if(++A>=800)return arguments[0]}else A=0;return C.apply(void 0,arguments)}),x=function(t){return function(t){return i.isObjectLike(t)&&i.isArrayLike(t)}(t)?t:[]},F=function(t,i){return H(function(t,e,i){return e=L(void 0===e?t.length-1:e,0),function(){for(var o=arguments,n=-1,s=L(o.length-e,0),a=Array(s);++n<s;)a[n]=o[e+n];n=-1;for(var l=Array(e+1);++n<e;)l[n]=o[n];return l[e]=i(a),function(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}(t,this,l)}}(t,void 0,e.identity),t+"")}(function(t){var o=i.arrayMap(t,x);return o.length&&o[0]===t[0]?function(t,o,n){for(var s=n?k:S,a=t[0].length,l=t.length,r=l,h=Array(l),p=1/0,d=[];r--;){var c=t[r];r&&o&&(c=i.arrayMap(c,e.baseUnary(o))),p=P(c.length,p),h[r]=!n&&(o||a>=120&&c.length>=120)?new N(r&&c):void 0}c=t[0];var u=-1,f=h[0];t:for(;++u<a&&d.length<p;){var v=c[u],m=o?o(v):v;if(v=n||0!==v?v:0,!(f?j(f,m):s(d,m,n))){for(r=l;--r;){var g=h[r];if(!(g?j(g,m):s(t[r],m,n)))continue t}f&&f.push(m),d.push(v)}}return d}(o):[]}),I=function(){function t(){var t=this;this.showEventName="show.bs.tooltip",this.shownEventName="shown.bs.tooltip",this.hideEventName="hide.bs.tooltip",this.hiddenEventName="hidden.bs.tooltip",this.insertedEventName="inserted.bs.tooltip",this.enableEventName="enable.bs.tooltip",this.enabledEventName="enabled.bs.tooltip",this.disableEventName="disable.bs.tooltip",this.disabledEventName="disabled.bs.tooltip",this.showTooltip=!1,this.showPopover=!1,this.disabled=!1,this.tabindex="0",this.bsContent="",this.bsTitle="",this.config={},this.defaults={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',popoverTemplate:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"hover focus",popoverTrigger:"click",title:"",delay:0,html:!1,selector:!1,placement:"top",popoverPlacement:"right",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",disposeTimeToWait:0,toggle:"tooltip",content:""},this.handlePopperOnCreate=function(e){e.originalPlacement!==e.placement&&t.handlePopperPlacementChange(e)},this.handlePopperOnUpdate=function(e){t.handlePopperPlacementChange(e)},this.handleClickTrigger=function(e){t.toggle(e)},this.handleMouseEnter=function(e){t.enter(e)},this.handleFocusIn=function(e){t.enter(e)},this.handleMouseLeave=function(e){t.leave(e)},this.handleFocusOut=function(e){t.leave(e)},this.handleModalHide=function(e){console.log("handleModalHide"),t.activeTrigger={},t.leave(e)}}return t.prototype.componentWillLoad=function(){"-1"===this.tabindex&&(this.tabindex=-1),this.disabled?this.disableTooltip():(this.isEnabled||this.enableTooltip(),"tooltip"===this.tooltipEl.dataset.toggle&&!0===this.showTooltip?this.setInitialOpenOrCloseState(this.showTooltip):"popover"===this.tooltipEl.dataset.toggle&&!0===this.showPopover&&this.setInitialOpenOrCloseState(this.showPopover))},t.prototype.setInitialOpenOrCloseState=function(t){var e=this;if(this.isEnabled&&t){var o=this.config.animation;o&&this.setConfig({animation:!1}),this.tooltipEl.addEventListener(this.shownEventName,function(){if(T(e.config.trigger,"click")?e.activeTrigger.click=!0:T(e.config.trigger,"hover")&&!T(e.config.trigger,"manual")?(e.activeTrigger.hover=!0,e.hoverState="show"):T(e.config.trigger,"focus")&&!T(e.config.trigger,"manual")&&(e.activeTrigger.focus=!0),o){e.setConfig();var t=e.tip||e.makeTip();i.addClass(t,"fade")}},{once:!0}),this.enter()}},t.prototype.componentDidUnload=function(){this.disableTooltip(),this.config={}},t.getAttachment=function(t){return{auto:"auto",top:"top",right:"right",bottom:"bottom",left:"left"}[i.toLower(t)]},t.prototype.enableTooltip=function(){var t=this;!0!==this.disabled&&(i.customEvent(this.tooltipEl,this.enableEventName).defaultPrevented||(this.isEnabled=!0,this.activeTrigger={},this.hoverState="",this.tooltipId=n.getUniqueId("tooltip"),this.tooltipEl.dataset.bsId=this.tooltipId,this.tip=null,0===i._size(this.config)&&this.setConfig(),this.setListeners(),window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){setTimeout(function(){i.customEvent(t.tooltipEl,t.enabledEventName)},0)})})))},t.prototype.disableTooltip=function(){var t=this;if(!i.customEvent(this.tooltipEl,this.disableEventName).defaultPrevented){this.isEnabled=!1,clearTimeout(this.timeout),this.bsRemoveEventListener("click",this.handleClickTrigger),this.bsRemoveEventListener("mouseenter",this.handleMouseEnter),this.bsRemoveEventListener("mouseleave",this.handleMouseLeave),this.bsRemoveEventListener("focusin",this.handleFocusIn),this.bsRemoveEventListener("focusout",this.handleFocusOut);var e=this.tooltipEl.dataset.originalTitle;i._size(e)>0&&(this.tooltipEl.title=e);var o=l.closest(this.tooltipEl,".modal");o&&o.hideEventName&&o.removeEventListener(o.hideEventName,this.handleModalHide),this.activeTrigger={},this.hoverState="",clearTimeout(this.disposeTimeout),this.removeTooltipFromDom(),window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){setTimeout(function(){i.customEvent(t.tooltipEl,t.disabledEventName)},0)})})}},t.prototype.makeTip=function(){var t=document.getElementById(this.tooltipId);if(t)return t;var e=this.config.container?document.querySelector(this.config.container):document.body,i=document.createElement("div");i.innerHTML=a._trim(this.config.template);var o=i.firstChild,n=e.appendChild(o);return n.setAttribute("id",this.tooltipId),n},t.prototype.getTipElement=function(){return clearTimeout(this.disposeTimeout),this.tip=this.tip||this.makeTip(),this.tip},t.prototype.toggle=function(t){void 0===t&&(t=null),this.isEnabled&&(t?(this.activeTrigger.click=!this.activeTrigger.click,this.isWithActiveTrigger()?this.enter():this.leave()):this.tipHasClass("show")?this.leave():this.enter())},t.prototype.isWithActiveTrigger=function(){var t=this;return Object.keys(this.activeTrigger).some(function(e){return t.activeTrigger[e]})},t.prototype.tipHasClass=function(t){return!!this.tip&&i.hasClass(this.tip,t)},t.prototype.enter=function(t){var e=this;void 0===t&&(t=null),t&&("focusin"===t.type?this.activeTrigger.focus=!0:this.activeTrigger.hover=!0),this.tipHasClass("show")||"show"===this.hoverState?this.hoverState="show":(clearTimeout(this.timeout),this.hoverState="show",this.config.delay&&this.config.delay.show?this.timeout=setTimeout(function(){"show"===e.hoverState&&e.show()},this.config.delay.show):this.show())},t.prototype.leave=function(t){var e=this;void 0===t&&(t=null),t&&("focusout"===t.type?this.activeTrigger.focus=!1:this.activeTrigger.hover=!1),this.isWithActiveTrigger()||(clearTimeout(this.timeout),this.hoverState="out",this.config.delay&&this.config.delay.hide?this.timeout=setTimeout(function(){"out"===e.hoverState&&e.hide()},this.config.delay.hide):this.hide())},t.prototype.okToShow=function(){if(!this.isEnabled)return!1;var t=this.getTitle();return!!(t&&t.length>0)||!!(t&&t instanceof Element)||"popover"===this.config.toggle},t.prototype.show=function(){var o=this;if("none"===this.tooltipEl.style.display)throw new Error("Please use show on visible elements");if(this.okToShow()){var s=i.customEvent(this.tooltipEl,this.showEventName);this.tooltipEl.setAttribute("aria-describedby",this.tooltipId);var a=this.tooltipEl.ownerDocument.documentElement.contains(this.tooltipEl);if(s.defaultPrevented||!a)return;var l=this.getTipElement();this.setContent(),this.config.animation&&i.addClass(l,"fade");var r="function"==typeof this.config.placement?this.config.placement.call(this,l,this.tooltipEl):this.config.placement,h=t.getAttachment(r);if(this.addAttachmentClass(h),i.customEvent(this.tooltipEl,this.insertedEventName),this.popperHandle=new n.Popper(this.tooltipEl,l,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:this.handlePopperOnCreate,onUpdate:this.handlePopperOnUpdate}),i.addClass(l,"show"),i.hasClass(l,"fade")){var p=e.getTransitionDurationFromElement(l);setTimeout(function(){o.showComplete()},p)}else this.showComplete()}},t.prototype.handlePopperPlacementChange=function(e){var i=e.instance;this.tip=i.popper,this.cleanTipClass(),this.addAttachmentClass(t.getAttachment(e.placement))},t.prototype.showComplete=function(){var t=this;this.config.animation&&this.fixTransition();var e=this.hoverState;this.hoverState=null,window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){setTimeout(function(){i.customEvent(t.tooltipEl,t.shownEventName)},0)})}),"out"===e&&this.leave()},t.prototype.hide=function(t){var o=this;void 0===t&&(t=function(){});var n=this.getTipElement();if(!i.customEvent(this.tooltipEl,this.hideEventName).defaultPrevented){if(i.removeClass(n,"show"),this.activeTrigger.click=!1,this.activeTrigger.focus=!1,this.activeTrigger.hover=!1,this.tooltipEl.removeAttribute("aria-describedby"),i.hasClass(n,"fade")){var s=e.getTransitionDurationFromElement(n);setTimeout(function(){o.hideComplete(t)},s)}else this.hideComplete();this.hoverState=""}},t.prototype.hideComplete=function(t){var e=this;void 0===t&&(t=function(){}),this.cleanTipClass(),this.popperHandle&&this.popperHandle.destroy&&this.popperHandle.destroy(),this.disposeTimeout=setTimeout(function(){e.removeTooltipFromDom()},this.config.disposeTimeToWait),window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){setTimeout(function(){i.customEvent(e.tooltipEl,e.hiddenEventName)},0)})}),t()},t.prototype.removeTooltipFromDom=function(){this.tip&&"show"!==this.hoverState&&this.tip.parentNode&&(this.tip.parentNode.removeChild(this.tip),this.tip=null)},t.prototype.fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(i.removeClass(t,"fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t.prototype.cleanTipClass=function(){for(var t=this.getTipElement(),e=F(["bs-tooltip-auto","bs-tooltip-top","bs-tooltip-right","bs-tooltip-bottom","bs-tooltip-left","bs-popover-auto","bs-popover-top","bs-popover-right","bs-popover-bottom","bs-popover-left"],t.classList),o=0,n=e.length;o<n;o+=1)i.removeClass(t,e[o])},t.prototype.addAttachmentClass=function(t){i.addClass(this.getTipElement(),"bs-"+this.config.toggle+"-"+t)},t.prototype.setContent=function(){var t,e,o=this.getTipElement();"tooltip"===this.config.toggle?t=o.querySelector(".tooltip-inner"):"popover"===this.config.toggle&&(t=o.querySelector(".popover-header"),e=o.querySelector(".popover-body")),t&&this.setElementContent(t,this.getTitle()),e&&this.setElementContent(e,this.getContent()),i.removeClass(o,"fade"),i.removeClass(o,"show")},t.prototype.setElementContent=function(t,e){if(this.config.html){if(e instanceof Element)return void t.appendChild(e);t.innerHTML=e}else{if(e instanceof Element)return void(t.textContent=e.innerText);t.textContent=e}},t.prototype.getContent=function(){if(this.config.content){if("function"==typeof this.config.content){var t=this.config.content.call(this.tooltipEl);return t instanceof Element&&(this.config.content=t),t}return this.config.content}return""},t.prototype.getTitle=function(){if(this.config.title){if("function"==typeof this.config.title){var t=this.config.title.call(this.tooltipEl);return t instanceof Element&&(this.config.content=t),t}return this.config.title}return this.tooltipEl.dataset.originalTitle?this.tooltipEl.dataset.originalTitle:""},t.prototype.handleWatchBsTitle=function(t){if(this.isEnabled&&(this.config.title!==t&&(this.config.title=t),this.isWithActiveTrigger()||this.tipHasClass("show")||"show"===this.hoverState)){var e=this.getTipElement(),i=void 0;"tooltip"===this.config.toggle?i=e.querySelector(".tooltip-inner"):"popover"===this.config.toggle&&(i=e.querySelector(".popover-header")),i&&(this.setElementContent(i,this.getTitle()),this.popperHandle&&this.popperHandle.scheduleUpdate&&this.popperHandle.scheduleUpdate())}},t.prototype.handleWatchBsContent=function(t){if(this.isEnabled&&"tooltip"!==this.config.toggle&&(this.config.content!==t&&(this.config.content=t),this.isWithActiveTrigger()||this.tipHasClass("show")||"show"===this.hoverState)){var e=this.getTipElement().querySelector(".popover-body");e&&(this.setElementContent(e,this.getContent()),this.popperHandle&&this.popperHandle.scheduleUpdate&&this.popperHandle.scheduleUpdate())}},t.prototype.bsRemoveEventListener=function(t,e,o){if(void 0===o&&(o=function(){}),this.config.selector){var n=Array.prototype.slice.call(document.querySelectorAll(this.config.selector));if(n&&i._size(n)>0)for(var s=0;s<n.length;s+=1)n[s].removeEventListener(t,e)}this.tooltipEl.removeEventListener(t,e),o()},t.prototype.bsAddEventListener=function(t,e){var o=this;this.bsRemoveEventListener(t,e,function(){if(o.config.selector){var n=Array.prototype.slice.call(o.tooltipEl.querySelectorAll(o.config.selector));if(n&&i._size(n)>0){for(var s=0;s<n.length;s+=1)n[s].addEventListener(t,e);return}console.error("unable to find elements matching selector falling back to using bs-tooltip")}o.tooltipEl.addEventListener(t,e)})},t.prototype.setListeners=function(){var t=l.closest(this.tooltipEl,".modal");t&&t.hideEventName&&(t.removeEventListener(t.hideEventName,this.handleModalHide),t.addEventListener(t.hideEventName,this.handleModalHide)),this.fixTitle();var o=e.split(i.toLower(this.config.trigger)," ");T(o,"click")&&this.bsAddEventListener("click",this.handleClickTrigger),T(o,"manual")||(T(o,"hover")&&(this.bsAddEventListener("mouseenter",this.handleMouseEnter),this.bsAddEventListener("mouseleave",this.handleMouseLeave)),T(o,"focus")&&(this.bsAddEventListener("focusin",this.handleFocusIn),this.bsAddEventListener("focusout",this.handleFocusOut)))},t.prototype.fixTitle=function(){i._size(this.tooltipEl.title)>0&&(this.tooltipEl.dataset.originalTitle=this.tooltipEl.title||"",this.tooltipEl.title="")},t.prototype.setConfig=function(t){void 0===t&&(t={}),this.config={};var n={};o._has(this.tooltipEl.dataset,"toggle")?n.toggle=this.tooltipEl.dataset.toggle:n.toggle=this.defaults.toggle,o._has(t,"animation")?n.animation=r.getConfigBoolean(t.animation):o._has(this.tooltipEl.dataset,"animation")?n.animation=r.getConfigBoolean(this.tooltipEl.dataset.animation):n.animation=this.defaults.animation,o._has(t,"trigger")?n.trigger=t.trigger:o._has(this.tooltipEl.dataset,"trigger")?n.trigger=this.tooltipEl.dataset.trigger:"popover"===n.toggle?n.trigger=this.defaults.popoverTrigger:n.trigger=this.defaults.trigger;var a,l,h=this.tooltipEl.getAttribute("title");if(i._size(this.bsTitle)>0?n.title=this.bsTitle:h?n.title=h:o._has(t,"title")?"object"==typeof t.title&&t.title.nodeValue?n.title=t.title.nodeValue:n.title=t.title:o._has(this.tooltipEl.dataset,"title")?n.title=this.tooltipEl.dataset.title:n.title=this.defaults.title,e._isNumber(n.title)&&(n.title=i.toString$1(n.title)),i._size(this.bsContent)>0?n.content=this.bsContent:o._has(this.tooltipEl.dataset,"content")?n.content=this.tooltipEl.dataset.content:o._has(t,"content")?"object"==typeof t.content&&t.content.nodeValue?n.content=t.content.nodeValue:n.content=t.content:n.content=this.defaults.content,e._isNumber(n.content)&&(n.content=i.toString$1(n.content)),o._has(t,"delay")?a=t.delay:o._has(this.tooltipEl.dataset,"delay")&&(a=this.tooltipEl.dataset.delay),"number"==typeof(l=a)&&l==d(l))n.delay={show:a,hide:a};else if(i._isObject(a))n.delay={show:s._get(a,"show",this.defaults.delay),hide:s._get(a,"hide",this.defaults.delay)};else if(i._isString(a)&&i._size(a)>0){var p=d(a);if(e.isNaN(p)){var c=function(t){try{return JSON.parse(t)}catch(t){return!1}}(a);n.delay={show:s._get(c,"show",this.defaults.delay),hide:s._get(c,"hide",this.defaults.delay)}}else n.delay={show:p,hide:p}}else n.delay={show:this.defaults.delay,hide:this.defaults.delay};o._has(t,"html")?n.html=r.getConfigBoolean(t.html):o._has(this.tooltipEl.dataset,"html")?n.html=r.getConfigBoolean(this.tooltipEl.dataset.html):n.html=this.defaults.html,o._has(t,"selector")?n.selector=t.selector:o._has(this.tooltipEl.dataset,"selector")?n.selector=this.tooltipEl.dataset.selector:n.selector=this.defaults.selector,o._has(t,"placement")?n.placement=t.placement:o._has(this.tooltipEl.dataset,"placement")?n.placement=this.tooltipEl.dataset.placement:"popover"===n.toggle?n.placement=this.defaults.popoverPlacement:n.placement=this.defaults.placement,o._has(t,"offset")?n.offset=d(t.offset):o._has(this.tooltipEl.dataset,"offset")?n.offset=d(this.tooltipEl.dataset.offset):n.offset=this.defaults.offset,e.isNaN(n.offset)&&(n.offset=this.defaults.offset),o._has(t,"container")?n.container=r.getConfigBoolean(t.container):o._has(this.tooltipEl.dataset,"container")?n.container=r.getConfigBoolean(this.tooltipEl.dataset.container):n.container=this.defaults.container,o._has(t,"fallbackPlacement")?n.fallbackPlacement=t.fallbackPlacement:o._has(this.tooltipEl.dataset,"fallbackPlacement")?n.fallbackPlacement=this.tooltipEl.dataset.fallbackPlacement:n.fallbackPlacement=this.defaults.fallbackPlacement,o._has(t,"boundary")?n.boundary=t.boundary:o._has(this.tooltipEl.dataset,"boundary")?n.boundary=this.tooltipEl.dataset.boundary:n.boundary=this.defaults.boundary,o._has(t,"disposeTimeToWait")?n.disposeTimeToWait=d(t.disposeTimeToWait):o._has(this.tooltipEl.dataset,"disposeTimeToWait")?n.disposeTimeToWait=d(this.tooltipEl.dataset.disposeTimeToWait):n.disposeTimeToWait=this.defaults.disposeTimeToWait,e.isNaN(n.disposeTimeToWait)&&(n.disposeTimeToWait=this.defaults.disposeTimeToWait),o._has(t,"template")?n.template=t.template:o._has(this.tooltipEl.dataset,"template")?n.template=this.tooltipEl.dataset.template:"popover"===n.toggle?n.template=this.defaults.popoverTemplate:n.template=this.defaults.template,this.config=n,"popover"===this.config.toggle&&(this.tooltipEl.hasAttribute("show-event-name")||(this.showEventName="show.bs.popover"),this.tooltipEl.hasAttribute("shown-event-name")||(this.shownEventName="shown.bs.popover"),this.tooltipEl.hasAttribute("hide-event-name")||(this.hideEventName="hide.bs.popover"),this.tooltipEl.hasAttribute("hidden-event-name")||(this.hiddenEventName="hidden.bs.popover"),this.tooltipEl.hasAttribute("inserted-event-name")||(this.insertedEventName="inserted.bs.popover"),this.tooltipEl.hasAttribute("enable-event-name")||(this.enableEventName="enable.bs.popover"),this.tooltipEl.hasAttribute("enabled-event-name")||(this.enabledEventName="enabled.bs.popover"),this.tooltipEl.hasAttribute("disable-event-name")||(this.disableEventName="disable.bs.popover"),this.tooltipEl.hasAttribute("disabled-event-name")||(this.disabledEventName="disabled.bs.popover"))},t.prototype.handleDisabledWatch=function(t){this.disabled===t&&!this.isEnabled===t||(!0!==t?this.enableTooltip():this.disableTooltip())},t.prototype.handleShowPopoverWatch=function(t){if("popover"!==this.tooltipEl.dataset.toggle)throw new Error('A popover must have [data-toggle="popover"]');this.isEnabled&&(!0!==t?this.leave():this.enter())},t.prototype.handleShowTooltipWatch=function(t){if("tooltip"!==this.tooltipEl.dataset.toggle)throw new Error('A tooltip must have [data-toggle="tooltip"]');this.isEnabled&&(!0!==t?this.leave():this.enter())},t.prototype.setupMethod=function(t){if(0===i._size(t))return this.isEnabled?this.tooltipEl:(this.enableTooltip(),!0);if("enable"===t)return this.enableTooltip(),!0;if("disable"===t)return this.disableTooltip(),!0;if("toggleEnabled"===t)return this.isEnabled?this.disableTooltip():this.enableTooltip(),!0;if("show"===t)return console.log("show"),console.log("this.isEnabled: ",this.isEnabled),this.isEnabled?(this.enter(),!0):null;if("hide"===t)return this.activeTrigger={},this.isEnabled?(this.leave(),!0):null;if("toggle"===t)return this.isEnabled?(this.toggle(),!0):null;if("update"===t)return!(!this.popperHandle||!this.popperHandle.scheduleUpdate||(this.popperHandle.scheduleUpdate(),0));if("object"==typeof t)return this.isEnabled&&this.disableTooltip(),this.setConfig(t),this.enableTooltip(),!0;if("string"==typeof t)throw new Error('No method named "'+t+'"');return null},t.prototype.popover=function(t){if(void 0===t&&(t={}),"popover"!==this.tooltipEl.dataset.toggle)throw new Error('a popover requires [data-toggle="popover"]');return this.setupMethod(t)},t.prototype.tooltip=function(t){if(void 0===t&&(t={}),"popover"===this.tooltipEl.dataset.toggle)throw new Error("For a popover you must call the popover method not the tooltip method");return this.setupMethod(t)},t.prototype.render=function(){return p("slot",null)},Object.defineProperty(t,"is",{get:function(){return"bs-tooltip"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeTrigger:{state:!0},bsContent:{type:String,attr:"bs-content",mutable:!0,watchCallbacks:["handleWatchBsContent"]},bsTitle:{type:String,attr:"bs-title",mutable:!0,watchCallbacks:["handleWatchBsTitle"]},config:{type:"Any",attr:"config",mutable:!0},defaults:{type:"Any",attr:"defaults"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["handleDisabledWatch"]},disabledEventName:{type:String,attr:"disabled-event-name",mutable:!0},disableEventName:{type:String,attr:"disable-event-name",mutable:!0},disposeTimeout:{state:!0},enabledEventName:{type:String,attr:"enabled-event-name",mutable:!0},enableEventName:{type:String,attr:"enable-event-name",mutable:!0},hiddenEventName:{type:String,attr:"hidden-event-name",mutable:!0},hideEventName:{type:String,attr:"hide-event-name",mutable:!0},hoverState:{state:!0},insertedEventName:{type:String,attr:"inserted-event-name",mutable:!0},isEnabled:{state:!0},popover:{method:!0},popperHandle:{state:!0},showEventName:{type:String,attr:"show-event-name",mutable:!0},shownEventName:{type:String,attr:"shown-event-name",mutable:!0},showPopover:{type:Boolean,attr:"show-popover",mutable:!0,watchCallbacks:["handleShowPopoverWatch"]},showTooltip:{type:Boolean,attr:"show-tooltip",mutable:!0,watchCallbacks:["handleShowTooltipWatch"]},tabindex:{type:"Any",attr:"tabindex",reflectToAttr:!0,mutable:!0},timeout:{state:!0},tip:{state:!0},tooltip:{method:!0},tooltipEl:{elementRef:!0},tooltipId:{state:!0}}},enumerable:!0,configurable:!0}),t}();t.BsTooltip=I,Object.defineProperty(t,"__esModule",{value:!0})});