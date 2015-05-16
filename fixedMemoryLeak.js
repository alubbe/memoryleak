var jade = require('jade/lib/runtime');
var locals = {
  fortunes: [
    {id: 0, message: "Additional fortune added at request time."},
    {id: 1, message: "Blurb"},
    {id: 2, message: "wat?"}
  ]
};
function DebugItem(lineno, filename) {
  this.lineno = lineno;
  this.filename = filename;
}

module.exports = function() {
var jade_debug = [new DebugItem(1, "/home/andreas/code/sampleexpress/views/fortunes/index.jade")];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (fortunes, undefined) {
jade_debug.unshift(new DebugItem(0, "/home/andreas/code/sampleexpress/views/layout.jade"));
jade_debug.unshift(new DebugItem(1, "/home/andreas/code/sampleexpress/views/layout.jade"));
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift(new DebugItem(2, "/home/andreas/code/sampleexpress/views/layout.jade"));
buf.push("<html>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(3, "/home/andreas/code/sampleexpress/views/layout.jade"));
buf.push("<head>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(4, "/home/andreas/code/sampleexpress/views/layout.jade"));
buf.push("<title>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(4, jade_debug[0].filename));
buf.push("Fortunes");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift(new DebugItem(5, "/home/andreas/code/sampleexpress/views/layout.jade"));
buf.push("<body>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(3, "/home/andreas/code/sampleexpress/views/layout.jade"));
jade_debug.unshift(new DebugItem(4, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<table>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(5, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<tr>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(6, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<th>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(6, jade_debug[0].filename));
buf.push("id");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new DebugItem(7, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<th>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(7, jade_debug[0].filename));
buf.push("message");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift(new DebugItem(8, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
// iterate fortunes
;(function(){
  var $$obj = fortunes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var fortune = $$obj[$index];

jade_debug.unshift(new DebugItem(8, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
jade_debug.unshift(new DebugItem(9, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<tr>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(10, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<td>" + (jade.escape(null == (jade_interp = fortune.id) ? "" : jade_interp)));
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new DebugItem(11, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<td>" + (jade.escape(null == (jade_interp = fortune.message) ? "" : jade_interp)));
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
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

jade_debug.unshift(new DebugItem(8, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
jade_debug.unshift(new DebugItem(9, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<tr>");
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.unshift(new DebugItem(10, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<td>" + (jade.escape(null == (jade_interp = fortune.id) ? "" : jade_interp)));
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new DebugItem(11, "/home/andreas/code/sampleexpress/views/fortunes/index.jade"));
buf.push("<td>" + (jade.escape(null == (jade_interp = fortune.message) ? "" : jade_interp)));
jade_debug.unshift(new DebugItem(undefined, jade_debug[0].filename));
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
jade_debug.shift();
}.call(this,"fortunes" in locals_for_with?locals_for_with.fortunes:typeof fortunes!=="undefined"?fortunes:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno,"extends ../layout\n\nblock content\n  table\n    tr\n      th id\n      th message\n    for fortune in fortunes\n      tr\n        td= fortune.id\n        td= fortune.message\n");
}
}
