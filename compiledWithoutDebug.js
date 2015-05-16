var jade = require('jade/lib/runtime');
var locals = {
  fortunes: [
    {id: 0, message: "Additional fortune added at request time."},
    {id: 1, message: "Blurb"},
    {id: 2, message: "wat?"}
  ]
};

module.exports = function() {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (fortunes, undefined) {
buf.push("<!DOCTYPE html><html><head><title>Fortunes</title></head><body><table><tr><th>id</th><th>message</th></tr>");
// iterate fortunes
;(function(){
  var $$obj = fortunes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var fortune = $$obj[$index];

buf.push("<tr><td>" + (jade.escape(null == (jade_interp = fortune.id) ? "" : jade_interp)) + "</td><td>" + (jade.escape(null == (jade_interp = fortune.message) ? "" : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var fortune = $$obj[$index];

buf.push("<tr><td>" + (jade.escape(null == (jade_interp = fortune.id) ? "" : jade_interp)) + "</td><td>" + (jade.escape(null == (jade_interp = fortune.message) ? "" : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</table></body></html>");}.call(this,"fortunes" in locals_for_with?locals_for_with.fortunes:typeof fortunes!=="undefined"?fortunes:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}
