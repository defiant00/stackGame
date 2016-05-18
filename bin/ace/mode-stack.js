define("ace/mode/stack_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
	"use strict";

	var oop = require("../lib/oop");
	var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

	var StackHighlightRules = function() {
		var keywords = "add|dup|in|jmp|jlz|jez|jgz|neg|out|pop|push|nil";

		var keywordMapper = this.createKeywordMapper({
			"keyword": keywords
		}, "identifier", true);

		this.$rules = {
			"start" : [ {
				token : "comment",
				regex : /;.*$/
			}, {
				token : "number",
				regex : /[+-]?\d+/
			}, {
				token : "string",
				regex : /'.'/
			}, {
				token : "label",
				regex : /^\s*[a-zA-Z_][a-zA-Z0-9_]*:/		// label
			}, {
				token : keywordMapper,
				regex : /[a-zA-Z_][a-zA-Z0-9_]*\b/
			}, {
				token : "text",
				regex : /\s+/
			} ]
		};
	};

	oop.inherits(StackHighlightRules, TextHighlightRules);

	exports.StackHighlightRules = StackHighlightRules;
});

define("ace/mode/stack",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/stack_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var StackHighlightRules = require("./stack_highlight_rules").StackHighlightRules;

var Mode = function() {
    this.HighlightRules = StackHighlightRules;
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "--";

    this.$id = "ace/mode/ada";
}).call(Mode.prototype);

exports.Mode = Mode;

});
