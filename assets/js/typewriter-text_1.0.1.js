"use strict";(()=>{const t=document.createElement("template");t.innerHTML='<div part="container-typewriter-text"><slot></slot></div>';class e extends HTMLElement{#root=null;#slot=null;#element=null;#textArray=[];#interval=null;#intervalTime=200;#isEndless=!1;#isIndividual=!1;#holdLine=0;#delayTime=0;#arrayIndex=0;#stringLength=0;#stringIndex=0;#holdLineIndex=0;constructor(){super(),this.#root=this.attachShadow({mode:"open"}),this.#root.appendChild(t.content.cloneNode(!0)),this.#slot=this.#root.querySelector("slot")}static get observedAttributes(){return["displayed-text","is-endless","interval-time","hold-line","delay-time","is-individual"]}attributeChangedCallback(t,e,i){"displayed-text"===t?this.#textArray.push(i):"is-endless"===t?this.#isEndless=!0:"interval-time"===t?this.#intervalTime=Number(i):"hold-line"===t?this.#holdLine=Number(i):"delay-time"===t?this.#delayTime=Number(i):"is-individual"===t&&(this.#isIndividual=!0)}connectedCallback(){this.#element=this.#slot.assignedElements()[0],this.hasAttribute("displayed-text")&&this.#setTypeTextWithDelayTimeout()}#setTypeTextWithDelayTimeout(){setTimeout(()=>{this.#typeText()},this.#delayTime)}#setTextInterval(){this.#interval=setInterval(()=>{!1===this.#isEndless?this.#setCharsIfIsNotEndless():this.#setCharsIfIsEndless()},this.#intervalTime)}#typeText(){this.#stringLength=this.#textArray[this.#arrayIndex].length,this.#setTextInterval()}#setCharsIfIsNotEndless(){this.#stringIndex<this.#stringLength?this.#setCharsIfIsIndividualOrNot():this.#holdLineIndex<=this.#holdLine?this.#holdLineIndex++:(this.#arrayIndex++,this.#arrayIndex===this.#textArray.length?clearInterval(this.#interval):this.#resetForSetText())}#setCharsIfIsEndless(){this.#stringIndex<this.#stringLength?this.#setCharsIfIsIndividualOrNot():this.#holdLineIndex<=this.#holdLine?this.#holdLineIndex++:(this.#arrayIndex=this.#setArrayIndex(this.#textArray.length),this.#resetForSetText())}#setCharsIfIsIndividualOrNot(){!1===this.#isIndividual?this.#setChar():this.#setCharIndividual()}#setChar(){this.#element.innerHTML+=this.#textArray[this.#arrayIndex][this.#stringIndex],this.#stringIndex++}#setCharIndividual(){var t=this.#textArray[this.#arrayIndex][this.#stringIndex];this.#element.innerHTML+=t.char,""!==t.intervalTime.trim()&&(this.#intervalTime=Number(t.intervalTime),clearInterval(this.#interval),this.#setTextInterval()),this.#stringIndex++}#setArrayIndex=t=>this.#arrayIndex<t-1?this.#arrayIndex+1:0;#resetHoldElemStrIdx(){this.#holdLineIndex=0,this.#element.innerHTML="",this.#stringIndex=0}#resetForSetText(){this.#resetHoldElemStrIdx(),this.#stringLength=this.#textArray[this.#arrayIndex].length}#resetForMultiLines(){clearInterval(this.#interval),this.#arrayIndex=0,this.#stringLength=0,this.#resetHoldElemStrIdx()}setMultipleLines(t){this.#resetForMultiLines(),this.#textArray=t,this.#setTypeTextWithDelayTimeout()}}customElements.define("typewriter-text",e)})();