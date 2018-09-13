/*! Built with http://stenciljs.com */
bscomponents.loadBundle("hsrfw2vx",["exports","./chunk-04c5df2e.js","./chunk-5fb6bb50.js","./chunk-386b674a.js","./chunk-d8c058c1.js","./chunk-40b3ad27.js","./chunk-6b186b1d.js","./chunk-2ddc7836.js","./chunk-d04497e8.js"],function(e,l,o,t,a,s,n,r,i){var c=window.bscomponents.h,g=function(e){e=l.toString(e);var o=l.hasUnicode(e)?l.stringToArray(e):void 0,t=o?o[0]:e.charAt(0),a=o?l.castSlice(o,1).join(""):e.slice(1);return t.toUpperCase()+a},d=l.overArg(Object.getPrototypeOf,Object),h=Function.prototype,p=Object.prototype,u=h.toString,f=p.hasOwnProperty,v=u.call(Object),T=function(e){return l.isObjectLike(e)&&1===e.nodeType&&!function(e){if(!l.isObjectLike(e)||"[object Object]"!=l.baseGetTag(e))return!1;var o=d(e);if(null===o)return!0;var t=f.call(o,"constructor")&&o.constructor;return"function"==typeof t&&t instanceof t&&u.call(t)==v}(e)},C=function(){function e(){this.showEventName="show.bs.collapse",this.shownEventName="shown.bs.collapse",this.hideEventName="hide.bs.collapse",this.hiddenEventName="hidden.bs.collapse",this.ignoreAccordion=!1,this.ignoreDataToggles=!1,this.showCollapse=!1}return e.prototype.componentWillLoad=function(){if(!1===this.thisCollapseIsShown()&&!0===this.showCollapse){l.addClass(this.collapseEl,"show"),l.removeClass(this.collapseEl,"collapsing"),l.addClass(this.collapseEl,"collapse");var o=e.getDimension(this.collapseEl);this.collapseEl.style[o]="";var t=this.getConfig({toggle:"show"}),a=void 0;if(T(t.parent)?a=t.parent:(a=document.querySelector(t.parent))||console.warn('unable to find accordion parent by selector: "'+t.parent+'"'),a)for(var s=Array.prototype.slice.call(a.querySelectorAll(".collapse")),r=0,i=s.length;r<i;r+=1)l.hasClass(s[r],"show")&&n.elementMatches(a,s[r].dataset.parent)&&!s[r].isEqualNode(this.collapseEl)&&t.collapseElPlannedToBeClosed.push(s[r]);if(!0!==t.ignoreAccordion)for(r=0,i=t.collapseElPlannedToBeClosed.length;r<i;r+=1){l.removeClass(t.collapseElPlannedToBeClosed[r],"show"),l.removeClass(t.collapseElPlannedToBeClosed[r],"collapsing"),l.addClass(t.collapseElPlannedToBeClosed[r],"collapse");var c=e.getDimension(t.collapseElPlannedToBeClosed[r]);this.collapseEl.style[c]=""}!0!==t.ignoreDataToggles&&e.handleToggleDataToggles(t)}},e.prototype.componentDidUnload=function(){this.relatedTarget=null},e.prototype.getConfig=function(e,a){void 0===e&&(e={}),void 0===a&&(a=null);var s={};return s.relatedTarget=a,!0===e.toggle?s.toggle="toggle":!1===e.toggle?!0===this.thisCollapseIsShown()?s.toggle="show":s.toggle="hide":s.toggle=o._get(e,"toggle","toggle"),t._has(e,"ignoreAccordion")?s.ignoreAccordion=e.ignoreAccordion:s.ignoreAccordion=this.ignoreAccordion,t._has(e,"ignoreDataToggles")?s.ignoreDataToggles=e.ignoreDataToggles:s.ignoreDataToggles=this.ignoreDataToggles,s.collapseElPlannedToBeOpened=[],s.collapseElPlannedToBeClosed=[],t._has(e,"target")?s.targetSelector=e.target:a&&t._has(a.dataset,"target")&&(s.targetSelector=a.dataset.target),t._has(e,"parent")&&T(e.parent)?s.parent=e.parent:t._has(e,"parent")&&"string"==typeof e.parent&&l._size(e.parent)>1?s.parent=e.parent:t._has(this.collapseEl.dataset,"parent")&&(s.parent=this.collapseEl.dataset.parent),s},e.prototype.closeOtherOpenAccordions=function(e){for(var l=0,o=e.collapseElPlannedToBeClosed.length;l<o;l+=1)e.collapseElPlannedToBeClosed[l].collapse&&!this.collapseEl.isEqualNode(e.collapseElPlannedToBeClosed[l])?e.collapseElPlannedToBeClosed[l].collapse({toggle:"hide",ignoreAccordion:!0,ignoreDataToggles:!0}):console.error('Unable to toggle collapse for all targets due to unavailable bs-collapse method "collapse')},e.handleToggleDataToggles=function(e){for(var o=Array.prototype.slice.call(document.querySelectorAll('[data-toggle="collapse"]')),t=0,a=o.length;t<a;t+=1){var s=r.getTargetSelector(o[t]),i=!1;if(l._size(s)>0){for(var c=0,g=e.collapseElPlannedToBeOpened.length;c<g;c+=1)!0===n.elementMatches(e.collapseElPlannedToBeOpened[c],s)&&!1===i&&(l.removeClass(o[t],"collapsed"),o[t].setAttribute("aria-expanded","true"),i=!0);if(!1===i)for(c=0,g=e.collapseElPlannedToBeClosed.length;c<g;c+=1)if(!0===n.elementMatches(e.collapseElPlannedToBeClosed[c],s)){var d=document.querySelectorAll(s+".show");0===l._size(d)&&(l.addClass(o[t],"collapsed"),o[t].setAttribute("aria-expanded","false"))}}}},e.prototype.thisCollapseIsShown=function(){return l.hasClass(this.collapseEl,"show")||l.hasClass(this.collapseEl,"collapsing")},e.prototype.handleToggle=function(e){if(t._has(e,"parent")&&!0!==e.ignoreAccordion){var o=void 0;if(T(e.parent)?o=e.parent:(o=document.querySelector(e.parent))||console.warn('unable to find accordion parent by selector: "'+e.parent+'"'),o)for(var a=Array.prototype.slice.call(o.querySelectorAll(".collapse")),s=0,r=a.length;s<r;s+=1)l.hasClass(a[s],"show")&&n.elementMatches(o,a[s].dataset.parent)&&e.collapseElPlannedToBeClosed.push(a[s])}return"show"===e.toggle?(e.collapseElPlannedToBeOpened.push(this.collapseEl),void this.show(this.collapseEl,e)):"hide"===e.toggle?(e.collapseElPlannedToBeClosed.push(this.collapseEl),void this.hideCollapse(this.collapseEl,e)):this.thisCollapseIsShown()?(e.collapseElPlannedToBeClosed.push(this.collapseEl),void this.hideCollapse(this.collapseEl,e)):(e.collapseElPlannedToBeOpened.push(this.collapseEl),void this.show(this.collapseEl,e))},e.prototype.show=function(o,t){var s=this;if(!l.hasClass(o,"show")&&!l.hasClass(o,"collapsing")&&!l.customEvent(o,this.showEventName,{},t.relatedTarget).defaultPrevented){var n=e.getDimension(o),r="scroll"+g(n);l.addClass(o,"collapsing"),l.removeClass(o,"collapse"),!0!==t.ignoreAccordion&&this.closeOtherOpenAccordions(t),!0!==t.ignoreDataToggles&&e.handleToggleDataToggles(t);var i=a.getTransitionDurationFromElement(o);setTimeout(function(){l.removeClass(o,"collapsing"),l.addClass(o,"collapse"),l.addClass(o,"show"),o.style[n]="",t.relatedTarget&&(s.relatedTarget=t.relatedTarget),l.customEvent(o,s.shownEventName,{},t.relatedTarget)},i),o.style[n]=o[r]+"px"}},e.prototype.hideCollapse=function(o,t){var n=this;if(l.hasClass(o,"show")&&!l.customEvent(o,this.hideEventName,{},this.relatedTarget).defaultPrevented){var r=e.getDimension(o);o.style[r]=o.getBoundingClientRect()[r]+"px",s.reflow(o),l.addClass(o,"collapsing"),l.removeClass(o,"collapse"),l.removeClass(o,"show"),o.style[r]="",!0!==t.ignoreDataToggles&&e.handleToggleDataToggles(t);var i=a.getTransitionDurationFromElement(o);setTimeout(function(){l.removeClass(o,"collapsing"),l.addClass(o,"collapse"),l.customEvent(o,n.hiddenEventName,{},n.relatedTarget),n.relatedTarget=null},i)}},e.getDimension=function(e){return l.hasClass(e,"width")?"width":"height"},e.prototype.handlePresentWatch=function(e){!0===e?this.handleToggle(this.getConfig({toggle:"show"})):!1===e&&this.handleToggle(this.getConfig({toggle:"hide"}))},e.prototype.collapse=function(e,o){if(void 0===o&&(o=null),0===l._size(e))return this.collapseEl;if("toggle"===e)return this.handleToggle(this.getConfig({toggle:"toggle"},o)),!0;if("show"===e)return this.handleToggle(this.getConfig({toggle:"show"},o)),!0;if("hide"===e)return this.handleToggle(this.getConfig({toggle:"hide"},o)),!0;if("string"==typeof e)throw new Error('No method named "'+e+'"');return"object"==typeof e?(this.handleToggle(this.getConfig(e,o)),!0):null},e.prototype.render=function(){return c("slot",null)},Object.defineProperty(e,"is",{get:function(){return"bs-collapse"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{collapse:{method:!0},collapseEl:{elementRef:!0},hiddenEventName:{type:String,attr:"hidden-event-name"},hideEventName:{type:String,attr:"hide-event-name"},ignoreAccordion:{type:Boolean,attr:"ignore-accordion",mutable:!0},ignoreDataToggles:{type:Boolean,attr:"ignore-data-toggles",mutable:!0},relatedTarget:{state:!0},showCollapse:{type:Boolean,attr:"show-collapse",mutable:!0,watchCallbacks:["handlePresentWatch"]},showEventName:{type:String,attr:"show-event-name"},shownEventName:{type:String,attr:"shown-event-name"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"bs-collapse{display:block}"},enumerable:!0,configurable:!0}),e}();e.BsCollapse=C,Object.defineProperty(e,"__esModule",{value:!0})});