"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("./index.css");var styles={choosy:"choosy",choosyExpanded:"choosyExpanded",optionList:"optionList",placeholder:"placeholder",item:"item",itemSelected:"itemSelected"},Choosy=function(){function t(e){if(_classCallCheck(this,t),!e)throw new Error("Error: The target 'id' is missing!");this.container=document.getElementById(e),document.addEventListener("mousedown",this.handleClick.bind(this))}return _createClass(t,[{key:"handleClick",value:function(e){var t=e.target,r=this.container.querySelector(".".concat(styles.choosy)),n=r&&r.querySelector(".".concat(styles.itemSelected));if(this.container.contains(t)){var i=this.container.firstElementChild,o=r.querySelector(".".concat(styles.placeholder));if(t.classList.contains(styles.item)){var s={key:t.dataset.key,label:t.innerText.trim()};n&&n.classList.remove(styles.itemSelected),t.classList.add(styles.itemSelected),i.value=s.key,o.innerHTML=s.label}r.classList.toggle(styles.choosyExpanded),n&&n.scrollIntoView()}else r&&r.classList.remove(styles.choosyExpanded)}},{key:"render",value:function(e){var t=e.options,r=e.properties,n=void 0===r?["id","label"]:r,i=e.initialValue,o=void 0===i?null:i;if(!Array.prototype.slice.call(arguments)[0].hasOwnProperty("options"))throw new Error("Error: The 'options' property is missing!");var s=_slicedToArray(n,2),a=s[0],l=s[1],c="",d="";if(o){var y=_slicedToArray(t.filter(function(e){return e[a]===o}),1)[0];c=y[a],d=y[l]}var u='<input type="hidden" name="'.concat(this.container.id,'" value="').concat(c,'">\n        <div class="').concat(styles.choosy,'">\n            <div class="').concat(styles.placeholder,'">').concat(d,'</div>\n            <div class="').concat(styles.optionList,'">\n                ').concat(t&&t.map(function(e){return'\n                        <div class="'.concat(styles.item," ").concat(e[a]===c&&styles.itemSelected,'" data-key="').concat(e[a],'">').concat(e[l],"</div>")}).join(""),"\n            </div>\n        </div>");this.container.innerHTML=u}}]),t}();exports.default=Choosy;