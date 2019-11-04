this.wp=this.wp||{},this.wp.listReusableBlocks=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=213)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",function(){return r})},11:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o})},12:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n(30),r=n(5);function i(t,e){return!e||"object"!==Object(o.a)(e)&&"function"!=typeof e?Object(r.a)(t):e}},13:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",function(){return r})},14:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return o})},2:function(t,e){!function(){t.exports=this.lodash}()},21:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},213:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(1),i=n(21),c=n.n(i),a=n(41),u=n(2),s=n(35),l=n.n(s);function f(t,e,n){var o=new window.Blob([e],{type:n});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(o,t);else{var r=document.createElement("a");r.href=URL.createObjectURL(o),r.download=t,r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}}function p(t){var e=new window.FileReader;return new Promise(function(n){e.onload=function(){n(e.result)},e.readAsText(t)})}function b(){return(b=Object(a.a)(c.a.mark(function t(e){var n,o,r,i,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()({path:"/wp/v2/types/wp_block"});case 2:return n=t.sent,t.next=5,l()({path:"/wp/v2/".concat(n.rest_base,"/").concat(e,"?context=edit")});case 5:o=t.sent,r=o.title.raw,i=o.content.raw,a=JSON.stringify({__file:"wp_block",title:r,content:i},null,2),f(Object(u.kebabCase)(r)+".json",a,"application/json");case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}var d=function(t){return b.apply(this,arguments)},m=n(3),h=n(11),y=n(10),v=n(12),O=n(14),w=n(5),j=n(13),_=n(7);function S(){return(S=Object(a.a)(c.a.mark(function t(e){var n,o,r,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:n=t.sent,t.prev=3,o=JSON.parse(n),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(3),new Error("Invalid JSON file");case 10:if("wp_block"===o.__file&&o.title&&o.content&&Object(u.isString)(o.title)&&Object(u.isString)(o.content)){t.next=12;break}throw new Error("Invalid Reusable Block JSON file");case 12:return t.next=14,l()({path:"/wp/v2/types/wp_block"});case 14:return r=t.sent,t.next=17,l()({path:"/wp/v2/".concat(r.rest_base),data:{title:o.title,content:o.content,status:"publish"},method:"POST"});case 17:return i=t.sent,t.abrupt("return",i);case 19:case"end":return t.stop()}},t,null,[[3,7]])}))).apply(this,arguments)}var g=function(t){return S.apply(this,arguments)},k=function(t){function e(){var t;return Object(h.a)(this,e),(t=Object(v.a)(this,Object(O.a)(e).apply(this,arguments))).state={isLoading:!1,error:null,file:null},t.isStillMounted=!0,t.onChangeFile=t.onChangeFile.bind(Object(w.a)(t)),t.onSubmit=t.onSubmit.bind(Object(w.a)(t)),t}return Object(j.a)(e,t),Object(y.a)(e,[{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"onChangeFile",value:function(t){this.setState({file:t.target.files[0]})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var n=this.state.file,o=this.props.onUpload;n&&(this.setState({isLoading:!0}),g(n).then(function(t){e.isStillMounted&&(e.setState({isLoading:!1}),o(t))}).catch(function(t){if(e.isStillMounted){var n;switch(t.message){case"Invalid JSON file":n=Object(r.__)("Invalid JSON file");break;case"Invalid Reusable Block JSON file":n=Object(r.__)("Invalid Reusable Block JSON file");break;default:n=Object(r.__)("Unknown error")}e.setState({isLoading:!1,error:n})}}))}},{key:"render",value:function(){var t=this.props.instanceId,e=this.state,n=e.file,i=e.isLoading,c=e.error,a="list-reusable-blocks-import-form-"+t;return Object(o.createElement)("form",{className:"list-reusable-blocks-import-form",onSubmit:this.onSubmit},c&&Object(o.createElement)(m.Notice,{status:"error"},c),Object(o.createElement)("label",{htmlFor:a,className:"list-reusable-blocks-import-form__label"},Object(r.__)("File")),Object(o.createElement)("input",{id:a,type:"file",onChange:this.onChangeFile}),Object(o.createElement)(m.Button,{type:"submit",isBusy:i,disabled:!n||i,isDefault:!0,className:"list-reusable-blocks-import-form__button"},Object(r._x)("Import","button label")))}}]),e}(o.Component),x=Object(_.withInstanceId)(k);var E=function(t){var e=t.onUpload;return Object(o.createElement)(m.Dropdown,{position:"bottom right",contentClassName:"list-reusable-blocks-import-dropdown__content",renderToggle:function(t){var e=t.isOpen,n=t.onToggle;return Object(o.createElement)(m.Button,{type:"button","aria-expanded":e,onClick:n,isPrimary:!0},Object(r.__)("Import from JSON"))},renderContent:function(t){var n=t.onClose;return Object(o.createElement)(x,{onUpload:Object(u.flow)(n,e)})}})};document.body.addEventListener("click",function(t){t.target.classList.contains("wp-list-reusable-blocks__export")&&(t.preventDefault(),d(t.target.dataset.id))}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".page-title-action");if(t){var e=document.createElement("div");e.className="list-reusable-blocks__container",t.parentNode.insertBefore(e,t),Object(o.render)(Object(o.createElement)(E,{onUpload:function(){var t=document.createElement("div");t.className="notice notice-success is-dismissible",t.innerHTML="<p>".concat(Object(r.__)("Reusable block imported successfully!"),"</p>");var e=document.querySelector(".wp-header-end");e&&e.parentNode.insertBefore(t,e)}}),e)}})},3:function(t,e){!function(){t.exports=this.wp.components}()},30:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}n.d(e,"a",function(){return r})},35:function(t,e){!function(){t.exports=this.wp.apiFetch}()},41:function(t,e,n){"use strict";function o(t,e,n,o,r,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var c=t.apply(e,n);function a(t){o(c,r,i,a,u,"next",t)}function u(t){o(c,r,i,a,u,"throw",t)}a(void 0)})}}n.d(e,"a",function(){return r})},5:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return o})},7:function(t,e){!function(){t.exports=this.wp.compose}()}});