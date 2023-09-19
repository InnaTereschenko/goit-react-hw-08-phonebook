(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[878],{2878:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return M}});var i=o(9439),n=o(2791),a="ContactForm_nameTxt__34fKN",r="ContactForm_addContactBtn__3KI6e",s="ContactForm_contactForm__y0Rca",l="ContactForm_formName__9bHzl",c="ContactForm_formTel__K5qDS",f=o(2260),m=o(9434),p="NOT_FOUND";var u=function(t,e){return t===e};function d(t,e){var o="object"===typeof e?e:{equalityCheck:e},i=o.equalityCheck,n=void 0===i?u:i,a=o.maxSize,r=void 0===a?1:a,s=o.resultEqualityCheck,l=function(t){return function(e,o){if(null===e||null===o||e.length!==o.length)return!1;for(var i=e.length,n=0;n<i;n++)if(!t(e[n],o[n]))return!1;return!0}}(n),c=1===r?function(t){var e;return{get:function(o){return e&&t(e.key,o)?e.value:p},put:function(t,o){e={key:t,value:o}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(t,e){var o=[];function i(t){var i=o.findIndex((function(o){return e(t,o.key)}));if(i>-1){var n=o[i];return i>0&&(o.splice(i,1),o.unshift(n)),n.value}return p}return{get:i,put:function(e,n){i(e)===p&&(o.unshift({key:e,value:n}),o.length>t&&o.pop())},getEntries:function(){return o},clear:function(){o=[]}}}(r,l);function f(){var e=c.get(arguments);if(e===p){if(e=t.apply(null,arguments),s){var o=c.getEntries(),i=o.find((function(t){return s(t.value,e)}));i&&(e=i.value)}c.put(arguments,e)}return e}return f.clearCache=function(){return c.clear()},f}function y(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var o=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+o+"]")}return e}function x(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];var n=function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];var a,r=0,s={memoizeOptions:void 0},l=i.pop();if("object"===typeof l&&(s=l,l=i.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var c=s,f=c.memoizeOptions,m=void 0===f?o:f,p=Array.isArray(m)?m:[m],u=y(i),d=t.apply(void 0,[function(){return r++,l.apply(null,arguments)}].concat(p)),x=t((function(){for(var t=[],e=u.length,o=0;o<e;o++)t.push(u[o].apply(null,arguments));return a=d.apply(null,t)}));return Object.assign(x,{resultFunc:l,memoizedResultFunc:d,dependencies:u,lastResult:function(){return a},recomputations:function(){return r},resetRecomputations:function(){return r=0}}),x};return n}var h=x(d),b=function(t){return t.contacts.items},g=function(t){return t.contacts.isLoading},v=function(t){return t.contacts.error},w=function(t){return t.filter},N=h([b,w],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),k=o(5264),C=o(184);function I(){var t=(0,m.v9)(b),e=(0,m.I0)(),o=(0,n.useState)(""),p=(0,i.Z)(o,2),u=p[0],d=p[1],y=(0,n.useState)(""),x=(0,i.Z)(y,2),h=x[0],g=x[1],v=function(t){var e=t.target,o=e.name,i=e.value;switch(o){case"name":d(i);break;case"number":g(i);break;default:return}};return(0,C.jsxs)("form",{className:s,onSubmit:function(o){o.preventDefault(),function(e){var o=e.toLowerCase();return!t.find((function(t){return t.name.toLowerCase()===o}))||(k.Notify.failure('"'.concat(e,'" is already in contacts')),!1)}(u)&&(e((0,f.el)({name:u,phone:h})),alert('"'.concat(u,'" added to your contacts'))),d(""),g("")},children:[(0,C.jsx)("h2",{className:a,children:"Name"}),(0,C.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:l,placeholder:"Please enter name",value:u,onChange:v}),(0,C.jsx)("h2",{className:a,children:"PhoneNumber"}),(0,C.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:c,placeholder:"Please enter phone number",value:h,onChange:v}),(0,C.jsx)("button",{className:r,type:"submit",disabled:!u||!h,children:"Add contact"})]})}var z="ContactList_contactsTitle__gHlpa",A="ContactList_listSection__kUTgN",W="ContactListItem_deleteBtn__roUYm",_="ContactListItem_contactItem__g+7xP",j="ContactListItem_contactTxt__h77Ti",L=function(t){var e=t.id,o=t.name,i=t.phone,n=(0,m.I0)();return(0,C.jsxs)("li",{className:_,children:[(0,C.jsx)("span",{className:j,children:o})," :"," ",(0,C.jsx)("span",{className:j,children:i}),(0,C.jsx)("button",{onClick:function(){n((0,f.GK)(e))},type:"button",className:W,children:"Delete"})]})},T=o(6716),E=function(){var t=(0,m.v9)(v),e=(0,m.v9)(g),o=(0,m.v9)(N),i=(0,m.I0)();return(0,n.useEffect)((function(){i((0,f.yF)())}),[i]),(0,C.jsxs)("div",{className:A,children:[(0,C.jsx)("h2",{className:z,children:"Contacts"}),(0,C.jsx)("ul",{children:e&&!t?(0,C.jsx)(T.a,{}):0!==o.length||t?o.map((function(t){var e=t.id,o=t.name,i=t.phone;return(0,C.jsx)(L,{id:e,name:o,phone:i},e)})):(0,C.jsx)("p",{children:"The Phonebook is empty. Add your first contact. \ud83e\udee4"})})]})},S="Filter_filterSection__N5x2R",B="Filter_filterLabel__+pnW-",D="Filter_filterName__Y2kKA",O=o(4808),F=function(){var t=(0,m.v9)(w),e=(0,m.I0)();return(0,C.jsxs)("div",{className:S,children:[(0,C.jsx)("label",{className:B,children:"Find contacts by Name "}),(0,C.jsx)("input",{className:D,type:"text",name:"filter",placeholder:"Enter filter",value:t,onChange:function(t){var o=t.target.value;e((0,O.T)(o.toLowerCase().trim()))}})]})};var M=function(){var t=(0,m.v9)(b),e=(0,m.I0)();return(0,n.useEffect)((function(){e((0,f.yF)())}),[e]),(0,C.jsxs)("div",{children:[(0,C.jsx)("h1",{className:"mainTitle",children:"Phonebook"}),(0,C.jsx)(I,{}),t.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(F,{}),(0,C.jsx)(E,{})]})]})}},5264:function(t,e,o){var i,n;n="undefined"!==typeof o.g?o.g:"undefined"!==typeof window?window:this,i=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var e,o="Notiflix",i="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c "+o+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+i)},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}},f=function t(){var e={},o=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=t(e[n],i[n]):e[n]=i[n])};i<arguments.length;i++)n(arguments[i]);return e},m=function(e){var o=t.document.createElement("div");return o.innerHTML=e,o.textContent||o.innerText||""},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},u=0,d=function(o,i,s,c){if(!l("body"))return!1;e||y.Notify.init({});var p=f(!0,e,{});if("object"===typeof s&&!Array.isArray(s)||"object"===typeof c&&!Array.isArray(c)){var d={};"object"===typeof s?d=s:"object"===typeof c&&(d=c),e=f(!0,e,d)}var x=e[o.toLocaleLowerCase("en")];u++,"string"!==typeof i&&(i="Notiflix "+o),e.plainText&&(i=m(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=f(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(x.fontAwesomeIconColor=x.background),e.cssAnimation||(e.cssAnimationDuration=0);var h=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(h.id=r.wrapID,h.style.width=e.width,h.style.zIndex=e.zindex,h.style.opacity=e.opacity,"center-center"===e.position?(h.style.left=e.distance,h.style.top=e.distance,h.style.right=e.distance,h.style.bottom=e.distance,h.style.margin="auto",h.classList.add("nx-flex-center-center"),h.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.justifyContent="center",h.style.alignItems="center",h.style.pointerEvents="none"):"center-top"===e.position?(h.style.left=e.distance,h.style.right=e.distance,h.style.top=e.distance,h.style.bottom="auto",h.style.margin="auto"):"center-bottom"===e.position?(h.style.left=e.distance,h.style.right=e.distance,h.style.bottom=e.distance,h.style.top="auto",h.style.margin="auto"):"right-bottom"===e.position?(h.style.right=e.distance,h.style.bottom=e.distance,h.style.top="auto",h.style.left="auto"):"left-top"===e.position?(h.style.left=e.distance,h.style.top=e.distance,h.style.right="auto",h.style.bottom="auto"):"left-bottom"===e.position?(h.style.left=e.distance,h.style.bottom=e.distance,h.style.top="auto",h.style.right="auto"):(h.style.right=e.distance,h.style.top=e.distance,h.style.left="auto",h.style.bottom="auto"),e.backOverlay){var b=t.document.getElementById(r.overlayID)||t.document.createElement("div");b.id=r.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=e.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=x.backOverlayColor||e.backOverlayColor,b.className=e.cssAnimation?"nx-with-animation":"",b.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(b)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(h);var g=t.document.createElement("div");g.id=e.ID+"-"+u,g.className=e.className+" "+x.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!==typeof s?"nx-with-close-button":"")+" "+("function"===typeof s?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),g.style.fontSize=e.fontSize,g.style.color=x.textColor,g.style.background=x.background,g.style.borderRadius=e.borderRadius,g.style.pointerEvents="all",e.rtl&&(g.setAttribute("dir","rtl"),g.classList.add("nx-rtl-on")),g.style.fontFamily='"'+e.fontFamily+'", '+n,e.cssAnimation&&(g.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!==typeof s&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+x.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)g.innerHTML='<i style="color:'+x.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+x.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var w="";o===a.Success?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+x.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':o===a.Failure?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+x.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':o===a.Warning?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+x.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':o===a.Info&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+x.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),g.innerHTML=w+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else g.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var N=t.document.getElementById(r.wrapID);N.insertBefore(g,N.firstChild)}else t.document.getElementById(r.wrapID).appendChild(g);var k=t.document.getElementById(g.id);if(k){var C,I,z=function(){k.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&h.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(C)},A=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),h.childElementCount<=0&&null!==h.parentNode){h.parentNode.removeChild(h);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(I)};if(e.closeButton&&"function"!==typeof s&&t.document.getElementById(g.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"===typeof s||e.clickToClose)&&k.addEventListener("click",(function(){"function"===typeof s&&s(),z();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!==typeof s){var W=function(){C=setTimeout((function(){z()}),e.timeout),I=setTimeout((function(){A()}),e.timeout+e.cssAnimationDuration)};W(),e.pauseOnHover&&(k.addEventListener("mouseenter",(function(){k.classList.add("nx-paused"),clearTimeout(C),clearTimeout(I)})),k.addEventListener("mouseleave",(function(){k.classList.remove("nx-paused"),W()})))}}if(e.showOnlyTheLastOne&&u>0)for(var _=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+u+"])"),j=0;j<_.length;j++){var L=_[j];null!==L.parentNode&&L.parentNode.removeChild(L)}e=f(!0,e,p)},y={Notify:{init:function(t){e=f(!0,r,t),c(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=f(!0,e,t)},success:function(t,e,o){d(a.Success,t,e,o)},failure:function(t,e,o){d(a.Failure,t,e,o)},warning:function(t,e,o){d(a.Warning,t,e,o)},info:function(t,e,o){d(a.Info,t,e,o)}}};return"object"===typeof t.Notiflix?f(!0,t.Notiflix,{Notify:y.Notify}):{Notify:y.Notify}}(n)}.apply(e,[]),void 0===i||(t.exports=i)}}]);
//# sourceMappingURL=878.51239907.chunk.js.map