//how to find duplicate words in object in javascript? 
var uniqueList=string.split(',').filter(function(item,i,allItems){
    return i==allItems.indexOf(item);
}).join(',');

$('#output').append(uniqueList);


if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisp*/)
  {
    "use strict";

    if (this == null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun != "function")
      throw new TypeError();

    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in t)
      {
        var val = t[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, t))
          res.push(val);
      }
    }

    return res;
  };
}




//Source: https://stackoverflow.com/questions/16843991





