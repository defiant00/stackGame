define("ace/theme/stack",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-stack";
exports.cssText = ".ace-stack .ace_gutter {\
background: #232323;\
color: #E2E2E2\
}\
.ace-stack {\
background-color: #141414;\
color: #F8F8F8\
}\
.ace-stack .ace_cursor {\
color: #A7A7A7\
}\
.ace-stack .ace_marker-layer .ace_selection {\
background: rgba(221, 240, 255, 0.20)\
}\
.ace-stack.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #141414;\
}\
.ace-stack .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-stack .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(255, 255, 255, 0.25)\
}\
.ace-stack .ace_marker-layer .ace_active-line {\
background: rgba(150, 150, 255, 0.2)\
}\
.ace-stack .ace_gutter-active-line {\
background-color: rgba(150, 150, 255, 0.2)\
}\
.ace-stack .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(221, 240, 255, 0.20)\
}\
.ace-stack .ace_invisible {\
color: rgba(255, 255, 255, 0.25)\
}\
.ace-stack .ace_keyword {\
color: #A0A0FF\
}\
.ace-stack .ace_number {\
color: #CF6A4C\
}\
.ace-stack .ace_label {\
color: #FFFF00\
}\
.ace-stack .ace_string {\
color: #8F9D6A\
}\
.ace-stack .ace_comment {\
font-style: italic;\
color: #00AF00\
}\
.ace-stack .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
