var jade = require('jade/lib/runtime');
var locals = {
  fortunes: [
    {id: 0, message: "Additional fortune added at request time."},
    {id: 1, message: "Blurb"},
    {id: 2, message: "wat?"}
  ]
};

module.exports = function() {
var jade_debug = [{ lineno: 1, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (fortunes, undefined) {
jade_debug.unshift({ lineno: 0, filename: "/home/andreas/code/sampleexpress/views/layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "/home/andreas/code/sampleexpress/views/layout.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "/home/andreas/code/sampleexpress/views/layout.jade" });
buf.push("<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "/home/andreas/code/sampleexpress/views/layout.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "/home/andreas/code/sampleexpress/views/layout.jade" });
buf.push("<title>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Fortunes");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "/home/andreas/code/sampleexpress/views/layout.jade" });
buf.push("<body>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "/home/andreas/code/sampleexpress/views/layout.jade" });
jade_debug.unshift({ lineno: 4, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<table>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("id");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("message");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
// iterate fortunes
;(function(){
  var $$obj = fortunes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var fortune = $$obj[$index];

jade_debug.unshift({ lineno: 8, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
jade_debug.unshift({ lineno: 9, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<td>" + (jade.escape(null == (jade_interp = fortune.id) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<td>" + (jade.escape(null == (jade_interp = fortune.message) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var fortune = $$obj[$index];

jade_debug.unshift({ lineno: 8, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
jade_debug.unshift({ lineno: 9, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<td>" + (jade.escape(null == (jade_interp = fortune.id) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" });
buf.push("<td>" + (jade.escape(null == (jade_interp = fortune.message) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}.call(this,"fortunes" in locals_for_with?locals_for_with.fortunes:typeof fortunes!=="undefined"?fortunes:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno,"extends ../layout\n\nblock content\n  table\n    tr\n      th id\n      th message\n    for fortune in fortunes\n      tr\n        td= fortune.id\n        td= fortune.message\n");
}
}
