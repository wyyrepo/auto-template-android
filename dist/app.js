!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e),log("hello, world"),ui.layout('\n    <linear gravity="center">\n        <horizontal>\n            <button id="loadXml" w="250" h="*" text="加载xml" size="16" style="Widget.AppCompat.Button.Colored"/>\n            <button id="loadString" w="250" h="*" text="加载string" size="16" style="Widget.AppCompat.Button.Colored"/>\n            <button id="loadWithEngine" w="250" h="*" text="通过引擎加载" size="16" style="Widget.AppCompat.Button.Colored"/>\n        </horizontal>\n    </linear>\n'),ui.loadXml.on("click",(function(){ui.statusBarColor("#000000"),ui.layout(files.read("assets/xml/login.xml"))})),ui.loadString.on("click",(function(){ui.statusBarColor("#000000"),ui.layout('\n        <vertical bg="#708090">\n            <vertical h="auto" align="center" marginTop="100">\n                <text layout_weight="2" text="'.concat("123",'" bg="#00ff00"/>\n            </vertical>\n        </vertical>\n    '))})),ui.loadWithEngine.on("click",(function(){engines.execScriptFile("assets/js/example.js")}))}]);